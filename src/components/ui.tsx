import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Logo() {
  return (
    <span className="brand">
      <Image
        className="brand-image"
        src="/brand/rldcoin-logo-primary.png"
        alt=""
        width={180}
        height={60}
        loading="eager"
      />
    </span>
  );
}
export function Button({
  href,
  children,
  secondary = false,
  light = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      className={`button ${secondary ? "button-secondary" : ""} ${light ? "button-light" : ""} ${className}`}
      href={href}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </p>
  );
}
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{eyebrow}</span>
        </div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p className="page-lead">{description}</p>
        {children}
      </div>
      <svg
        className="page-hero-network"
        viewBox="0 0 520 350"
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeWidth=".8">
          <circle cx="190" cy="225" r="142" />
          <circle cx="372" cy="132" r="142" />
          <circle cx="490" cy="302" r="142" />
          <path d="M190 225L372 132L490 302M190 225l-85-35M190 225l-27 79M372 132l-75-57M372 132l69-30" />
        </g>
        <g fill="currentColor">
          <circle cx="190" cy="225" r="4" />
          <circle cx="372" cy="132" r="4" />
          <circle cx="490" cy="302" r="4" />
          <circle cx="105" cy="190" r="2" />
          <circle cx="163" cy="304" r="2" />
          <circle cx="297" cy="75" r="2" />
          <circle cx="441" cy="102" r="2" />
        </g>
      </svg>
    </section>
  );
}
export function Note({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="note">
      <span className="note-mark" aria-hidden="true">
        i
      </span>
      <div>
        <strong>{title}</strong>
        <div>{children}</div>
      </div>
    </aside>
  );
}
