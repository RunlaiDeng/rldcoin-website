import { GENESIS } from "@/lib/site";
import { parseNetworkStatus } from "@/lib/network";

export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const result = await fetch(`${GENESIS}status.json`, {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
      redirect: "error",
      headers: { Accept: "application/json" },
    });
    if (!result.ok || !result.body)
      throw new Error("Network status unavailable");
    const reader = result.body.getReader();
    const chunks: Uint8Array[] = [];
    let bytes = 0;
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        bytes += value.byteLength;
        if (bytes > 16384) throw new Error("Network response too large");
        chunks.push(value);
      }
    } finally {
      await reader.cancel();
    }
    const data = parseNetworkStatus(
      JSON.parse(Buffer.concat(chunks).toString("utf8")),
    );
    return Response.json(
      { data },
      { headers: { "Cache-Control": "public, max-age=0, s-maxage=30" } },
    );
  } catch {
    return Response.json(
      {
        data: null,
        error:
          "Live status is temporarily unavailable. Use the public genesis records to inspect the network identity.",
      },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
