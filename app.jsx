// Claude sign-up redesign — split-screen carousel + sign-up

const { useState, useEffect, useRef, useCallback } = React;

// --- Icons ---
const StarMark = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
    <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
  </svg>
);

const GoogleG = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.2-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.8 6.4 29.2 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.8 6.4 29.2 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 43.5c5.1 0 9.7-1.9 13.2-5.1l-6.1-5c-2 1.5-4.4 2.6-7.1 2.6-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.6 38.9 16.2 43.5 24 43.5z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.4l6.1 5c-.4.4 6.8-5 6.8-14.4 0-1.2-.1-2.3-.4-3.5z" />
  </svg>
);

const AppleMark = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.4 12.7c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8C6.5 7.3 5 8.3 4.2 9.9c-1.8 3.1-.5 7.7 1.3 10.3.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.5 0 2 .8 3.3.8 1.4 0 2.2-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.5-1-2.4-3.7zM14 5.4c.7-.8 1.1-2 1-3.1-1 0-2.2.7-2.9 1.5-.6.7-1.2 1.9-1 3 1.1 0 2.2-.6 2.9-1.4z" />
  </svg>
);

const ChevL = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>;
const ChevR = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>;
const PlayIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4v16l13-8z" /></svg>;
const PauseIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>;


// ─────────────────────────────────────────────────────────────────────────────
// Carousel
// ─────────────────────────────────────────────────────────────────────────────
function Carousel({ products, tone, autoplay, speed }) {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(autoplay);
  const n = products.length;

  useEffect(() => { setPlaying(autoplay); }, [autoplay]);

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setIdx((i) => (i + 1) % n), speed);
    return () => clearTimeout(t);
  }, [idx, playing, n, speed]);

  const go = useCallback((next) => setIdx(((next % n) + n) % n), [n]);

  const slideClass = (i) => {
    if (i === idx) return 'slide is-active';
    if (i === (idx - 1 + n) % n) return 'slide is-prev';
    if (i === (idx + 1) % n) return 'slide is-next';
    return 'slide is-far';
  };

  return (
    <>
      <div className="stage">
        <div className="stage-track">
          {products.map((p, i) => {
            const V = p.Visual;
            return (
              <div key={p.id} className={slideClass(i)} aria-hidden={i !== idx}>
                <div className="slide-eyebrow">{p.eyebrow}</div>
                <h2 className="slide-title serif">{p.title}</h2>
                <div className="slide-visual"><V /></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="controls" role="group" aria-label="Carousel controls">
        <button className="ctrl-btn" onClick={() => go(idx - 1)} aria-label="Previous"><ChevL /></button>
        <button className="ctrl-btn" onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause' : 'Play'}>
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
        <div className="dots" role="tablist">
          {products.map((p, i) => (
            <button key={p.id} className={`dot ${i === idx ? 'is-on' : ''}`}
              onClick={() => go(i)} aria-label={`Go to ${p.eyebrow}`} aria-selected={i === idx} role="tab" />
          ))}
        </div>
        <button className="ctrl-btn" onClick={() => go(idx + 1)} aria-label="Next"><ChevR /></button>
      </div>
    </>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// App
// ─────────────────────────────────────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headline": "Think fast, build faster.",
  "subhead": "Brainstorm in chat, build in Cowork. The fastest way to turn ideas into work.",
  "tone": "dark",
  "autoplay": true,
  "speedSec": 5,
  "showApple": false,
  "centerLogo": false
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  return (
    <div className="app">
      {/* LEFT — carousel */}
      <aside className="left" data-tone={t.tone}>
        <div className="left-inner">
          {/* spacer to balance header on right */}
          <div style={{ height: 22 }} />

          <Carousel
            products={window.PRODUCTS}
            tone={t.tone}
            autoplay={t.autoplay}
            speed={Math.max(2, t.speedSec) * 1000}
          />

          <div className="left-foot">
            <div className="trust">
              <div className="trust-label">Trusted by teams at</div>
              <div className="trust-logos">
                <span className="logo">Notion</span>
                <span className="logo">Figma</span>
                <span className="logo">Stripe</span>
                <span className="logo">Vercel</span>
                <span className="logo">Linear</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* RIGHT — sign up */}
      <main className="right">
        <div className="right-top">
          {!t.centerLogo ? (
            <div className="brand">
              <span className="brand-mark"><StarMark /></span>
              <span>Claude</span>
            </div>
          ) : <span />}
          <div className="account-q">
            <span>Already have an account?</span>
            <button className="btn-ghost">Log in</button>
          </div>
        </div>

        <section className="signup">
          {t.centerLogo && (
            <div className="brand" style={{ marginBottom: 28 }}>
              <span className="brand-mark"><StarMark size={28} /></span>
              <span style={{ fontSize: 22 }}>Claude</span>
            </div>
          )}

          <div className="signup-head">
            <h1 className="signup-headline serif">{t.headline}</h1>
            <p className="signup-sub">{t.subhead}</p>
          </div>

          <div className="signup-form">
            <button className="btn btn-oauth">
              <GoogleG />
              <span>Continue with Google</span>
            </button>

            {t.showApple && (
              <button className="btn btn-oauth">
                <AppleMark />
                <span>Continue with Apple</span>
              </button>
            )}

            <div className="or">or</div>

            <button className="btn btn-primary">Continue with email</button>
          </div>

          <p className="legal">
            By continuing, you acknowledge Anthropic's <a href="#">Privacy Policy</a> and agree to get occasional
            product emails. You can opt out anytime.
          </p>
        </section>

        <div className="right-foot">
          <a href="#">Download desktop app</a>
          <span className="dot-sep" />
          <a href="#">Contact sales</a>
          <span className="dot-sep" />
          <a href="#">© 2026 Anthropic</a>
        </div>
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Content" />
        <TweakText label="Headline" value={t.headline} onChange={(v) => setTweak('headline', v)} />
        <TweakText label="Subhead" value={t.subhead} onChange={(v) => setTweak('subhead', v)} />

        <TweakSection label="Left panel" />
        <TweakRadio label="Tone" value={t.tone}
          options={['dark', 'cream', 'coral']}
          onChange={(v) => setTweak('tone', v)} />
        <TweakToggle label="Autoplay carousel" value={t.autoplay} onChange={(v) => setTweak('autoplay', v)} />
        <TweakSlider label="Slide duration" value={t.speedSec} min={3} max={10} unit="s"
          onChange={(v) => setTweak('speedSec', v)} />

        <TweakSection label="Right panel" />
        <TweakToggle label="Show Apple sign-in" value={t.showApple} onChange={(v) => setTweak('showApple', v)} />
        <TweakToggle label="Center the Claude logo" value={t.centerLogo} onChange={(v) => setTweak('centerLogo', v)} />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
