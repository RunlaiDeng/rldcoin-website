import Link from "next/link";
import { Button, Eyebrow, Note, PageHero } from "@/components/ui";
import { NodeMeshExplorer } from "@/components/node-mesh-explorer";
import { REGIONAL_CYCLE, pageMetadata, REPOSITORY } from "@/lib/site";

export const metadata = pageMetadata(
  "Nodes that extend the network",
  "Progressive neighbor discovery, multi-hop evidence relay and durable recovery across future regions. Explore the ground prototype and physical limits.",
  "/node-network",
);
const MESH = `${REPOSITORY}/tree/main/research/2026-09-30/mesh`;

export default function NodeNetwork() {
  return (
    <>
      <div className="node-atlas-hero">
        <PageHero
          eyebrow="THE NODE NETWORK"
          title="A network. Then a connection."
          description="Each community begins locally. Neighboring relays connect those networks, carrying evidence from one contact to the next. A new station or moving habitat can extend the path."
        />
      </div>
      <section className="section node-atlas-section">
        <div className="container">
          <NodeMeshExplorer />
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>PROGRESSIVE CONNECTION</Eyebrow>
              <h2>
                Find a neighbor.
                <br />
                Reach beyond it.
              </h2>
            </div>
            <p>
              Like a chain of interconnected local networks, the relay mesh
              carries signed information and evidence. Each region keeps its own
              ledger; each contact can extend the network’s reach.
            </p>
          </div>
          <div className="feature-grid three">
            <div className="feature">
              <h3>Discover gradually</h3>
              <p>
                Reachable neighbors exchange signed node information. Each
                contact can teach a node about more distant regions. A first
                contact, seed or physical carrier is still needed.
              </p>
            </div>
            <div className="feature">
              <h3>Carry across contacts</h3>
              <p>
                Messages can cross several relays, even when the whole path is
                never online at once. Each hop stores evidence before sending it
                onward.
              </p>
            </div>
            <div className="feature">
              <h3>Resume after silence</h3>
              <p>
                Interrupted links leave evidence queued. Restart restores
                retained state. Discovery, an advertised route, destination
                receipt and spendable value have separate meanings.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <Eyebrow>GROUND PROTOTYPE · 30 SEPTEMBER 2026</Eyebrow>
          <h2>A connection pattern tested on Earth.</h2>
          <p className="page-lead">
            Three real local processes, labelled Earth, Proxima Centauri and
            Andromeda, learned all three identities through two adjacent
            directory contacts. Evidence crossed two hops unchanged. Stopping
            the middle relay and restarting the sender preserved the queue;
            restoring the relay delivered the evidence and returned a signed
            transport receipt.
          </p>
          <p>
            16 mesh checks and 18 existing transport and route-budget checks
            passed. The contact-spool program runs separately from the regional
            ledger node. Its destination receipt says that evidence was stored;
            ledger acceptance was not exercised in this drill.
          </p>
          <div className="hero-actions">
            <Button href={MESH}>Inspect code and reproduce</Button>
            <Button href="/whitepaper" secondary>
              Read the white paper
            </Button>
          </div>
          <h3>Automatic relay in the regional fixture candidate.</h3>
          <p>
            Revision 15 starts relay and local BFT within the ordinary native
            node lifecycle. Twelve local nodes use pinned TLS neighbors to
            complete Earth–Proxima–Andromeda–Earth. All Earth processes stop
            while remote regions import, mature and export value onward and
            back. Earth resumes, then verifies and matures a new return import;
            the first source debit remains spent. Fifteen conservation checks
            and exact frozen-source reproduction preserve this ground result.
          </p>
          <div className="hero-actions">
            <Button href={REGIONAL_CYCLE}>Inspect the autonomous cycle</Button>
          </div>
          <Note title="A future physical network needs more">
            The prototype has configured adjacent contacts, signed discovery,
            bounded storage and automatic relay. Physical radio or laser links,
            local broadcast discovery, real BPv7 adapters, contact scheduling,
            long-disconnection ledger autonomy, independent operators and
            long-term key and archive survival still require qualification. The
            adopted Earth testnet does not inherit this separate candidate's
            relay or BFT behavior. Same-host tests do not qualify physical
            links, sustained BFT liveness or independent operation.
          </Note>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container narrow">
          <h2>Distance sets the pace.</h2>
          <p className="page-lead">
            Proxima Centauri is about 4.24 light-years away; Andromeda is about
            2.5 million light-years away. Under a simplified stationary-endpoint
            model, new information takes years to the nearest star and millions
            of years across that galactic distance. A relay cannot shorten the
            causal light-time bound.
          </p>
          <p>
            These are distance scales, not measured Rldcoin routes. Million-year
            operation also needs new evidence for cryptography, archives,
            institutions and changing endpoints.{" "}
            <a href="https://science.nasa.gov/mission/voyager/voyager-1/voyager-1-what-is-a-light-day/">
              NASA distance reference
            </a>
            .
          </p>
          <p>
            Qualification continues on a value-free testnet; a mainnet has
            not launched.{" "}
            <Link href="/roadmap">Follow the roadmap</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
