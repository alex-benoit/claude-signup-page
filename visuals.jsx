// Product visual components — rendered inside each carousel slide's .slide-visual.

const Star = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l1.6 6.5L20 10l-6.4 1.5L12 18l-1.6-6.5L4 10l6.4-1.5L12 2z" />
  </svg>
);

// Slide 1 — Chat with Claude
function ChatVisual() {
  return (
    <div className="pv">
      <div className="pv-chrome">
        <div className="pv-dot r" /><div className="pv-dot y" /><div className="pv-dot g" />
        <div className="pv-url">claude.ai &nbsp;·&nbsp; New chat</div>
      </div>
      <div className="pv-body">
        <div className="chat-msg user">Help me plan a 5-day trip to Tokyo in November.</div>
        <div className="chat-msg ai">
          <div className="badge"><Star /> Claude</div>
          Here's a relaxed itinerary balancing neighborhoods, food, and a day trip to Hakone. I've grouped it by district so you're not zig-zagging across the city.
        </div>
        <div className="chat-msg ai" style={{ maxWidth: '52%' }}>
          <div className="chat-typing"><span /><span /><span /></div>
        </div>
      </div>
    </div>
  );
}

// Slide 2 — Cowork (file canvas)
function CoworkVisual() {
  const cards = [
    { label: 'Create a file', icon: 'file', hover: true },
    { label: 'Crunch data', icon: 'chart' },
    { label: 'Make a prototype', icon: 'cube' },
    { label: 'Prep for the day', icon: 'cal' },
    { label: 'Organize files', icon: 'folder' },
    { label: 'Send a message', icon: 'send' },
  ];
  const Icon = ({ k }) => {
    const common = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (k === 'file')   return <svg {...common}><path d="M14 3H6v18h12V7z" /><path d="M14 3v4h4" /></svg>;
    if (k === 'chart')  return <svg {...common}><path d="M4 20V8M10 20V4M16 20v-8M22 20H2" /></svg>;
    if (k === 'cube')   return <svg {...common}><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /><path d="M4 7.5L12 12l8-4.5M12 12v9" /></svg>;
    if (k === 'cal')    return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></svg>;
    if (k === 'folder') return <svg {...common}><path d="M3 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" /></svg>;
    return <svg {...common}><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>;
  };
  return (
    <div className="pv">
      <div className="pv-chrome">
        <div className="pv-dot r" /><div className="pv-dot y" /><div className="pv-dot g" />
        <div className="pv-url">cowork &nbsp;·&nbsp; My workspace</div>
      </div>
      <div className="pv-body" style={{ position: 'relative' }}>
        <div className="cowork-grid">
          {cards.map((c, i) => (
            <div key={i} className={`cw-card ${c.hover ? 'is-hover' : ''}`}>
              <div className="ico"><Icon k={c.icon} /></div>
              <span>{c.label}</span>
            </div>
          ))}
        </div>
        <svg className="cw-cursor" style={{ top: 110, left: 92 }} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3 2l7 18 2.6-7.4L20 10 3 2z" />
        </svg>
      </div>
    </div>
  );
}

// Slide 3 — Claude Code
function CodeVisual() {
  return (
    <div className="pv">
      <div className="pv-chrome" style={{ background: '#1f1a17', borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="pv-dot r" /><div className="pv-dot y" /><div className="pv-dot g" />
        <div className="pv-url" style={{ color: 'rgba(246,244,239,0.55)' }}>~ /app &nbsp;·&nbsp; claude-code</div>
      </div>
      <div className="code-body">
        <div><span className="ln">1</span><span className="com"># Add Stripe checkout to /pricing</span></div>
        <div><span className="ln">2</span><span className="kw">import </span>{`{ stripe } `}<span className="kw">from </span><span className="str">'./lib'</span></div>
        <div><span className="ln">3</span></div>
        <div><span className="ln">4</span><span className="kw">export async function </span><span className="fn">checkout</span>(plan) {`{`}</div>
        <div><span className="ln">5</span>&nbsp;&nbsp;<span className="kw">const</span> session = <span className="kw">await</span> stripe.<span className="fn">create</span>({`{`}</div>
        <div><span className="ln">6</span>&nbsp;&nbsp;&nbsp;&nbsp;mode: <span className="str">'subscription'</span>,</div>
        <div><span className="ln">7</span>&nbsp;&nbsp;&nbsp;&nbsp;line_items: [{`{`} price: plan.id, quantity: 1 {`}`}]<span className="code-cursor"></span></div>
        <div className="code-prompt">
          ✦ Claude has modified <strong>3 files</strong>: pricing.tsx, checkout.ts, stripe.config.js
        </div>
      </div>
    </div>
  );
}

// Slide 4 — Claude in Chrome
function ChromeVisual() {
  return (
    <div className="pv">
      <div className="pv-chrome">
        <div className="pv-dot r" /><div className="pv-dot y" /><div className="pv-dot g" />
        <div className="pv-url">linear.app &nbsp;·&nbsp; Q3 roadmap</div>
      </div>
      <div className="chrome-body">
        <div className="chrome-main">
          <div className="chrome-line w50" style={{ height: 10 }} />
          <div className="chrome-line w90" />
          <div className="chrome-line w70" />
          <div className="chrome-line w90" />
          <div className="chrome-block" />
          <div className="chrome-line w70" />
          <div className="chrome-line w50" />
        </div>
        <div className="chrome-side">
          <div className="side-head"><Star /> Claude</div>
          <div className="side-text">
            I've drafted a summary of the Q3 priorities and flagged two items that overlap with Q2 carry-over.
          </div>
          <div className="side-pill">+ Summarize page</div>
          <div className="side-pill">+ Extract action items</div>
          <div className="side-pill">+ Draft a reply</div>
        </div>
      </div>
    </div>
  );
}

const PRODUCTS = [
  { id: 'chat',   eyebrow: 'Chat',              title: 'Brainstorm anything with Claude', Visual: ChatVisual },
  { id: 'cowork', eyebrow: 'Cowork',            title: 'Build files, side by side',       Visual: CoworkVisual },
  { id: 'code',   eyebrow: 'Claude Code',       title: 'Ship code, faster',               Visual: CodeVisual },
  { id: 'chrome', eyebrow: 'Claude for Chrome', title: 'Claude where you work',           Visual: ChromeVisual },
];

window.PRODUCTS = PRODUCTS;
