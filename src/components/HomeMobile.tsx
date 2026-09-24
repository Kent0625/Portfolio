import { Link } from 'react-router-dom'
import { SealCheck, ArrowUpRight, Play, Stack, Coffee } from '@/components/slab'
import { profile } from '@/data/profile'
import ThemeButton from './ThemeButton'

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt={profile.name} width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
          <SealCheck size={16} weight="fill" className="hprofile__verified" aria-label={profile.verifiedLabel} />
        </span>
        <span className="hprofile__handle">
          {profile.handle} · {profile.role}
        </span>
      </div>
      <ThemeButton className="hprofile__theme" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map((s, i) => (
        <li key={i}>
          <b>{s.value}</b>
          <span>{s.label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  { n: '01', label: 'Projects', to: '/projects', title: 'Selected Projects', desc: 'Predictive ML, analytics & RAG.', img: '/assets/projects/legislative-ml-pubmat.png' },
  { n: '02', label: 'Services', to: '/services', title: 'Data Capabilities', desc: 'Pipelines, modeling & dashboards.', Icon: Stack, dark: true },
  { n: '03', label: 'Showcase', to: '/showcase', title: 'SmartTripCDO', desc: 'Grounded static RAG travel app.', Icon: Coffee, dark: true, accent: true },
  { n: '04', label: 'Endorsements', to: '/testimonials', title: 'Reviews & Feedback', desc: 'Advisor & collaborator feedback.', img: '/assets/projects/coffee-income-poster.png' },
  { n: '05', label: 'About', to: '/about', title: `Hi, I’m ${profile.firstName}.`, desc: 'BS Data Science practitioner.', img: profile.avatarSrc },
] as const

export function HomeExplore() {
  return (
    <>
      <div className="hsec">
        <h2 className="hsec__title">Explore</h2>
        <span className="hsec__aside">Swipe</span>
      </div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to}>
            <Link to={t.to} className={`htile${'dark' in t && t.dark ? ' htile--dark' : ''}${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              <span className="htile__n">{t.n} {t.label}</span>
              {'img' in t ? (
                <img className="htile__img" src={t.img} alt="" loading="lazy" width={140} height={140} />
              ) : (
                <span className="htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              )}
              <span className="htile__body">
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
              <span className="htile__go" aria-hidden="true"><ArrowUpRight size={16} weight="bold" /></span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="hsec">
        <h2 className="hsec__title">What advisors say</h2>
        <Link to="/testimonials" className="hsec__aside">See all</Link>
      </div>
      <Link to="/testimonials" className="hproof">
        <span className="hproof__thumb">
          <img src="/assets/projects/legislative-ml-pubmat.png" alt="" width={96} height={96} loading="lazy" />
          <span className="hproof__play" aria-hidden="true"><Play size={14} weight="fill" /></span>
        </span>
        <span className="hproof__copy">
          <span className="hproof__kicker">Research Review</span>
          <span className="hproof__title">The Life of a Bill: Rigorous legislative modeling evaluated with holdout macro F1.</span>
          <span className="hproof__meta">Data Science Faculty Advisor</span>
        </span>
      </Link>
    </>
  )
}
