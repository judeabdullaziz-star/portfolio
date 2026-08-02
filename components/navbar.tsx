"use client";

import { useEffect, useState } from "react";

const links = ["Work", "About", "Experience", "Contact"];
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
    <a className="wordmark" href="#home" aria-label="Jude Alkhudiri, back to home">JUDE<br />ALKHUDIRI</a>
    <nav aria-label="Primary navigation">{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</nav>
    <a className="availability" href="#contact"><span />Available for ideas</a>
  </header>;
}
