import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

export default function ToS() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Terms of Service</h1>
        <p className="legal-page__updated">Last updated: September 2026</p>

        <div className="legal-page__body">
          <h2>Using this site</h2>
          <p>
            This portfolio is provided for informational and demonstrative purposes, showcasing the data science, machine learning, and analytics work of Kent John U. Macalam.
          </p>

          <h2>Work and deliverables</h2>
          <p>
            Project-based consulting, modeling deliverables, and internship scopes are agreed upon in writing prior to work commencing.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Except where open source code licenses apply (such as MIT-licensed repositories), all portfolio designs, research posters, and case study narratives remain the property of Kent John U. Macalam.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
