/** Configuration générale et contenus du Pack Rihla */

export const shop = {
  name: 'Rihla',
  arabic: 'رِحْلَة',
  arabicSubtitle: 'تَعَلَّمْ قِرَاءَةَ القُرْآن',
  tagline: 'Votre voyage vers le Coran',
  product: 'Pack Premium Débutant',
  title: 'Apprendre à lire le Coran',
  subtitle: 'pas à pas, lettre par lettre',
  badge: 'En seulement 30 jours',
  price: 1000,
  compareAt: 5000,
  currency: 'F CFA',
  discountText: '-80% de réduction immédiate',
  offerHours: 24,
  checkoutUrl: 'https://rihla.mymaketou.shop/fr/products/apprendre-a-lire-le-coran-pas-a-pas-en-seulement-30-jours',
  whatsappHelp: 'https://wa.me/22900000000?text=Assalamu%20alaykum%2C%20j%27ai%20une%20question%20sur%20le%20Pack%20Rihla',
  driveSupportText: 'Accès immédiat sécurisé sur Google Drive',
}

export function formatPrice(n) {
  return `${n.toLocaleString('fr-FR')} ${shop.currency}`
}

export const highlights = [
  {
    icon: 'calendar',
    title: '30 Jours chrono',
    subtitle: 'Un parcours cadencé jour après jour',
  },
  {
    icon: 'clock',
    title: '15 à 30 min / jour',
    subtitle: 'Idéal même avec un emploi du temps chargé',
  },
  {
    icon: 'sparkles',
    title: 'Zéro prérequis',
    subtitle: 'Conçu spécialement pour vrais débutants',
  },
  {
    icon: 'infinity',
    title: 'Accès à vie',
    subtitle: 'Consultez et révisez sans aucun abonnement',
  },
]

export const galleryItems = [
  {
    id: 'pose',
    title: 'Manuel & Fiches de Cours',
    subtitle: 'Support pédagogique structuré et aéré',
    image: '/visuels/mockup-livre-pose.png',
    badge: 'Haute Définition',
  },
  {
    id: 'digital',
    title: 'Pack Digital Complet',
    subtitle: 'Vidéos & supports sur tablette et smartphone',
    image: '/visuels/pack-digital.png',
    badge: 'Multi-appareils',
  },
  {
    id: 'boite',
    title: 'Coffret Programme Complet',
    subtitle: 'L’ensemble des modules lettre par lettre',
    image: '/visuels/pack-boite.png',
    badge: 'Méthode intégrale',
  },
  {
    id: 'coran',
    title: 'Objectif : Le Noble Coran',
    subtitle: 'Déchiffrer et lire le Mushaf en toute autonomie',
    image: '/visuels/photo-coran.png',
    badge: 'Finalité',
  },
]

export const includedFeatures = [
  {
    icon: 'video',
    title: 'Vidéos Pédagogiques HD Pas à Pas',
    desc: 'Visualisez la forme de chaque lettre (début, milieu, fin), observez la prononciation exacte et répétez à votre rythme.',
  },
  {
    icon: 'book',
    title: 'Manuel Numérique & Fiches de Synthèse',
    desc: 'Un support PDF élégant et clair à lire sur écran ou à imprimer pour vous exercer sereinement.',
  },
  {
    icon: 'certificate',
    title: 'Certificat d’Accès & Licence Personnelle',
    desc: 'Lien Drive sécurisé et document de licence pour conserver vos accès à vie sur tous vos appareils.',
  },
  {
    icon: 'audio',
    title: 'Guides Audio de Répétition & Écoute',
    desc: 'Des enregistrements clairs pour caler votre oreille, distinguer les lettres proches et fluidifier votre lecture.',
  },
  {
    icon: 'path',
    title: 'Planning Quotidien sur 30 Jours',
    desc: 'Fini l’hésitation : chaque jour, vous savez exactement quelle leçon regarder et quel exercice pratiquer.',
  },
  {
    icon: 'mobile',
    title: 'Compatible Téléphone, Tablette & Ordinateur',
    desc: 'Aucune application complexe requise : un simple clic sur votre lien Drive suffit.',
  },
]

