import { Fragment, useCallback, useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, X, Ticket, Robot, FlowArrow, CursorClick } from '@/components/slab'
import { FlowIcon, PlanIcon, GlobeIcon, SparkIcon, DeviceIcon } from './ProjectIcons'
import { AutomationsPanel, PlanPanel, TicketingPanel, FrameworkPanel, WorkflowPanel, BarrelPanel, AIWindow, AppsWindow } from './ProjectPanels'
import { websiteFunnel, type Funnel } from '@/data/funnels'
import { mobileApps } from '@/data/projects'
import { aiStack, type StackNode } from '@/data/ai-stack'
import { useIsPhone } from '@/hooks/useMediaQuery'

type Project = {
  id: string
  index: string
  title: string
  desc: string
  Icon: ComponentType<{ size?: number }>
  eyebrow: string
  Section: ComponentType
  span?: 2
  kicker?: string
  logos?: string[]
  Preview: ComponentType
  cat: Cat
}

type Cat = 'work' | 'sites' | 'apps' | 'ai'
const FILTERS: { key: Cat | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'work', label: 'Work' },
  { key: 'sites', label: 'Sites' },
  { key: 'apps', label: 'Apps' },
  { key: 'ai', label: 'AI' },
]

const PYTHON = '/icons/vscode.svg'
const REACT = '/icons/ai/react.svg'
const GITHUB = '/icons/ai/github.svg'
const DOCKER = '/icons/ai/docker.svg'
const CLOUD = '/icons/ai/cloudflare.svg'

const WF_SHOTS = [
  '/assets/projects/legislative-ml-pubmat.png',
  '/assets/projects/coffee-income-poster.png',
  '/GEN_AI/FINAL%20Research%20Poster%20.png',
  '/samples/thumbs/eda-workflow-suite.jpeg',
]

const FUNNEL_SHOTS = websiteFunnel.slice(0, 3)
const thumbSrc = (f: Funnel) => `/${f.dir ?? 'funnels'}/thumbs/${f.file.replace('.html', '.jpeg')}`

const APP_SHOTS = [
  ...mobileApps.map((a) => a.imageSrc).filter((s): s is string => !!s),
  '/samples/thumbs/smartrip-cdo.jpeg',
  '/samples/thumbs/life-of-a-bill.jpeg',
]

const BUILDS: Project[] = [
  {
    id: 'life-of-a-bill',
    cat: 'work',
    index: '03',
    kicker: 'Machine Learning',
    title: 'The Life of a Bill',
    desc: 'Modeled 7,352 Philippine Senate bills across four Congresses with XGBoost to explain committee stagnation.',
    Icon: () => <Ticket size={20} weight="duotone" />,
    logos: [PYTHON],
    eyebrow: 'Featured build',
    Section: TicketingPanel,
    Preview: () => null,
  },
  {
    id: 'smartrip-cdo',
    cat: 'ai',
    index: '04',
    kicker: 'Deployed GenAI',
    title: 'SmartTripCDO',
    desc: 'Streamlit regional travel planner with static RAG across 47 verified Cagayan de Oro points of interest.',
    Icon: () => <Robot size={20} weight="duotone" />,
    logos: [REACT],
    eyebrow: 'Featured build',
    Section: FrameworkPanel,
    Preview: () => null,
  },
  {
    id: 'from-farm-to-cup',
    cat: 'ai',
    index: '05',
    kicker: 'Statistical Modeling',
    title: 'From Farm to Cup',
    desc: 'Non-parametric bootstrap and BCa resampling in R for 200 Bukidnon coffee farmer income records.',
    Icon: () => <FlowArrow size={20} weight="duotone" />,
    logos: [GITHUB],
    eyebrow: 'Featured build',
    Section: WorkflowPanel,
    Preview: () => null,
  },
]

const leaves = (n: StackNode): StackNode[] => (n.children?.length ? n.children.flatMap(leaves) : [n])
const AI_LEAVES = leaves(aiStack)

