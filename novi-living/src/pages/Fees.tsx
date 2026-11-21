import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const principles = [
  {
    n: '01',
    title: 'Rent received',
    body: 'The management percentage applies only to rent actually collected, including recovered arrears.',
  },
  {
    n: '02',
    title: 'GST stated',
    body: 'Novi service fees are quoted excluding GST, and GST is added only where it is legally chargeable.',
  },
  {
    n: '03',
    title: 'Invoices at cost',
    body: 'Third-party costs are reimbursed at the amount invoiced. There is no hidden markup.',
  },
  {
    n: '04',
    title: 'No lock-in',
    body: 'No minimum term. Either party may end the agreement on 30 days’ written notice.',
  },
] as const

const schedule = [
  {
    title: 'Management fee',
    body: '6% + GST unfurnished; 7% + GST furnished',
  },
  {
    title: 'Letting fee',
    body: '1 week’s rent + GST',
  },
  {
    title: 'Routine inspection',
    body: '$50 + GST',
  },
  {
    title: 'Advertising or other',
    body: 'At cost',
  },
] as const

const included = [
  'Rent collection and arrears follow-up',
  'Monthly itemised owner statements',
  'Lawful rent reviews',
  'Day-to-day tenant communication within the agreed service',
] as const

export default function Fees() {
  useEffect(() => {
    document.title = 'Fees — Novi Living'
  }, [])

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 md:px-8 md:pt-24">
        <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
          Our fees
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-none tracking-tight md:text-display">
          Clear before you decide.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
          The rates below are Novi’s standard schedule. GST treatment and every
          charge are also written into your agreement before you sign.
        </p>
      </section>

      <section className="border-y border-line bg-paper-deep">
        <div className="mx-auto grid max-w-6xl md:grid-cols-4">
          {principles.map((item) => (
            <article
              key={item.n}
              className="border-b border-line px-5 py-10 md:border-b-0 md:border-l md:px-6 md:first:border-l-0"
            >
              <p className="text-xs tracking-label text-ink-soft">{item.n}</p>
              <h2 className="mt-3 font-display text-2xl">{item.title}</h2>
              <p className="mt-3 text-sm text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
          Schedule
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight md:text-5xl">
          What can be charged, and when it is not.
        </h2>
        <p className="mt-5 max-w-2xl text-ink-soft">
          Management, letting and routine inspections follow the rates below.
          Advertising or other charges are recovered at the invoiced amount.
        </p>
        <div className="mt-12 border-t border-line">
          {schedule.map((item) => (
            <div
              key={item.title}
              className="grid gap-3 border-b border-line py-7 md:grid-cols-12 md:gap-8"
            >
              <h3 className="font-display text-2xl md:col-span-3">
                {item.title}
              </h3>
              <p className="text-ink-soft md:col-span-9">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          <div className="border-b border-line px-5 py-16 md:border-r md:border-b-0 md:px-8 md:py-20">
            <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
              Inside the management fee
            </p>
            <h2 className="mt-4 font-display text-3xl">
              Once the percentage is agreed.
            </h2>
            <ul className="mt-8 space-y-4">
              {included.map((item) => (
                <li
                  key={item}
                  className="border-t border-line pt-4 text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-5 py-16 md:px-8 md:py-20">
            <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
              Paid onward, at cost
            </p>
            <h2 className="mt-4 font-display text-3xl">
              Third parties stay visible.
            </h2>
            <div className="mt-6 space-y-4 text-ink-soft">
              <p>
                Approved advertising, tenant screening, contractors and
                assessments are recovered at the invoiced amount, including any
                GST on that invoice.
              </p>
              <p>
                Tribunal filing fees are reimbursed at cost. Lawyers, court
                enforcement and debt collectors need a separate written approval
                of scope and cost. Letting and management fees are not charged
                to tenants.
              </p>
              <p>
                Major works need their own written scope, budget and fee before
                they begin, except necessary urgent work. Routine coordination
                and a project fee are not both charged for the same job.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
          <div className="md:col-span-4">
            <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
              For comparison
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight">
              The Auckland market, not a Novi quote.
            </h2>
          </div>
          <div className="space-y-4 text-ink-soft md:col-span-7 md:col-start-6">
            <p>
              Published Auckland management fees in 2026 commonly sit between 7%
              and 12% of rent collected, plus GST. A letting fee is often about
              one week’s rent plus GST, and some offices charge routine
              inspections separately — often from around $50 plus GST.
            </p>
            <p>
              Those figures are how the larger firms describe the market. Novi’s
              own rates are set out in the schedule above and confirmed in your
              agreement before anything is signed.
            </p>
            <Link
              to="/contact"
              className="inline-block text-ink underline underline-offset-4"
            >
              Discuss your property
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
