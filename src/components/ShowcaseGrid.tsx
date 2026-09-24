import Flagship from '@/components/Flagship'

export default function ShowcaseGrid() {
  return (
    <section className="pgrid ktools" aria-labelledby="showcase-title">
      <header className="pgrid__head ktools__head">
        <div className="ktools__head-copy">
          <span className="pgrid__eyebrow">Flagship Showcase</span>
          <h1 className="pgrid__title" id="showcase-title">
            SmartTripCDO: Deployed RAG Travel Assistant.
          </h1>
          <p className="pgrid__lede">
            A deterministic travel assistant grounded in 47 curated local points of interest in Cagayan de Oro, designed to eliminate hallucinations using static retrieval.
          </p>
        </div>

        <div className="ktools__vote">
          <p className="ktools__vote-label">
            Live Deployment
            <span aria-hidden="true" className="ktools__vote-dot" />
            <span className="ktools__vote-ask">Hugging Face</span>
          </p>
          <a
            className="ktools__vote-frame ktools__vote-card"
            href="https://kent0625-smartrip-cdo.hf.space"
            target="_blank"
            rel="noopener"
            aria-label="Open SmartTripCDO on Hugging Face Spaces"
          >
            <img src="/icons/ai/react.svg" alt="" width="36" height="36" />
            <span className="ktools__vote-text">
              Try Live App on Hugging Face Spaces ↗
            </span>
          </a>
        </div>
      </header>

      <div className="home__glass ktools__glass">
        <Flagship eyebrow="Flagship build" />
      </div>
    </section>
  )
}
