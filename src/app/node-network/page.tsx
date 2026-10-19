import { Button, Note, PageHero, TextLink } from "@/components/ui";
import { NodeMeshExplorer } from "@/components/node-mesh-explorer";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Nodes & relays",
  "The target for signed neighbor discovery and durable multi-hop relay. Conceptual local networks, adjacent contacts and explicit physical limits.",
  "/node-network",
);

export default function NodeNetwork() {
  return (
    <>
      <PageHero
        eyebrow="Nodes & relays"
        title="A neighbor. Then a longer path."
        description="The target joins local networks through adjacent relays, including stationary habitats and mobile carriers. Each new useful contact can extend the reach."
      />
      <section className="section node-atlas-section">
        <div className="container">
          <NodeMeshExplorer />
        </div>
      </section>
      <section className="section soft-section">
        <div className="container narrow prose">
          <h2>Discovery and relay are required node behavior</h2>
          <p>
            Every normally started full network node should advertise
            authenticated identity, learn reachable neighbors and relay admitted
            evidence without a separate relay launch or a mandatory Earth
            directory. A first reachable contact, seed or carried message is
            still needed.
          </p>
          <p>
            Store, carry and forward can bridge contacts that never form one
            continuously online path. Recovery must retain accepted evidence and
            establish authentic current state under declared custody, capacity
            and funding rules. A learned route is not proof of current
            reachability; a transport receipt is not ledger acceptance.
          </p>
          <Note title="Conceptual topology, not a measured route">
            The circles group local networks; they are not radio ranges or
            physical overlap. Geometry and animations are not distance or
            travel-time scales. Earth–Proxima Centauri–Andromeda is an
            illustrative topology, not an operational payment route.
          </Note>
          <h2>One-way carriage, independent verification</h2>
          <p>
            Sender and recipient need not be online at the same time. Relays
            carry unchanged owner authorization, a source-bound coupon, a
            recursive execution receipt and complete current monetary data. The
            recipient checks the proof, matching source commit and every
            accepted exposure class, then durably installs data and imports once
            before onward local spending. Missing current material leaves the
            ticket pending; a custody receipt cannot supply monetary authority.
          </p>
          <p>
            A return message can take another path or never arrive. Silence does
            not restore exported value. Only a permanent destination rejection
            can authorize source recovery. Reconnection does not itself replace
            a finalized local ledger under the accepted fault assumptions.
          </p>
          <h2>A contact must have resources</h2>
          <p>
            A relay retains accepted bytes durably before acknowledging custody.
            Bounded batches carry receipts and current material over successive
            contacts. Compact historical proofs do not remove current-data or
            permanent-decision storage obligations. Storage exhaustion can
            refuse new material, while existing obligations remain explicit.
            Ground prototypes and conceptual routes do not establish a qualified
            physical service.
          </p>
          <h2>Distance still sets the pace</h2>
          <p>
            Relays cannot shorten the causal light-time bound. Long gaps also
            require sustainable storage, contact capacity, key succession and
            archive renewal. The protocol must declare its finite assumptions
            and failure outcomes; long-term continuity is not a guarantee of
            uninterrupted service.
          </p>
          <TextLink href="/whitepaper#10-transport-and-durable-evidence">
            Read the interstellar communication mechanism
          </TextLink>
          <p>
            <TextLink href="/whitepaper#8-an-interstellar-payment-and-local-autonomy">
              Follow an interstellar payment through onward spending
            </TextLink>
          </p>
          <div className="guide-next-links">
            <Button href="/how-it-works" secondary>
              Payment lifecycle
            </Button>
            <Button href="/network" secondary>
              Development scope
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
