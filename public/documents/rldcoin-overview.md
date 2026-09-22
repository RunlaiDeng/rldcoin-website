# Rldcoin — Protocol overview

A peer-to-peer transfer system for humanity's interstellar future.

Published September 22, 2026. This is an introductory summary, not a complete
protocol specification or an independent security assessment.

## Goal

Preserve verifiable ownership and continuous asset history across Earth, space
habitats, spacecraft, and distant settlements separated by long communication
delays and interrupted contact. Information must still reach its destination;
local consensus cannot remove physical communication delay.

## Zones and transfers

A Zone maintains its own ledger and consensus. The intended cross-Zone lifecycle:

1. The sender authorizes a destination-bound transfer.
2. The source finalizes it and locks the asset.
3. A proof travels by relays, delay-tolerant networks, or carried media.
4. The destination verifies finality, validity, and asset history.
5. A finalized import makes the asset spendable at the destination.
6. A receipt returns asynchronously to close the source-side record.

Incomplete or conflicting evidence leaves a transfer pending or quarantined.
Elapsed time alone cannot authorize the source to unlock the asset. Upgrades and
recovery must preserve asset lineage and prevent two spendable copies.

## Asset and supply

- Symbol: RLD
- Smallest unit: runlai
- Conversion: 1 RLD = 10^24 runlai
- Fixed supply: 100,000,000,000 RLD = 10^35 runlai
- Genesis reserves: 1% startup services, 9% continuity/archiving/migration,
  90% verified demand matching
- Personal/founder genesis allocation: zero

The design pays verified protocol services from fixed reserves. Admission
proof-of-work does not itself issue coins or confer validation authority.

## Permanent Earth genesis

- Established: September 22, 2026
- Zone: zone-77bc978af4837a1e7971
- Canonical manifest commitment:
  874066fe96d12bfa42cc316f5387cc8f4df649f794b43e2ee724b8029b0abf33
- Profile: P1_REMOTE_ZERO_VALUE_V1
- One controlling owner across two hosts
- Payments and service rewards: not enabled
- Initial software-key exception ends October 7, 2026, at 16:00 UTC,
  without automatic renewal

The permanent identity is not a disposable test network. Its initial operating
scope is zero-value heartbeats. It does not establish independent operation,
independent review, physical offline custody, or a live interstellar route.

## Delivery

P0 candidate qualification and P1 permanent genesis are complete within their
stated scopes. P2 external observation, P3 open contribution, P4 authority
handover, P5 restricted Earth payments, and P6 interstellar transfer engineering
remain later milestones. Cross-Zone engineering can progress alongside Earth
stages; value activation and individual routes retain their own conditions.

## Authoritative public resources

- Website: https://rldcoin.com
- Current status and identity: https://rldcoin.com/network
- Genesis records: https://forum.rldcoin.com/genesis/
- Versioned source and artifacts:
  https://github.com/RunlaiDeng/rldcoin-genesis/releases/tag/earth-genesis-20260922
- Community: https://forum.rldcoin.com/

Use the named runtime source asset for the full protocol tree. Read its exact
specifications and operating material, verify checksums, and distinguish the
canonical manifest commitment from a JSON file's byte checksum.
