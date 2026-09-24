/**
 * Kent John U. Macalam - Identity and Profile Configuration
 */

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Kent John U. Macalam',
  firstName: 'Kent',
  handle: '@kent0625',
  role: 'Data Science & Machine Learning Engineer',
  avatarSrc: '/avatar.png',
  verifiedLabel: 'BS Data Science · ML, Predictive Analytics & AI Systems',
  email: 'macalam.kentjohn@gmail.com',
  location: 'Cagayan de Oro, Philippines (GMT+8)',
  stats: [
    { value: '7,352', label: 'Bills modeled' },
    { value: '0.51', label: 'Holdout macro F1' },
    { value: 'GMT+8', label: 'Remote / Global' },
  ],
  displayName: { line1: 'Data Science & ML.', line2: 'From data to decisions.' },
  hero: {
    body: 'I turn messy datasets into explainable models, useful dashboards, and decision-ready insights.',
    portraitSrc: '/avatar.png',
    portraitAlt: 'Kent John U. Macalam',
  },
  socials: [
    { label: 'GitHub profile', href: 'https://github.com/Kent0625', iconPath: '/icons/ai/github.svg' },
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/kent-john-macalam-4229a52b3/', iconPath: '/icons/linkedin.svg' },
    { label: 'Email Kent', href: 'mailto:macalam.kentjohn@gmail.com', iconPath: '/icons/googleworkspace.svg' },
  ],
}
