// ── Données des boissons ──────────────────────────────────────────────────────
const drinks = [
  {
    letter: 'A', name: 'Aperol Spritz', slug: 'aperol-spritz',
    tagline: "L'apéro iconique d'Italie",
    accent: '#e8733a', glow: 'rgba(232,115,58,0.12)', strength: 2,
    ingredients: [
      '9 cl Prosecco bien froid',
      '6 cl Aperol',
      '3 cl eau gazeuse (Perrier)',
      '1 rondelle d\'orange'
    ],
    instructions: 'Remplissez un grand verre ballon de glaçons. Versez le Prosecco en premier, puis l\'Aperol, enfin l\'eau pétillante. Remuez très légèrement. Garnissez d\'une rondelle d\'orange. Rituel apéro depuis 1950.'
  },
  {
    letter: 'B', name: 'Bloody Mary', slug: 'bloody-mary',
    tagline: "Le cocktail du lendemain matin",
    accent: '#c0392b', glow: 'rgba(192,57,43,0.12)', strength: 3,
    ingredients: [
      '5 cl vodka',
      '10 cl jus de tomate',
      '1.5 cl jus de citron',
      '3 traits de Tabasco',
      'Sel de céleri, poivre noir',
      '1 branche de céleri'
    ],
    instructions: 'Versez tous les ingrédients dans un shaker avec de la glace. Roulez doucement (ne shakez pas trop). Versez dans un grand verre rempli de glaçons. Garnissez d\'une branche de céleri. Le "hair of the dog" par excellence.'
  },
  {
    letter: 'C', name: 'Cuba Libre', slug: 'cuba-libre',
    tagline: "Rhum, Coca, liberté !",
    accent: '#c8903a', glow: 'rgba(200,144,58,0.12)', strength: 3,
    ingredients: [
      '5 cl rhum blanc (Havana Club 3 ans)',
      '12 cl Coca-Cola bien frais',
      '1.5 cl jus de citron vert',
      '1 quartier de lime'
    ],
    instructions: 'Remplissez un verre highball de glaçons. Ajoutez le jus de citron vert, versez le rhum. Complétez doucement avec le Coca pour garder les bulles. Pressez légèrement le quartier de lime sur le bord. Remuez une seule fois. Né en 1900 à Cuba lors de la guerre d\'indépendance.'
  },
  {
    letter: 'D', name: 'Daiquiri', slug: 'daiquiri',
    tagline: "Le classique de Hemingway",
    accent: '#d4af37', glow: 'rgba(212,175,55,0.12)', strength: 3,
    ingredients: [
      '6 cl rhum blanc',
      '2.5 cl jus de citron vert frais',
      '1.5 cl sirop de sucre de canne'
    ],
    instructions: 'Shakez vigoureusement tous les ingrédients avec de la glace pendant 15 secondes. Filtrez (double filtration idéalement) dans une coupe à cocktail bien froide. Pas de glaçon dans la coupe. Garnissez d\'un zeste de lime. Hemingway en buvait plusieurs par jour au Floridita, La Havane.'
  },
  {
    letter: 'E', name: 'Espresso Martini', slug: 'espresso-martini',
    tagline: "Caféine & élégance",
    accent: '#8b5a2b', glow: 'rgba(139,90,43,0.12)', strength: 3,
    ingredients: [
      '5 cl vodka',
      '3 cl liqueur de café (Kahlúa ou Mr Black)',
      '3 cl espresso fraîchement tiré',
      '0.5 cl sirop de sucre'
    ],
    instructions: 'Laissez l\'espresso tiédir 2 minutes. Shakez fort tous les ingrédients avec beaucoup de glace pendant 15-20 secondes. Filtrez dans une coupe froide. La belle mousse crémeuse est le signe d\'un bon Espresso Martini. Posez 3 grains de café dessus.'
  },
  {
    letter: 'F', name: 'French 75', slug: 'french-75',
    tagline: "Pétillant comme Paris",
    accent: '#c8b97a', glow: 'rgba(200,185,122,0.12)', strength: 3,
    ingredients: [
      '3 cl gin London Dry',
      '1.5 cl jus de citron frais',
      '1.5 cl sirop de sucre',
      'Champagne (ou crémant) pour compléter'
    ],
    instructions: 'Shakez le gin, le jus de citron et le sirop avec de la glace. Filtrez dans une flûte à champagne froide. Complétez doucement de champagne bien frais. Ne remuez pas. Exprimez un zeste de citron sur la surface. Nommé d\'après le canon français de 75mm — aussi puissant.'
  },
  {
    letter: 'G', name: 'Gin Tonic', slug: 'gin-tonic',
    tagline: "L'indémodable britannique",
    accent: '#4caf50', glow: 'rgba(76,175,80,0.10)', strength: 2,
    ingredients: [
      '5 cl gin de qualité (Hendrick\'s, Tanqueray…)',
      '15 cl tonic premium (Fever-Tree, 1724…)',
      'Garniture selon le gin : concombre, romarin, poivre rose…'
    ],
    instructions: 'Remplissez un grand verre ballon de glaçons de qualité. Versez le gin. Ajoutez le tonic en filet le long du bord pour préserver les bulles. Remuez une fois de bas en haut. Garnissez selon le gin : concombre pour Hendrick\'s, citron pour Tanqueray, baies de genièvre pour Monkey 47.'
  },
  {
    letter: 'H', name: 'Harvey Wallbanger', slug: 'harvey-wallbanger',
    tagline: "Groovy depuis les années 70",
    accent: '#ff8c00', glow: 'rgba(255,140,0,0.12)', strength: 2,
    ingredients: [
      '4 cl vodka',
      '10 cl jus d\'orange fraîchement pressé',
      '2 cl Galliano (liqueur herbacée italienne)'
    ],
    instructions: 'Remplissez un grand verre de glaçons. Versez la vodka puis le jus d\'orange. Mélangez légèrement. Faites flotter le Galliano sur le dessus en le versant lentement sur le dos d\'une cuillère — il reste en couche dorée. Ne mélangez pas après. Garnissez d\'une rondelle d\'orange.'
  },
  {
    letter: 'I', name: 'Irish Coffee', slug: 'irish-coffee',
    tagline: "La chaleur de l'Irlande",
    accent: '#8b6914', glow: 'rgba(139,105,20,0.12)', strength: 3,
    ingredients: [
      '4 cl whiskey irlandais (Jameson, Bushmills…)',
      '12 cl café noir fort et chaud',
      '1.5 cl sucre de canne roux',
      '4 cl crème liquide entière légèrement fouettée'
    ],
    instructions: 'Préchauffez le verre. Dissolvez le sucre dans le café chaud. Ajoutez le whiskey. Fouettez légèrement la crème (elle doit couler encore). Versez-la sur le dos d\'une cuillère froide pour qu\'elle flotte. Ne mélangez JAMAIS : on boit le café chaud au travers de la crème froide. Né à l\'aéroport de Foynes en 1943.'
  },
  {
    letter: 'J', name: 'Jungle Bird', slug: 'jungle-bird',
    tagline: "Tiki vibes des Caraïbes",
    accent: '#2e8b57', glow: 'rgba(46,139,87,0.12)', strength: 4,
    ingredients: [
      '4.5 cl rhum noir jamaïcain (Appleton Estate)',
      '2 cl Campari',
      '4.5 cl jus d\'ananas frais',
      '1.5 cl jus de citron vert',
      '1 cl sirop de sucre'
    ],
    instructions: 'Shakez tous les ingrédients vigoureusement avec de la glace. Filtrez dans un verre tiki ou un grand verre rempli de glace pilée. L\'amertume du Campari se marie parfaitement avec le sucré de l\'ananas et la puissance du rhum. Décorez d\'une feuille d\'ananas et d\'une cerise. Né au Hilton de Kuala Lumpur en 1978.'
  },
  {
    letter: 'K', name: 'Kir Royal', slug: 'kir-royal',
    tagline: "L'élégance de Bourgogne",
    accent: '#8e44ad', glow: 'rgba(142,68,173,0.12)', strength: 2,
    ingredients: [
      '1.5 cl crème de cassis (Dijon)',
      'Champagne brut bien froid pour compléter (~10 cl)'
    ],
    instructions: 'Versez la crème de cassis au fond d\'une flûte bien froide. Inclinez légèrement et versez le champagne en filet le long du bord. Ne remuez pas — les bulles feront le mélange. En version classique, remplacez le champagne par du Bourgogne aligoté. Inventé par le chanoine Kir, maire de Dijon.'
  },
  {
    letter: 'L', name: 'Long Island Iced Tea', slug: 'long-island-iced-tea',
    tagline: "Dangereux mais délicieux",
    accent: '#e8c87a', glow: 'rgba(232,200,122,0.12)', strength: 5,
    ingredients: [
      '1.5 cl vodka',
      '1.5 cl rhum blanc',
      '1.5 cl tequila blanco',
      '1.5 cl gin',
      '1.5 cl triple sec',
      '2 cl jus de citron',
      'Un trait de cola pour la couleur'
    ],
    instructions: 'Shakez tous les alcools avec le jus de citron et de la glace. Versez dans un grand verre rempli de glaçons. Ajoutez juste un trait de cola pour obtenir la couleur "thé glacé". Environ 22% d\'alcool. Paille obligatoire. Rondelle de citron. Ne sous-estimez jamais ce verre.'
  },
  {
    letter: 'M', name: 'Mojito', slug: 'mojito',
    tagline: "Cuba en bouche",
    accent: '#27ae60', glow: 'rgba(39,174,96,0.12)', strength: 2,
    ingredients: [
      '5 cl rhum blanc',
      '3 cl jus de citron vert frais',
      '2 cl sirop de sucre de canne',
      '8-10 feuilles de menthe fraîche',
      'Eau gazeuse pour compléter',
      'Glace pilée'
    ],
    instructions: 'Déposez la menthe dans le verre, ajoutez le sucre et le citron. Pressez DOUCEMENT — on veut libérer les arômes sans déchirer les feuilles. Remplissez de glace pilée. Ajoutez le rhum. Complétez d\'eau gazeuse. Remuez de bas en haut. Garnissez d\'un brin de menthe fraîche.'
  },
  {
    letter: 'N', name: 'Negroni', slug: 'negroni',
    tagline: "Bitter, fort, parfait",
    accent: '#c0392b', glow: 'rgba(192,57,43,0.12)', strength: 4,
    ingredients: [
      '3 cl gin',
      '3 cl Campari',
      '3 cl vermouth rouge (Martini Rosso ou Carpano Antica)'
    ],
    instructions: 'Versez les trois ingrédients dans un verre rempli d\'un gros glaçon. Remuez délicatement pendant 30 secondes — la dilution est clé. Filtrez dans un verre à whiskey avec un gros glaçon. Pressez un zeste d\'orange sur la surface, passez-le sur le bord, posez-le dans le verre. Né à Florence en 1919, commandé par le Comte Negroni.'
  },
  {
    letter: 'O', name: 'Old Fashioned', slug: 'old-fashioned',
    tagline: "Le père de tous les cocktails",
    accent: '#b8860b', glow: 'rgba(184,134,11,0.12)', strength: 4,
    ingredients: [
      '6 cl bourbon (Maker\'s Mark, Buffalo Trace…) ou rye whiskey',
      '1 morceau de sucre (ou 1 cl sirop)',
      '2-3 traits d\'Angostura bitters',
      'Zeste d\'orange et cerise au marasquin'
    ],
    instructions: 'Posez le sucre au fond d\'un verre à whiskey. Imbibez-le des bitters. Écrasez avec un pilon. Ajoutez un trait d\'eau pour dissoudre. Versez le whiskey. Ajoutez un énorme glaçon. Remuez lentement 20 fois. Pressez vigoureusement un zeste d\'orange au-dessus. Le cocktail original depuis 1806.'
  },
  {
    letter: 'P', name: 'Piña Colada', slug: 'pina-colada',
    tagline: "Vacances en verre",
    accent: '#e8d5a3', glow: 'rgba(232,213,163,0.12)', strength: 3,
    ingredients: [
      '5 cl rhum blanc (ou brun)',
      '5 cl crème de coco (Coco López)',
      '10 cl jus d\'ananas frais',
      'Ananas et cerise pour décorer'
    ],
    instructions: 'Versez tous les ingrédients dans un blender avec 1 grande poignée de glace pilée. Mixez 20-30 secondes jusqu\'à obtenir un mélange onctueux. Versez dans un grand verre. Décorez d\'un morceau d\'ananas, d\'une cerise et d\'une ombrelle. Inventé en 1954 au Caribe Hilton de San Juan, Porto Rico.'
  },
  {
    letter: 'Q', name: "Queen's Park Swizzle", slug: 'queens-park-swizzle',
    tagline: "Trinidad, circa 1920",
    accent: '#e84393', glow: 'rgba(232,67,147,0.12)', strength: 4,
    ingredients: [
      '6 cl rhum vieux de Trinidad ou Barbade',
      '2 cl jus de citron vert frais',
      '2 cl sirop de sucre de canne',
      '8 feuilles de menthe fraîche',
      '3 traits d\'Angostura bitters'
    ],
    instructions: 'Déposez la menthe au fond d\'un verre highball et écrasez-la doucement. Remplissez de glace pilée jusqu\'en haut. Ajoutez le rhum, le citron vert et le sirop. Swizzlez (frottez le bâton entre les paumes) ou remuez de bas en haut. Versez les bitters dessus en couche. Garnissez de menthe. L\'ancêtre du Mojito.'
  },
  {
    letter: 'R', name: 'Rossini', slug: 'rossini',
    tagline: "Spritz aux fraises",
    accent: '#e8474a', glow: 'rgba(232,71,74,0.12)', strength: 2,
    ingredients: [
      '10 cl Prosecco bien frais',
      '5 cl purée de fraises fraîches mixées et filtrées'
    ],
    instructions: 'Mixez des fraises fraîches mûres et passez-les au tamis fin pour obtenir une purée lisse sans graines. Versez-la au fond d\'une flûte froide. Inclinez et versez délicatement le Prosecco en filet. Garnissez d\'une fraise sur le bord. Cousin du Bellini (à la pêche), inventé à Venise.'
  },
  {
    letter: 'S', name: 'Sex on the Beach', slug: 'sex-on-the-beach',
    tagline: "Le cocktail de toutes les soirées",
    accent: '#ff6b35', glow: 'rgba(255,107,53,0.12)', strength: 3,
    ingredients: [
      '4 cl vodka',
      '2 cl schnapps à la pêche (DeKuyper)',
      '4 cl jus d\'orange frais',
      '4 cl jus de canneberge (cranberry)'
    ],
    instructions: 'Shakez la vodka, le schnapps et le jus d\'orange avec de la glace. Versez dans un grand verre rempli de glaçons. Ajoutez délicatement le jus de cranberry en dernier — il coule au fond et crée un beau dégradé orange-rouge. Garnissez d\'une tranche d\'orange. Né en Floride dans les années 80.'
  },
  {
    letter: 'T', name: 'Tequila Sunrise', slug: 'tequila-sunrise',
    tagline: "L'aube dans un verre",
    accent: '#e8733a', glow: 'rgba(232,115,58,0.12)', strength: 3,
    ingredients: [
      '5 cl tequila blanco',
      '10 cl jus d\'orange fraîchement pressé',
      '1.5 cl grenadine'
    ],
    instructions: 'Remplissez un verre highball de glaçons. Versez la tequila puis le jus d\'orange. Versez ensuite la grenadine en filet contre le bord — elle descend au fond, créant le dégradé rouge-orange-jaune du lever de soleil. Ne mélangez surtout pas ! Garnissez d\'une rondelle d\'orange et d\'une cerise. Les Eagles lui ont dédié une chanson en 1973.'
  },
  {
    letter: 'U', name: 'Unicum Shot', slug: 'unicum',
    tagline: "La bête noire hongroise",
    accent: '#888800', glow: 'rgba(136,136,0,0.12)', strength: 4,
    ingredients: [
      '4 cl Unicum (liqueur amère hongroise aux 40 herbes)',
      'Optionnel : 1 cl de pálinka (schnaps de prune)'
    ],
    instructions: 'L\'Unicum se boit en shot, pur, à température ambiante ou légèrement frais. Versez dans un petit verre à shot. Certains le coupent avec de la pálinka pour un double shot hongrois. Macéré depuis 1790 dans des fûts de chêne avec 40 herbes et épices secrètes. Préparation : juste verser. Courage : indispensable.'
  },
  {
    letter: 'V', name: 'Vodka Martini', slug: 'vodka-martini',
    tagline: "Shaken, not stirred",
    accent: '#a8c8e8', glow: 'rgba(168,200,232,0.10)', strength: 4,
    ingredients: [
      '7 cl vodka premium (très froide)',
      '1 cl vermouth dry (Noilly Prat)',
      'Zeste de citron ou olive verte'
    ],
    instructions: 'Passez la coupe à martini 5 minutes au congélateur. Pour la version "shaken" (Bond) : shakez fort 15 secondes — légèrement trouble et plus dilué. Pour la version "stirred" (puriste) : remuez 45 secondes — limpide, froid. Filtrez dans la coupe glacée. Pressez un zeste de citron sur la surface ou ajoutez une olive. Classe absolue.'
  },
  {
    letter: 'W', name: 'Whiskey Sour', slug: 'whiskey-sour',
    tagline: "Aigre-doux, une révélation",
    accent: '#d4af37', glow: 'rgba(212,175,55,0.12)', strength: 3,
    ingredients: [
      '5 cl bourbon (Woodford Reserve, Four Roses…)',
      '2.5 cl jus de citron jaune frais',
      '2 cl sirop de sucre',
      '1 blanc d\'œuf (optionnel mais recommandé)'
    ],
    instructions: 'Si vous utilisez le blanc d\'œuf : dry shake d\'abord (sans glaçons) 15 secondes pour faire mousser. Puis ajoutez de la glace et shakez à nouveau fort. Filtrez dans un verre avec un gros glaçon. La mousse blanche doit recouvrir toute la surface. Ajoutez quelques traits d\'Angostura et faites un motif. Cerise marasquin et zeste d\'orange.'
  },
  {
    letter: 'X', name: 'Xalixco', slug: 'xalixco',
    tagline: "Mezcal fumé & agrumes",
    accent: '#c8913a', glow: 'rgba(200,145,58,0.12)', strength: 3,
    ingredients: [
      '5 cl mezcal (fumé, Espadín ou Joven)',
      '3 cl jus de pamplemousse rose frais',
      '2 cl jus de citron vert',
      '1.5 cl sirop d\'agave',
      'Sel fumé pour le bord'
    ],
    instructions: 'Passez le bord du verre dans du sel fumé (ou sel + piment). Remplissez de glaçons. Shakez le mezcal, le jus de pamplemousse, le citron vert et le sirop d\'agave avec de la glace. Filtrez dans le verre. Le goût fumé du mezcal se marie magnifiquement avec l\'acidité des agrumes. Cousin mexicain de la Margarita.'
  },
  {
    letter: 'Y', name: 'Yellow Bird', slug: 'yellow-bird',
    tagline: "Tiki des Caraïbes ensoleillées",
    accent: '#ffd700', glow: 'rgba(255,215,0,0.10)', strength: 3,
    ingredients: [
      '4 cl rhum blanc des Caraïbes',
      '1 cl Galliano (liqueur herbacée)',
      '1 cl triple sec (Cointreau)',
      '1.5 cl jus de citron vert frais'
    ],
    instructions: 'Shakez vigoureusement tous les ingrédients avec de la glace pendant 15 secondes. Filtrez dans un verre à cocktail givré ou servez sur glace dans un verre highball. Garnissez d\'un quartier de lime. Saveurs tropicales et herbacées. Un cocktail joyeux né dans les Caraïbes dans les années 50.'
  },
  {
    letter: 'Z', name: 'Zombie', slug: 'zombie',
    tagline: "Le cocktail qui ressuscite les morts",
    accent: '#39ff14', glow: 'rgba(57,255,20,0.08)', strength: 5,
    ingredients: [
      '4.5 cl rhum blanc',
      '4.5 cl rhum ambré jamaïcain',
      '2 cl rhum Demerara (ou rhum 151 proof à flotter)',
      '1.5 cl Falernum (sirop épicé)',
      '2 cl jus de citron vert',
      '1 cl grenadine maison',
      '1 trait d\'Angostura bitters'
    ],
    instructions: 'Shakez tout sauf le rhum 151 avec de la glace. Versez dans un grand verre tiki sur glace pilée. Faites flotter le rhum 151 en le versant doucement sur le dos d\'une cuillère. Décorez avec feuille d\'ananas, cerise, ombrelle. Certains bars limitent à 2 par personne. Inventé en 1934 par Don the Beachcomber à Hollywood. Soyez prévenus.'
  }
];

