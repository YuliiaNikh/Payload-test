'use client'

import { useId, useState, type ReactNode } from 'react'

export function TabsClient({ tabs }: { tabs: { label: string; panel: ReactNode }[] }) {
  const [active, setActive] = useState(0)
  const baseId = useId()

  return (
    <div className="tabs">
      <div role="tablist" className="tabs__list">
        {tabs.map((tab, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`${baseId}-panel-${i}`}
            className="tabs__tab"
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, i) => (
        <div
          key={i}
          role="tabpanel"
          id={`${baseId}-panel-${i}`}
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={active !== i}
          className="tabs__panel"
        >
          {tab.panel}
        </div>
      ))}
    </div>
  )
}
