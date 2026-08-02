"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Navbar } from "@/components/navbar";
import { Reveal } from "@/components/reveal";
import { SorisArt } from "@/components/soris-art";

const skills = ["Illustration", "Photography", "Product Design", "Digital Art", "Album Design", "Art Direction"];

export function Home() {
  const hero = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(".hero-word", { yPercent: 115 }, { yPercent: 0, duration: 1.15, stagger: 0.1, ease: "power4.out", delay: 0.25 });
      gsap.fromTo(".hero-details", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.75, delay: 1.05 });
    }, hero);
    return () => context.revert();
  }, []);
  return <><Navbar /><main id="main">
    <section className="hero" id="home" ref={hero} aria-label="Introduction">
      <div className="hero-meta hero-details"><p>Designer · Illustrator</p><p>Jeddah, Saudi Arabia</p><p>Portfolio / 2026</p></div>
      <h1><span className="clip"><span className="hero-word">Designing</span></span><span className="clip accent"><span className="hero-word">meaningful</span></span><span className="clip"><span className="hero-word">impressions.</span></span></h1>
      <div className="hero-bottom hero-details"><p>Jude Alkhudiri creates thoughtful identities, illustrations and visual worlds with a close eye for composition, detail, and enduring character.</p><a href="#work" className="text-link">Scroll to inspect <b>↓</b></a><p className="index">01 <i /> 04</p></div>
    </section>

    <section className="section projects" id="work" aria-label="Selected work">
      <Reveal><p className="eyebrow">Selected work</p><h2>Projects with<br /><em>presence.</em></h2><p className="section-intro">A selection of identity, packaging and image-making work built to stay with you.</p></Reveal>
      <Reveal delay={0.1}><article className="project-card">
        <a href="./projects/soris/" aria-label="View Soris case study"><SorisArt /></a>
        <div className="project-copy"><p>01 / Featured project</p><h3>Soris</h3><p>A conceptual perfume identity inspired by the tension between stillness and sensation. A precise visual system for a scent imagined as an object of ritual.</p><ul><li>Brand identity</li><li>Packaging</li><li>Art direction</li></ul><a className="case-link" href="./projects/soris/">View case study <b>↗</b></a></div>
      </article></Reveal>
    </section>

    <section className="section about" id="about"><Reveal><p className="eyebrow">About / Philosophy</p><h2>Design that<br />feels <em>intentional.</em></h2></Reveal><Reveal delay={0.1} className="about-grid"><p className="large-copy">I am a designer and illustrator who builds visual experiences with clarity, emotion and purpose. I care about the small decisions—the space around a word, the weight of a line, the pace of an image.</p><p className="small-copy">I believe good design is never decoration alone. It is a system of choices that makes an idea more legible, more memorable, and more human. My practice moves between branding, illustration, product imagery and art direction.</p></Reveal></section>

    <section className="section skill-section" aria-label="Skills"><Reveal><p className="eyebrow">Creative focus</p><h2>Ways I shape<br />a <em>point of view.</em></h2></Reveal><div className="skills-list">{skills.map((skill, index) => <Reveal key={skill} delay={index * 0.04}><div className="skill"><span>0{index + 1}</span><h3>{skill}</h3><b>↗</b></div></Reveal>)}</div></section>

    <section className="section experience" id="experience"><Reveal><p className="eyebrow">Experience</p><h2>Building with<br />teams, <em>learning fast.</em></h2><p className="section-intro">Practical studio experience across visual identity and communication.</p></Reveal><div className="experience-list"><Reveal><article><p>2025 — 2026</p><p>Studio</p><h3>Graphic Designer</h3><p>Umbrella</p><p className="description">Developed branding, social campaigns and marketing materials across client projects.</p><strong>7 months</strong></article></Reveal><Reveal delay={0.08}><article><p>2024 — 2025</p><p>Studio</p><h3>Graphic Designer</h3><p>DNA Studio</p><p className="description">Created identities, presentations and visual systems for commercial and creative work.</p><strong>7 months</strong></article></Reveal></div></section>
  </main><footer id="contact"><Reveal><p className="eyebrow">Contact / Say hello</p><h2>Let&apos;s make something<br /><em>memorable.</em></h2><p>For collaborations, opportunities, or simply to say hello.</p><a className="email" href="mailto:judeabdullaziz@gmail.com">judeabdullaziz@gmail.com <b>↗</b></a><div className="socials"><a href="https://www.linkedin.com/in/jude-alkhudiri-8137b0219/" target="_blank" rel="noreferrer">LinkedIn <b>↗</b></a><a href="#home">Back to top <b>↑</b></a></div><small>© 2026 Jude Alkhudiri</small></Reveal></footer></>;
}