// ── État global ───────────────────────────────────────────────────────────────
let currentIndex = -1; // -1 = hero visible

// ── Références DOM ────────────────────────────────────────────────────────────
const progressBar  = document.getElementById('progress-bar');
const slidesWrap   = document.getElementById('slides-container');
const dotsWrap     = document.querySelector('.nav-dots');
const scrollHint   = document.getElementById('scroll-hint');

let slides = [];
let dots   = [];

// ── Build slides ──────────────────────────────────────────────────────────────
function buildSlides() {
  drinks.forEach((d, i) => {
    // ---- pips de force
    const pips = Array.from({ length: 5 }, (_, k) =>
      `<span class="pip${k < d.strength ? ' filled' : ''}"></span>`
    ).join('');
    const strengthLabel = ['', 'Léger', 'Doux', 'Moyen', 'Corsé', 'Très fort'][d.strength];

    // ---- image avec fallback
    const imgSrc = `boisson/${d.slug}.png`;
    const imgHtml = `
      <img
        class="drink-photo"
        src="${imgSrc}"
        alt="Photo de ${d.name}"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
      >
      <div class="drink-photo-fallback" style="display:none;" aria-hidden="true">🍹</div>
    `;

    // ---- slide
    const slide = document.createElement('section');
    slide.className = 'slide';
    slide.id = `slide-${i}`;
    slide.setAttribute('aria-label', `${d.letter} — ${d.name}`);
    slide.style.cssText = `--accent:${d.accent}; --accent-glow:${d.glow};`;

    slide.innerHTML = `
      <div class="slide-inner">
        <div class="slide-visual">
          <div class="big-bg-letter" aria-hidden="true">${d.letter}</div>
          ${imgHtml}
          <div class="drink-label">${d.name}</div>
          <div class="strength-bar" aria-label="Force : ${strengthLabel}">
            <div class="strength-pips" aria-hidden="true">${pips}</div>
            ${strengthLabel}
          </div>
        </div>
        <div class="slide-content">
          <div class="letter-badge" aria-label="Lettre ${d.letter}">${d.letter}</div>
          <h2>${d.name}</h2>
          <p class="tagline">${d.tagline}</p>
          <p class="section-label">Ingrédients</p>
          <ul class="ingredients-list" aria-label="Ingrédients">
            ${d.ingredients.map(ing => `<li>${ing}</li>`).join('')}
          </ul>
          <p class="section-label">Préparation</p>
          <p class="instructions">${d.instructions}</p>
        </div>
      </div>
    `;

    slidesWrap.appendChild(slide);

    // séparateur
    if (i < drinks.length - 1) {
      const sep = document.createElement('div');
      sep.className = 'separator';
      sep.setAttribute('aria-hidden', 'true');
      slidesWrap.appendChild(sep);
    }

    // dot nav
    const dot = document.createElement('button');
    dot.className = 'nav-dot';
    dot.setAttribute('aria-label', `${d.letter} — ${d.name}`);
    dot.title = `${d.letter} — ${d.name}`;
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });

  slides = Array.from(document.querySelectorAll('.slide'));
  dots   = Array.from(document.querySelectorAll('.nav-dot'));
}

