export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  /** Optional - image path */
  imageSrc?: string
  /** CSS object-position override */
  imagePosition?: string
  /** Brand color token */
  accentColor: string
  stats: AppStat[]
  badge: string
  repoUrl?: string
  liveUrl?: string
}

export type MobileApp = AppProject

export const mobileApps: MobileApp[] = [
  {
    name: 'SmartTripCDO',
    tagline: 'AI Travel Assistant with Static RAG & Streamlit.',
    description:
      'Grounded travel planner powered by 47 curated local points of interest in Cagayan de Oro, eliminating hallucinations through deterministic local retrieval and multi-stage preference extraction.',
    imageSrc: '/GEN_AI/FINAL%20Research%20Poster%20.png',
    imagePosition: 'center 20%',
    accentColor: '#0EA5E9',
    stats: [
      { value: '47', label: 'Local POIs' },
      { value: '0%', label: 'Hallucination' },
      { value: '76.3%', label: 'Clustering' },
    ],
    badge: 'Deployed Space',
    liveUrl: 'https://kent0625-smartrip-cdo.hf.space',
    repoUrl: 'https://github.com/Kent0625/smartrip_cdo',
  },
  {
    name: 'E-Eye Screening',
    tagline: 'Lightweight AI eye screening on edge hardware.',
    description:
      'Point-of-care retinal screening concept coupling CNN feature extraction with multi-layer perceptron classification, designed for offline Raspberry Pi and lightweight Flask inference.',
    imageSrc: '/samples/thumbs/e-eye-screening.jpeg',
    accentColor: '#EC4899',
    stats: [
      { value: 'CNN-MLP', label: 'Architecture' },
      { value: 'Edge', label: 'Raspberry Pi' },
      { value: 'Flask', label: 'Local API' },
    ],
    badge: 'AI Capstone',
  },
  {
    name: 'Inventory DSS',
    tagline: 'Business analytics & reorder decision support.',
    description:
      'Decision support system for inventory monitoring, multi-echelon stock health diagnostics, turnover velocity tracking, and dynamic safety stock reorder rules.',
    imageSrc: '/samples/thumbs/inventory-dss.jpeg',
    accentColor: '#F59E0B',
    stats: [
      { value: '86%', label: 'Health index' },
      { value: '12', label: 'Reorder triggers' },
      { value: '4.2x', label: 'Stock turnover' },
    ],
    badge: 'Analytics DSS',
  },
]

export const webApps: AppProject[] = [
  {
    name: 'The Life of a Bill',
    tagline: 'Supervised legislative outcome modeling with XGBoost.',
    description:
      'Modeled 7,352 Philippine Senate bills across four Congresses (15th–18th) to uncover why most bills stall at First Reading and quantify committee influence on bill progress.',
    imageSrc: '/assets/projects/legislative-ml-pubmat.png',
    accentColor: '#8B5CF6',
    stats: [
      { value: '7,352', label: 'Bills analyzed' },
      { value: '0.51', label: 'Macro F1' },
      { value: 'XGBoost', label: 'Primary model' },
    ],
    badge: 'Machine Learning',
    liveUrl: 'https://kent0625-life-of-a-bill.hf.space',
    repoUrl: 'https://github.com/Kent0625/ML_FINAL_PROJECT',
  },
  {
    name: 'From Farm to Cup',
    tagline: 'Bootstrap uncertainty modeling for coffee farmer income.',
    description:
      'Applied non-parametric bootstrap and BCa resampling in R to estimate coffee farmer livelihood uncertainty in Bukidnon, showing why standard averages misinform agricultural policy.',
    imageSrc: '/assets/projects/coffee-income-poster.png',
    accentColor: '#10B981',
    stats: [
      { value: '200', label: 'Farmer records' },
      { value: 'BCa', label: 'Interval method' },
      { value: '95%', label: 'Confidence interval' },
    ],
    badge: 'Statistical Modeling',
    repoUrl: 'https://github.com/Kent0625/bootstrap-coffee-farmers-income',
  },
  {
    name: 'EDA & Storytelling Studio',
    tagline: 'Automated data cleaning & insight synthesis.',
    description:
      'A structured Python pipeline converting raw CSV/SQL tables into feature distributions, missingness matrices, outlier profiles, and presentation-ready chart summaries.',
    imageSrc: '/samples/thumbs/eda-workflow-suite.jpeg',
    accentColor: '#06B6D4',
    stats: [
      { value: 'Python', label: 'Core engine' },
      { value: 'Pandas', label: 'Vectorized ETL' },
      { value: 'Zero CLS', label: 'Visual layouts' },
    ],
    badge: 'Data Engineering',
  },
  {
    name: 'SmartTripCDO Web Portal',
    tagline: 'Deterministic RAG travel assistant for Northern Mindanao.',
    description:
      'Live web app integrating budget constraints, activity preferences, and regional geo-clustering for curated tourist experiences across Cagayan de Oro.',
    imageSrc: '/samples/thumbs/smartrip-cdo.jpeg',
    accentColor: '#3B82F6',
    stats: [
      { value: '47 POIs', label: 'Attractions' },
      { value: 'Streamlit', label: 'App engine' },
      { value: 'Hugging Face', label: 'Cloud host' },
    ],
    badge: 'Live Application',
    liveUrl: 'https://kent0625-smartrip-cdo.hf.space',
  },
]
