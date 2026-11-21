import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  useEffect(() => {
    document.title = 'Company — Novi Living'
  }, [])

  return (
    <>
      <article className="mx-auto max-w-6xl px-5 pt-16 pb-8 md:px-8 md:pt-24">
        <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
          Company profile
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-none tracking-tight md:text-display">
          People. Property. Better tomorrow.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Thoughtful property management begins with people, cares for property
          and helps create a better tomorrow. We pair personal service with
          clear fees and timely communication.
        </p>
      </article>

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="border-t border-line" />
      </div>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
            Experience behind Novi
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight">
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
          <p className="mt-4 text-ink-soft">
            Hotels teach a standard for the small things — a room that is ready,
            a message that is answered, a problem that is followed through.
            Long-term rentals ask for the same habits, over years rather than
            nights.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
            A people-first approach
          </p>
          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-display text-2xl">Personal service</h3>
              <p className="mt-2 text-ink-soft">
                We take time to understand your property and what you need from
                its management. You are not handed to a rotating inbox.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl">Clear fees</h3>
              <p className="mt-2 text-ink-soft">
                Management fees and the scope of service are explained before
                you decide. A blank charge on the agreement means there is no
                separate charge.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl">Timely communication</h3>
              <p className="mt-2 text-ink-soft">
                You know who to contact and are kept informed as matters
                progress. Material issues are not saved for the monthly
                statement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <figure className="border-y border-line">
        <img
          src="/images/interior.jpg"
          alt="Morning light across a linen sofa in a carefully kept living room"
          className="aspect-video max-h-[32rem] w-full object-cover"
          width={1728}
          height={1152}
        />
      </figure>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
            How the practice is set up
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight">
            Small on purpose.
          </h2>
        </div>
        <div className="space-y-5 text-ink-soft md:col-span-6 md:col-start-7">
          <p>
            Larger Auckland firms compete on portfolio size, branch networks and
            review volume. Those numbers are useful when you want a machine.
            They are less useful when you want someone who has actually read the
            file. Novi is built for the second kind of owner.
          </p>
          <p>
            The management agreement has no minimum fixed term. Either party may
            end it on 30 days’ written notice, without a commission on the rest
            of the tenancy.
          </p>
          <p>
            We do not guarantee occupancy, rent payment or tenant conduct. We do
            not give legal, tax or engineering advice. What we undertake is
            reasonable care, skill and diligence, clear records, and action
            inside the authority you have given.
          </p>
          <Link
            to="/fees"
            className="inline-block text-ink underline underline-offset-4"
          >
            See how fees are set
          </Link>
        </div>
      </section>
    </>
  )
}
