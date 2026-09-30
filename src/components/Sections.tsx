import { MapPin } from 'lucide-react'
import { Reveal, Icon } from './Reveal'
import {
  summary,
  skills,
  experience,
  certs,
  languages
} from '../data'

export function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal as="h2">About Me</Reveal>

        <div className="about">
          <div className="bio">

            <Reveal className="pfp" d={0.05}>
              <img
                src={import.meta.env.BASE_URL + 'my-photo.jpg'}
                alt="Portrait of Punya S R"
                width={1086}
                height={1308}
                loading="lazy"
                decoding="async"
              />
            </Reveal>

            <div
              className="summary"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              {summary.map((paragraph, i) => (
                <Reveal
                  as="p"
                  key={i}
                  d={0.1 + i * 0.05}
                  style={{
                    margin: 0,
                    lineHeight: 1.8
                  }}
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education">
      <div className="wrap">

        <Reveal as="h2">
          Education
        </Reveal>

        <p className="sub">
          Where I am studying and where I began.
        </p>

        <div className="tl">

          <Reveal className="card">

            <div className="meta">
              2023-2027
            </div>

            <h3>
              B.E. in Computer Science Engineering
            </h3>

            <p>
              Maharaja Institute of Technology Mysuru,
              Karnataka
            </p>

            <a
              className="maplink"
              href="https://www.google.com/maps/search/?api=1&query=Maharaja+Institute+of+Technology+Mysore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={15} />
              <span>View Location</span>
            </a>

          </Reveal>

          <Reveal
            className="card"
            d={0.15}
          >

            <div className="meta">
              2021-2023
            </div>

            <h3>
              Pre-University
            </h3>

            <p>
              Marimallapa Pre-University College,
              Mysuru, Karnataka
            </p>

            <a
              className="maplink"
              href="https://www.google.com/maps/search/?api=1&query=Marimallappa+Pre-University+College+Mysore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={15} />
              <span>View PU Location</span>
            </a>

          </Reveal>

        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills">
      <div className="wrap">

        <Reveal as="h2">
          Technical Skills
        </Reveal>

        <p className="sub">
          Tools and concepts I work with, grouped by area.
        </p>

        <div className="grid g3">

          {skills.map((s, i) => (
            <Reveal
              key={s[1]}
              className="card"
              d={i * 0.08}
            >

              <Icon n={s[0]} />

              <h3>
                {s[1]}
              </h3>

              <div className="chips">

                {s[2].map(c => (
                  <span
                    className="chip"
                    key={c}
                  >
                    {c}
                  </span>
                ))}

              </div>

            </Reveal>
          ))}

        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience">
      <div className="wrap">

        <Reveal as="h2">
          Experience
        </Reveal>

        <div className="tl">

          <Reveal className="card">

            <div className="meta">
              Internship · Mysuru
            </div>

            <h3>
              Software Development Intern,
              BEML Limited
            </h3>

            <ul>

              {experience.map(e => (
                <li key={e}>
                  {e}
                </li>
              ))}

            </ul>

          </Reveal>

        </div>
      </div>
    </section>
  )
}

export function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap">

        <Reveal as="h2">
          Certifications
        </Reveal>

        <div
          className="grid g3"
          style={{
            marginTop: 32
          }}
        >

          {certs.map((c, i) => (
            <Reveal
              key={c}
              className="card"
              d={i * 0.1}
            >

              <Icon n="cert" />

              <h3>
                {c}
              </h3>

              <p>
                Certification
              </p>

            </Reveal>
          ))}

        </div>
      </div>
    </section>
  )
}

export function Languages() {
  return (
    <section id="languages">
      <div className="wrap">

        <Reveal as="h2">
          Languages
        </Reveal>

        <div
          className="grid g3"
          style={{
            marginTop: 32
          }}
        >

          {languages.map((l, i) => (
            <Reveal
              key={l}
              className="card lang"
              d={i * 0.1}
            >
              {l}
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  )
}