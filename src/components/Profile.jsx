import React from 'react'
import { media, profile } from '../data/site'

export default function Profile() {
  return (
    <section className="section profile" id="profile">
      <div className="shell">
        <div className="section-head" data-reveal>
          <div className="section-head__title">
            <span className="section-head__index">01</span>
            <h2>经历</h2>
          </div>
          <span className="section-head__meta">Profile / 关于我</span>
        </div>

        <div className="profile__grid">
          <figure className="profile__portrait" data-reveal>
            <div className="profile__frame">
              <img src={media.portrait} alt="人物肖像" loading="lazy" />
            </div>
            <figcaption>
              <span>{profile.nameEn}</span>
              <span>PORTRAIT · {profile.age}</span>
            </figcaption>
          </figure>

          <div className="profile__body">
            <h3 className="profile__lead" data-reveal>
              先看见，
              <br />
              再生成。
            </h3>

            {profile.intro.map((text, i) => (
              <p
                className="profile__para"
                key={i}
                data-reveal
                style={{ '--d': `${0.1 + i * 0.08}s` }}
              >
                {text}
              </p>
            ))}

            <div className="profile__contacts" data-reveal>
              <div className="contact-cell">
                <span className="meta-label">Phone</span>
                <a href={`tel:${profile.phoneRaw}`}>{profile.phone}</a>
              </div>
              <div className="contact-cell">
                <span className="meta-label">Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="contact-cell contact-cell--wrap">
                <span className="meta-label">Base</span>
                <span>{profile.location}</span>
              </div>
              <div className="contact-cell contact-cell--wrap">
                <span className="meta-label">Focus</span>
                <span>{profile.focus}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="metrics" data-reveal>
          {profile.metrics.map((m) => (
            <div className="metric" key={m.label}>
              <span className="metric__value">{m.value}</span>
              <span className="metric__label">{m.label}</span>
              <span className="metric__note">{m.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
