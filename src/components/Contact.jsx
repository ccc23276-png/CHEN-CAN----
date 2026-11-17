import React from 'react'
import { profile, resume } from '../data/site'

function openResumePdf() {
  const parts = resume.pdf.split(',')
  const mime = parts[0].match(/data:(.*?);/)?.[1] || 'application/pdf'
  const binary = atob(parts[1])
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i)
  const url = URL.createObjectURL(new Blob([bytes], { type: mime }))
  window.open(url, '_blank', 'noopener,noreferrer')
  window.setTimeout(() => URL.revokeObjectURL(url), 60000)
}

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__orbit" aria-hidden="true">
        <svg viewBox="0 0 600 600">
          <circle cx="300" cy="300" r="292" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="300" cy="8" r="4" fill="currentColor" />
        </svg>
      </div>

      <div className="shell contact__inner">
        <div className="contact__topline" data-reveal>
          <span className="contact__index">04</span>
          <span className="contact__kicker">Contact &amp; Resume — 2026</span>
        </div>

        <div className="contact__grid">
          <div className="contact__lead">
            <h2 className="contact__title" data-reveal>
              一起把
              <br />
              想法显影<em>。</em>
            </h2>

            <p className="contact__intro" data-reveal>
              有项目、有想法，或者只是想看看更多作品，都可以直接联系。
            </p>

            <a className="contact__mail" href={`mailto:${profile.email}`} data-reveal>
              {profile.email}
            </a>

            <div className="contact__meta" data-reveal>
              <div>
                <span className="meta-label">Phone</span>
                <a href={`tel:${profile.phoneRaw}`}>{profile.phone}</a>
              </div>
              <div>
                <span className="meta-label">Location</span>
                <span>{profile.location}</span>
              </div>
              <div>
                <span className="meta-label">Role</span>
                <span>视觉 / AI 设计</span>
              </div>
            </div>

            <div className="contact__actions" data-reveal>
              <button type="button" className="btn btn--solid" onClick={openResumePdf}>
                在线简历
                <span aria-hidden="true">↗</span>
              </button>
              <a
                className="contact__download"
                href={resume.docx}
                download={resume.docxName}
              >
                下载 Word
              </a>
            </div>
          </div>

          <aside className="contact__resume" id="resume" data-reveal>
            <div className="contact__resume-head">
              <span className="meta-label">Resume / 简历</span>
              <span className="contact__resume-count">01 File · 02 Formats</span>
            </div>

            <div className="resume-sheet">
              <span className="resume-sheet__mark" aria-hidden="true">CV</span>
              <div className="resume-sheet__top">
                <span>{profile.nameEn}</span>
                <span>2026</span>
              </div>
              <h3 className="resume-sheet__title">视觉 / AI 设计</h3>
              <p className="resume-sheet__focus">AIGC 漫剧 · AI 影像 · 概念设计</p>

              <div className="resume-sheet__meta">
                <span>PDF · 1 页</span>
                <span>Word 原件</span>
              </div>

              <div className="resume-sheet__actions">
                <button type="button" className="resume-sheet__link" onClick={openResumePdf}>
                  查看 PDF
                  <span aria-hidden="true">↗</span>
                </button>
                <a
                  className="resume-sheet__link"
                  href={resume.docx}
                  download={resume.docxName}
                >
                  下载 Word
                </a>
              </div>
            </div>

            <p className="contact__resume-note">完整经历、项目明细与联系方式见简历文件。</p>
          </aside>
        </div>

        <a className="contact__top" href="#top">
          回到顶部
        </a>
      </div>

      <footer className="site-footer">
        <div className="shell site-footer__inner">
          <span>© 2026 CHEN CAN</span>
          <span>Portfolio V1.0 — Designed &amp; built with React</span>
          <span>江苏 · 徐州</span>
        </div>
      </footer>
    </section>
  )
}