export const weeks = [
  {
    id: 1,
    n: '01',
    arabic: 'الأساسيات',
    title: 'Semaine 1 : Les Fondations de l’Alphabet',
    goal: 'Reconnaître et prononcer les 28 lettres avec assurance',
    image: '/visuels/semaine1-alphabet.jpg',
    imageAlt: 'Tableau calligraphié de l’alphabet arabe sur papier noble avec voyelles',
    summary: 'Vous découvrez l’alphabet arabe sans vous précipiter. Vous apprenez à distinguer les formes des lettres au début, au milieu et à la fin des mots, ainsi que les premiers points d’articulation sonore.',
    lessons: [
      'Jour 1 à 2 : Les lettres fondamentales et leurs points de repère',
      'Jour 3 à 4 : Les variations de formes (isolée, initiale, médiane, finale)',
      'Jour 5 à 6 : Différencier les sons proches sans confusion',
      'Jour 7 : Première séance de révision et ancrage visuel',
    ],
    highlight: 'Résultat : Vous reconnaissez instantanément n’importe quelle lettre arabe.',
  },
  {
    id: 2,
    n: '02',
    arabic: 'تجميع الكلمات',
    title: 'Semaine 2 : Voyelles & Assemblage des Mots',
    goal: 'Lire vos premiers mots complets en liant les lettres',
    image: '/visuels/semaine2-mots.jpg',
    imageAlt: 'Tablette avec leçon de lecture de mots arabes voyellés et cahier d’étude',
    summary: 'Les voyelles courtes (Fatha, Kasra, Damma) et les prolongations (Alif, Waw, Ya) entrent en jeu. Vous assemblez les syllabes pour former et déchiffrer des mots réels en toute simplicité.',
    lessons: [
      'Jour 8 à 9 : Les trois voyelles courtes et le silence (Soukoun)',
      'Jour 10 à 11 : Les voyelles longues (prolongations douces)',
      'Jour 12 à 13 : L’assemblage fluide de 2 et 3 syllabes',
      'Jour 14 : Lecture guidée de plus de 40 mots concrets',
    ],
    highlight: 'Résultat : Les lettres ne sont plus des symboles isolés, mais des mots que vous lisez.',
  },
  {
    id: 3,
    n: '03',
    arabic: 'الآيات المباركة',
    title: 'Semaine 3 : Premiers Versets & Règles Essentielles',
    goal: 'Déchiffrer des phrases et versets du Coran pas à pas',
    image: '/visuels/semaine3-versets.jpg',
    imageAlt: 'Noble Coran ouvert avec calligraphie dorée et enluminure de Sourate Al-Fatiha',
    summary: 'Vous découvrez la Chaddah (doublement), le Tanwin et les liaisons coraniques. Vous commencez à lire des extraits courts des sourates familières (comme Al-Fatiha et les dernières sourates).',
    lessons: [
      'Jour 15 à 16 : Le Tanwin et la Chaddah démystifiés',
      'Jour 17 à 18 : L’article défini (Al-) et les lettres solaires/lunaires',
      'Jour 19 à 20 : Décryptage verset par verset de sourates courtes',
      'Jour 21 : Entraînement au rythme et à la respiration',
    ],
    highlight: 'Résultat : Vous lisez vos premiers versets directement depuis le texte arabe sacré.',
  },
  {
    id: 4,
    n: '04',
    arabic: 'الاستقلالية والطلاقة',
    title: 'Semaine 4 : Autonomie Complète & Lecture du Mushaf',
    goal: 'Ouvrir le Mushaf et lire par vous-même avec confiance',
    image: '/visuels/semaine4-mushaf.jpg',
    imageAlt: 'Coran ouvert sur support Rehal en bois sculpté avec chapelet Tasbih',
    summary: 'Vous consolidez votre fluidité, apprenez les signes d’arrêt du Coran et validez votre autonomie. Vous n’avez plus peur d’ouvrir le Livre saint : le chemin vous est désormais familier.',
    lessons: [
      'Jour 22 à 24 : Les signes de ponctuation et règles d’arrêt dans le Mushaf',
      'Jour 25 à 27 : Pratique de lecture continue sur différentes pages',
      'Jour 28 à 29 : Conseils d’or pour entretenir et accélérer sa fluidité',
      'Jour 30 : Célébration du parcours & remise de votre plan de révision continue',
    ],
    highlight: 'Résultat : Le Coran est un livre ouvert que vous pouvez lire chaque jour dans votre prière.',
  },
]

