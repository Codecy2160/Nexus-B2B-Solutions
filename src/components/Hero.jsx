import { useState } from 'react'

const modules = [
  {
    id: 'erp',
    label: 'ERP',
    stats: [
      { num: '128', lbl: 'Open orders' },
      { num: '$482K', lbl: 'Inventory value' },
    ],
    chart: [40, 60, 45, 75, 55, 68],
  },
  {
    id: 'hris',
    label: 'HRIS',
    stats: [
      { num: '312', lbl: 'Employees' },
      { num: '6', lbl: 'Payroll runs / mo' },
    ],
    chart: [50, 65, 40, 80, 60, 72],
  },
  {
    id: 'pos',
    label: 'POS',
    stats: [
      { num: '1,204', lbl: 'Transactions today' },
      { num: '$18.4K', lbl: 'Sales today' },
    ],
    chart: [30, 55, 65, 45, 85, 60],
  },
]

export default function Hero() {
  const [activeId, setActiveId] = useState(modules[0].id)
  const active = modules.find((m) => m.id === activeId)

  return (
    <header className="hero" id="top">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">NexusTech · ERP, HRIS, and POS in one place</p>
          <h1>One system for headcount, payroll, and the register.</h1>
          <p className="sub">
            Branch managers and finance look at the same numbers, updated as
            the day happens, not after Monday's spreadsheet catches up.
          </p>
          <a className="cta" href="#demo">Try the calculator</a>
        </div>

        <div className="mockup-stage">
          <div className="mockup-shadow" aria-hidden="true" />
          <div className="mockup">
            <div className="mockup-bar">
              <span className="mockup-dot" />
              <span className="mockup-dot" />
              <span className="mockup-dot" />
              <div className="mockup-tabs" role="tablist" aria-label="Product module">
                {modules.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    role="tab"
                    aria-selected={m.id === activeId}
                    className={`mockup-tab${m.id === activeId ? ' active' : ''}`}
                    onClick={() => setActiveId(m.id)}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="mockup-body">
              <div className="mockup-nav">
                {modules.map((m) => (
                  <span key={m.id} className={m.id === activeId ? 'active' : ''} />
                ))}
              </div>
              <div className="mockup-main">
                <div className="mockup-stats">
                  {active.stats.map((s) => (
                    <div className="mockup-stat" key={s.lbl}>
                      <div className="num">{s.num}</div>
                      <div className="lbl">{s.lbl}</div>
                    </div>
                  ))}
                </div>
                <div className="mockup-chart">
                  {active.chart.map((h, i) => (
                    <i key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}