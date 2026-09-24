import { useState, type FormEvent } from 'react'
import { PaperPlaneTilt, CheckCircle, WarningCircle, EnvelopeSimple, ArrowUpRight, CaretDown } from '@/components/slab'
import { FAQS } from '@/data/faqs'
import { profile } from '@/data/profile'
import { readLead, submitLead, SubmitError, MAX_NAME, MAX_EMAIL, MAX_MESSAGE, type SubmitResult } from '@/lib/contact'

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'error'; note: string } | { kind: 'sent'; via: SubmitResult['via'] }

const FLIGHT_MS = 650

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

export default function ContactGrid() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const [shake, setShake] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const lead = readLead(new FormData(e.currentTarget))
    if (!lead) {
      setStatus({ kind: 'error', note: 'Please add your name, a valid email, and a message note.' })
      setShake((n) => n + 1)
      return
    }
    setStatus({ kind: 'sending' })
    try {
      const [result] = await Promise.all([submitLead(lead), wait(FLIGHT_MS)])
      setStatus({ kind: 'sent', via: result.via })
    } catch (err) {
      const note = err instanceof SubmitError ? err.message : 'Message could not be sent. Please email macalam.kentjohn@gmail.com directly.'
      setStatus({ kind: 'error', note })
      setShake((n) => n + 1)
    }
  }

  const busy = status.kind === 'sending'

  return (
    <section className="pgrid cgrid" aria-labelledby="contact-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">FAQs / Contact</span>
        <h1 className="pgrid__title" id="contact-title">
          Available for Data Science internships and ML projects.
        </h1>
        <p className="pgrid__lede">
          Let’s connect regarding internships, supervised predictive modeling, or project deliverables. I respond within 24 hours.
        </p>
      </header>

      <div className="home__glass cgrid__glass">
        {/* Left: the dark plate. What happens after you press send. */}
        <aside className="cgrid__aside" aria-labelledby="contact-faq">
          <div className="cgrid__aside-head">
            <span className="cgrid__eyebrow">FAQs</span>
            <h2 className="cgrid__aside-title" id="contact-faq">
              Quick answers.
              <br />
              <span>Still have one? Write below.</span>
            </h2>
          </div>

          <ul className="cgrid__faqs" role="list">
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <li key={f.q} className={`cgrid__faq${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="cgrid__faq-q"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`cfaq-${i}`}
                  >
                    <span className="cgrid__step-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <span className="cgrid__faq-text">{f.q}</span>
                    <CaretDown size={14} weight="bold" className="cgrid__faq-caret" aria-hidden="true" />
                  </button>
                  <div className="cgrid__faq-a" id={`cfaq-${i}`} hidden={!isOpen}>
                    <p>{f.a}</p>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="cgrid__aside-foot">
            <span className="cgrid__aside-hint">Prefer writing directly?</span>
            <a className="cgrid__aside-mail" href={`mailto:${profile.email}`} aria-label={`Send email to ${profile.email}`}>
              <EnvelopeSimple size={15} weight="bold" aria-hidden="true" />
              <span>{profile.email}</span>
            </a>
          </div>
        </aside>

        {/* Right: the form. */}
        <div className="cgrid__body">
          {status.kind === 'sent' ? (
            <div className="cgrid__sent" role="status">
              <span className="cgrid__sent-mark" aria-hidden="true">
                <CheckCircle size={36} weight="fill" />
              </span>
              <h2 className="cgrid__sent-title">Message prepared.</h2>
              <p className="cgrid__sent-body">
                {status.via === 'webhook'
                  ? 'Your message was sent to Kent. You’ll hear back within 24 hours.'
                  : 'Your email client has opened with the message ready to send to macalam.kentjohn@gmail.com.'}
              </p>
              <button
                type="button"
                className="cgrid__sent-reset"
                onClick={() => setStatus({ kind: 'idle' })}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="cgrid__form" onSubmit={onSubmit} noValidate>
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="cgrid__trap"
              />
              <div className="cgrid__row">
                <label className="cgrid__field">
                  <span className="cgrid__label">First name</span>
                  <input type="text" name="firstName" autoComplete="given-name" required maxLength={MAX_NAME} placeholder="First name" />
                </label>
                <label className="cgrid__field">
                  <span className="cgrid__label">Last name</span>
                  <input type="text" name="lastName" autoComplete="family-name" required maxLength={MAX_NAME} placeholder="Last name" />
                </label>
              </div>

              <label className="cgrid__field">
                <span className="cgrid__label">Email</span>
                <input type="email" name="email" autoComplete="email" required maxLength={MAX_EMAIL} placeholder="you@example.com" />
              </label>

              <label className="cgrid__field cgrid__field--grow">
                <span className="cgrid__label">Tell me about your team or project</span>
                <textarea
                  name="message"
                  required
                  maxLength={MAX_MESSAGE}
                  placeholder="Tell me about your dataset, project objectives, or internship timeline…"
                />
              </label>

              <div className="cgrid__actions">
                <button
                  key={shake}
                  type="submit"
                  className={`cgrid__submit${busy ? ' is-sending' : ''}${status.kind === 'error' ? ' is-shaking' : ''}`}
                  disabled={busy}
                >
                  <span className="cgrid__submit-plane" aria-hidden="true">
                    <PaperPlaneTilt size={17} weight="fill" />
                  </span>
                  <span className="cgrid__submit-label">{busy ? 'Sending' : 'Send message'}</span>
                  <ArrowUpRight className="cgrid__submit-arrow" size={15} weight="bold" aria-hidden="true" />
                </button>
                {status.kind === 'error' ? (
                  <span className="cgrid__status" role="alert">
                    <WarningCircle size={16} weight="fill" aria-hidden="true" />
                    {status.note}
                  </span>
                ) : (
                  <span className="cgrid__hint">Replies within 24 hours · macalam.kentjohn@gmail.com</span>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
