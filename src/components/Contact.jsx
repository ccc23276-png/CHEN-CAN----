import React, { useState } from 'react'
import { profile, resume } from '../data/site'

function resumeFile() {
  const parts = resume.pdf.split(',')
  const mime = parts[0].match(/data:(.*?);/)?.[1] || 'application/pdf'
  const binary = atob(parts[1])
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i)
  return new File([bytes], resume.pdfName, { type: mime })
}

export default function Contact() {
  const [resumeNote, setResumeNote] = useState('点击简历卡，下载 PDF 原件。')

  async function downloadResumePdf() {
    try {
      const file = resumeFile()
      const mobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
      if (mobile && navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: 'CHEN CAN - Resume' })
          setResumeNote('已打开系统保存面板，选择「存储到文件」即可。')
          return
        } catch (error) {
          if (error && error.name === 'AbortError') {
            setResumeNote('已取消保存，可再次点击简历卡。')
            return
          }
        }
      }

      const url = URL.createObjectURL(file)
      const link = document.createElement('a')
      link.href = url
      link.download = resume.pdfName
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.setTimeout(() => URL.revokeObjectURL(url), 15000)
      setResumeNote('PDF 已开始下载；若没有反应，请在浏览器中打开本页后重试。')
    } catch (error) {
      setResumeNote('下载未启动，请换用浏览器打开本页后重试。')
    }
  }

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
          </div>

          <aside className="contact__resume" id="resume" data-reveal>
            <div className="contact__resume-head">
              <span className="meta-label">Resume / 简历</span>
              <span className="contact__resume-count">01 File · PDF</span>
            </div>

            <button
              type="button"
              className="resume-sheet resume-sheet--download"
              onClick={downloadResumePdf}
              aria-label="下载或保存 CHEN CAN 的简历 PDF"
              aria-describedby="resume-download-note"
              data-reveal
            >
              <span className="resume-sheet__mark" aria-hidden="true">CV</span>
              <div className="resume-sheet__top">
                <span>{profile.nameEn} / 2026</span>
                <span className="resume-sheet__dl-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M12 3v12" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M5 21h14" />
                  </svg>
                </span>
              </div>
              <h3 className="resume-sheet__title">视觉 / AI 设计</h3>
              <p className="resume-sheet__focus">AIGC 漫剧 · AI 影像 · 概念设计</p>

              <div className="resume-sheet__meta">
                <span>PDF · 1 页</span>
                <span className="resume-sheet__cta">Download CV</span>
              </div>
            </button>

            <p className="contact__resume-note" id="resume-download-note" aria-live="polite">
              {resumeNote}
            </p>
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
