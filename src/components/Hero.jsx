import React from 'react'
import heroVideo from '../assets/hero.mp4'
import { media, profile } from '../data/site'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <video
          className="hero__video"
          src={heroVideo}
          poster={media.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="hero__scrim" />
      </div>

      <div className="shell hero__content">
        <p className="hero__plate" data-reveal>
          <span>CHEN CAN</span>
          <span className="hero__plate-line" />
          <span>Portfolio 2026</span>
        </p>

        <h1 className="hero__title">
          <span className="line">
            <span className="line__inner">让想象</span>
          </span>
          <span className="line line--indent">
            <span className="line__inner">
              显影<em>。</em>
            </span>
          </span>
        </h1>

        <p className="hero__lede" data-reveal style={{ '--d': '0.75s' }}>
          视觉设计师 / AI 设计师。以摄影的观看方式与生成式工具的精度，
          把尚未存在的画面显影出来。
        </p>

        <div className="hero__actions" data-reveal style={{ '--d': '0.9s' }}>
          <a className="btn btn--solid" href="#work">
            查看作品
          </a>
          <a className="btn btn--ghost" href="#contact">
            聊聊合作
          </a>
        </div>
      </div>

      <div className="shell hero__foot">
        <div className="hero__foot-item">
          <span className="meta-label">Scroll</span>
          <span className="scroll-cue" aria-hidden="true">
            <span className="scroll-cue__line" />
          </span>
        </div>
        <div className="hero__foot-item hero__foot-item--mid">
          <span className="meta-label">Available for</span>
          <span className="meta-value">AI 影像 / 概念设计 / 视觉叙事</span>
        </div>
        <div className="hero__foot-item hero__foot-item--end">
          <span className="meta-label">Based in</span>
          <span className="meta-value">{profile.location}</span>
        </div>
      </div>
    </section>
  )
}
