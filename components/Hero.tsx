import TopoArt from "./TopoArt";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <TopoArt />
      <div className="container">
        <div className="hero-inner">
          <p className="eyebrow" data-rise style={{ "--rise": "0ms" } as React.CSSProperties}>
            Basecamp — Alt 0 m
          </p>
          <h1 id="hero-title" data-rise style={{ "--rise": "80ms" } as React.CSSProperties}>
            Websites that <span className="accent">climb</span>.
          </h1>
          <p className="lede" data-rise style={{ "--rise": "170ms" } as React.CSSProperties}>
            NorthPeak is a small web studio for brands with steep ambitions. We design and
            build Shopify stores and marketing sites that load fast, rank well, and sell —
            live in weeks, not quarters.
          </p>
          <div className="hero-ctas" data-rise style={{ "--rise": "260ms" } as React.CSSProperties}>
            <a className="btn btn-primary" href="#contact">
              Start your ascent
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a className="btn btn-ghost" href="#results">
              See the results
            </a>
          </div>
        </div>
        <dl className="manifest" data-rise style={{ "--rise": "360ms" } as React.CSSProperties}>
          <div>
            <dt className="visually-hidden">Launches since 2021</dt>
            <dd>
              <strong>47</strong>launches since 2021
            </dd>
          </div>
          <div>
            <dt className="visually-hidden">Median mobile LCP</dt>
            <dd>
              <strong>0.9s</strong>median mobile LCP
            </dd>
          </div>
          <div>
            <dt className="visually-hidden">Lighthouse floor</dt>
            <dd>
              <strong>90+</strong>Lighthouse floor, every build
            </dd>
          </div>
          <div>
            <dt className="visually-hidden">Typical build time</dt>
            <dd>
              <strong>4–6 wks</strong>typical build time
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
