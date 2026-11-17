import React from 'react'
import { capabilities, toolGroups } from '../data/site'

export default function Capabilities() {
  return (
    <section className="section capabilities" id="capabilities">
      <div className="shell">
        <div className="section-head" data-reveal>
          <div className="section-head__title">
            <span className="section-head__index">02</span>
            <h2>个人优势</h2>
          </div>
          <span className="section-head__meta">Capabilities / 能力与工具</span>
        </div>

        <div className="manifesto" data-reveal>
          <p className="manifesto__line">
            工具负责速度，
            <br />
            判断负责方向。
          </p>
          <p className="manifesto__side">
            AI 能在一分钟内给出十个答案，但选择哪一个、为什么选它，仍然来自人的眼睛。
          </p>
        </div>

        <div className="skills-grid">
          <div className="cap-list" data-reveal>
            {capabilities.map((item, i) => (
              <article className="cap-item" key={item.title}>
                <span className="cap-item__index">{String(i + 1).padStart(2, '0')}</span>
                <div className="cap-item__body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="tool-dock" data-reveal>
            <span className="tool-dock__caption">Skills & Tools</span>
            {toolGroups.map((group) => (
              <div className="tool-group" key={group.label}>
                <div className="tool-group__head">
                  <span className="tool-group__label">{group.label}</span>
                  <span className="tool-group__en">{group.labelEn}</span>
                </div>
                <div className="tool-row">
                  {group.tools.map((tool) => (
                    <div className="tool" key={`${group.label}-${tool.name}`}>
                      <span className="tool__icon">
                        <img src={tool.icon} alt="" loading="lazy" />
                      </span>
                      <span className="tool__name">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="tool-dock__note">
              <span className="tool-dock__note-label">Practice</span>
              <p>持续拍摄、拉片与拆解；工具在变，观看方式不变。</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
