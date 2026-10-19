import { Button, Note, PageHero, TextLink } from "@/components/ui";
import { NodeMeshExplorer } from "@/components/node-mesh-explorer";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  "Nodes & relays",
  "How local domains and store-carry-forward relays connect separated communities through real contacts, with custody distinct from payment receipt.",
  "/node-network",
);

export default function NodeNetwork() {
  return (
    <>
      <PageHero
        eyebrow="Nodes & relays"
        title="Local communities. Successive contacts."
        description="A path can form over time. Nodes retain admitted evidence and pass it onward when the next real contact becomes available."
      />
      <section className="section node-atlas-section">
        <div className="container">
          <NodeMeshExplorer />
        </div>
      </section>
      <section className="section soft-section">
        <div className="container narrow prose">
          <h2>A domain settles; a relay carries</h2>
          <p>
            A monetary domain maintains accepted local ordering authority. A
            relay moves authenticated evidence. One machine may perform both
            roles, but discovering a neighbor or acknowledging bytes grants no
            validator vote, balance or destination acceptance.
          </p>
          <p>
            Separated domains can trade their own locally homed funds while
            their quorums remain responsive. Forwarding a payment through
            another community does not require that community to import the RLD
            or become its monetary authority.
          </p>
          <h2>Discover the next useful contact</h2>
          <p>
            The paper places bounded discovery and carriage in normal
            network-node operation. A configured neighbor, observed contact or
            authenticated carried introduction provides a starting point. Signed
            identities and bounded route hints suggest candidate contacts. They
            do not create a trusted currency root or prove a route is currently
            reachable.
          </p>
          <p>
            No mandatory Earth directory participates in monetary validation. A
            stationary habitat or mobile carrier can help connect successive
            local networks. Physical communication and travel opportunities
            remain prerequisites.
          </p>
          <Note title="Explore a topology, not an operating route">
            Circles group local networks; they do not show radio ranges or
            physical overlap. Geometry and animation are not distance or
            travel-time scales. Earth–Proxima Centauri–Andromeda is
            illustrative.
          </Note>
          <h2>Store, carry and forward</h2>
          <p>
            A path need not be continuously online end to end. An admitted
            custodian retains complete agreed bytes durably before acknowledging
            custody. Later contacts resume bounded fragments or whole objects.
            Exact commitments and retained identifiers make retries refer to the
            same transfer without another monetary debit.
          </p>
          <p>
            Capacity refusal comes before a new custody obligation. Retention,
            replication, fees and renewal have finite contracts. Queueing
            includes incident evidence, terminal decisions and missing-data
            completion; a route hint or expired attempt cannot erase a monetary
            obligation.
          </p>
          <h2>One-way delivery after preparation</h2>
          <p>
            A compatible destination capability must already be available at the
            source. The released capsule then carries owner authorization,
            coupon binding, controller execution receipt and certificate, plus
            complete current monetary material. The destination independently
            verifies and imports or rejects once. Missing material leaves it
            pending.
          </p>
          <p>
            After import, the recipient can pay locally without a return
            acknowledgment. After release, recovery requires permanent
            destination rejection to travel back. Custody, delivery, import and
            relay compensation remain distinct events.
          </p>
          <h2>Long gaps require continued care</h2>
          <p>
            Relays respect causal delay. Long journeys also need available data,
            maintained cryptographic profiles, retained controller keys, funded
            archives and authenticated succession. Lost authority or failed
            custody can strand funds. A ground prototype does not qualify a
            physical link or a centuries-long service.
          </p>
          <TextLink href="/whitepaper#10-1-neighbor-discovery-and-carriage-scheduling">
            Read discovery and carriage scheduling
          </TextLink>
          <div className="guide-next-links">
            <Button href="/how-it-works" secondary>
              Follow a payment
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
