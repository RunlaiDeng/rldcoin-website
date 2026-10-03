# Rldcoin — Protocol and node-network overview

Updated 30 September 2026. Read the [white paper 1.11](https://rldcoin.com/whitepaper) for the full design and [node network](https://rldcoin.com/node-network) for the connection model.

Rldcoin aims at peer-to-peer payments among future human communities: locally verified ownership, payment during remote disconnection, and conserved value that can move onward or return through asynchronous contacts. Every normally started full network node must discover and relay by default in the target architecture; this is not yet native default behavior. Implementation and operating status are reported separately on the [network page](https://rldcoin.com/network).

## Nodes extend the path

Starting a node should discover physically reachable neighbors, learn distant nodes through signed advertisements and carry evidence over multiple contacts. Earth ↔ Proxima Centauri ↔ Andromeda is the reference topology. Earth does not need a direct Andromeda connection or an always-online central directory.

A separately started ground contact-spool prototype demonstrates signed discovery, directed candidate routes, bounded persistent queues, hop-bound signatures, restart recovery and a signed destination transport receipt. Sixteen mesh checks and eighteen existing transport/budget checks passed. Three local processes discovered three identities through two adjacent contacts and resumed two-hop evidence delivery after relay interruption. This is ground evidence, not three star-system deployments. Native ledger nodes still require explicit peer bridges.

Real first contacts, physical adapters, BPv7 integration, local broadcast discovery, contact scheduling, anti-eclipse review, independent operators and long-term key/archive survival remain open. Proxima is about 4.24 light-years away and Andromeda about 2.5 million; relays cannot shorten causal propagation. Million-year operation is unqualified.

## Value is verified by each region

Regional ledgers establish local order; cross-region couriers carry bytes without monetary authority. Source export locks value, signed source finality and replay bind the proof, destination imports are unique, and local maturity controls spendability. Relays need not import or reissue the asset. Onward asset re-export and actual value return are mandatory requirements I5 and I6: each leg needs a new local debit, recognized finality, authenticated ancestry and unique destination import. Ground candidates exercise these paths; full qualification remains open. A learned route or signed transport receipt does not establish ledger acceptance. Lost messages, waiting and expired attempts never authorize a refund.

Historical Earth source rules use SHA-256d work, signed transfers, durable replay and signed checkpoints. Supply is capped at 100 billion RLD; 1 RLD = 10^24 runlai. A future mainnet requires its own exact rules, implementation and non-test signatures. Independence, destination security, autonomous operation through long silence, hardware/multidevice recovery, capacity and outside review remain separate acceptance requirements.

## Current development and qualification

Development uses a fresh testnet with public fixture keys and no monetary value. No active mainnet is offered. A future mainnet needs a fresh signed zero-issuance genesis. Test balances never migrate into a mainnet.

White paper 1.11 and the master plan share mandatory requirements I1–I12 alongside the A–G foundations. None of I1–I12 is fully qualified. Document alignment, complete protocol qualification, new-mainnet authorization and physical-route qualification are distinct stages.

## Inspect and reproduce

- [Node mesh code, requirements and ground drill](https://github.com/RunlaiDeng/rldcoin-genesis/tree/main/research/2026-09-30/mesh)
- [Fresh testnet, signed fixtures and qualification gaps](https://github.com/RunlaiDeng/rldcoin-genesis/tree/main/earth/testnet-20260930)
- [Current public plan](https://github.com/RunlaiDeng/rldcoin-genesis/blob/main/MASTER_PLAN.md)
- [Operator telemetry and archived identity](https://rldcoin.com/network)

No physical interstellar route, independent security audit or new-mainnet launch is asserted.
