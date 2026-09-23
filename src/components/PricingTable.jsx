const rows = [
  { feature: 'Payroll runs', starter: { text: 'Included', yes: true }, growth: { text: 'Included', yes: true } },
  { feature: 'Branches supported', starter: { text: 'Up to 3' }, growth: { text: 'Unlimited' } },
  { feature: 'Automated tax filing', starter: { text: '—' }, growth: { text: 'Included', yes: true } },
  { feature: 'Priority support', starter: { text: '—' }, growth: { text: 'Included', yes: true } },
]

function Cell({ cell }) {
  return <td className={cell.yes ? 'yes' : cell.text === '—' ? 'no' : undefined}>{cell.text}</td>
}

export default function PricingTable({ showCta = true }) {
  return (
    <div className="pricing-table">
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Starter</th>
              <th>Growth</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature}>
                <td className="tier">{row.feature}</td>
                <Cell cell={row.starter} />
                <Cell cell={row.growth} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showCta && (
        <div className="pricing-cta">
          <a className="cta-button" href="/pricing-signup">Get Started</a>
          <p className="cta-description">Start your free trial today.</p>
        </div>
      )}
    </div>
  )
}