// ── Navigation vers un slide (snap centré) ────────────────────────────────────
function goToSlide(index) {
  if (index < 0) {
    currentIndex = -1;
    dots.forEach(d => d.classList.remove('active'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  if (index >= slides.length) return;

  // Mise à jour immédiate de l'index et des dots
  currentIndex = index;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));

  const slide = slides[index];
  const rect  = slide.getBoundingClientRect();
  const targetY = window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2;

  window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
}

// ── Tap zones (haut / bas de l'écran) ────────────────────────────────────────
const tapPrev = document.createElement('div');
tapPrev.className = 'tap-zone tap-zone-prev';
tapPrev.setAttribute('aria-label', 'Boisson précédente');
tapPrev.setAttribute('role', 'button');
tapPrev.setAttribute('tabindex', '0');

const tapNext = document.createElement('div');
tapNext.className = 'tap-zone tap-zone-next';
tapNext.setAttribute('aria-label', 'Boisson suivante');
tapNext.setAttribute('role', 'button');
tapNext.setAttribute('tabindex', '0');

tapPrev.addEventListener('click', () => goToSlide(currentIndex - 1));
tapNext.addEventListener('click', () => goToSlide(currentIndex + 1));
tapPrev.addEventListener('keydown', e => e.key === 'Enter' && goToSlide(currentIndex - 1));
tapNext.addEventListener('keydown', e => e.key === 'Enter' && goToSlide(currentIndex + 1));

document.body.appendChild(tapPrev);
document.body.appendChild(tapNext);

// ── Scroll hint → premier slide ───────────────────────────────────────────────
scrollHint.addEventListener('click', () => goToSlide(0));

// ── IntersectionObserver — reveal uniquement ──────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.45 });

// ── Progress bar + sync index sur scroll manuel ───────────────────────────────
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = Math.min(100, (scrollTop / docH) * 100) + '%';

  // Hero
  if (scrollTop < window.innerHeight * 0.3) {
    currentIndex = -1;
    dots.forEach(d => d.classList.remove('active'));
    return;
  }

  // Trouver le slide le plus centré dans la fenêtre
  const mid = scrollTop + window.innerHeight / 2;
  let closest = -1, closestDist = Infinity;
  slides.forEach((s, i) => {
    const sTop = s.offsetTop + s.offsetHeight / 2;
    const dist = Math.abs(sTop - mid);
    if (dist < closestDist) { closestDist = dist; closest = i; }
  });
  if (closest !== -1 && closest !== currentIndex) {
    currentIndex = closest;
    dots.forEach((d, i) => d.classList.toggle('active', i === closest));
  }
}, { passive: true });

// ── Clavier ───────────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown' || e.key === 'PageDown') {
    e.preventDefault();
    goToSlide(currentIndex + 1);
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault();
    goToSlide(currentIndex - 1);
  }
});

// ── Init ──────────────────────────────────────────────────────────────────────
buildSlides();
slides.forEach(s => observer.observe(s));