export const comparison = {
  before: [
    'Vous ouvrez le Coran et vous vous sentez bloqué devant les lettres',
    'Vous écoutez les récitations mais vous aimeriez tant lire par vous-même',
    'Vous avez déjà essayé des cours trop denses ou théoriques qui vous ont découragé',
    'Vous manquez de temps et vous craignez de ne pas tenir sur la durée',
  ],
  after: [
    'Vous savez déchiffrer chaque mot, calmement et avec sérénité',
    'Votre salat et vos invocations prennent une saveur et une profondeur nouvelle',
    'Vous avancez grâce à une méthode douce, 15 min par jour, sans surcharge mentale',
    'Vous avez accès à vie aux vidéos pour réviser dès que vous en ressentez le besoin',
  ],
}

export const audienceFit = {
  yes: [
    'Vous partez de zéro absolu ou avez quelques souvenirs flous',
    'Vous voulez une méthode claire, structurée et bienveillante',
    'Vous disposez de 15 à 30 minutes par jour à votre convenance',
    'Vous voulez être capable de lire le Coran dans sa langue originale',
  ],
  no: [
    'Vous cherchez un cursus universitaire de tajwîd ultra-avancé',
    'Vous cherchez un cours de grammaire ou de linguistique approfondie',
    'Vous ne disposez d’aucun smartphone ou appareil avec accès internet',
    'Vous souhaitez revendre ou diffuser publiquement le contenu',
  ],
}

export const testimonials = [
  {
    name: 'Amina K.',
    city: 'Cotonou',
    rating: 5,
    text: 'Depuis des années je voulais apprendre. Les méthodes classiques étaient trop rapides pour moi. Avec Rihla, les vidéos sont courtes et limpides. En 3 semaines, je déchiffrais déjà Sourate Al-Ikhlas seule !',
  },
  {
    name: 'Ibrahim S.',
    city: 'Abidjan',
    rating: 5,
    text: 'Le format 15 minutes par jour est parfait avec le travail. On ne se sent jamais submergé. Pour 1 000 F CFA, c’est le meilleur investissement que j’ai fait pour ma foi.',
  },
  {
    name: 'Mariam D.',
    city: 'Dakar',
    rating: 5,
    text: 'Les supports visuels et les fiches sont magnifiques. Tout est clair, le son est net. J’ai enfin vaincu ma peur de me tromper en lisant.',
  },
]

export const faqs = [
  {
    q: 'Est-ce vraiment adapté si je n’ai jamais lu une seule lettre arabe ?',
    a: 'Absolument. Le Pack Rihla a été spécialement conçu pour les débutants complets. Nous reprenons chaque lettre depuis le début, avec sa forme, son son et des astuces visuelles pour ne jamais la confondre.',
  },
  {
    q: 'Comment s’effectue la livraison après le paiement ?',
    a: 'Dès validation de votre commande sur notre boutique en ligne, vous recevez instantanément votre lien d’accès privé Google Drive contenant toutes les vidéos HD, les manuels PDF, les audios ainsi que votre Certificat Officiel d’accès personnel.',
  },
  {
    q: 'L’accès est-il limité dans le temps ou soumis à abonnement ?',
    a: 'Non, aucun abonnement ni frais cachés. Votre paiement de 1 000 F CFA est unique et vous donne un accès illimité à vie. Vous pouvez suivre le programme en 30 jours ou prendre 3 mois si vous préférez.',
  },
  {
    q: 'Sur quels appareils puis-je suivre les cours ?',
    a: 'Sur tous vos appareils : smartphone (Android & iPhone), tablette (iPad, Samsung...), ordinateur (Windows, Mac) ou même TV connectée via Google Drive.',
  },
  {
    q: 'Combien de temps par jour dois-je consacrer au programme ?',
    a: 'Entre 15 et 30 minutes par jour suffisent largement. La régularité quotidienne est la clé du succès. Chaque module est découpé en séquences courtes et digestes.',
  },
  {
    q: 'Quels sont les moyens de paiement acceptés ?',
    a: 'Sur notre boutique officielle Maketou, vous pouvez régler en toute sécurité par Mobile Money (MTN, Moov, Wave, Orange Money, etc.) ou par carte bancaire selon votre pays.',
  },
]
