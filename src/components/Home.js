import React from "react";
import profile from "../assets/profile.jpg";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const ResumeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

function Home() {
  return (
    <div className="page">
      <div className="ambient-left" />
      <div className="ambient-right" />

      <div className="home-grid">
        {/* ── LEFT PANEL ── */}
        <div className="home-left">

          {/* Tag */}
          <div className="hero-tag">B.Tech AI · Mahindra University</div>

          {/* Name */}
          <div>
            <h1 className="hero-name">Dhriti <em>Reddy</em><br />Arumalla</h1>
            <p className="hero-sub" style={{marginTop: '10px'}}>AI Student &amp; Aspiring ML Engineer</p>
          </div>

          {/* About */}
          <div className="about-block">
            <p className="section-label">// about me</p>
            <p className="hero-desc">
              Passionate about building intelligent systems at the intersection of
              Machine Learning, Deep Learning, and Computer Vision. Currently pursuing
              B.Tech in Artificial Intelligence at Mahindra University, working on
              projects that bridge research and real-world impact.
            </p>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a className="social-btn ghost" href="https://github.com/dhritireddy10" target="_blank" rel="noreferrer">
              <GitHubIcon /> GitHub
            </a>
            <a className="social-btn ghost" href="https://www.linkedin.com/in/dhritireddy63004184512" target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
            <a className="social-btn primary" href="mailto:reddyreddydhriti@gmail.com">
               Get in Touch
            </a>
          </div>

          <div className="divider" />

          {/* Personal Info */}
          <div>
            <p className="section-label">// personal info</p>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Name</span>
                <span className="info-value">Dhriti Reddy Arumalla</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone</span>
                <span className="info-value">6300418451</span>
              </div>
              <div className="info-item">
                <span className="info-label">Personal Email</span>
                <span className="info-value">
                  <a href="mailto:reddyreddydhriti@gmail.com">reddyreddydhriti@gmail.com</a>
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">College</span>
                <span className="info-value">Mahindra University</span>
              </div>
              <div className="info-item">
                <span className="info-label">Degree</span>
                <span className="info-value">B.Tech Artificial Intelligence</span>
              </div>
              <div className="info-item">
                <span className="info-label">GPA</span>
                <span className="info-value">7.49 / 10.0</span>
              </div>
            </div>
          </div>

          {/* Research Interests */}
          <div>
            <p className="section-label">// research interests</p>
            <div className="research-pills">
              {["Machine Learning","Deep Learning","Computer Vision","Recommender Systems","Natural Language Processing","Data Analysis","Object Detection","Neural Networks"].map(r => (
                <span key={r} className="pill">{r}</span>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* Skills */}
          <div>
            <p className="section-label">// skills</p>

            <div className="skill-category">
              <p className="skill-cat-title">Languages</p>
              <div className="skill-tags">
                {["C/C++","Python","Java","HTML","CSS"].map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>

            <div className="skill-category">
              <p className="skill-cat-title">Libraries & Frameworks</p>
              <div className="skill-tags">
                {["Pandas","NumPy","Matplotlib","React","Spring Boot"].map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>

            <div className="skill-category">
              <p className="skill-cat-title">Tools & Databases</p>
              <div className="skill-tags">
                {["Git","GitHub","VS Code","Jupyter Notebook","Google Colab","SQL","MySQL"].map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          </div>

        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="home-right">
          <div className="profile-frame-wrap">
            <div className="profile-frame">
              <span className="frame-corner tl" />
              <span className="frame-corner tr" />
              <span className="frame-corner bl" />
              <span className="frame-corner br" />
              <img src={profile} alt="Dhriti Reddy" />
            </div>
          </div>

          <div className="stat-cards">
            <div className="stat-card">
              <span className="stat-card-label">Current GPA</span>
              <span className="stat-card-value">7.49 / 10</span>
            </div>
            <div className="stat-card">
              <span className="stat-card-label">Grade XII</span>
              <span className="stat-card-value">81%</span>
            </div>
            <div className="stat-card">
              <span className="stat-card-label">Grade X</span>
              <span className="stat-card-value">95.8%</span>
            </div>
            <div className="stat-card">
              <span className="stat-card-label">Projects</span>
              <span className="stat-card-value">3 active</span>
            </div>
            <div className="stat-card">
              <span className="stat-card-label">Experience</span>
              <span className="stat-card-value">Vice Head · 8Counts</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
