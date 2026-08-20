import { useState, useEffect } from 'react'
import {
  shop,
  formatPrice,
  highlights,
  galleryItems,
  includedFeatures,
  weeks,
  valueStack,
  comparison,
  audienceFit,
  testimonials,
  faqs,
} from './config'

// ============================================================================
// ICONS COMPONENT REPOSITORY
// ============================================================================

function Icon({ name, size = 20, className = '' }) {
  switch (name) {
    case 'moon':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )
    case 'star':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    case 'book':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
        </svg>
      )
    case 'video':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="m22 8-6 4 6 4V8Z" />
          <rect width="14" height="12" x="2" y="6" rx="2" />
        </svg>
      )
    case 'certificate':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      )
    case 'audio':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      )
    case 'path':
    case 'calendar':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
      )
    case 'clock':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    case 'sparkles':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
        </svg>
      )
    case 'infinity':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
        </svg>
      )
    case 'download':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      )
    case 'check':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )
    case 'cross':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )
    case 'shield':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    default:
      return null
  }
}

// Monogram Logo Component
function BrandEmblem({ size = 24 }) {
  return (
    <div className="brand-emblem">
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <path
          d="M38 12c-11 0-20 9-20 20s9 20 20 20c3 0 5.8-.7 8.2-1.9C41.5 46.8 35.8 38 35.8 28c0-8.2 3.5-15.6 9-20.8C42.4 12.7 40.3 12 38 12z"
          fill="#d4af37"
        />
        <path d="M44 20l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6L44 20z" fill="#fae8b4" />
        <path d="M14 50c9-2.5 27-2.5 36 0" stroke="#fae8b4" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M17 46c7 2.8 23 2.8 30 0" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

// Countdown timer custom hook
function useCountdown(hours) {
  const [parts, setParts] = useState({ h: 0, m: 0, s: 0, ended: false })

  useEffect(() => {
    const storageKey = 'rihla-offer-timer-end'
    let targetTime = Number(localStorage.getItem(storageKey))
    if (!Number.isFinite(targetTime) || targetTime < Date.now()) {
      targetTime = Date.now() + hours * 60 * 60 * 1000
      localStorage.setItem(storageKey, String(targetTime))
    }

    const updateClock = () => {
      const remainingMs = Math.max(0, targetTime - Date.now())
      const totalSec = Math.floor(remainingMs / 1000)
      setParts({
        h: Math.floor(totalSec / 3600),
        m: Math.floor((totalSec % 3600) / 60),
        s: totalSec % 60,
        ended: totalSec === 0,
      })
    }

    updateClock()
    const timerInterval = setInterval(updateClock, 1000)
    return () => clearInterval(timerInterval)
  }, [hours])

  return parts
}

function padZero(num) {
  return String(num).padStart(2, '0')
}

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  const [activeGalleryTab, setActiveGalleryTab] = useState('pose')
  const countdown = useCountdown(shop.offerHours)

  const selectedGallery = galleryItems.find((g) => g.id === activeGalleryTab) || galleryItems[0]

  return (
    <div className="page-wrapper">
      {/* 1. TOP TICKER / LIVE COUNTDOWN */}
      <div className="ticker-bar">
        <div className="wrap ticker-inner">
          <div className="ticker-msg">
            <span className="pulse-dot"></span>
            <span>
              Offre de Lancement : <strong>{shop.discountText}</strong>
            </span>
            <span className="ticker-price-tag">{formatPrice(shop.price)} au lieu de {formatPrice(shop.compareAt)}</span>
          </div>

          <div className="ticker-clock" aria-label="Compte à rebours de l'offre">
            <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--gold-400)', letterSpacing: '0.08em' }}>
              Expire dans :
            </span>
            <div className="ticker-clock-unit">
              <strong>{padZero(countdown.h)}</strong>
              <span>h</span>
            </div>
            <div className="ticker-clock-unit">
              <strong>{padZero(countdown.m)}</strong>
              <span>m</span>
            </div>
            <div className="ticker-clock-unit">
              <strong>{padZero(countdown.s)}</strong>
              <span>s</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ÉPURÉ & SLEEK NAVIGATION */}
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="brand-link">
            <BrandEmblem />
            <div className="brand-text-col">
              <span className="brand-title">{shop.name}</span>
              <span className="brand-arabic-sub">{shop.arabic}</span>
            </div>
          </a>

          {/* Menu simplifié & épuré (3 liens essentiels) */}
          <nav>
            <ul className="nav-links">
              <li><a href="#programme">Le Programme</a></li>
              <li><a href="#contenu">Le Contenu</a></li>
              <li><a href="#avis">Avis</a></li>
            </ul>
          </nav>

          <div className="nav-action">
            <a href={shop.checkoutUrl} className="btn btn-gold btn-sm">
              <Icon name="download" size={14} />
              <span>Télécharger le Pack</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* 3. HERO SECTION */}
        <section className="hero-section">
          <div className="wrap hero-grid">
            <div className="hero-content">
              <div className="hero-badge-row">
                <span className="badge-gold">
                  <Icon name="sparkles" size={13} />
                  Pack Premium Débutant
                </span>
                <span className="badge-emerald">
                  <Icon name="infinity" size={13} />
                  Accès à vie immédiat
                </span>
              </div>

              <h1 className="hero-title">
                {shop.title}
                <em>{shop.subtitle}</em>
              </h1>

              <div className="hero-arabic-calligraphy" lang="ar">
                {shop.arabicSubtitle}
              </div>

              <p className="hero-description">
                Une méthode progressive, des vidéos guidées pas à pas et un accompagnement structuré pour déchiffrer, lire et aimer le Noble Coran en seulement 30 jours — même en partant de zéro.
              </p>

              <div className="hero-pills">
                <div className="hero-pill-item">
                  <Icon name="calendar" size={15} />
                  <span>30 Jours chrono</span>
                </div>
                <div className="hero-pill-item">
                  <Icon name="clock" size={15} />
                  <span>15 à 30 min / jour</span>
                </div>
                <div className="hero-pill-item">
                  <Icon name="sparkles" size={15} />
                  <span>Zéro prérequis</span>
                </div>
              </div>

              <div className="hero-cta-group">
                <a href={shop.checkoutUrl} className="btn btn-gold btn-lg">
                  <Icon name="download" size={18} />
                  <span>Télécharger le Pack · {formatPrice(shop.price)}</span>
                </a>
                <a href="#programme" className="btn btn-outline-gold btn-lg">
                  <span>Voir le programme</span>
                </a>
              </div>

              <div className="hero-trust-sub">
                <span><Icon name="check" size={13} style={{ color: 'var(--emerald-700)' }} /> Accès Drive immédiat</span>
                <span>•</span>
                <span><Icon name="check" size={13} style={{ color: 'var(--emerald-700)' }} /> Licence nominative</span>
                <span>•</span>
                <span><Icon name="check" size={13} style={{ color: 'var(--emerald-700)' }} /> Mobile & tablette</span>
              </div>
            </div>

            {/* Hero Visual Mockup */}
            <div className="hero-media-wrapper">
              <div className="hero-media-backdrop"></div>
              <div className="hero-media-card">
                <img
                  src="/visuels/mockup-livre-pose.png"
                  alt="Livre de cours Rihla - Apprendre à lire le Coran en 30 jours"
                  className="hero-main-img"
                  fetchPriority="high"
                  decoding="async"
                />

                {/* Floating Glass Badges */}
                <div className="floating-badge floating-badge-top">
                  <div className="badge-icon-box">
                    <Icon name="video" size={16} />
                  </div>
                  <div className="floating-badge-text">
                    <strong>Vidéos Pas à Pas HD</strong>
                    <span>Voir, écouter, répéter</span>
                  </div>
                </div>

                <div className="floating-badge floating-badge-bottom">
                  <div className="badge-icon-box">
                    <Icon name="certificate" size={16} />
                  </div>
                  <div className="floating-badge-text">
                    <strong>Certificat Officiel</strong>
                    <span>Licence nominative incluse</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TRUST & KEY HIGHLIGHTS BAR */}
        <section className="highlights-bar">
          <div className="wrap">
            <div className="highlights-grid">
              {highlights.map((item) => (
                <div className="highlight-card" key={item.title}>
                  <div className="highlight-icon">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <div className="highlight-text">
                    <strong>{item.title}</strong>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. LES 4 SEMAINES DU PROGRAMME (AFFICHÉES EN MÊME TEMPS) */}
        <section className="section section-alt" id="programme">
          <div className="wrap">
            <div className="section-head">
              <span className="section-kicker">
                <Icon name="path" size={15} />
                Le Voyage en 30 Jours
              </span>
              <h2 className="section-title">Les 4 Semaines du Programme Pas à Pas</h2>
              <div className="islamic-divider">۞</div>
              <p className="section-desc">
                Découvrez l'intégralité du parcours jour par jour. Chaque étape est minutieusement construite pour vous guider de la reconnaissance des lettres jusqu'à la lecture autonome du Noble Coran.
              </p>
            </div>

            {/* Grille simultanée des 4 semaines avec visuels authentiques */}
            <div className="weeks-grid-simultaneous">
              {weeks.map((w) => (
                <article className="week-grand-card" key={w.id}>
                  <div className="week-visual-wrapper">
                    <img
                      src={w.image}
                      alt={w.imageAlt}
                      className="week-visual-img"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="week-badge-overlay">
                      Semaine {w.n} / 04
                    </div>
                    <div className="week-arabic-overlay" lang="ar">
                      {w.arabic}
                    </div>
                  </div>

                  <div className="week-card-body">
                    <div>
                      <h3 className="week-title">{w.title}</h3>

                      <div className="week-goal-badge">
                        🎯 <strong>Objectif :</strong> {w.goal}
                      </div>

                      <p className="week-summary-text">{w.summary}</p>

                      <div className="week-lessons-box">
                        <h5>Programme de la semaine</h5>
                        <ul className="week-lessons-list">
                          {w.lessons.map((lesson, idx) => (
                            <li key={idx}>
                              <span className="week-bullet-gold">✦</span>
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="week-milestone-footer">
                      <Icon name="sparkles" size={16} />
                      <span>{w.highlight}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <a href={shop.checkoutUrl} className="btn btn-gold btn-lg">
                <Icon name="download" size={18} />
                <span>Accéder au Programme · {formatPrice(shop.price)}</span>
              </a>
            </div>
          </div>
        </section>

        {/* 6. SHOWROOM & WHAT IS IN THE PACK */}
        <section className="section" id="contenu">
          <div className="wrap">
            <div className="section-head">
              <span className="section-kicker">
                <Icon name="book" size={15} />
                Supports & Contenus Pédagogiques
              </span>
              <h2 className="section-title">Ce que vous recevez dans votre Pack Rihla</h2>
              <div className="islamic-divider">۞</div>
              <p className="section-desc">
                Un kit complet, moderne et accessible sur tous vos écrans, pensé pour faire de chaque session d’apprentissage un moment de sérénité et d’élévation.
              </p>
            </div>

            <div className="showroom-grid">
              <div className="showroom-visual-card">
                <span className="badge-gold" style={{ position: 'absolute', top: 18, left: 18, zIndex: 5 }}>
                  {selectedGallery.badge}
                </span>

                <img
                  src={selectedGallery.image}
                  alt={selectedGallery.title}
                  className="showroom-main-img"
                  loading="lazy"
                  decoding="async"
                />

                <div className="showroom-picker">
                  {galleryItems.map((item) => (
                    <button
                      key={item.id}
                      className={`showroom-thumb-btn ${activeGalleryTab === item.id ? 'active' : ''}`}
                      onClick={() => setActiveGalleryTab(item.id)}
                    >
                      <strong>{item.title}</strong>
                      <span>{item.badge}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="showroom-details-col">
                <div className="features-grid">
                  {includedFeatures.map((feat) => (
                    <div className="feature-box" key={feat.title}>
                      <div className="feature-icon-box">
                        <Icon name={feat.icon} size={18} />
                      </div>
                      <div className="feature-info">
                        <h4>{feat.title}</h4>
                        <p>{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '24px', textAlign: 'center' }}>
                  <a href={shop.checkoutUrl} className="btn btn-gold btn-lg" style={{ width: '100%' }}>
                    <Icon name="download" size={18} />
                    <span>Télécharger le Pack · {formatPrice(shop.price)}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. VALUE STACK (VALEUR DU PACKAGE VS VALEUR FINALE DU PRODUIT) */}
        <section className="section section-alt">
          <div className="wrap">
            <div className="section-head">
              <span className="section-kicker">
                <Icon name="sparkles" size={15} />
                Récapitulatif de Valeur
              </span>
              <h2 className="section-title">La Valeur Totale de votre Pack Rihla</h2>
              <div className="islamic-divider">۞</div>
              <p className="section-desc">
                Voici le détail de chaque composant inclus dans votre accès immédiat et sa valeur réelle sur le marché de la formation.
              </p>
            </div>

            <div className="value-stack-wrapper">
              <ul className="value-stack-list">
                {valueStack.map((item, idx) => (
                  <li className="value-stack-item" key={idx}>
                    <div className="value-item-left">
                      <div className="value-item-icon">
                        <Icon name={item.icon} size={18} />
                      </div>
                      <div className="value-item-info">
                        <strong>{item.title}</strong>
                        <span>{item.subtitle}</span>
                      </div>
                    </div>
                    <div className="value-item-price">
                      {formatPrice(item.value)}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Total Calculation Box */}
              <div className="value-total-box">
                <div className="value-calc-col">
                  <span className="value-total-label">Valeur Réelle Totale du Pack :</span>
                  <span className="value-total-amount">{formatPrice(shop.totalRealValue)}</span>
                </div>

                <div className="value-final-col">
                  <span className="value-final-label">Votre Tarif Aujourd'hui (Paiement Unique) :</span>
                  <div className="value-final-amount">{formatPrice(shop.price)}</div>
                  <span style={{ fontSize: '12px', color: '#a6e3b8', fontWeight: 600 }}>
                    Économisez {formatPrice(shop.totalRealValue - shop.price)} immédiatement
                  </span>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <a href={shop.checkoutUrl} className="btn btn-gold btn-lg" style={{ width: '100%' }}>
                  <Icon name="download" size={20} />
                  <span>Obtenir Tout le Pack pour {formatPrice(shop.price)}</span>
                </a>
              </div>
            </div>

            {/* GARANTIE SÉRÉNITÉ DÉDIÉE */}
            <div className="guarantee-container">
              <div className="guarantee-seal">
                <strong>100%</strong>
                <span>Garantie Sérénité</span>
              </div>
              <div className="guarantee-content">
                <h3>Notre Garantie d'Accompagnement & Clarté</h3>
                <p>
                  Nous avons élaboré la méthode Rihla pour que chaque lettre devienne une évidence. En suivant seulement 15 minutes par jour pendant 30 jours, vous aurez acquis toutes les bases pour lire le Noble Coran. De plus, notre assistance WhatsApp reste disponible pour répondre à vos questions et vous encourager dans votre cheminement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. SPIRITUAL TRANSFORMATION & BEFORE/AFTER */}
        <section className="section section-emerald" id="transformation">
          <div className="wrap">
            <div className="section-head">
              <span className="section-kicker">
                <Icon name="sparkles" size={15} />
                Une transformation profonde
              </span>
              <h2 className="section-title">Pourquoi ce voyage change votre relation avec le Coran</h2>
              <div className="islamic-divider">۞</div>
              <p className="section-desc">
                Lire soi-même la Parole d'Allah dans la prière quotidienne (Salat) apporte un apaisement et une présence du cœur qu'aucun résumé traduit ne peut égaler.
              </p>
            </div>

            <div className="comparison-grid">
              <div className="comparison-card card-before">
                <div className="comparison-header">
                  <Icon name="cross" size={20} className="comp-bullet" />
                  <h3>Avant de commencer Rihla</h3>
                </div>
                <ul className="comparison-list">
                  {comparison.before.map((point, i) => (
                    <li key={i}>
                      <span className="comp-bullet">–</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="comparison-card card-after">
                <div className="comparison-header">
                  <Icon name="check" size={22} className="comp-bullet" />
                  <h3>Après les 30 Jours de voyage</h3>
                </div>
                <ul className="comparison-list">
                  {comparison.after.map((point, i) => (
                    <li key={i}>
                      <span className="comp-bullet">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. AUDIENCE FIT */}
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <span className="section-kicker">
                <Icon name="shield" size={15} />
                Transparence & Clarté
              </span>
              <h2 className="section-title">Ce Pack est-il fait pour vous ?</h2>
              <div className="islamic-divider">۞</div>
            </div>

            <div className="fit-grid">
              <div className="fit-card">
                <h3>
                  <span className="fit-check">✓</span> Ce pack est fait pour vous si…
                </h3>
                <ul className="fit-list">
                  {audienceFit.yes.map((t, i) => (
                    <li key={i}>
                      <span className="fit-check">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="fit-card">
                <h3>
                  <span className="fit-cross">✕</span> Ce pack n’est pas adapté si…
                </h3>
                <ul className="fit-list">
                  {audienceFit.no.map((t, i) => (
                    <li key={i}>
                      <span className="fit-cross">–</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 10. TESTIMONIALS */}
        <section className="section section-alt" id="avis">
          <div className="wrap">
            <div className="section-head">
              <span className="section-kicker">
                <Icon name="star" size={15} />
                Retours d’expérience
              </span>
              <h2 className="section-title">Ce que disent nos apprenants</h2>
              <div className="islamic-divider">۞</div>
              <p className="section-desc">
                Des hommes et des femmes qui partaient de zéro et qui lisent aujourd’hui le Coran avec fluidité et émotion.
              </p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((testi, i) => (
                <div className="testimonial-card" key={i}>
                  <div>
                    <div className="testimonial-stars">
                      {'★'.repeat(testi.rating)}
                    </div>
                    <p className="testimonial-quote">« {testi.text} »</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testi.name.charAt(0)}</div>
                    <div className="author-meta">
                      <strong>{testi.name}</strong>
                      <span>{testi.city} · Élève certifié Rihla</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. GRAND OFFER SECTION */}
        <section className="section" id="offre">
          <div className="wrap">
            <div className="offer-container">
              <div className="offer-grid">
                <div className="offer-visual-col">
                  <img
                    src="/visuels/pack-kit.png"
                    alt="Pack Rihla Débutant Coffret Prestige"
                    className="offer-main-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div style={{ textAlign: 'center', marginTop: '14px' }}>
                    <span className="badge-gold">Format Digital Immédiat · Accès à vie</span>
                  </div>
                </div>

                <div className="offer-content-col">
                  <span className="offer-header-badge">
                    <Icon name="sparkles" size={13} />
                    Offre Spéciale de Lancement
                  </span>

                  <h2 className="offer-title">
                    {shop.title}
                    <br />
                    <span className="gold-gradient-text" style={{ fontStyle: 'italic', fontSize: '0.85em' }}>
                      {shop.badge}
                    </span>
                  </h2>

                  <p className="offer-sub">
                    {shop.subtitle} · Accès complet avec vidéos HD, supports PDF, audios et certificat de licence personnelle.
                  </p>

                  <div className="offer-countdown-card">
                    <span className="offer-countdown-label">
                      ⏳ Offre spéciale garantie encore :
                    </span>
                    <div className="offer-clock-digits">
                      <div className="offer-clock-box">
                        <b>{padZero(countdown.h)}</b>
                        <span>Heures</span>
                      </div>
                      <div className="offer-clock-box">
                        <b>{padZero(countdown.m)}</b>
                        <span>Min</span>
                      </div>
                      <div className="offer-clock-box">
                        <b>{padZero(countdown.s)}</b>
                        <span>Sec</span>
                      </div>
                    </div>
                  </div>

                  <div className="offer-pricing-row">
                    <span className="offer-current-price">{formatPrice(shop.price)}</span>
                    <span className="offer-old-price">{formatPrice(shop.compareAt)}</span>
                    <span className="offer-discount-badge">{shop.discountText}</span>
                  </div>

                  <ul className="offer-checklist">
                    <li><span className="offer-check-gold">✓</span> Accès immédiat et illimité à vie sans abonnement</li>
                    <li><span className="offer-check-gold">✓</span> Toutes les vidéos guidées pas à pas en haute définition</li>
                    <li><span className="offer-check-gold">✓</span> Manuel de cours complet & fiches mémo PDF téléchargeables</li>
                    <li><span className="offer-check-gold">✓</span> Certificat d’accès & licence nominative Google Drive</li>
                    <li><span className="offer-check-gold">✓</span> Paiement 100% sécurisé (Mobile Money, Wave, Carte)</li>
                  </ul>

                  <div className="offer-btn-wrap">
                    <a href={shop.checkoutUrl} className="btn btn-gold btn-lg" style={{ width: '100%' }}>
                      <Icon name="download" size={20} />
                      <span>Obtenir Mon Accès · {formatPrice(shop.price)}</span>
                    </a>
                  </div>

                  <div className="offer-security-notes">
                    <span>🔒 Paiement sécurisé</span>
                    <span>⚡ Activation instantanée</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. FAQ SECTION */}
        <section className="section section-alt" id="faq">
          <div className="wrap">
            <div className="section-head">
              <span className="section-kicker">
                <Icon name="sparkles" size={15} />
                Réponses à vos questions
              </span>
              <h2 className="section-title">Foire Aux Questions</h2>
              <div className="islamic-divider">۞</div>
              <p className="section-desc">
                Tout ce que vous devez savoir avant de commencer votre voyage avec Rihla.
              </p>
            </div>

            <div className="faq-accordion">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <details>
                    <summary className="faq-summary">
                      <span>{faq.q}</span>
                      <span className="faq-icon-toggle">+</span>
                    </summary>
                    <div className="faq-content">
                      <p>{faq.a}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. FINAL SPIRITUAL BANNER */}
        <section className="final-banner">
          <div className="wrap final-content">
            <div className="final-arabic" lang="ar">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>
            <h2 className="final-title">
              Le Noble Coran vous attend.<br />
              Il ne manque plus que votre premier pas.
            </h2>
            <p className="final-desc">
              Dans 30 jours à compter d’aujourd’hui, vous pourrez ouvrir votre Mushaf et lire par vous-même, lettre après lettre, verset après verset.
            </p>
            <a href={shop.checkoutUrl} className="btn btn-gold btn-lg">
              <Icon name="download" size={18} />
              <span>Télécharger le Pack · {formatPrice(shop.price)}</span>
            </a>
          </div>
        </section>
      </main>

      {/* 14. FOOTER */}
      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <BrandEmblem size={20} />
            <div>
              <strong>{shop.name} ({shop.arabic})</strong>
              <div style={{ fontSize: '12px', color: 'var(--gold-400)' }}>
                {shop.tagline} · {shop.product}
              </div>
            </div>
          </div>

          <div className="footer-legal">
            Licence personnelle et nominative · Contenu pédagogique protégé · © {new Date().getFullYear()} Tous droits réservés.
          </div>
        </div>
      </footer>

      {/* 15. MOBILE STICKY BOTTOM BAR */}
      <div className="mobile-sticky-bar">
        <div className="mobile-sticky-inner">
          <div className="sticky-price-col">
            <span className="sticky-product-title">{shop.badge}</span>
            <span className="sticky-price-amount">{formatPrice(shop.price)}</span>
          </div>
          <a href={shop.checkoutUrl} className="btn btn-gold btn-sm" style={{ flex: 1 }}>
            <Icon name="download" size={15} />
            <span>Télécharger le Pack</span>
          </a>
        </div>
      </div>
    </div>
  )
}
