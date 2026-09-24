import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: September 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>
            This policy applies to the personal portfolio of Kent John U. Macalam located at kent-macalam-portfolio.onrender.com.
          </p>

          <h2>What is collected</h2>
          <p>
            When you submit an inquiry through the contact form, your name, email address, and message content are transmitted solely for the purpose of communicating with you regarding potential project collaboration or employment inquiries. No third-party tracking cookies or advertising pixels are used.
          </p>

          <h2>How it is used</h2>
          <p>
            Your information is used strictly to reply to your inquiry. Your details are never sold, rented, or shared with third parties.
          </p>

          <h2>How long it is kept</h2>
          <p>
            Inquiry messages are retained only as long as necessary to conduct professional correspondence. You may request deletion of your information at any time.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy:{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