function WorkflowsPreview() {
  return (
    <div className="bento__media bento__reel" aria-hidden="true">
      <div className="bento__reel-track">
        {[...WF_SHOTS, ...WF_SHOTS].map((src, i) => (
          <span key={i} className="bento__shot">
            <img src={src} alt="" loading="lazy" decoding="async" />
          </span>
        ))}
      </div>
    </div>
  )
}

function PlanPreview() {
  return (
    <div className="bento__media bento__doc" aria-hidden="true">
      <span className="bento__doc-eyebrow">Case study document</span>
      <span className="bento__doc-title">The Life of a Bill: ML Research</span>
      <span className="bento__doc-flow">
        <i>Scrape</i>
        <i>Clean</i>
        <i>XGBoost</i>
        <i className="is-on">F1: 0.51</i>
      </span>
      <span className="bento__doc-line" />
      <span className="bento__doc-line bento__doc-line--short" />
    </div>
  )
}

function FunnelsPreview() {
  return (
    <div className="bento__media bento__fan" aria-hidden="true">
      {FUNNEL_SHOTS.map((f, i) => (
        <span key={f.file} className="bento__photo bento__photo--page" style={{ ['--i' as string]: i }}>
          <img src={thumbSrc(f)} alt="" loading="lazy" decoding="async" />
        </span>
      ))}
    </div>
  )
}

