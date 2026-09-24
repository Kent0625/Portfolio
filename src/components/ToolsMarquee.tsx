import { useMemo } from 'react'

type Tool = {
  name: string
  iconPath: string
  color?: string
}

export const tools: Tool[] = [
  { name: 'Python', iconPath: '/icons/vscode.svg' },
  { name: 'Scikit-Learn', iconPath: '/icons/ai/react.svg', color: '#F97316' },
  { name: 'XGBoost', iconPath: '/icons/ai/cloudflare.svg', color: '#8B5CF6' },
  { name: 'Streamlit', iconPath: '/icons/ai/react.svg', color: '#EF4444' },
  { name: 'Hugging Face', iconPath: '/icons/googleworkspace.svg' },
  { name: 'R Studio', iconPath: '/icons/vscode.svg', color: '#2563EB' },
  { name: 'GitHub', iconPath: '/icons/ai/github.svg' },
  { name: 'Docker', iconPath: '/icons/ai/docker.svg', color: '#0EA5E9' },
  { name: 'Cursor', iconPath: '/icons/cursor.svg', color: '#0F172A' },
  { name: 'Claude Code', iconPath: '/icons/claude-code-logo.png' },
  { name: 'Pandas & SQL', iconPath: '/icons/codex.svg', color: '#10B981' },
]

export default function ToolsMarquee() {
  const doubled = useMemo(() => [...tools, ...tools], [])

  return (
    <section className="tools-marquee" aria-label="Tools I work with" data-reveal>
      <div className="tools-marquee__track" aria-hidden="true">
        {doubled.map((tool, i) => {
          const useMask = tool.iconPath.endsWith('.svg') && !!tool.color
          return (
            <div key={`${tool.name}-${i}`} className="tools-marquee__item">
              {useMask ? (
                <span
                  className="tools-marquee__icon"
                  style={{
                    ['--icon-url' as string]: `url('${tool.iconPath}')`,
                    ['--brand-color' as string]: tool.color ?? 'var(--navy)',
                  }}
                />
              ) : (
                <img
                  className="tools-marquee__img"
                  src={tool.iconPath}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width={20}
                  height={20}
                />
              )}
              <span className="tools-marquee__label">{tool.name}</span>
            </div>
          )
        })}
      </div>

      <ul className="sr-only">
        {tools.map((t) => (
          <li key={t.name}>{t.name}</li>
        ))}
      </ul>
    </section>
  )
}
