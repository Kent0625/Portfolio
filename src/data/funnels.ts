export type FunnelTag =
  | 'Machine Learning'
  | 'GenAI App'
  | 'Statistics'
  | 'Dashboard'
  | 'Website'
  | 'Lead Capture'
  | 'Booking'
  | 'Checkout'

export type Funnel = {
  file: string
  label: string
  tag: FunnelTag
  desc: string
  /** Public subfolder the HTML + thumbnail live under. Default 'funnels'. */
  dir?: 'funnels' | 'samples'
}

export const websiteFunnel: Funnel[] = [
  {
    file: 'life-of-a-bill.html',
    label: 'The Life of a Bill',
    tag: 'Machine Learning',
    desc: 'Philippine Senate legislative status prediction using XGBoost on 7,352 bills across four Congresses.',
    dir: 'samples',
  },
  {
    file: 'smartrip-cdo.html',
    label: 'SmartTripCDO',
    tag: 'GenAI App',
    desc: 'Grounded Cagayan de Oro travel itinerary assistant with static RAG and zero hallucination across 47 POIs.',
    dir: 'samples',
  },
  {
    file: 'from-farm-to-cup.html',
    label: 'From Farm to Cup',
    tag: 'Statistics',
    desc: 'Non-parametric bootstrap and BCa confidence interval analysis for 200 Bukidnon coffee farmer records in R.',
    dir: 'samples',
  },
  {
    file: 'inventory-dss.html',
    label: 'Inventory DSS',
    tag: 'Dashboard',
    desc: 'Decision support system for inventory monitoring, stock health diagnostics, and dynamic reorder triggers.',
    dir: 'samples',
  },
  {
    file: 'e-eye-screening.html',
    label: 'E-Eye Screening',
    tag: 'Machine Learning',
    desc: 'Hybrid CNN-MLP edge architecture for point-of-care retinal classification on Raspberry Pi and Flask.',
    dir: 'samples',
  },
  {
    file: 'eda-workflow-suite.html',
    label: 'EDA Storytelling Studio',
    tag: 'Website',
    desc: 'Analytical data pipeline for missingness audits, outlier profiling, and decision-ready visual storytelling.',
    dir: 'samples',
  },
  {
    file: 'model-prediction-funnel.html',
    label: 'Model Feasibility Funnel',
    tag: 'Lead Capture',
    desc: 'Tabular dataset intake funnel evaluating baseline model feasibility, feature importance, and validation.',
    dir: 'funnels',
  },
  {
    file: 'travel-itinerary-funnel.html',
    label: 'SmartTripCDO Custom Planner',
    tag: 'GenAI App',
    desc: 'Custom itinerary builder generating tailored daily travel schedules from 47 local Mindanao attractions.',
    dir: 'funnels',
  },
  {
    file: 'bootstrap-ci-funnel.html',
    label: 'Resampling Uncertainty Calculator',
    tag: 'Statistics',
    desc: 'Interactive bootstrap resampling calculator estimating empirical uncertainty bounds for skewed data.',
    dir: 'funnels',
  },
  {
    file: 'recruiter-brief-funnel.html',
    label: 'Internship & Role Intake',
    tag: 'Lead Capture',
    desc: 'Direct hiring intake for Data Science internships, junior ML engineering, and contracted analytics roles.',
    dir: 'funnels',
  },
  {
    file: 'data-audit-funnel.html',
    label: 'Dataset Health Audit',
    tag: 'Dashboard',
    desc: 'Automated data audit intake checking missingness patterns, multicollinearity VIF, and Cook distance outliers.',
    dir: 'funnels',
  },
  {
    file: 'inventory-reorder-funnel.html',
    label: 'Safety Stock Reorder Funnel',
    tag: 'Dashboard',
    desc: 'Supply chain inventory calculator simulating safety stock thresholds and lead-time variability buffers.',
    dir: 'funnels',
  },
]

export const gymFunnel: Funnel[] = [
  websiteFunnel[0], // The Life of a Bill
  websiteFunnel[1], // SmartTripCDO
  websiteFunnel[2], // From Farm to Cup
]

export const bookingFunnel: Funnel[] = [
  websiteFunnel[3], // Inventory DSS
  websiteFunnel[6], // Model Feasibility Funnel
  websiteFunnel[9], // Internship & Role Intake
]

export const tagColors: Record<FunnelTag, string> = {
  'Machine Learning': '#8b5cf6',
  'GenAI App': '#0ea5e9',
  Statistics: '#10b981',
  Dashboard: '#f59e0b',
  Website: '#FF7A1A',
  'Lead Capture': '#6366f1',
  Booking: '#ec4899',
  Checkout: '#14b8a6',
}
