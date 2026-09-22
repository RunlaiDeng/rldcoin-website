export function OrbitArt() {
  const stars = Array.from({ length: 68 }, (_, i) => ({
    x: 28 + ((i * 137) % 650),
    y: 35 + ((i * 89) % 490),
    r: i % 6 === 0 ? 1.8 : 0.9,
  }));
  return (
    <div className="orbit-art">
      <svg
        viewBox="0 0 720 590"
        role="img"
        aria-labelledby="orbit-title orbit-description"
      >
        <title id="orbit-title">
          Starting on Earth. Reaching toward future Zones.
        </title>
        <desc id="orbit-description">
          An illustrated Earth surrounded by orbital paths and a distant future
          Zone. This is a concept illustration, not a live network map.
        </desc>
        <defs>
          <radialGradient id="space-glow">
            <stop stopColor="#c9dce6" stopOpacity=".5" />
            <stop offset="1" stopColor="#f7f9fa" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="earth-fill" cx="32%" cy="28%" r="75%">
            <stop stopColor="#e3eef0" />
            <stop offset=".57" stopColor="#bdced2" />
            <stop offset=".88" stopColor="#66878e" />
            <stop offset="1" stopColor="#224652" />
          </radialGradient>
          <linearGradient id="land-fill" x2="1" y2="1">
            <stop stopColor="#a3b9b6" />
            <stop offset="1" stopColor="#526f76" />
          </linearGradient>
          <radialGradient id="earth-shade" cx="28%" cy="25%" r="80%">
            <stop offset=".42" stopColor="#0a2a37" stopOpacity="0" />
            <stop offset="1" stopColor="#0a2a37" stopOpacity=".47" />
          </radialGradient>
          <clipPath id="earth-clip">
            <circle cx="367" cy="290" r="165" />
          </clipPath>
          <filter
            id="earth-shadow"
            x="-40%"
            y="-40%"
            width="190%"
            height="190%"
          >
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>
        <circle cx="370" cy="295" r="294" fill="url(#space-glow)" />
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="#64808a"
            opacity={i % 3 === 0 ? 0.5 : 0.2}
          />
        ))}
        <g fill="none" stroke="#d2dce0">
          <ellipse
            cx="367"
            cy="290"
            rx="302"
            ry="106"
            transform="rotate(-31 367 290)"
          />
          <ellipse
            cx="367"
            cy="290"
            rx="248"
            ry="216"
            transform="rotate(-31 367 290)"
            strokeDasharray="2 7"
          />
          <circle cx="367" cy="290" r="210" />
          <path d="M54 450L674 96" strokeDasharray="3 7" />
          <path d="M84 72L652 515" strokeDasharray="3 8" opacity=".5" />
        </g>
        <ellipse
          cx="385"
          cy="452"
          rx="119"
          ry="15"
          fill="#527680"
          opacity=".18"
          filter="url(#earth-shadow)"
        />
        <circle
          cx="367"
          cy="290"
          r="173"
          fill="none"
          stroke="#e2eaec"
          strokeWidth="4"
        />
        <circle cx="367" cy="290" r="165" fill="url(#earth-fill)" />
        <g clipPath="url(#earth-clip)">
          <g fill="url(#land-fill)" opacity=".77">
            <path d="M220 209L247 177 288 163 296 145 335 136 376 147 375 169 347 178 342 198 319 198 301 216 275 218 263 239 245 236 241 216Z" />
            <path d="M263 241L280 226 307 232 312 253 328 266 346 263 362 279 358 299 379 313 373 346 351 370 345 398 322 423 319 402 308 390 305 357 287 342 286 316 270 304 277 282 260 267Z" />
            <path d="M383 140L430 143 477 167 481 190 447 202 428 192 414 204 394 197 403 175 385 163Z" />
            <path d="M421 215L444 203 477 212 488 237 516 248 531 280 502 290 481 280 470 252 451 255 441 236Z" />
            <path d="M423 247L455 257 475 286 466 319 450 347 429 354 420 332 407 314 403 284Z" />
            <path d="M481 346L514 336 537 354 522 377 489 378Z" />
            <path d="M226 398L256 414 297 424 321 435 367 439 410 430 446 439 467 456 211 461Z" />
          </g>
          <g fill="none" stroke="#eef5f5" strokeWidth=".7" opacity=".35">
            <ellipse cx="367" cy="290" rx="54" ry="165" />
            <ellipse cx="367" cy="290" rx="112" ry="165" />
            <ellipse cx="367" cy="290" rx="153" ry="165" />
            <ellipse cx="367" cy="290" rx="165" ry="46" />
            <ellipse cx="367" cy="290" rx="165" ry="109" />
            <path d="M202 290H532M367 124V456" />
          </g>
          <circle cx="367" cy="290" r="165" fill="url(#earth-shade)" />
          <path
            d="M248 288Q353 168 465 263M282 355Q376 251 465 263"
            fill="none"
            stroke="#f7f2df"
            strokeWidth="1.1"
            strokeDasharray="3 4"
            opacity=".7"
          />
          <g fill="#fff">
            <circle cx="248" cy="288" r="3" />
            <circle cx="282" cy="355" r="3" />
            <circle cx="465" cy="263" r="3" />
          </g>
        </g>
        <path
          d="M106 452C185 446 498 311 626 146"
          fill="none"
          stroke="#b6c4ca"
          strokeWidth="1.2"
        />
        <path
          d="M481 278C546 232 596 186 626 146"
          fill="none"
          stroke="#cf9050"
          strokeWidth="1.5"
          strokeDasharray="4 5"
        />
        <g className="orbit-signal">
          <circle cx="554" cy="217" r="10" fill="#e2a35e" fillOpacity=".13" />
          <circle cx="554" cy="217" r="4" fill="#cb8745" />
        </g>
        <circle cx="626" cy="146" r="23" fill="#f0e9de" stroke="#d9c3a5" />
        <ellipse
          cx="626"
          cy="146"
          rx="31"
          ry="8"
          transform="rotate(-30 626 146)"
          fill="none"
          stroke="#be9e72"
        />
        <g stroke="#78939c" fill="none">
          <path d="M293 168L254 98H179" />
          <circle cx="293" cy="168" r="5" fill="#fff" />
          <path d="M493 390L552 433H627" />
        </g>
        <text x="84" y="74" className="art-kicker">
          01 / THE BEGINNING
        </text>
        <text x="84" y="97" className="art-title">
          Earth Zone
        </text>
        <text x="530" y="464" className="art-kicker">
          THE HORIZON
        </text>
        <text x="530" y="487" className="art-title">
          Future Zones
        </text>
        <text x="37" y="552" className="art-caption">
          LOCAL CONSENSUS. A WIDER HORIZON.
        </text>
        <text x="590" y="552" className="art-caption">
          CONCEPT / 001
        </text>
        <path d="M38 526H685" stroke="#d9e1e4" />
        <g stroke="#8aa0a7" strokeWidth="1">
          <path d="M91 303h10M96 298v10M538 93h8M542 89v8M609 354h10M614 349v10" />
        </g>
      </svg>
    </div>
  );
}
