import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin, GraduationCap } from '@/components/slab'
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

export default function AboutGrid() {
  return (
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
  )
}
