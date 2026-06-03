import PrintButton from './PrintButton';

export default function Page() {
  return (
    <>
      {/* COVER */}
      <div className="cover">
        <div className="cover-label">Grammy U · Supporting Media Kit · 2026</div>
        <div className="cover-main">
          <div className="cover-text">
            <div className="cover-eyebrow">Artist · Creator · Music Industry</div>
            <h1 className="cover-name">
              Raniya<br />
              <em>Noiseux</em>
            </h1>
            <div className="cover-rule"></div>
            <p className="cover-tagline">
              Singer, photographer, and music industry student building at the intersection of artistry, community, and creative strategy.
            </p>
            <div className="cover-roles">
              <span className="role-pill">Vocalist</span>
              <span className="role-pill">Photographer</span>
              <span className="role-pill">Content Creator</span>
              <span className="role-pill">Jazz &amp; Marketing</span>
              <span className="role-pill">Event Host</span>
              <span className="role-pill">Community Builder</span>
            </div>
          </div>
          <div className="cover-photo">
            <img src="/media/m1-baa91d8bdd9e.jpg" alt="Raniya Noiseux performing" />
          </div>
        </div>
        <div className="cover-footer">
          <span className="cover-footer-label">Submitted for Grammy U Program</span>
          <span className="cover-footer-year">2026</span>
        </div>
      </div>

      {/* BIO */}
      <section>
        <div className="section-label">01 — About</div>
        <h2 className="section-title">
          The <em>full picture</em>
        </h2>
        <div className="bio-grid">
          <div className="bio-text">
            <p>
              Raniya Noiseux is a singer, photographer, and music industry student whose work spans performance, visual storytelling, and community building. Currently studying Marketing and Jazz Studies with a Music Industry concentration, she brings a rare combination of creative depth and strategic thinking to everything she touches.
            </p>
            <p>
              Her background includes coursework and performance training through the Stanford Jazz Workshop, independent collaboration with musicians and industry professionals, and hands-on experience producing promotional content for artists across genres — including a collaboration with Brandy Melville.
            </p>
            <p>
              A former pre-law student, Raniya brings a sharp analytical lens to the creative space — advocating for artists, thinking critically about the industry, and building systems that connect people to music.
            </p>
          </div>
          <div className="bio-stats">
            <div className="stat-card">
              <div className="stat-card-label">Training</div>
              <div className="stat-card-value">Stanford Jazz Workshop</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-label">Academic Focus</div>
              <div className="stat-card-value">Marketing + Jazz Studies + Music Industry</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-label">Notable Performances</div>
              <div className="stat-card-value">David Foster's Birthday · Hotel Ziggy · Stanford Jazz</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-label">Brand Collaboration</div>
              <div className="stat-card-value">Brandy Melville — Vocalist</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* WORK AREAS */}
      <div className="work-bg">
        <div className="work-inner">
          <div className="section-label">02 — What I Do</div>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>
            Every side <em style={{ color: 'var(--gold-light)' }}>of the music</em>
          </h2>
          <div className="work-grid">
            <div className="work-card">
              <span className="work-card-icon">🎤</span>
              <div className="work-card-title">Vocalist</div>
              <div className="work-card-desc">
                Singer rooted in jazz with a broad musical range. Performs at venues, private events, and collaborative sessions. Trained through Stanford Jazz Workshop and live performance environments.
              </div>
            </div>
            <div className="work-card">
              <span className="work-card-icon">📷</span>
              <div className="work-card-title">Photography &amp; Visual Content</div>
              <div className="work-card-desc">
                Creates photography and promotional content for musicians and events. Work spans artist branding, live event documentation, and editorial-style imagery for brands and creatives.
              </div>
            </div>
            <div className="work-card">
              <span className="work-card-icon">🎷</span>
              <div className="work-card-title">Jam Session Host</div>
              <div className="work-card-desc">
                Organizes and hosts jam sessions connecting musicians, students, and creatives across college communities. Focused on building inclusive, high-energy collaborative spaces.
              </div>
            </div>
            <div className="work-card">
              <span className="work-card-icon">🤝</span>
              <div className="work-card-title">Artist Collaboration</div>
              <div className="work-card-desc">
                Works directly with artists and industry professionals — from session performances (Brandy Melville, David Foster events) to strategic conversations about branding and career.
              </div>
            </div>
            <div className="work-card">
              <span className="work-card-icon">📣</span>
              <div className="work-card-title">Music Marketing &amp; Branding</div>
              <div className="work-card-desc">
                Applies marketing coursework and real-world instincts to artist branding, promotional strategy, and audience engagement — bridging the creative and business sides of music.
              </div>
            </div>
            <div className="work-card">
              <span className="work-card-icon">🌐</span>
              <div className="work-card-title">Community Building</div>
              <div className="work-card-desc">
                Actively grows a national network of artists and students through events, social platforms, and collaborative opportunities. Passionate about spaces where music connects people.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED LINKS */}
      <div className="media-section">
        <div className="section-label">03 — Featured Work</div>
        <h2 className="section-title">
          Click to <em>explore</em>
        </h2>
        <div className="link-cards">
          <a
            className="link-card"
            href="https://raniyanoiseux.pixieset.com/sigmachi57photosmarshall/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="link-card-img" src="/media/m2-c4a764c3c47b.jpg" alt="Music Photography" />
            <div className="link-card-overlay">
              <div className="link-card-label">Photography Portfolio</div>
              <div className="link-card-title">Music &amp; Event Photography</div>
              <div className="link-card-sub">View full gallery on Pixieset →</div>
            </div>
            <div className="link-card-arrow">↗</div>
          </a>
          <a
            className="link-card"
            href="https://www.instagram.com/p/DOUPGtYASgt/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="link-card-img" src="/media/m3-673eb803b4b7.jpg" alt="Brandy Melville Collaboration" />
            <div className="link-card-overlay">
              <div className="link-card-label">Brand Collaboration</div>
              <div className="link-card-title">Brandy Melville — Vocalist</div>
              <div className="link-card-sub">View on Instagram →</div>
            </div>
            <div className="link-card-arrow">↗</div>
          </a>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* PHOTO GRID */}
      <section>
        <div className="section-label">04 — Photography</div>
        <h2 className="section-title">
          Behind the <em>lens</em>
        </h2>
        <div className="photos-grid">
          <div className="photo-item wide">
            <img src="/media/m4-f9566d16c748.jpg" alt="Raniya performing live" />
          </div>
          <div className="photo-item">
            <img src="/media/m5-a6e917f0fb2e.jpg" alt="Raniya in the studio — polaroid" />
          </div>
          <div className="photo-item">
            <img src="/media/m2-c4a764c3c47b.jpg" alt="Live music event photography" />
          </div>
          <div className="photo-item">
            <img src="/media/m3-673eb803b4b7.jpg" alt="Artist promo shoot" />
          </div>
          <div className="photo-item wide">
            <img src="/media/m1-baa91d8bdd9e.jpg" alt="Raniya on stage" />
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* VIDEOS */}
      <div className="work-bg" style={{ padding: '90px 0' }}>
        <div className="work-inner">
          <div className="section-label">05 — Performances</div>
          <h2 className="section-title" style={{ color: 'var(--cream)' }}>
            Live &amp; <em style={{ color: 'var(--gold-light)' }}>in the room</em>
          </h2>
          <div className="videos-grid">
            <div className="video-card">
              <video controls playsInline preload="metadata">
                <source src="/media/m6-9325da50f107.mp4" type="video/mp4" />
              </video>
              <div className="video-card-label">
                <div className="video-card-type">Private Event</div>
                <div className="video-card-title">David Foster's Birthday Party</div>
              </div>
            </div>
            <div className="video-card">
              <video controls playsInline preload="metadata">
                <source src="/media/m7-f18770e77e09.mp4" type="video/mp4" />
              </video>
              <div className="video-card-label">
                <div className="video-card-type">Live Performance · Hotel Ziggy</div>
                <div className="video-card-title">&quot;Birds of a Feather&quot;</div>
              </div>
            </div>
            <div className="video-card">
              <video controls playsInline preload="metadata">
                <source src="/media/m8-42735e147730.mp4" type="video/mp4" />
              </video>
              <div className="video-card-label">
                <div className="video-card-type">Academic Performance</div>
                <div className="video-card-title">Stanford Jazz Workshop</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CREDITS */}
      <section>
        <div className="section-label">06 — Credits &amp; Involvement</div>
        <h2 className="section-title">
          Industry <em>touchpoints</em>
        </h2>
        <div className="credits-list">
          <div className="credit-row">
            <div className="credit-type">Education</div>
            <div className="credit-desc">Stanford Jazz Workshop — Jazz performance coursework and ensemble training</div>
            <div className="credit-role">Participant / Student</div>
          </div>
          <div className="credit-row">
            <div className="credit-type">Private Event</div>
            <div className="credit-desc">David Foster's Birthday Party — Performed as featured vocalist</div>
            <div className="credit-role">Vocalist</div>
          </div>
          <div className="credit-row">
            <div className="credit-type">Venue Performance</div>
            <div className="credit-desc">Hotel Ziggy, Los Angeles — Performed &quot;Birds of a Feather&quot; live</div>
            <div className="credit-role">Vocalist / Performer</div>
          </div>
          <div className="credit-row">
            <div className="credit-type">Brand Collaboration</div>
            <div className="credit-desc">Brandy Melville — Vocal performance for brand content</div>
            <div className="credit-role">Featured Vocalist</div>
          </div>
          <div className="credit-row">
            <div className="credit-type">Visual Content</div>
            <div className="credit-desc">Music &amp; event photography — Pixieset portfolio of live music and promo content</div>
            <div className="credit-role">Photographer / Creator</div>
          </div>
          <div className="credit-row">
            <div className="credit-type">Event Production</div>
            <div className="credit-desc">Jam Sessions — Hosted collaborative music events for college artists and creatives</div>
            <div className="credit-role">Organizer / Host</div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <div className="closing">
        <div className="closing-inner">
          <div>
            <h2 className="closing-title">
              Music is<br />
              <em>everything</em>
              <br />
              I do.
            </h2>
            <p className="closing-sub">
              From the stage to the lens to the strategy session — Raniya brings full commitment to every side of the music world. Grammy U is the next step.
            </p>
          </div>
          <div className="contact-block">
            <div className="contact-item">
              <span className="contact-item-label">Name</span>
              <span className="contact-item-value">Raniya Noiseux</span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Program</span>
              <span className="contact-item-value">Grammy U Applicant — 2026</span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Photography</span>
              <span className="contact-item-value">raniyanoiseux.pixieset.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Instagram</span>
              <span className="contact-item-value">@raniyanoiseux</span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Email</span>
              <span className="contact-item-value">noiseuxraniya@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-item-label">Phone</span>
              <span className="contact-item-value">(310) 601-6021</span>
            </div>
          </div>
        </div>
      </div>

      <PrintButton />
    </>
  );
}