function AIPreview() {
  const half = Math.ceil(AI_LEAVES.length / 2)
  const rows = [AI_LEAVES.slice(0, half), AI_LEAVES.slice(half)]
  return (
    <div className="bento__media bento__chips" aria-hidden="true">
      {rows.map((row, r) => (
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
  )
}

function AppsPreview() {
  return (
    <div className="bento__media bento__reel bento__reel--row" aria-hidden="true">
      <div className="bento__reel-track">
        {[...APP_SHOTS, ...APP_SHOTS].map((src, i) => (
          <span key={i} className="bento__shot bento__shot--app">
            <img src={src} alt="" loading="lazy" decoding="async" />
          </span>
        ))}
      </div>
    </div>
  )
}

const PROJECTS: Project[] = [
  {
    id: 'workflows',
    cat: 'work',
    index: '01',
    title: 'Model Artifacts & Research Posters',
    desc: 'Visual proof, conference posters, and published model metrics across projects.',
    Icon: FlowIcon,
    logos: [PYTHON],
    eyebrow: 'Visual Proof',
    Section: AutomationsPanel,
    span: 2,
    Preview: WorkflowsPreview,
  },
  {
    id: 'plan',
    cat: 'work',
    index: '02',
    title: 'Legislative ML Case Study',
    desc: 'Complete documentation for Senate bill status prediction and feature attribution.',
    Icon: PlanIcon,
    logos: [PYTHON],
    eyebrow: 'Full Case Study',
    Section: PlanPanel,
    Preview: PlanPreview,
  },
  {
    id: 'funnels',
    cat: 'sites',
    index: '06',
    title: '3D Project Barrel & Web Apps',
    desc: 'Spin the 3D carousel to explore interactive models, simulators, and live web apps.',
    Icon: GlobeIcon,
    logos: [CLOUD],
    eyebrow: '3D Carousel',
    Section: BarrelPanel,
    Preview: FunnelsPreview,
  },
  {
    id: 'ai',
    cat: 'ai',
    index: '07',
    title: 'Data Science & ML Systems',
    desc: 'Interactive systems tree: supervised classifiers, bootstrap estimators, and RAG apps.',
    Icon: SparkIcon,
    logos: [DOCKER, GITHUB],
    eyebrow: 'Technical Stack',
    Section: AIWindow,
    Preview: AIPreview,
  },
  {
    id: 'apps',
    cat: 'apps',
    index: '08',
    title: 'Deployed Applications & DSS',
    desc: 'Live applications on Hugging Face Spaces, Inventory DSS, and edge AI prototypes.',
    Icon: DeviceIcon,
    logos: [REACT, CLOUD],
    eyebrow: 'Live Apps',
    Section: AppsWindow,
    span: 2,
    Preview: AppsPreview,
  },
]

function Marks({ p, size = 22 }: { p: Project; size?: number }) {
  if (!p.logos?.length) {
    return (
      <span className="bento__icon">
        <p.Icon size={size} />
      </span>
    )
  }
  return (
    <span className="bento__logos" aria-hidden="true">
      {p.logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

function ProjectModal({ project, onClose, children }: { project: Project; onClose: () => void; children: ReactNode }) {
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
      aria-label={project.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close dialog">
        <X size={18} weight="bold" />
      </button>
      <div className="pmodal__stage">{children}</div>
    </div>,
    document.body,
  )
}

export default function ProjectsGrid() {
  const [open, setOpen] = useState<Project | null>(null)
  const phone = useIsPhone()
  const [cat, setCat] = useState<Cat | 'all'>('all')
  const keep = (p: Project) => !phone || cat === 'all' || p.cat === cat
  const projects = PROJECTS.filter(keep)
  const builds = BUILDS.filter(keep)
  const triggerRef = useRef<HTMLElement | null>(null)

  const show = useCallback((p: Project, el: HTMLElement) => {
    triggerRef.current = el
    setOpen(p)
  }, [])
  const close = useCallback(() => {
    setOpen(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  const stack = builds.length > 0 ? (
    <div className="pbuilds" role="region" aria-label="Featured projects">
      <div className="pbuilds__head">
        <span className="pbuilds__eyebrow">Featured Case Studies</span>
        <h2 className="pbuilds__title">Documented projects with code and models.</h2>
      </div>
      <div className="pbuilds__stack">
        {builds.map((b) => (
          <button
            key={b.id}
            type="button"
            className="pbuild"
            data-id={b.id}
            onClick={(e) => show(b, e.currentTarget)}
            aria-haspopup="dialog"
          >
            <span className="pbuild__top">
              <span className="pbuild__kicker">{b.kicker}</span>
              <span className="pbuild__index">{b.index}</span>
            </span>
            <span className="pbuild__title">{b.title}</span>
            <span className="pbuild__desc">{b.desc}</span>
            <span className="pbuild__foot">
              <span className="pbuild__cta">Open interactive study</span>
              <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>
    </div>
  ) : null

  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">
          Selected data science and machine learning work.
        </h1>
        <p className="pgrid__lede">Documented workflows, reproducible models, and reviewable prototypes. Open any card to view the work.</p>
      </header>

      {phone && (
        <div className="pfilter" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className="pfilter__btn"
              aria-pressed={cat === f.key}
              onClick={() => setCat(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="home__glass pgrid__glass">
        <span className="pgrid__hint" aria-hidden="true">
          <CursorClick size={14} weight="duotone" />
          Click a card to open it
        </span>
        <div className="bento bento--projects">
          {projects.map((p) => (
            <Fragment key={p.id}>
              <button
                type="button"
                className={`bento__card bento__card--btn${p.span === 2 ? ' bento__card--wide' : ''}`}
                data-id={p.id}
                onClick={(e) => show(p, e.currentTarget)}
                aria-haspopup="dialog"
              >
                <span className="bento__head">
                  <Marks p={p} />
                  <span className="bento__title">{p.title}</span>
                  <span className="bento__desc">{p.desc}</span>
                  <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
                </span>
                <p.Preview />
              </button>
              {p.id === 'plan' && stack}
            </Fragment>
          ))}
          {!projects.some((p) => p.id === 'plan') && stack}
        </div>
      </div>

      {open && (
        <ProjectModal project={open} onClose={close}>
          <open.Section />
        </ProjectModal>
      )}
    </section>
  )
}
