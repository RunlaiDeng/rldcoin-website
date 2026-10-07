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
          <h2>Ground transport and full protocol operation are distinct</h2>
          <p>
            The published contact-spool prototype is a separately started
            supplemental process. Regional ground candidates have their own
            runtime and adoption scope. Neither establishes default discovery on
            an adopted release, independent operation or a real physical
            adapter.
          </p>
          <h2>Distance still sets the pace</h2>
          <p>
            Relays cannot shorten the causal light-time bound. Long gaps also
            require sustainable storage, contact capacity, key succession and
            archive renewal. The protocol must declare its finite assumptions
            and failure outcomes; long-term continuity is not a guarantee of
            uninterrupted service.
          </p>
          <TextLink href="/whitepaper#20-conformance-and-authenticated-adoption">
            Read the native relay acceptance obligations
          </TextLink>
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
