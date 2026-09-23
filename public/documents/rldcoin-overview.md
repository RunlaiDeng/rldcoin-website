# Rldcoin — Protocol overview

Rldcoin's long-term goal is peer-to-peer payments between future human
communities across star systems. The permanent Earth network is the first step;
interstellar payment routes are not deployed yet.

Updated September 23, 2026. This introduction is not a complete protocol specification or an independent security assessment.

## Earth today

The permanent Earth genesis is retained. An explicit, incompatible regional PoW adoption binds its complete certified heartbeat history and terminal checkpoint. It replaces the predecessor's heartbeat-only consensus rules; the original constitution and genesis are preserved as historical records, not rewritten to claim they contained PoW issuance.

The regional node performs automatic SHA-256d mining, validates signed local transfers, stores blocks durably, and selects the valid branch with greatest accumulated work. PoW confirmations are probabilistic: a stronger valid branch can replace earlier blocks and their rewards. The launch deployment is operated by one owner; separate machines do not constitute independent operation.

A signed transfer may be accepted by the node quickly but remains pending until included in a selected block. The target interval is ten minutes on average, not a fixed payment time. A separate prefunded local payment layer is planned for seconds-scale receipts; it is not available in this release. The 100-block maturity rule applies to newly mined rewards, not ordinary transfers.

## RLD and mining

- Fixed supply: 100,000,000,000 RLD, shared across the intended system.
- Smallest unit: runlai; 1 RLD = 10^24 runlai.
- Personal allocation at genesis and adoption: zero.
- The old unused service reserves become one unissued mining reserve.
- Initial subsidy: 250,000 RLD per valid selected block.
- Target block interval: 600 seconds; actual discovery time varies.
- Each 200,000-block era distributes half the remaining reserve, with exact integer tail accounting.
- Rewards mature after 100 additional local blocks. Fees go to the block's miner.
- Every miner follows the same rules; no one is guaranteed a reward or share.

The source release contains the node and developer transaction API. A consumer wallet remains in development. Mining needs only a receiving public key; keep its secret key under your own control.

## Future regional settlement

Regions are intended to confirm their own local activity while proofs travel asynchronously through delayed or disconnected links. Transmission alone does not prove a payment valid. The planned route is source locking, authenticated export proof, unique destination import, and an asynchronous receipt.

The design still needs qualified source-checkpoint trust, PoW reorganization handling, duplicate rejection, delayed receipts, and supply-budget transfer. Elapsed time alone cannot unlock a source amount already imported elsewhere. A new region cannot create another copy of the total reserve.

Cross-region transfers are disabled in the current release. No actual interstellar route is claimed. Local consensus cannot eliminate physical communication delay.

## Verification and participation

Verify both the original manifest pin and the explicit PoW adoption. Run the exact versioned source or published executable, replay the retained history, and validate peer blocks locally. A status page is operator telemetry rather than an independent proof.

- Website: https://rldcoin.com
- Public status: https://rldcoin.com/network
- Published evidence: https://forum.rldcoin.com/genesis/
- Node guide: https://github.com/RunlaiDeng/rldcoin-genesis/blob/main/pow-v1/NODE-GUIDE.md
- PoW release: https://github.com/RunlaiDeng/rldcoin-genesis/releases/tag/earth-pow-v0.3.0
- Community: https://forum.rldcoin.com/
