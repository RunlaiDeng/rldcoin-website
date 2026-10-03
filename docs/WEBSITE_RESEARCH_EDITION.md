# Research edition website — 28 September 2026

The canonical content is white paper 1.5. The site remains the English public information website; the Earth deployment and all four finality keys remain under one owner.

## Design references

Reviewed the public home pages of [Bitcoin](https://bitcoin.org/en/), [Ethereum](https://ethereum.org/), and [Stellar](https://stellar.org/) on 28 September 2026. This is a selected comparison, not an exhaustive web survey or endorsement by those projects.

- Bitcoin: define the product first, then offer practical starting points and audience paths. Applied as a plain introduction, Get started, and individual/developer/community routes.
- Ethereum: learning, use, and contribution are distinct journeys. Applied as introductory pages, protocol resources, and a dedicated research page.
- Stellar: payment purpose leads to concrete developer resources. Applied to the payment walkthrough and source-release links.

Rldcoin retains its own planetary imagery, typography, palette, and original copy. Availability claims come from Rldcoin evidence, never from the reference projects.

## Content changes

The homepage leads with what Rldcoin is and Get started. A short introduction explains payment authorization, public rules, and the local-community design before individual/developer/community paths. Current network limits remain visible. The white paper and research are optional deeper reading near the bottom and in navigation. The technical transfer explorer remains on How it works. The global paper announcement and homepage paper-version/section/reference-count promotion have been removed. The Get started page begins with an introduction rather than sending first-time visitors to the white paper. Research links selected primary sources across six questions. Navigation, sitemap, FAQ, roadmap, and individuals pages agree on destination maturity, no receipt-based refunds, source-endpoint freshness, and incomplete independent operation.

## Validation

Production build and TypeScript compilation passed. Five existing network tests passed (network pinning, invalid identity, empty genesis, freshness, precise units). Fifteen public pages and 26 internal link targets returned HTTP 200 locally. Desktop 1440px and mobile 390px rendering inspected; transfer tabs work by click and arrow key; mobile navigation opens and Escape closes it. No horizontal overflow on checked mobile views and no browser runtime errors. White paper PDF remains the verified 16-page v1.5 artifact with 24 references.


## Introduction-first revision

After the homepage review, the primary path is now Get started → Meet Rldcoin → About. “What is Rldcoin?” scrolls to the plain-language introduction. Primary paths do not require opening the paper. The paper remains accessible through navigation and optional reading at the bottom. Desktop 1440×1000 and mobile 390×844 layouts, the introduction anchor, the first entry-path link, mobile open/Escape behavior, and 15 internal targets were checked. Production build and all five existing network tests passed; no browser runtime errors were observed.

The hero keeps its photograph visible until video playback actually starts and restores it on pause or error. A browser check verified normal playback and a simulated autoplay rejection after client navigation: the rejected video remained transparent, the Earth photograph loaded, and the desktop view had no horizontal overflow. The production build passed again after this media fix.

## Interstellar mission wording

The homepage now leads with “Peer-to-peer transfers. For humanity’s interstellar future.” Its definition is an interstellar peer-to-peer transfer system being built for the future of humanity. The footer, About introduction, FAQ definition, page metadata, and structured data use the same positioning. The early Earth network remains the current development stage. Desktop and mobile headline wrapping, mobile navigation, the primary entry link, and the generated metadata were checked; production build and TypeScript passed.


## Payment-system wording

The homepage positioning is now “Interstellar peer-to-peer payments. For humanity’s future.” The definition explicitly calls Rldcoin an interstellar peer-to-peer **payment system** being built for the future of humanity, matching the requested positioning “为未来人类打造的跨星际点对点支付系统”. The footer, About, FAQ, metadata, and structured data agree. Technical descriptions of ledger transfers retain their existing terminology.

Validation: production build and TypeScript passed. The revised headline was inspected at desktop 1440×1000 and mobile 390×844; mobile width remained 390px without horizontal overflow. Mobile navigation opened and closed with Escape, and the primary entry link reached Get started. The page metadata contained the updated payment-system definition; no browser runtime errors were observed.
