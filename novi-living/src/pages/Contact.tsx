import { useEffect, useState, type FormEvent } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  address: string
  status: string
  message: string
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  status: 'Not sure yet',
  message: '',
}

/** Public Formspree form id (override with VITE_FORMSPREE_FORM_ID). Accepts id or full URL. */
const DEFAULT_FORMSPREE_ID = 'xaeodoed'

function resolveFormspreeId(raw: string | undefined): string {
  const value = raw?.trim() ?? ''
  if (!value) return DEFAULT_FORMSPREE_ID
  const fromUrl = value.match(/formspree\.io\/f\/([A-Za-z0-9_-]+)/i)
  if (fromUrl) return fromUrl[1]
  return value.replace(/^\/+|\/+$/g, '') || DEFAULT_FORMSPREE_ID
}

const formspreeId = resolveFormspreeId(import.meta.env.VITE_FORMSPREE_FORM_ID)

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [honeypot, setHoneypot] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    document.title = 'Contact — Novi Living'
  }, [])

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setSuccess(false)

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete name, email and what you need.')
      return
    }

    if (honeypot) {
      setSuccess(true)
      setForm(initial)
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || undefined,
          address: form.address.trim() || undefined,
          status: form.status,
          message: form.message.trim(),
          _replyto: form.email.trim(),
          _subject: `Property enquiry from ${form.name.trim()}`,
        }),
      })

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean
        error?: string
        errors?: Array<{ message?: string }>
      } | null

      if (!response.ok) {
        const detail =
          data?.error ||
          data?.errors?.map((item) => item.message).filter(Boolean).join(' ') ||
          'Something went wrong sending your message.'
        setError(detail)
        return
      }

      setSuccess(true)
      setForm(initial)
    } catch {
      setError(
        'Could not send your message. Check your connection, or email hello@noviliving.co.nz.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-14 px-5 pt-16 pb-20 md:grid-cols-12 md:px-8 md:pt-24 md:pb-28">
      <div className="md:col-span-5">
        <p className="text-xs font-medium tracking-label text-ink-soft uppercase">
          Contact
        </p>
        <h1 className="mt-6 font-display text-5xl leading-none tracking-tight md:text-6xl">
          Let’s discuss your property.
        </h1>
        <p className="mt-6 text-lg text-ink-soft">
          Write with the address, or just the suburb if you are still deciding.
          Say whether someone is already living there, and what you want from
          management.
        </p>
        <a
          className="mt-8 block font-display text-2xl underline underline-offset-4"
          href="tel:+64275026999"
        >
          +64 275026999
        </a>
        <a
          className="mt-3 block font-display text-2xl underline underline-offset-4"
          href="mailto:hello@noviliving.co.nz"
        >
          hello@noviliving.co.nz
        </a>
        <p className="mt-6 text-sm text-ink-soft">
          The form emails Novi at hello@noviliving.co.nz. Nothing is stored on
          this site.
        </p>
        <img
          src="/images/keys.jpg"
          alt="A house key and a cup on a pale stone surface"
          className="mt-10 hidden aspect-3/2 w-full object-cover md:block"
          width={1728}
          height={1152}
        />
      </div>

      <form
        className="md:col-span-6 md:col-start-7"
        noValidate
        onSubmit={onSubmit}
      >
        <label className="block text-xs font-medium tracking-label uppercase">
          Name
          <input
            className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink outline-none placeholder:text-ink-soft/70"
            autoComplete="name"
            required
            name="name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
          />
        </label>
        <label className="mt-6 block text-xs font-medium tracking-label uppercase">
          Email
          <input
            className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink outline-none placeholder:text-ink-soft/70"
            type="email"
            autoComplete="email"
            required
            name="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
          />
        </label>
        <label className="mt-6 block text-xs font-medium tracking-label uppercase">
          Phone{' '}
          <span className="tracking-normal text-ink-soft normal-case">
            optional
          </span>
          <input
            className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink outline-none placeholder:text-ink-soft/70"
            type="tel"
            autoComplete="tel"
            name="phone"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
          />
        </label>
        <label className="mt-6 block text-xs font-medium tracking-label uppercase">
          Property address or suburb
          <input
            className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink outline-none placeholder:text-ink-soft/70"
            name="address"
            value={form.address}
            onChange={(e) => update('address', e.target.value)}
          />
        </label>
        <label className="mt-6 block text-xs font-medium tracking-label uppercase">
          Is it tenanted?
          <select
            className="mt-2 w-full border border-line bg-paper px-3 py-3 text-ink outline-none"
            name="status"
            value={form.status}
            onChange={(e) => update('status', e.target.value)}
          >
            <option>Not sure yet</option>
            <option>Yes — currently tenanted</option>
            <option>No — vacant or between tenancies</option>
            <option>I live there and may rent it later</option>
          </select>
        </label>
        <label className="mt-6 block text-xs font-medium tracking-label uppercase">
          What you need
          <textarea
            className="mt-2 min-h-36 w-full resize-y border border-line bg-paper px-3 py-3 text-ink outline-none placeholder:text-ink-soft/70"
            name="message"
            required
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
          />
        </label>
        <input
          type="text"
          name="_gotcha"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        {error ? (
          <p className="mt-4 text-sm text-red-700" role="alert">
            {error}
          </p>
        ) : null}
        {success ? (
          <p className="mt-4 text-sm text-ink" role="status">
            Thanks — your message was sent to Novi. We’ll be in touch.
          </p>
        ) : null}
        <button
          type="submit"
          disabled={submitting}
          className="mt-8 bg-ink px-5 py-3 text-xs font-medium tracking-label text-paper uppercase disabled:cursor-wait disabled:opacity-70"
        >
          {submitting ? 'Sending…' : 'Email Novi'}
        </button>
      </form>
    </section>
  )
}
