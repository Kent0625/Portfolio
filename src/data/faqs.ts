export type QA = { q: string; a: string }

/**
 * Recruiter & Client FAQs for Kent John U. Macalam
 */
export const FAQS: QA[] = [
  {
    q: 'What kinds of roles and projects do you take on?',
    a: 'I specialize in Data Science internships, junior Machine Learning engineering roles, and project-based analytics. My work covers data cleaning and EDA, supervised classification modeling with XGBoost, statistical uncertainty estimation in R, and deployed Streamlit applications.',
  },
  {
    q: 'How quickly can you start?',
    a: 'I am available immediately for remote internships, part-time opportunities, and scoped analytics deliverables. For project deliverables, initial exploratory analysis and baseline feasibility models typically turn around within 3 to 5 business days.',
  },
  {
    q: 'How do you validate and explain your models?',
    a: 'I emphasize explainability and rigorous metric selection rather than black-box scores. Models are evaluated using holdout macro F1, confusion matrices, and BCa bootstrap intervals, accompanied by feature importance breakdowns so findings are actionable for non-technical stakeholders.',
  },
  {
    q: 'Where are you based and how do you collaborate remotely?',
    a: 'I am based in Cagayan de Oro, Philippines (GMT+8). I collaborate seamlessly across global timezones using asynchronous documentation, clean GitHub version control, reproducible notebooks, and active communication via email, LinkedIn, and Discord.',
  },
  {
    q: 'What happens after I reach out?',
    a: 'I respond within 24 hours. We can schedule a short introductory chat or discuss your team’s dataset specifications, project scope, or internship timeline directly over email.',
  },
]
