"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = ["Work", "About", "Experience", "Contact"];
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
    <Link className="wordmark" href="/#home" aria-label="Jude Alkhudiri, back to home">JUDE<br />ALKHUDIRI</Link>
    <nav aria-label="Primary navigation">{links.map((link) => <Link key={link} href={`/#${link.toLowerCase()}`}>{link}</Link>)}</nav>
    <Link className="availability" href="/#contact"><span />Available for ideas</Link>
  </header>;
}
