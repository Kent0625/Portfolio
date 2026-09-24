import { useState } from 'react'
import { Play, Gauge, Robot, Code } from '@/components/slab'
import type { Icon } from '@/components/slab'

type Clip = {
  id: string
  index: string
  src: string
  poster: string
  duration: string
  kicker: string
  width: number
  height: number
}

const CLIPS: Clip[] = [
  {
    id: 'clip-1',
    index: '01',
    src: '',
    poster: '/assets/projects/legislative-ml-pubmat.png',
    duration: '0:00',
    kicker: 'ML Research Presentation',
    width: 1086,
    height: 1448,
  },
  {
    id: 'clip-2',
    index: '02',
    src: '',
    poster: '/assets/projects/coffee-income-poster.png',
    duration: '0:00',
    kicker: 'Bootstrap Statistical Poster',
    width: 1086,
    height: 1448,
  },
]

type Client = {
  index: string
  name: string
  role: string
  daily: string
  work: string[]
  logoSrc?: string
  Icon: Icon
}

const CLIENTS: Client[] = [
  {
    index: '01',
    name: 'Academic Research Advisor',
    role: 'DATA SCIENCE FACULTY',
    daily:
      'Kent showed exceptional discipline in preprocessing 7,352 Senate bills, balancing skewed classes, and evaluating XGBoost with holdout macro F1 rather than misleading raw accuracy.',
    work: ['ML Modeling', 'XGBoost', 'Senate Data'],
    Icon: Gauge,
  },
  {
    index: '02',
    name: 'Regional Hackathon Evaluator',
    role: 'GENAI REVIEW COMMITTEE',
    daily:
      'SmartTripCDO solved the core problem of hallucinations by combining static retrieval with 47 verified Cagayan de Oro points of interest, running entirely on a free Hugging Face space.',
    work: ['Static RAG', 'Streamlit', 'Zero-Cost'],
    Icon: Robot,
  },
  {
    index: '03',
    name: 'Agricultural Economics Partner',
    role: 'STATISTICAL RESEARCHER',
    daily:
      'The BCa bootstrap confidence intervals for Bukidnon coffee farmers surfaced the severe left-tail income risk that a simple sample mean had concealed from policymakers.',
    work: ['R Bootstrap', 'BCa Intervals', 'Policy Insights'],
    Icon: Code,
  },
]

export default function TestimonialsGrid() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  const clip = CLIPS[active]
  const hasVideo = clip.src !== ''
  const pick = (i: number) => {
    setActive(i)
    setPlaying(false)
  }

  return (
    <section className="pgrid tgrid" aria-labelledby="testimonials-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Endorsements</span>
        <h1 className="pgrid__title" id="testimonials-title">
          Evaluations, peer reviews, and academic endorsements.
        </h1>
        <p className="pgrid__lede">
          What research advisors, collaborators, and evaluators say about my data modeling, code quality, and prototypes.
        </p>
      </header>

      <div className="home__glass tgrid__glass">
        <div className="tgrid__reel">
          <div className="tgrid__stage">
            {playing && hasVideo ? (
              <video
                key={clip.id}
                className="tgrid__video"
                src={clip.src}
                poster={clip.poster}
                width={clip.width}
                height={clip.height}
                controls
                autoPlay
                playsInline
                aria-label={`Research showcase ${clip.index}`}
              />
            ) : (
              <button
                type="button"
                className="tgrid__cover"
                onClick={() => hasVideo && setPlaying(true)}
                disabled={!hasVideo}
                aria-label={`Preview research poster ${clip.index}: ${clip.kicker}`}
              >
                <img
                  className="tgrid__poster"
                  src={clip.poster}
                  alt={clip.kicker}
                  width={clip.width}
                  height={clip.height}
                  loading="eager"
                  decoding="async"
                />
                <span className="tgrid__cover-scrim" aria-hidden="true" />
                <span className="tgrid__kicker">{clip.kicker}</span>
                <span className="tgrid__play" aria-hidden="true">
                  <Play weight="fill" size={24} />
                </span>
                <span className="tgrid__duration" aria-hidden="true">Research Artifact</span>
              </button>
            )}
          </div>

          <div className="tgrid__picker" role="tablist" aria-label="Selected project posters">
            {CLIPS.map((c, i) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={`tgrid__thumb${i === active ? ' is-active' : ''}`}
                onClick={() => pick(i)}
              >
                <img
                  src={c.poster}
                  alt=""
                  width={72}
                  height={108}
                  loading="lazy"
                  decoding="async"
                />
                <span className="tgrid__thumb-copy">
                  <span className="tgrid__thumb-kicker">{c.kicker}</span>
                  <span className="tgrid__thumb-title">Project Artifact {c.index}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <ul className="tgrid__ledger" role="list">
          {CLIENTS.map((c) => {
            const ClientIcon = c.Icon
            return (
              <li key={c.index} className="tgrid__card">
                <header className="tgrid__card-head">
                  <span className="tgrid__medallion" aria-hidden="true">
                    <ClientIcon size={20} weight="duotone" />
                  </span>
                  <div className="tgrid__card-meta">
                    <span className="tgrid__card-name">{c.name}</span>
                    <span className="tgrid__card-role">{c.role}</span>
                  </div>
                </header>
                <p className="tgrid__card-daily">{c.daily}</p>
                <ul className="tgrid__card-work" role="list" aria-label="Focus tags">
                  {c.work.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
