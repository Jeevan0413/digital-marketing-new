import React, { useEffect, useRef, useState } from 'react';
import useReveal from '../hooks/useReveal';
import Counter from '../components/Counter';
import Marquee from '../components/Marquee';
import '../assets/styles/about.css';

const reviews = [
  { name: "Georgia Voll", role: "CEO, TechFlow", stars: 5, text: "LearnSpace Digital completely transformed our online presence. Our leads have tripled in just 3 months — the ROI is unlike anything we've experienced before.", avatar: "GV" },
  { name: "Stephen Harmon", role: "Founder, UrbanWear", stars: 5, text: "Professional, responsive, and results-driven. Their SEO strategy alone brought us to page one for 47 competitive keywords within 60 days.", avatar: "SH" },
  { name: "Ellyse Perry", role: "Director, GreenSpace", stars: 5, text: "The ROI from their PPC campaigns has been incredible — 340% ROAS in Q1. Best investment decision we've made this year by a wide margin.", avatar: "EP" },
  { name: "Lauren Bell", role: "Marketing Director, NextGen", stars: 5, text: "Our traffic has increased by 200% since onboarding. The team is knowledgeable, responsive, and genuinely cares about our growth.", avatar: "LB" },
  { name: "David Warner", role: "Founder, EcoLife", stars: 5, text: "Finally an agency that understands our niche. Their content strategy is razor-sharp and the results speak for themselves every single month.", avatar: "DW" },
  { name: "James Anderson", role: "CEO, Sparkly", stars: 5, text: "The attention to detail, the strategy depth, the reporting transparency — everything is best-in-class. We renewed our contract for a third year.", avatar: "JA" }
];

const stats = [
  { value: 500, suffix: "+", label: "Brands Empowered", icon: "fa-solid fa-rocket" },
  { value: 98, suffix: "%", label: "Client Retention", icon: "fa-solid fa-heart" },
  { value: 340, suffix: "%", label: "Average ROAS", icon: "fa-solid fa-chart-line" },
  { value: 10, suffix: "+", label: "Years of Mastery", icon: "fa-solid fa-trophy" },
];

const journey = [
  { year: "2015", title: "The Spark", desc: "LearnSpace Digital was founded in Hyderabad with three people and one big vision: make digital marketing accessible and effective for every business.", color: "#6366F1" },
  { year: "2018", title: "First 100 Clients", desc: "Reached our first major milestone, expanded to a team of 20 certified experts, and launched our proprietary performance-tracking dashboard.", color: "#0288D1" },
  { year: "2021", title: "Global Footprint", desc: "Opened our first international office and launched a SaaS platform for data-driven marketing automation, serving clients across 15+ countries.", color: "#26C6DA" },
  { year: "2024", title: "AI Integration", desc: "Pioneered AI-powered campaign optimization, reducing client ad spend waste by 42% while doubling conversion rates across verticals.", color: "#A855F7" },
  { year: "2026", title: "Industry Leader", desc: "Recognized as the #1 boutique agency for ROI-driven performance marketing, with 500+ brands and $200M+ in managed ad spend.", color: "#10B981" },
];

