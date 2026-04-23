import React from "react";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const projects = [
  {
    icon: "✦",
    status: "complete",
    statusLabel: "Complete",
    period: "Sept 2025 – Dec 2025",
    title: "Task Management Web App",
    desc: "A responsive multi-view task management application with comprehensive CRUD operations and persistent client-side storage.",
    bullets: [
      "Built with search, filtering, drag-and-drop planner, and calendar tracking",
      "Designed modular front-end architecture with Local Storage persistence",
      "Fully responsive across desktop and mobile viewports"
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    github: "https://github.com/dhritireddy10",
  },
  {
    icon: "⬡",
    status: "active",
    statusLabel: "In Progress",
    period: "Jan 2026 – Present",
    title: "University Intranet Portal",
    desc: "A centralized intranet platform for Mahindra University with role-based access control and secure authentication.",
    bullets: [
      "Developing role-based dashboards and secure authentication flow",
      "Designing REST APIs and structured database schema",
      "Integrating frontend-backend modules end-to-end"
    ],
    tech: ["React", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/dhritireddy10",
  },
  {
    icon: "◈",
    status: "active",
    statusLabel: "In Progress",
    period: "Jan 2026 – Present",
    title: "AI-Based Food Scanner",
    desc: "A deep learning system to estimate calories and nutritional values from food images, tailored for maternal dietary monitoring.",
    bullets: [
      "Implemented object detection, segmentation, and depth estimation",
      "Accurate food identification and portion sizing pipeline",
      "Personalized nutrition alerts for maternal dietary needs"
    ],
    tech: ["Java", "Maven", "Computer Vision", "Deep Learning", "Git"],
    github: "https://github.com/dhritireddy10",
  },
];

function Projects() {
  return (
    <div className="page">
      <div className="ambient-left" />
      <div className="ambient-right" />

      <div className="projects-page">
        <div className="projects-header">
          <p className="section-label">// selected work</p>
          <h1>My <em>Projects</em></h1>
          <p>A collection of things I've built — from web apps to AI systems.</p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i} style={{ animationDelay: `${i * 0.1 + 0.1}s` }}>
              <div className="card-header">
                <div className="card-icon">{p.icon}</div>
                <span className={`card-status status-${p.status}`}>{p.statusLabel}</span>
              </div>

              <div className="card-body">
                <p className="card-period">{p.period}</p>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.desc}</p>

                <ul className="card-bullets">
                  {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>

                <div className="card-tech">
                  {p.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
              </div>

              <div className="card-footer">
                <a className="card-link" href={p.github} target="_blank" rel="noreferrer">
                  <GitHubIcon /> View on GitHub
                </a>
                {p.live && (
                  <a className="card-link" href={p.live} target="_blank" rel="noreferrer">
                    <ExternalIcon /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
