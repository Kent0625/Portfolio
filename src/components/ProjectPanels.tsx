import { useEffect, useState, type ReactNode } from 'react'
import { Ticket, Robot, FlowArrow, type Icon } from '@/components/slab'
import { lazy, Suspense } from 'react'
import WorkflowSamples from './WorkflowSamples'
import AIStackGrid from './AIStackGrid'
import { AppsSection } from './Projects'
import { useFunnelModal } from './FunnelModal'
import { websiteFunnel } from '@/data/funnels'

const FunnelBarrel = lazy(() => import('./FunnelBarrel'))

export function AutomationsPanel() {
  return (
    <div className="ppanel ppanel--strip">
      <WorkflowSamples />
    </div>
  )
}

function SectionWindow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="ppanel ppanel--window">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ppanel__url">
          <span className="ppanel__url-host">{label}</span>
        </span>
      </div>
      <div className="ppanel__scroll">{children}</div>
    </div>
  )
}

export function BarrelPanel() {
  const { openFull, modal } = useFunnelModal()
  return (
    <div className="ppanel ppanel--barrel">
      <Suspense fallback={<div className="funnels__barrel-skeleton" aria-hidden="true" />}>
        <FunnelBarrel funnels={websiteFunnel} onOpen={openFull} />
      </Suspense>
      {modal}
    </div>
  )
}

export function AIWindow() {
  return (
    <SectionWindow label="Data Science & ML Systems">
      <AIStackGrid />
    </SectionWindow>
  )
}

export function AppsWindow() {
  return (
    <SectionWindow label="Deployed Applications & Prototypes">
      <AppsSection />
    </SectionWindow>
  )
}

export function PlanPanel() {
  return (
    <div className="ppanel ppanel--frame">
      <FrameBar
        host="kent-macalam-portfolio.onrender.com"
        path="/projects/life-of-a-bill.html"
      />
      <LiveFrame src="/projects/life-of-a-bill.html" title="The Life of a Bill Case Study" />
    </div>
  )
}

type Build = { id: string; label: string; src: string; path: string; Icon: Icon }

const BUILDS: Build[] = [
  {
    id: 'life-of-a-bill',
    label: 'The Life of a Bill',
    src: '/samples/life-of-a-bill.html',
    path: '/life-of-a-bill',
    Icon: Ticket,
  },
  {
    id: 'smartrip-cdo',
    label: 'SmartTripCDO',
    src: '/samples/smartrip-cdo.html',
    path: '/smartrip-cdo',
    Icon: Robot,
  },
  {
    id: 'from-farm-to-cup',
    label: 'From Farm to Cup',
    src: '/samples/from-farm-to-cup.html',
    path: '/from-farm-to-cup',
    Icon: FlowArrow,
  },
]

function BuildPanel({ build }: { build: Build }) {
  return (
    <div className="ppanel ppanel--frame">
      <FrameBar host="kent-macalam-portfolio.onrender.com" path={build.path} />
      <LiveFrame src={build.src} title={build.label} />
    </div>
  )
}

export const TicketingPanel = () => <BuildPanel build={BUILDS[0]} />
export const FrameworkPanel = () => <BuildPanel build={BUILDS[1]} />
export const WorkflowPanel = () => <BuildPanel build={BUILDS[2]} />

function FrameBar({ host, path }: { host: string; path: string }) {
  return (
    <div className="ppanel__bar">
      <span className="ppanel__dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="ppanel__url">
        <span className="ppanel__url-host">{host}</span>
        <span className="ppanel__url-path">{path}</span>
      </span>
    </div>
  )
}

const FRAME_DELAY_MS = 440

function LiveFrame({ src, title }: { src: string; title: string }) {
  const [ready, setReady] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), FRAME_DELAY_MS)
    return () => window.clearTimeout(id)
  }, [])
  return (
    <div className="ppanel__frame-stage">
      {mounted && (
        <iframe
          src={src}
          title={title}
          className={`ppanel__iframe${ready ? ' is-ready' : ''}`}
          onLoad={() => setReady(true)}
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
        />
      )}
      {!ready && <div className="ppanel__frame-skeleton" aria-hidden="true" />}
    </div>
  )
}
