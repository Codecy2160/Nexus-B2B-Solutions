import { useState, useMemo } from 'react'

const MAX_HOURS = Math.round(500 * 0.7 + 25 * 3) // theoretical ceiling, used to scale the chart

export default function ROICalculator() {
  const [headcount, setHeadcount] = useState(50)
  const [branches, setBranches] = useState(2)

  const hoursSaved = useMemo(
    () => Math.round(headcount * 0.7 + branches * 3),
    [headcount, branches]
  )

  // six bars trending up to the live total, so the chart visibly grows as you drag
  const chartBars = useMemo(() => {
    const shape = [0.35, 0.5, 0.4, 0.65, 0.55, 1]
    const scale = Math.min(hoursSaved / MAX_HOURS, 1)
    return shape.map((s) => Math.max(6, Math.round(s * scale * 100)))
  }, [hoursSaved])

  return (
    <div className="calc-mockup">
      <div className="calc-mockup-bar">
        <span className="mockup-dot" />
        <span className="mockup-dot" />
        <span className="mockup-dot" />
        <span className="calc-mockup-title">NexusTech — Live estimate</span>
      </div>

      <div className="calc-mockup-body">
        <div className="mockup-nav calc-mockup-nav">
          <span className="active" />
          <span />
          <span />
          <span />
        </div>

        <div className="calc-mockup-main">
          <div className="calc-stat-row">
            <div className="calc-stat-card">
              <label htmlFor="headcount">Employees</label>
              <output id="headcountOut">{headcount}</output>
              <input
                type="range"
                id="headcount"
                min="5"
                max="500"
                step="5"
                value={headcount}
                onChange={(e) => setHeadcount(Number(e.target.value))}
              />
            </div>
            <div className="calc-stat-card">
              <label htmlFor="branches">Branches</label>
              <output id="branchesOut">{branches}</output>
              <input
                type="range"
                id="branches"
                min="1"
                max="25"
                step="1"
                value={branches}
                onChange={(e) => setBranches(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="calc-highlight">
            <p className="result-label">Admin hours saved per month</p>
            <p className="result-value">{hoursSaved}</p>
          </div>

          <div className="mockup-chart calc-mockup-chart">
            {chartBars.map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>

          <p className="result-note">
            Based on ~0.7 hrs saved per employee per month when payroll and
            scheduling share one system.
          </p>
        </div>
      </div>
    </div>
  )
}
