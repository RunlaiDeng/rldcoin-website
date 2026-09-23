"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./ui";

const groups = [
  {
    name: "Introduction",
    links: [
      ["About Rldcoin", "/about"],
      ["How it works", "/how-it-works"],
      ["For individuals", "/individuals"],
      ["Future applications", "/applications"],
    ],
  },
  {
    name: "Resources",
    links: [
      ["Resource library", "/resources"],
      ["For developers", "/developers"],
      ["The roadmap", "/roadmap"],
      ["Frequently asked questions", "/faq"],
    ],
  },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const path = usePathname();
  useEffect(() => {
    function close(event: PointerEvent | KeyboardEvent) {
      if (
        (event instanceof KeyboardEvent && event.key === "Escape") ||
        (event instanceof PointerEvent &&
          !ref.current?.contains(event.target as Node))
      ) {
        setOpen(false);
        ref.current
          ?.querySelectorAll("details[open]")
          .forEach((el) => el.removeAttribute("open"));
      }
    }
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", close);
    };
  }, []);
  function closeNavigation() {
    setOpen(false);
    ref.current
      ?.querySelectorAll("details[open]")
      .forEach((el) => el.removeAttribute("open"));
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {path !== "/" && (
        <div className="announcement">
          <Link href="/network">
            <span className="status-dot" />
            The first chapter is here.{" "}
            <span className="announcement-extra">
              Explore the permanent Earth genesis.
            </span>
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      )}
      <header
        className={`site-header${path === "/" ? " site-header-home" : ""}`}
        ref={ref}
      >
        <div className="container header-inner">
          <Link href="/" aria-label="Rldcoin home" onClick={closeNavigation}>
            <Logo />
          </Link>
          <button
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            id="main-nav"
            aria-label="Main navigation"
            className={open ? "navigation navigation-open" : "navigation"}
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) closeNavigation();
            }}
          >
            {groups.map((group) => (
              <details
                className="nav-dropdown"
                key={group.name}
                name="navigation"
              >
                <summary>
                  {group.name}
                  <ChevronDown size={13} aria-hidden="true" />
                </summary>
                <div className="nav-dropdown-panel">
                  {group.links.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      aria-current={path === href ? "page" : undefined}
                    >
                      {label}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </details>
            ))}
            <Link
              href="/network"
              aria-current={path === "/network" ? "page" : undefined}
            >
              The network
            </Link>
            <a href="https://forum.rldcoin.com/">
              Community
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            <Link className="nav-cta" href="/get-started">
              Get started
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
