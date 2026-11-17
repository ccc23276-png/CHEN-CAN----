import React, { useEffect, useRef, useState } from 'react'
import { projects } from '../data/site'

function VideoCard({ project, onOpen }) {
  const videoRef = useRef(null)

  const play = () => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    v.play().catch(() => {})
  }

  const stop = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.currentTime = 0
  }

  const open = () => {
    stop()
    onOpen(project)
  }

  return (
    <article
      className="work-card work-card--video"
      data-reveal
      role="button"
      tabIndex={0}
      aria-label={`${project.title}，播放完整版 ${project.fullDuration}`}
      onMouseEnter={play}
      onMouseLeave={stop}
      onFocus={play}
      onBlur={stop}
      onClick={open}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          open()
        }
      }}
    >
      <figure className="work-card__media">
        <video
          ref={videoRef}
          className="work-card__video"
          src={project.video}
          poster={project.poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${project.title} 动态预览`}
        />
        <span className="work-card__index">{project.index}</span>
        <span className="work-card__hint">Hover preview</span>
        <span className="work-card__full">Full film · {project.fullDuration}</span>
      </figure>

      <div className="work-card__body">
        <div className="work-card__head">
          <span className="work-card__category">{project.category}</span>
          <span className="work-card__year">{project.year}</span>
        </div>
        <h3 className="work-card__title">
          {project.title}
          <span>{project.titleEn}</span>
        </h3>
        <p className="work-card__desc">{project.desc}</p>
        <span className="work-card__role">{project.role}</span>
      </div>
    </article>
  )
}

function GalleryCard({ project }) {
  return (
    <article className="work-card work-card--wide" data-reveal>
      <div className="work-card__gallery">
        {project.gallery.map((src, i) => (
          <figure key={src}>
            <img src={src} alt={project.captions[i]} loading="lazy" />
            <figcaption>{project.captions[i]}</figcaption>
          </figure>
        ))}
        <span className="work-card__index">{project.index}</span>
      </div>

      <div className="work-card__panel">
        <div className="work-card__panel-main">
          <span className="work-card__category">{project.category}</span>
          <h3 className="work-card__title">
            {project.title}
            <span>{project.titleEn}</span>
          </h3>
          <p className="work-card__desc">{project.desc}</p>
          <div className="work-card__foot">
            <span>{project.role}</span>
            <span>{project.year}</span>
          </div>
        </div>

        <div className="work-card__scope">
          <span className="meta-label">Project scope</span>
          <ul>
            {project.scope.map(([label, value]) => (
              <li key={label}>
                <span>{label}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

function VideoModal({ project, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return (
    <div
      className="video-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} 完整版`}
      onClick={onClose}
    >
      <div
        className="video-modal__panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="video-modal__bar">
          <span className="video-modal__eyebrow">
            Full film · {project.fullDuration}
          </span>
          <button
            ref={closeRef}
            type="button"
            className="video-modal__close"
            onClick={onClose}
            aria-label="关闭完整视频"
          >
            关闭 <span aria-hidden="true">×</span>
          </button>
        </div>

        <video
          className="video-modal__video"
          src={project.video}
          poster={project.poster}
          controls
          autoPlay
          playsInline
          preload="auto"
        />

        <div className="video-modal__foot">
          <div>
            <span className="video-modal__category">{project.category}</span>
            <h3>
              {project.title}
              <span>{project.titleEn}</span>
            </h3>
          </div>
          <span className="video-modal__meta">
            {project.role} · {project.year}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function SelectedWork() {
  const [active, setActive] = useState(null)

  return (
    <section className="section work" id="work">
      <div className="shell">
        <div className="section-head" data-reveal>
          <div className="section-head__title">
            <span className="section-head__index">03</span>
            <h2>精选项目</h2>
          </div>
          <span className="section-head__meta">04 组影像 + 01 组设定 · 2026</span>
        </div>

        <div className="work__intro" data-reveal>
          <p>
            真人质感、CG 写实、动作打斗与次世代国漫——四条 AIGC 漫剧生产线的项目片段与视觉设定。
            <br />
            悬停静音预览，点击卡片播放带原声的完整版。
          </p>
          <span className="work__count">Selected Work</span>
        </div>

        <div className="work-grid">
          {projects.map((project) =>
            project.span === 'wide' ? (
              <GalleryCard project={project} key={project.id} />
            ) : (
              <VideoCard project={project} key={project.id} onOpen={setActive} />
            )
          )}
        </div>
      </div>

      {active && <VideoModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}
