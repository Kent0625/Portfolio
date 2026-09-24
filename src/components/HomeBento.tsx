import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Robot,
  Medal,
  Stack,
  Quotes,
  FunnelSimple,
  Gear,
  AddressBook,
  Globe,
  AppWindow,
  SealCheck,
} from '@/components/slab'
import { websiteFunnel, type Funnel } from '@/data/funnels'
import { aiStack, type StackNode } from '@/data/ai-stack'
import { profile } from '@/data/profile'

const thumbSrc = (f: Funnel) =>
  `/home/${f.dir ?? 'funnels'}-${f.file.replace('.html', '.jpeg')}`

const PROJECT_SHOTS = websiteFunnel.slice(0, 4)

const OFFERS = [
  { Icon: FunnelSimple, title: 'Data Cleaning', note: 'ETL & Missingness Audits' },
  { Icon: Gear, title: 'Supervised ML', note: 'XGBoost & Scikit-Learn' },
  { Icon: AddressBook, title: 'Statistical Modeling', note: 'Bootstrap & BCa in R' },
  { Icon: Globe, title: 'Web Assistants', note: 'Streamlit & Static RAG' },
  { Icon: AppWindow, title: 'Decision Systems', note: 'KPI Views & Reorder DSS' },
] as const

const CLIENTS = [
  { name: 'Data Science Faculty', role: 'Research Advisor', work: 'XGBoost · Senate Data · Macro F1' },
  { name: 'AI Hackathon Committee', role: 'Technical Evaluator', work: 'Streamlit · RAG · Hugging Face' },
  { name: 'Economics Researcher', role: 'Statistical Collaborator', work: 'Bootstrap · Resampling · Risk' },
]

const PHOTOS = [profile.avatarSrc, profile.avatarSrc, profile.avatarSrc]

const leaves = (n: StackNode): StackNode[] =>
  n.children?.length ? n.children.flatMap(leaves) : [n]
const AI_BUILDS = leaves(aiStack)

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  const half = Math.ceil(AI_BUILDS.length / 2)
  const toolRows = [AI_BUILDS.slice(0, half), AI_BUILDS.slice(half)]

  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {/* Projects */}
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Selected Projects" desc="Predictive ML, statistical analysis & web assistants" />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...PROJECT_SHOTS, ...PROJECT_SHOTS].map((f, i) => (
              <span key={i} className="bento__shot">
                <img src={thumbSrc(f)} alt="" loading="lazy" decoding="async" />
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* About */}
      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About Kent" desc="BS Data Science · Cagayan de Oro, Philippines" />
        <div className="bento__media bento__fan" aria-hidden="true">
          {PHOTOS.map((src, i) => (
            <span key={i} className="bento__photo" style={{ ['--i' as string]: i }}>
              <img src={src} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </Link>

      {/* AI builds */}
      <Link to="/projects" className="bento__card bento__card--ai">
        <CardHead Icon={Robot} title="Data &amp; ML Systems" desc="Supervised models, bootstrap estimators & RAG apps" />
        <div className="bento__media bento__chips" aria-hidden="true">
          {toolRows.map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map((n, i) => (
                  <span key={`${n.id}-${i}`} className="bento__chip" data-status={n.status}>
                    <n.Icon size={15} weight="duotone" />
                    {n.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* Credentials */}
      <Link to="/about" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Credentials" desc="BS Data Science · Machine Learning &amp; AI" />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring">
            <SealCheck size={48} weight="fill" color="#38bdf8" />
          </span>
          <span className="bento__badge-tag">
            <SealCheck size={14} weight="fill" />
            BS Data Science
          </span>
        </div>
      </Link>

      {/* Services */}
      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Capabilities" desc="Data pipelines, predictive modeling & decision support" />
        <ul className="bento__media bento__offers" role="list">
          {OFFERS.map(({ Icon, title, note }, i) => (
            <li key={title} className="bento__offer" style={{ '--i': i } as React.CSSProperties}>
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>
              <span className="bento__offer-text">
                <span className="bento__offer-title">{title}</span>
                <span className="bento__offer-note">{note}</span>
              </span>
              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </Link>

      {/* Testimonials */}
      <Link to="/testimonials" className="bento__card bento__card--quotes">
        <CardHead Icon={Quotes} title="Endorsements" desc="Faculty evaluations, peer feedback & project reviews" />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top">
                  <Quotes size={14} weight="fill" />
                  <b>{c.name}</b>
                </span>
                <span className="bento__review-role">{c.role}</span>
                <span className="bento__review-work">{c.work}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
