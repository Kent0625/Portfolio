/**
 * Kent John U. Macalam - Data Science, Machine Learning & AI Systems Tree
 */

import {
  Sparkle,
  Coffee,
  Robot,
  Article,
  FilmSlate,
  Database,
  MagnifyingGlass,
  ChatCircleDots,
  FlowArrow,
  Browser,
  Broadcast,
  Timer,
} from '@/components/slab'
import type { Icon } from '@/components/slab'
import { profile } from '@/data/profile'

export type StackStatus = 'Live' | 'Internal' | 'Beta'

/** A vendor mark, masked to a single ink colour so the row reads as one set
 *  rather than a rainbow of brand palettes. */
export type StackLogo = { src: string; name: string }

export type StackNode = {
  id: string
  name: string
  /** One plain sentence a client or recruiter understands. */
  what: string
  /** Real stack / model / where it runs. Rendered small and muted. */
  stack?: string
  status?: StackStatus
  /** Phosphor glyph for the card's mark tile. Every node has one. */
  Icon: Icon
  logos?: StackLogo[]
  children?: StackNode[]
}

const GITHUB: StackLogo = { src: '/icons/ai/github.svg', name: 'GitHub' }
const DOCKER: StackLogo = { src: '/icons/ai/docker.svg', name: 'Docker' }
const SQLITE: StackLogo = { src: '/icons/ai/sqlite.svg', name: 'SQLite' }

export const aiStack: StackNode = {
  id: 'root',
  Icon: Sparkle,
  name: profile.name,
  what: 'Data science workflows, supervised ML classifiers, statistical simulations, and deployed GenAI applications.',
  stack: 'Python · Scikit-Learn · XGBoost · Streamlit · R · Hugging Face',
  children: [
    {
      id: 'smartrip-cdo',
      Icon: Coffee,
      name: 'SmartTripCDO',
      what: 'Deterministic static RAG travel assistant grounded in 47 Cagayan de Oro points of interest.',
      stack: 'Python, Streamlit, Hugging Face Spaces',
      status: 'Live',
      logos: [GITHUB],
    },
    {
      id: 'ml-modeling',
      Icon: Robot,
      name: 'Supervised ML & Predictive Models',
      what: 'Classification models and feature importance pipelines evaluated on real-world datasets.',
      children: [
        {
          id: 'life-of-a-bill',
          Icon: Article,
          name: 'The Life of a Bill',
          what: 'XGBoost classifier modeling legislative trajectories across 7,352 Philippine Senate records.',
          stack: 'Python, XGBoost, Scikit-Learn, Pandas',
          status: 'Live',
          logos: [GITHUB],
        },
        {
          id: 'e-eye-screening',
          Icon: FilmSlate,
          name: 'E-Eye Retinal Screening',
          what: 'Lightweight biomedical eye screening combining image processing with CNN-MLP architecture.',
          stack: 'PyTorch, Flask, Raspberry Pi',
          status: 'Beta',
        },
        {
          id: 'hf-cloud-models',
          Icon: Broadcast,
          name: 'Cloud Inference Spaces',
          what: 'Public cloud deployments on Hugging Face Spaces for interactive model exploration.',
          stack: 'Hugging Face Spaces, Streamlit, Git LFS',
          status: 'Live',
          logos: [DOCKER, GITHUB],
        },
      ],
    },
    {
      id: 'statistics-resampling',
      Icon: Database,
      name: 'Statistical Computing & Resampling',
      what: 'Uncertainty quantification, non-parametric resampling, and robust confidence intervals.',
      children: [
        {
          id: 'from-farm-to-cup',
          Icon: MagnifyingGlass,
          name: 'From Farm to Cup',
          what: 'Bootstrap resampling and BCa confidence interval analysis for 200 Bukidnon coffee farmers.',
          stack: 'R, Boot Library, ggplot2, R Markdown',
          status: 'Live',
          logos: [GITHUB],
        },
        {
          id: 'eda-studio',
          Icon: FlowArrow,
          name: 'EDA & Storytelling Studio',
          what: 'Modular Python framework automating data cleaning, distribution profiling, and outlier scans.',
          stack: 'Python, Pandas, Seaborn, Matplotlib',
          status: 'Internal',
          logos: [GITHUB],
        },
      ],
    },
    {
      id: 'decision-systems',
      Icon: ChatCircleDots,
      name: 'Decision Systems & Dashboards',
      what: 'Practical analytics dashboards, stock monitoring, and operational decision support tools.',
      children: [
        {
          id: 'inventory-dss',
          Icon: Browser,
          name: 'Inventory Decision Support',
          what: 'DSS dashboard surfacing multi-echelon stock health, turnover velocity, and reorder alerts.',
          stack: 'Python, Pandas, Business Rules, DSS',
          status: 'Live',
          logos: [GITHUB],
        },
        {
          id: 'legislative-scraper',
          Icon: Timer,
          name: 'Senate Record ETL Scraper',
          what: 'Automated ingestion pipeline scraping bill text, committee referrals, and voting histories.',
          stack: 'Python, BeautifulSoup, SQLite',
          status: 'Internal',
          logos: [SQLITE, GITHUB],
        },
      ],
    },
  ],
}
