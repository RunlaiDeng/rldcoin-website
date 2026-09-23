export function InterstellarPaymentArt() {
  const stars = Array.from({ length: 58 }, (_, i) => ({
    x: 28 + ((i * 137) % 660),
    y: 28 + ((i * 89) % 500),
    r: i % 7 === 0 ? 1.7 : 0.85,
  }));

  return (
    <div className="orbit-art">
      <svg
        viewBox="0 0 720 590"
        role="img"
        aria-labelledby="payment-art-title payment-art-description"
      >
        <title id="payment-art-title">
          A vision for payments between future human communities across star
          systems
        </title>
        <desc id="payment-art-description">
          Concept illustration: Earth and a distant future world are separated
          by space, with a dotted path carrying an RLD payment proof. The route
          is a future goal and is not live.
        </desc>
        <defs>
          <radialGradient id="earth-glow">
            <stop stopColor="#a9c7cd" stopOpacity=".36" />
            <stop offset="1" stopColor="#f7f9fa" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="future-glow">
            <stop stopColor="#e7cfb0" stopOpacity=".34" />
            <stop offset="1" stopColor="#f7f9fa" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="earth-fill" cx="30%" cy="24%" r="78%">
            <stop stopColor="#e7f0ef" />
            <stop offset=".53" stopColor="#a9c3c8" />
            <stop offset=".82" stopColor="#557783" />
            <stop offset="1" stopColor="#244754" />
          </radialGradient>
          <radialGradient id="future-fill" cx="28%" cy="24%" r="80%">
            <stop stopColor="#f8f1e4" />
            <stop offset=".55" stopColor="#d6b995" />
            <stop offset="1" stopColor="#856952" />
          </radialGradient>
          <linearGradient
            id="payment-route"
            x1="294"
            y1="276"
            x2="462"
            y2="192"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#638998" />
            <stop offset=".5" stopColor="#c98b48" />
            <stop offset="1" stopColor="#b77d43" />
          </linearGradient>
          <clipPath id="earth-clip">
            <circle cx="213" cy="351" r="117" />
          </clipPath>
          <clipPath id="future-clip">
            <circle cx="528" cy="180" r="89" />
          </clipPath>
        </defs>

        <circle cx="218" cy="350" r="220" fill="url(#earth-glow)" />
        <circle cx="528" cy="180" r="180" fill="url(#future-glow)" />
        {stars.map((star, index) => (
          <circle
            key={index}
            cx={star.x}
            cy={star.y}
            r={star.r}
            fill="#688793"
            opacity={index % 4 === 0 ? ".5" : ".22"}
          />
        ))}

        <g fill="none" stroke="#cbd9de" strokeWidth="1">
          <circle cx="213" cy="351" r="156" strokeDasharray="2 8" />
          <ellipse
            cx="213"
            cy="351"
            rx="177"
            ry="68"
            transform="rotate(-26 213 351)"
          />
          <circle cx="528" cy="180" r="122" strokeDasharray="2 7" />
          <ellipse
            cx="528"
            cy="180"
            rx="143"
            ry="48"
            transform="rotate(26 528 180)"
          />
          <path d="M67 494L628 81" strokeDasharray="2 9" opacity=".6" />
        </g>

        <circle
          cx="213"
          cy="351"
          r="122"
          fill="none"
          stroke="#dfe9eb"
          strokeWidth="3"
        />
        <circle cx="213" cy="351" r="117" fill="url(#earth-fill)" />
        <g clipPath="url(#earth-clip)">
          <g fill="#698e91" opacity=".82">
            <path d="M91 312L112 276 147 258 169 271 166 298 145 305 139 332 120 344 108 325Z" />
            <path d="M163 274L183 252 218 240 240 259 266 267 272 296 252 304 243 325 217 320 205 344 180 332 176 310 157 303Z" />
            <path d="M231 334L256 320 289 334 299 366 279 380 264 416 243 435 226 412 225 383 210 366Z" />
            <path d="M115 384L142 372 155 388 178 394 197 423 185 450 156 441 143 415 122 408Z" />
            <path d="M258 251L285 263 307 290 322 320 292 317 279 297Z" />
          </g>
          <g fill="none" stroke="#eff6f4" strokeWidth=".8" opacity=".43">
            <ellipse cx="213" cy="351" rx="42" ry="117" />
            <ellipse cx="213" cy="351" rx="86" ry="117" />
            <ellipse cx="213" cy="351" rx="117" ry="35" />
            <ellipse cx="213" cy="351" rx="117" ry="78" />
          </g>
          <path d="M98 351H328" stroke="#eff6f4" strokeOpacity=".38" />
        </g>

        <circle
          cx="528"
          cy="180"
          r="94"
          fill="none"
          stroke="#eadfce"
          strokeWidth="3"
        />
        <circle cx="528" cy="180" r="89" fill="url(#future-fill)" />
        <g
          clipPath="url(#future-clip)"
          fill="none"
          stroke="#fff7e9"
          strokeOpacity=".38"
        >
          <path
            d="M435 142C473 127 503 138 535 153S596 161 628 141"
            strokeWidth="11"
          />
          <path
            d="M438 188C486 169 508 188 541 207S599 222 621 207"
            strokeWidth="16"
          />
          <path
            d="M444 230C480 211 504 226 530 245S578 254 611 236"
            strokeWidth="9"
          />
        </g>
        <circle cx="567" cy="140" r="9" fill="#f7e9d1" opacity=".75" />

        <path
          d="M297 274C345 197 401 177 451 193"
          fill="none"
          stroke="#f8faf8"
          strokeWidth="8"
          opacity=".9"
        />
        <path
          d="M297 274C345 197 401 177 451 193"
          fill="none"
          stroke="url(#payment-route)"
          strokeWidth="2.6"
          strokeDasharray="3 8"
          strokeLinecap="round"
        />
        <circle
          cx="297"
          cy="274"
          r="5"
          fill="#f9fbf8"
          stroke="#648996"
          strokeWidth="2"
        />
        <circle
          cx="451"
          cy="193"
          r="5"
          fill="#f9fbf8"
          stroke="#b77d43"
          strokeWidth="2"
        />

        <g className="orbit-signal">
          <circle
            cx="377"
            cy="208"
            r="31"
            fill="#fffdf9"
            stroke="#cfb28e"
            strokeWidth="1.5"
          />
          <circle cx="377" cy="208" r="24" fill="#f6efe4" stroke="#e1c5a0" />
          <text x="377" y="215" textAnchor="middle" className="art-token">
            R
          </text>
        </g>
        <path d="M386 240L426 283H490" fill="none" stroke="#9eb3ba" />
        <text x="493" y="281" className="art-kicker">
          PAYMENT PROOF
        </text>
        <text x="493" y="301" className="art-caption">
          FUTURE ROUTE
        </text>

        <path d="M137 256L105 145H45" fill="none" stroke="#829da6" />
        <circle cx="137" cy="256" r="4" fill="#fff" stroke="#829da6" />
        <text x="45" y="112" className="art-kicker">
          01 / FIRST CHAPTER
        </text>
        <text x="45" y="136" className="art-title">
          Earth network
        </text>

        <path d="M575 257L617 378H681" fill="none" stroke="#c6a27a" />
        <circle cx="575" cy="257" r="4" fill="#fff" stroke="#c6a27a" />
        <text x="520" y="406" className="art-kicker">
          02 / THE HORIZON
        </text>
        <text x="520" y="430" className="art-title">
          Future community
        </text>

        <path d="M38 526H685" stroke="#d9e1e4" />
        <text x="38" y="552" className="art-caption">
          INTERSTELLAR PAYMENT VISION · ROUTE NOT LIVE
        </text>
        <text x="595" y="552" className="art-caption">
          CONCEPT / 002
        </text>
      </svg>
    </div>
  );
}
