import { useState, useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, MapPin, GraduationCap, X } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - Kent John U. Macalam
 */

const PYTHON = { src: '/icons/vscode.svg', name: 'Python' }
const DOCKER = { src: '/icons/ai/docker.svg', name: 'Docker' }
const GITHUB = { src: '/icons/ai/github.svg', name: 'GitHub' }
const STREAMLIT = { src: '/icons/ai/react.svg', name: 'Streamlit' }
const CLOUD = { src: '/icons/ai/cloudflare.svg', name: 'Cloud Endpoints' }
const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CERTS = [
  { id: 'ai', title: 'Google AI Essentials', year: '2025', pdf: '/assets/certificates/google-ai-essentials.pdf' },
  { id: 'data1', title: 'Foundations: Data, Data, Everywhere', year: '2026', pdf: '/assets/certificates/foundations-data.pdf' },
  { id: 'data2', title: 'Ask Questions to Make Data-Driven Decisions', year: '2026', pdf: '/assets/certificates/ask-questions.pdf' },
  { id: 'data3', title: 'Prepare Data for Exploration', year: '2026', pdf: '/assets/certificates/prepare-data.pdf' }
]

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Supervised ML & Classification (XGBoost, Scikit-Learn)',
    marks: [PYTHON, GITHUB, DOCKER],
  },
  {
    index: '02',
    title: 'Statistical Uncertainty & Resampling (R, Bootstrap, BCa)',
    marks: [PYTHON, GITHUB],
  },
  {
    index: '03',
    title: 'Deployed Web Assistants & GenAI (Streamlit, Hugging Face)',
    marks: [STREAMLIT, CLOUD, GITHUB],
  },
  {
    index: '04',
    title: 'Automated Ingestion & ETL Pipelines (BeautifulSoup, SQLite)',
    marks: [PYTHON, GWS, DOCKER],
  },
]

function CertModal({ cert, onClose }: { cert: typeof CERTS[0]; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div
      className="pmodal"
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close dialog">
        <X size={18} weight="bold" />
      </button>
      <div className="pmodal__stage">
        <div className="ppanel ppanel--frame">
          <div className="ppanel__bar">
            <span className="ppanel__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="ppanel__url">
              <span className="ppanel__url-host">Coursera Certificate</span>
              <span className="ppanel__url-path"> / {cert.title}</span>
            </span>
          </div>
          <div className="ppanel__stage" style={{ background: '#333' }}>
            <iframe src={cert.pdf} title={cert.title} className="ppanel__iframe is-ready" style={{ opacity: 1, width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default function AboutGrid() {
  const [activeCert, setActiveCert] = useState<string | null>(null)
  const activePdf = CERTS.find(c => c.id === activeCert)

  return (
    <>
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Data science practitioner turning raw datasets into explainable models, useful dashboards, and decision-ready insights.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I build machine learning prototypes, statistical estimators, and data storytelling systems.
            <span> A structured, disciplined workflow from ingestion to stakeholder decision.</span>
          </p>

          <p className="agrid__note">
            <strong>BS in Data Science</strong> student in the Philippines, focused on practical ML classification, regional tourism RAG assistants, and non-parametric bootstrap uncertainty estimation.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" width={20} height={20} />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <GraduationCap size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">BS Data Science</span>
                <span className="agrid__cell-meta">Analytics &amp; Machine Learning</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">GMT+8 · Remote / Asynchronous</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href="https://github.com/Kent0625" target="_blank" rel="noopener">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/icons/ai/github.svg" alt="GitHub" loading="lazy" decoding="async" width={18} height={18} />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Open Source &amp; Research</span>
                <span className="agrid__cell-meta">github.com/Kent0625</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.avatarSrc}
            alt="Kent John U. Macalam portrait"
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>

    <section className="credentials" aria-labelledby="credentials-title">
      <header className="credentials__head">
        <span className="credentials__eyebrow">Certifications</span>
        <h2 className="credentials__headline" id="credentials-title">Professional Training &amp; Credentials</h2>
      </header>
      <div className="credcard">
        <div className="credcard__list">
          {CERTS.map(c => (
            <button 
              key={c.id}
              type="button" 
              className="cred" 
              onClick={() => setActiveCert(c.id)}
              style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', font: 'inherit', cursor: 'pointer' }}
              aria-haspopup="dialog"
            >
              <span className="cred__plate" aria-hidden="true">
                <img src="/icons/google-logo.svg" alt="Google" width="20" height="20" loading="lazy" decoding="async" />
              </span>
              <span className="cred__label">{c.title}</span>
              <span className="cred__index">{c.year}</span>
            </button>
          ))}
        </div>
      </div>
    </section>

    {activePdf && (
      <CertModal cert={activePdf} onClose={() => setActiveCert(null)} />
    )}
    </>
  )
}
