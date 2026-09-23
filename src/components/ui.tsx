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
      <div className="page-hero-orbit" aria-hidden="true" />
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
