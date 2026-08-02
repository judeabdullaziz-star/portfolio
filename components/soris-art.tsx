export function SorisArt({ variant = "hero" }: { variant?: "hero" | "tall" | "wide" | "blue" }) {
  return <div className={`soris-art soris-${variant}`} aria-label="Soris fragrance project artwork" role="img">
    <div className="art-glow" />
    <div className="bottle">
      <div className="cap" /><div className="neck" />
      <div className="glass"><span>SORIS</span><small>EAU DE PARFUM</small></div>
    </div>
    <p className="art-brand">soris</p>
  </div>;
}