const team = [
  { name: "Raghu Vamshi", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", quote: "Growth is not accidental — it's engineered.", specialty: "Performance Strategy" },
  { name: "Varalaxmi", role: "Head of Strategy & COO", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80", quote: "Data tells stories. We help brands write better ones.", specialty: "Data & Analytics" },
  { name: "Shridhar Kulkarni", role: "Creative Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80", quote: "Creativity without strategy is just decoration.", specialty: "Brand & Creative" },
];

const values = [
  { icon: "fa-solid fa-fire", title: "Passion-First", desc: "We treat every brand like our own. The energy, care, and relentlessness we bring to client work is what separates good from extraordinary.", color: "#6366F1" },
  { icon: "fa-solid fa-bullseye", title: "Precision Execution", desc: "Every pixel, every headline, every bid — crafted with meticulous attention. We don't guess. We test, optimize, and perfect.", color: "#0288D1" },
  { icon: "fa-solid fa-chart-bar", title: "Performance Obsessed", desc: "Vanity metrics don't pay invoices. We obsess over real business outcomes — leads, revenue, and lifetime customer value.", color: "#26C6DA" },
  { icon: "fa-solid fa-shield-halved", title: "Radical Transparency", desc: "You'll always know exactly what we're doing and why. Live dashboards, weekly reviews, and zero fluff in every report.", color: "#A855F7" },
];

const About = () => {
  useReveal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const [hoveredTeam, setHoveredTeam] = useState(null);
  const puzzleSceneRef = useRef(null);
  const [isPuzzleActive, setIsPuzzleActive] = useState(false);

  const slides = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const moveSlider = (direction) => {
    setCurrentSlide((prev) => (prev + direction + slides.length) % slides.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setIsPuzzleActive(true);
    }, { threshold: 0.2 });
    if (puzzleSceneRef.current) observer.observe(puzzleSceneRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="hero-v2 reveal zoom-in mesh-gradient" style={{ minHeight: '52vh', padding: '130px 20px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '8%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(2,136,209,0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div className="container hero-v2-container">
          <div className="hero-v2-card" style={{ maxWidth: '720px' }}>
            <span className="badge" style={{ marginBottom: '20px' }}>About LearnSpace Digital</span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', lineHeight: 1.1, marginBottom: '24px' }}>
              The Team That Turns <span className="highlight gradient-text">Strategy Into Revenue</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.8 }}>
              Since 2015, we've combined deep data intelligence with boundary-pushing creativity to help 500+ brands dominate their digital landscape — from local startups to global enterprises.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '40px', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn btn-primary magnetic">Work With Us</a>
              <a href="#story" className="btn" style={{ padding: '14px 32px', borderRadius: 'var(--radius-sm)', border: '2px solid var(--primary-color)', color: 'var(--primary-color)', fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s' }}>Our Story ↓</a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: 'var(--primary-color)', padding: '60px 20px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px', textAlign: 'center' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ color: '#fff' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px', opacity: 0.8 }}><i className={s.icon}></i></div>
                <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}><Counter target={s.value} />{s.suffix}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1.5px', marginTop: '6px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY / SPLIT */}
      <section id="story" className="story-split-section">
        <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '2%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(2,136,209,0.04) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 1 }} />
        
        <div className="container story-split-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="story-content-side">
            <span className="badge badge-primary reveal fade-up">Our Story</span>
            <div className="story-header reveal fade-up" style={{ transitionDelay: '0.1s' }}>
              <h2 className="story-title-muted">Fueling Brands with</h2>
              <h2 className="story-title-main">
                <span className="gradient-text-innovation">Innovation</span>
              </h2>
            </div>
            
            <p className="story-lead reveal fade-up" style={{ transitionDelay: '0.2s' }}>
              Founded in 2015 in Hyderabad, LearnSpace Digital was built with one mission: 
              turn digital complexity into competitive advantage for every client we serve.
            </p>
            <p className="story-description reveal fade-up" style={{ transitionDelay: '0.3s' }}>
              We fuse deep-dive data analytics with boundary-pushing creative vision so brands find their 
              authentic voice — and amplify it at scale, across every channel that matters.
            </p>

            <div className="story-stats-grid">
              <div className="story-stat-card innovation-purple reveal fade-up" style={{ transitionDelay: '0.4s' }}>
                <div className="stat-icon"><i className="fa-solid fa-rocket"></i></div>
                <div className="stat-info">
                  <span className="stat-number"><Counter target={500} />+</span>
                  <span className="stat-label">Brands Served</span>
                </div>
              </div>
              <div className="story-stat-card innovation-cyan reveal fade-up" style={{ transitionDelay: '0.5s' }}>
                <div className="stat-icon"><i className="fa-solid fa-globe"></i></div>
                <div className="stat-info">
                  <span className="stat-number"><Counter target={15} />+</span>
                  <span className="stat-label">Countries Reached</span>
                </div>
              </div>
            </div>
          </div>

          <div className="story-image-side reveal fade-left" style={{ transitionDelay: '0.2s' }}>
            <div className="story-visual-wrapper">
              <div className="story-slider-container legacy-slider">
                <div className="slider-wrapper">
                  {slides.map((src, idx) => (
                    <img key={idx} src={src} alt="Team collaboration" className={`slider-img ${idx === currentSlide ? 'active' : ''}`} />
                  ))}
                </div>
                <div className="slider-controls">
                  <button className="slider-nav-btn prev" onClick={() => moveSlider(-1)} aria-label="Previous slide">
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <button className="slider-nav-btn next" onClick={() => moveSlider(1)} aria-label="Next slide">
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              
              <div className="experience-floating-card reveal zoom-in" style={{ transitionDelay: '0.6s' }}>
                <div className="exp-content">
                  <span className="exp-val"><Counter target={10} /></span>
                  <div className="exp-details">
                    <span className="exp-unit">Years</span>
                    <span className="exp-desc">Of Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="bg-soft-1 reveal fade-in-up" style={{ padding: '120px 20px' }}>
        <div className="container">
          <span className="badge" style={{ display: 'block', width: 'fit-content', margin: '0 auto 16px' }}>Our Journey</span>
          <h2 className="section-title">A Decade of Digital Excellence</h2>
          <p className="section-subtitle">Five milestones that shaped who we are today.</p>
          <div style={{ position: 'relative', marginTop: '60px', maxWidth: '860px', margin: '60px auto 0' }}>
            <div className="journey-timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, #6366F1, #0288D1, #26C6DA, #A855F7, #10B981)', transform: 'translateX(-50%)', borderRadius: '2px' }} />
            {journey.map((item, idx) => (
              <div key={idx} onClick={() => setActiveStage(idx)} className={`journey-item ${idx % 2 === 0 ? 'left' : 'right'} ${activeStage === idx ? 'active' : ''}`}>
                <div className="journey-dot" style={{ background: item.color, boxShadow: activeStage === idx ? `0 0 0 6px ${item.color}30` : `0 0 0 3px ${item.color}40` }} />
                <div className="journey-card" style={{ borderColor: activeStage === idx ? item.color : 'transparent', boxShadow: activeStage === idx ? `0 20px 60px ${item.color}20` : '0 4px 24px rgba(0,0,0,0.06)' }}>
                  <div className="journey-card-header">
                    <span className="journey-year" style={{ color: item.color }}>{item.year}</span>
                    <h4 className="journey-title">{item.title}</h4>
                  </div>
                  <p className="journey-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="mission-section bg-soft-1" style={{ padding: '100px 20px' }}>
        <div className="mission-container">
          <div className="mission-visual-side">
            <div className="rocket-container">
              <div className="rocket-graphic">
                <svg width="200" height="280" viewBox="0 0 200 280" fill="none">
                  <path d="M50 180L10 240H60L50 180Z" fill="var(--neon-purple)" stroke="var(--neon-purple)" strokeWidth="2" />
                  <path d="M150 180L190 240H140L150 180Z" fill="var(--neon-purple)" stroke="var(--neon-purple)" strokeWidth="2" />
                  <path d="M60 90C60 40 100 0 100 0C100 0 140 40 140 90V220H60V90Z" fill="white" stroke="var(--primary-color)" strokeWidth="4" />
                  <path d="M60 90C60 40 100 0 100 0C100 0 140 40 140 90H60Z" fill="var(--neon-cyan)" stroke="var(--neon-cyan)" strokeWidth="2" />
                  <circle cx="100" cy="115" r="28" fill="#e0e7ff" stroke="var(--primary-color)" strokeWidth="3" />
                </svg>
              </div>
              <div className="smoke-base">
                <svg width="300" height="100" viewBox="0 0 300 100" fill="none">
                  <path d="M0 100C0 70 30 50 70 50C100 50 120 70 140 70C160 70 180 40 210 40C240 40 270 60 300 60V100H0Z" fill="var(--neon-emerald)" fillOpacity="0.8" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mission-text-side">
            <span className="badge" style={{ marginBottom: '20px' }}>Our Mission</span>
            <h2>Transforming Ambition Into <span className="highlight">Digital Reality</span></h2>
            <p>We empower businesses of every size with bold, data-backed digital strategies that create lasting impact — converting ambition into measurable, scalable revenue growth.</p>
            <div className="mission-pillars">
              <div className="pillar-item"><i className="fa-solid fa-rocket"></i><h4>Launch</h4><p>Accelerate your brand with targeted digital entry strategies built for fast market penetration.</p></div>
              <div className="pillar-item"><i className="fa-solid fa-chart-line"></i><h4>Scale</h4><p>Sustain and compound growth through real-time analytics, A/B testing, and continuous optimization.</p></div>
              <div className="pillar-item"><i className="fa-solid fa-crown"></i><h4>Dominate</h4><p>Build market authority through multi-channel positioning that makes competitors irrelevant.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-soft-2 reveal" style={{ padding: '120px 20px' }}>
        <div className="container">
          <span className="badge" style={{ display: 'block', width: 'fit-content', margin: '0 auto 16px' }}>The Team</span>
          <h2 className="section-title">The Minds Behind LearnSpace</h2>
          <p className="section-subtitle">Strategists, creatives, and data scientists — united by one obsession: your growth.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '60px' }}>
            {team.map((member, idx) => (
              <div key={idx}
                onMouseEnter={() => setHoveredTeam(idx)}
                onMouseLeave={() => setHoveredTeam(null)}
                style={{ borderRadius: '24px', overflow: 'hidden', background: '#fff', boxShadow: hoveredTeam === idx ? '0 24px 64px rgba(99,102,241,0.15)' : '0 4px 24px rgba(0,0,0,0.07)', transition: 'all 0.4s', transform: hoveredTeam === idx ? 'translateY(-8px)' : 'none' }}>
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', transform: hoveredTeam === idx ? 'scale(1.06)' : 'scale(1)' }} />
                  <div style={{ position: 'absolute', inset: 0, background: hoveredTeam === idx ? 'linear-gradient(to top, rgba(21,101,192,0.75) 0%, transparent 60%)' : 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 60%)', transition: 'all 0.4s' }} />
                  <div style={{ position: 'absolute', bottom: '16px', left: '20px', right: '20px', opacity: hoveredTeam === idx ? 1 : 0, transform: hoveredTeam === idx ? 'translateY(0)' : 'translateY(12px)', transition: 'all 0.4s' }}>
                    <p style={{ color: '#fff', fontSize: '0.95rem', fontStyle: 'italic', margin: 0 }}>"{member.quote}"</p>
                  </div>
                </div>
                <div style={{ padding: '24px 28px' }}>
                  <h4 style={{ margin: '0 0 4px', fontSize: '1.2rem', color: 'var(--text-main)' }}>{member.name}</h4>
                  <p style={{ margin: '0 0 12px', color: 'var(--primary-color)', fontWeight: 700, fontSize: '0.9rem' }}>{member.role}</p>
                  <span style={{ display: 'inline-block', padding: '5px 14px', borderRadius: '20px', background: 'rgba(99,102,241,0.08)', color: '#6366F1', fontSize: '0.8rem', fontWeight: 700 }}>{member.specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-soft-1" style={{ padding: '120px 20px' }}>
        <div className="container">
          <span className="badge" style={{ display: 'block', width: 'fit-content', margin: '0 auto 16px' }}>What Drives Us</span>
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide every strategy, every campaign, every day.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px', marginTop: '60px' }}>
            {values.map((v, i) => (
              <div key={i}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = `0 20px 48px ${v.color}20`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'; }}
                style={{ padding: '36px 32px', borderRadius: '24px', background: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', borderTop: `4px solid ${v.color}`, transition: 'transform 0.3s, box-shadow 0.3s' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '14px', background: `${v.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', color: v.color, marginBottom: '20px' }}>
                  <i className={v.icon}></i>
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--text-main)' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials reveal bg-soft-2" style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
          <span className="badge" style={{ display: 'block', width: 'fit-content', margin: '0 auto 16px' }}>Client Love</span>
          <h2 className="section-title" style={{ padding: '0 20px' }}>What Our Clients Say</h2>
          <p className="section-subtitle" style={{ padding: '0 20px' }}>Real results. Real relationships. Real praise.</p>
          <Marquee speed={40} pauseOnHover={true}>
            {reviews.map((review, idx) => (
              <div key={idx} style={{ width: '420px', flexShrink: 0, opacity: 1, transform: 'none', padding: '32px', borderRadius: '20px', background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid rgba(99,102,241,0.1)' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (<i key={i} className="fa-solid fa-star" style={{ color: '#F59E0B', fontSize: '0.9rem' }}></i>))}
                </div>
                <p style={{ color: 'var(--text-main)', lineHeight: 1.7, marginBottom: '20px', fontStyle: 'italic' }}>"{review.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1, #0288D1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>
                    {review.avatar}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--text-main)' }}>{review.name}</h4>
                    <small style={{ color: 'var(--text-muted)' }}>{review.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 20px', background: 'linear-gradient(135deg, var(--primary-color) 0%, #6366F1 100%)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '20px', fontWeight: 800 }}>Ready to Scale Your Business?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', marginBottom: '40px', lineHeight: 1.7 }}>
            Join 500+ brands that trust LearnSpace Digital to deliver real, measurable growth. Let's build something remarkable together.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact"
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              style={{ padding: '16px 40px', borderRadius: '50px', background: '#fff', color: 'var(--primary-color)', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', transition: 'transform 0.2s', display: 'inline-block' }}>
              Start Your Growth Journey
            </a>
            <a href="/services"
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; }}
              style={{ padding: '16px 40px', borderRadius: '50px', border: '2px solid rgba(255,255,255,0.6)', color: '#fff', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s', display: 'inline-block' }}>
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
