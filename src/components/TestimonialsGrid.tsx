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

const HIGHLIGHTS: Client[] = [
  {
    index: '01',
    name: 'Predicting Legislative Status',
    role: 'MACHINE LEARNING COURSE',
    daily:
      'Applied disciplined preprocessing to 7,352 Senate bills, balanced heavily skewed target classes, and evaluated XGBoost models with holdout macro F1 rather than misleading raw accuracy.',
    work: ['ML Modeling', 'XGBoost', 'Senate Data'],
    Icon: Gauge,
  },
  {
    index: '02',
    name: 'SmartTripCDO Tourism Assistant',
    role: 'DS ELECTIVE (GEN AI)',
    daily:
      'Engineered a localized retrieval system solving the core problem of hallucinations by combining static RAG with 47 verified Cagayan de Oro points of interest, running on a free Hugging Face space.',
    work: ['Static RAG', 'Streamlit', 'Zero-Cost'],
    Icon: Robot,
  },
  {
    index: '03',
    name: 'Bukidnon Farmer Income Risk',
    role: 'COMPUTATIONAL STATS COURSE',
    daily:
      'Utilized BCa bootstrap confidence intervals to surface the severe left-tail income risk of Bukidnon coffee farmers that a simple sample mean had previously concealed from policymakers.',
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
        <span className="pgrid__eyebrow">Project Highlights</span>
        <h1 className="pgrid__title" id="testimonials-title">
          Undergraduate research, capstones, and hackathons.
        </h1>
        <p className="pgrid__lede">
          Key data modeling, statistical inference, and machine learning prototypes developed during my data science coursework and extracurriculars.
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

        <ul className="tgrid__clients" role="list">
          {HIGHLIGHTS.map((c) => {
            const ClientIcon = c.Icon
            return (
              <li key={c.index} className="tgrid__client">
                <span className="tgrid__client-ghost" aria-hidden="true">{c.index}</span>
                <span className="tgrid__client-mark" aria-hidden="true">
                  <ClientIcon size={24} weight="duotone" />
                </span>
                <div className="tgrid__client-body">
                  <header className="tgrid__client-head">
                    <span className="tgrid__client-name">{c.name}</span>
                    <span className="tgrid__client-role">{c.role}</span>
                  </header>
                  <p className="tgrid__client-daily">{c.daily}</p>
                  <ul className="tgrid__client-tags" role="list" aria-label="Focus tags">
                    {c.work.map((w) => (
                      <li key={w} className="tgrid__client-tag">{w}</li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
