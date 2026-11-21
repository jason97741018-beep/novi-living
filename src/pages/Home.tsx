import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const pillars = [
  {
    n: '01',
    title: 'Personal service',
    body: 'We take time to understand your property and what you need from its management.',
  },
  {
    n: '02',
    title: 'Clear fees',
    body: 'Management fees and the scope of service are explained before you decide.',
  },
  {
    n: '03',
    title: 'Timely communication',
    body: 'You know who to contact and are kept informed as matters progress.',
  },
] as const

const services = [
  {
    title: 'Letting',
    body: 'Marketing within an agreed budget, viewings, and screening that is proportionate to the tenancy.',
  },
  {
    title: 'Tenancy care',
    body: 'Lawful agreements signed as your agent. Renewals only with your authority. Pet and alteration requests referred to you in time to meet the statutory deadline.',
  },
  {
    title: 'Rent and money',
    body: 'Collection, arrears follow-up, and monthly itemised statements. Owner funds are held separately from operating money.',
  },
  {
    title: 'Inspections',
    body: 'Entry, routine and exit reports that note what is visible and what should happen next. A routine visit is not a building survey. The default interval is every three months, unless we agree otherwise.',
  },
  {
    title: 'Maintenance',
    body: 'Routine work up to a limit you set. Above that, we ask first. Emergencies and binding deadlines are dealt with, then explained promptly.',
  },
  {
    title: 'Compliance',
    body: 'Healthy Homes evidence, smoke alarms and known defects stay on the file. We do not start a new tenancy while known legal requirements remain unmet.',
  },
] as const

const steps = [
  {
    n: '01',
    title: 'A conversation',
    body: 'Tell us about the home and what you need from its management.',
  },
  {
    n: '02',
    title: 'Fees in writing',
    body: 'The percentage, GST and every separate charge are set out before you decide.',
  },
  {
    n: '03',
    title: 'Appointment',
    body: 'One agreement for one property. No minimum fixed term.',
  },
  {
    n: '04',
    title: 'Ongoing care',
    body: 'Rent, inspections, maintenance, and a person you can actually reach.',
  },
] as const

export default function Home() {
  useEffect(() => {
    document.title = 'Novi Living — People. Property. Better tomorrow.'
  }, [])

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 md:px-8 md:pt-24 md:pb-16">
        <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
          Residential property management
        </p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-none tracking-tight text-ink md:text-display">
          People. Property.
          <br />
          Better tomorrow.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
          Thoughtful property management begins with people, cares for property
          and helps create a better tomorrow. We pair personal service with
          clear fees and timely communication.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-ink px-5 py-3 text-xs font-medium tracking-label text-paper uppercase"
          >
            Discuss your property
          </Link>
          <Link
            to="/fees"
            className="inline-flex items-center justify-center border border-ink px-5 py-3 text-xs font-medium tracking-label text-ink uppercase"
          >
            How fees work
          </Link>
        </div>
      </section>

      <figure className="border-y border-line">
        <img
          src="/images/villa.jpg"
          alt="A quiet weatherboard home with a deep green door and a clipped garden"
          className="aspect-3/2 max-h-[70vh] w-full object-cover"
          width={1728}
          height={1152}
        />
      </figure>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl md:grid-cols-3">
          {pillars.map((item) => (
            <article
              key={item.n}
              className="border-b border-line px-5 py-10 md:border-b-0 md:border-l md:px-8 md:first:border-l-0"
            >
              <p className="text-xs tracking-label text-ink-soft">{item.n}</p>
              <h2 className="mt-4 font-display text-3xl">{item.title}</h2>
              <p className="mt-3 text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-4">
          <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
            The work
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            What we look after.
          </h2>
          <p className="mt-5 text-ink-soft">
            Residential rentals, one property at a time. The scope is written
            down, so you are not buying a slogan.
          </p>
        </div>
        <dl className="md:col-span-7 md:col-start-6">
          {services.map((item) => (
            <div key={item.title} className="border-t border-line py-6">
              <dt className="font-display text-2xl">{item.title}</dt>
              <dd className="mt-2 text-ink-soft">{item.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
            From first conversation
          </p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight md:text-5xl">
            A plain sequence. Nothing is assumed.
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-4">
            {steps.map((item) => (
              <li key={item.n}>
                <p className="text-xs tracking-label text-ink-soft">{item.n}</p>
                <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <img
          src="/images/interior.jpg"
          alt="A calm living room in warm morning light, linen seating and a single vase"
          className="aspect-3/2 h-full w-full object-cover"
          width={1728}
          height={1152}
        />
        <div className="flex flex-col justify-center px-5 py-16 md:px-14 md:py-20">
          <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
            Experience behind Novi
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Care shaped by experience.
          </h2>
          <p className="mt-6 text-ink-soft">
            Novi Living draws on its founder’s experience in hotel operations
            and long-term residential property management.
          </p>
          <p className="mt-4 text-ink-soft">
            That background shapes a practical approach to looking after a home:
            paying attention to detail, following up on issues and treating
            people with care.
          </p>
          <Link
            to="/about"
            className="mt-8 text-sm underline underline-offset-4"
          >
            Read the company profile
          </Link>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
          <div>
            <p className="text-xs font-medium tracking-label uppercase">
              <span className="text-paper/70">Next</span>
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Let’s discuss your property.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a
              className="font-display text-2xl underline underline-offset-4"
              href="tel:+64275026999"
            >
              +64 275026999
            </a>
            <a
              className="font-display text-2xl underline underline-offset-4"
              href="mailto:hello@noviliving.co.nz"
            >
              hello@noviliving.co.nz
            </a>
            <Link
              to="/contact"
              className="bg-paper px-5 py-3 text-xs font-medium tracking-label text-ink uppercase"
            >
              Write to us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
