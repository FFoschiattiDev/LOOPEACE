(function () {
  'use strict';

  // --- Translation Dictionary ---
  const TRANSLATIONS = {
    en: {
      masthead: {
        sub: "Curated Craft &amp; Provenance",
        edition: "Autumn / Winter Edition &bull; Small-Batch Loopeace Release",
        bag: "Bag",
        searchAria: "Search catalog",
        searchPlaceholder: "Search pieces…"
      },
      search: {
        placeholder: "Search pieces…",
        searching: "Searching: {query}",
        empty: "No pieces found for \"{query}\" — try another search",
        clear: "Clear search"
      },
      intro: {
        headline: "Objects of enduring craft, shaped by human hands.",
        description: "Each piece in our seasonal atelier represents singular material integrity. Hand-turned oak, wheel-thrown stoneware, pit-fired ceramics, and cold-pressed botanical infusions created in limited editions."
      },
      filter: {
        all: "All Works",
        ceramics: "Ceramics",
        textiles: "Textiles",
        woodwork: "Woodwork",
        apothecary: "Apothecary"
      },
      disciplines: {
        all: "Displaying All Disciplines",
        ceramics: "Displaying Ceramics (Studio Kiso & Atelier Vence)",
        textiles: "Displaying Textiles (Clare Atelier & Normandy Linen)",
        woodwork: "Displaying Woodwork (Småland Oak & Hida Cedar)",
        apothecary: "Displaying Apothecary (Sainte-Baume Botanicals)"
      },
      product: {
        buyNow: "Buy Now",
        addedToast: "Added \"{title}\" to collection",
        viewBag: "View Bag &rarr;"
      },
      products: {
        1: {
          title: "Raw Earth Fluted Amphora",
          provenance: "Ceramics &bull; Studio Kiso, Nagano",
          material: "Coarse stoneware with matte feldspar glaze, wood-fired for 48 hours.",
          badge: "Edition 01 / 24"
        },
        2: {
          title: "Indigo Loomed Wool Blanket",
          provenance: "Textiles &bull; Clare Atelier, Ireland",
          material: "Unspun organic highland fleece and raw flax linen, natural botanical indigo dip.",
          badge: "Edition 04 / 15"
        },
        3: {
          title: "Smoked Oak Pedestal Board",
          provenance: "Woodwork &bull; M. Lindqvist, Småland",
          material: "Felled windthrow European white oak, smoked with peat moss and sealed in organic walnut oil.",
          badge: "Edition 02 / 18"
        },
        4: {
          title: "Cypress & Wild Vetiver Oil",
          provenance: "Apothecary &bull; Distillerie Sainte-Baume",
          material: "Cold steam distilled Mediterranean cypress needles, wild root vetiver, bitter resin in 100ml amber glass.",
          badge: "Batch Nº 09"
        },
        5: {
          title: "Ash-Glazed Shallow Serving Bowl",
          provenance: "Ceramics &bull; Atelier Vence, Provence",
          material: "Terracotta body fired with pine ash glaze, exhibiting subtle green crystallization.",
          badge: "Edition 08 / 30"
        },
        6: {
          title: "Washed Linen Atelier Robe",
          provenance: "Textiles &bull; Linen Workshop, Normandy",
          material: "Heavyweight French flax linen tumbled with volcanic pumice for soft tactile structure.",
          badge: "Edition 03 / 12"
        },
        7: {
          title: "Charred Cedar Sculptural Basin",
          provenance: "Woodwork &bull; Studio Hida, Gifu",
          material: "Old-growth Japanese red cedar gouged by hand and treated with traditional shou sugi ban flame finish.",
          badge: "Unique Piece 01 / 01"
        },
        8: {
          title: "Bitter Orange & Smoked Resin",
          provenance: "Apothecary &bull; Botanica Occitane",
          material: "Pressed bricks of organic citrus rind, wild frankincense tears, and charred cedar bark shavings.",
          badge: "Batch Nº 14"
        }
      },
      manifesto: {
        title: "The Discipline of Provenance",
        text: "Every piece released by LOOPEACE is numbered, cataloged, and shipped directly with maker documentation and an archival certificate of authenticity. We do not mass-produce; editions close permanently when materials run their natural course.",
        tag1: "Small-Batch Guild",
        tag2: "Direct Artisan Equity",
        tag3: "Biodegradable Packing",
        tag4: "Global Insured Dispatch"
      },
      drawer: {
        title: "Atelier Bag",
        countSingular: "edition",
        countPlural: "editions",
        emptyTitle: "Your bag is currently unfilled",
        emptySub: "Explore our curated craft disciplines to begin collecting archival atelier pieces.",
        subtotal: "Subtotal",
        shipping: "Complimentary white-glove packaging &amp; insured courier delivery included.",
        checkout: "Instant Checkout",
        remove: "Remove",
        qtyDecrease: "Decrease quantity",
        qtyIncrease: "Increase quantity"
      },
      confirmation: {
        title: "Reservation Confirmed",
        sub: "Your archival atelier pieces have been set aside for white-glove courier packaging.",
        recordLabel: "Reservation Record",
        editionsLabel: "Editions Reserved",
        totalLabel: "Total Amount",
        certLabel: "Provenance Certificate",
        certValue: "Archival Stamp Included",
        returnBtn: "Return to Atelier Gallery",
        toastConfirmed: "Reservation confirmed. Thank you for collecting with us."
      }
    },

    es: {
      masthead: {
        sub: "Artesanía Curada y Procedencia",
        edition: "Edición Otoño / Invierno &bull; Lanzamiento Loopeace en Lotes Pequeños",
        bag: "Bolsa",
        searchAria: "Buscar en el catálogo",
        searchPlaceholder: "Buscar piezas…"
      },
      search: {
        placeholder: "Buscar piezas…",
        searching: "Buscando: {query}",
        empty: "No se encontraron piezas para \"{query}\" — prueba con otra búsqueda",
        clear: "Limpiar búsqueda"
      },
      intro: {
        headline: "Objetos de artesanía perdurable, moldeados por manos humanas.",
        description: "Cada pieza en nuestro taller estacional representa una singular integridad material. Roble torneado a mano, gres modelado en torno, cerámica cocida en fosa e infusiones botánicas prensadas en frío creadas en ediciones limitadas."
      },
      filter: {
        all: "Todas las Obras",
        ceramics: "Cerámica",
        textiles: "Textiles",
        woodwork: "Madera",
        apothecary: "Boticario"
      },
      disciplines: {
        all: "Mostrando Todas las Disciplinas",
        ceramics: "Mostrando Cerámica (Studio Kiso y Atelier Vence)",
        textiles: "Mostrando Textiles (Clare Atelier y Lino de Normandía)",
        woodwork: "Mostrando Madera (Roble de Småland y Cedro de Hida)",
        apothecary: "Mostrando Boticario (Botánicos de Sainte-Baume)"
      },
      product: {
        buyNow: "Comprar Ahora",
        addedToast: "Añadido \"{title}\" a la colección",
        viewBag: "Ver Bolsa &rarr;"
      },
      products: {
        1: {
          title: "Ánfora Estriada de Tierra Virgen",
          provenance: "Cerámica &bull; Studio Kiso, Nagano",
          material: "Gres rugoso con esmalte mate de feldespato, cocido a leña durante 48 horas.",
          badge: "Edición 01 / 24"
        },
        2: {
          title: "Manta de Lana Tejida en Índigo",
          provenance: "Textiles &bull; Clare Atelier, Irlanda",
          material: "Vellón orgánico de montaña sin hilar y lino crudo, teñido botánico en índigo natural.",
          badge: "Edición 04 / 15"
        },
        3: {
          title: "Tabla Pedestal de Roble Ahumado",
          provenance: "Madera &bull; M. Lindqvist, Småland",
          material: "Roble blanco europeo derribado por el viento, ahumado con turba y sellado con aceite de nuez.",
          badge: "Edición 02 / 18"
        },
        4: {
          title: "Aceite de Ciprés y Vetiver Silvestre",
          provenance: "Boticario &bull; Distillerie Sainte-Baume",
          material: "Agujas de ciprés mediterráneo destiladas al vapor en frío, raíz de vetiver silvestre y resina en vidrio ámbar de 100ml.",
          badge: "Lote Nº 09"
        },
        5: {
          title: "Cuenco Raso con Esmalte de Ceniza",
          provenance: "Cerámica &bull; Atelier Vence, Provenza",
          material: "Cuerpo de terracota cocido con esmalte de ceniza de pino, con sutil cristalización verde.",
          badge: "Edición 08 / 30"
        },
        6: {
          title: "Túnica de Taller en Lino Lavado",
          provenance: "Textiles &bull; Linen Workshop, Normandía",
          material: "Lino pesado de Normandía tratado con piedra pómez volcánica para una textura suave y táctil.",
          badge: "Edición 03 / 12"
        },
        7: {
          title: "Cuenco Escultórico de Cedro Quemado",
          provenance: "Madera &bull; Studio Hida, Gifu",
          material: "Cedro rojo japonés centenario vaciado a mano y tratado con el tradicional acabado al fuego shou sugi ban.",
          badge: "Pieza Única 01 / 01"
        },
        8: {
          title: "Naranja Amarga y Resina Ahumada",
          provenance: "Boticario &bull; Botanica Occitane",
          material: "Ladrillos prensados de cáscara de cítricos orgánicos, lágrimas de incienso silvestre y virutas de cedro.",
          badge: "Lote Nº 14"
        }
      },
      manifesto: {
        title: "La Disciplina de la Procedencia",
        text: "Cada pieza lanzada por LOOPEACE está numerada, catalogada y enviada directamente con documentación del creador y un certificado de autenticidad de archivo. No producimos en masa; las ediciones se cierran permanentemente cuando los materiales agotan su curso natural.",
        tag1: "Gremio de Lotes Pequeños",
        tag2: "Equidad Directa con el Artesano",
        tag3: "Embalaje Biodegradable",
        tag4: "Envío Asegurado Global"
      },
      drawer: {
        title: "Bolsa de Taller",
        countSingular: "edición",
        countPlural: "ediciones",
        emptyTitle: "Tu bolsa está actualmente vacía",
        emptySub: "Explora nuestras disciplinas artesanales para comenzar a coleccionar piezas de taller.",
        subtotal: "Subtotal",
        shipping: "Embalaje especial y entrega asegurada por mensajería incluidos.",
        checkout: "Finalizar Compra",
        remove: "Eliminar",
        qtyDecrease: "Disminuir cantidad",
        qtyIncrease: "Aumentar cantidad"
      },
      confirmation: {
        title: "Reserva Confirmada",
        sub: "Tus piezas de archivo han sido reservadas para su embalaje con guantes blancos.",
        recordLabel: "Registro de Reserva",
        editionsLabel: "Ediciones Reservadas",
        totalLabel: "Importe Total",
        certLabel: "Certificado de Procedencia",
        certValue: "Sello de Archivo Incluido",
        returnBtn: "Volver a la Galería del Taller",
        toastConfirmed: "Reserva confirmada. Gracias por coleccionar con nosotros."
      }
    },

    fr: {
      masthead: {
        sub: "Artisanat d'Art et Provenance",
        edition: "Édition Automne / Hiver &bull; Tirage Loopeace en Petites Séries",
        bag: "Panier",
        searchAria: "Rechercher dans le catalogue",
        searchPlaceholder: "Rechercher…"
      },
      search: {
        placeholder: "Rechercher…",
        searching: "Recherche : {query}",
        empty: "Aucune pièce trouvée pour « {query} » — essayez une autre recherche",
        clear: "Effacer la recherche"
      },
      intro: {
        headline: "Des objets d'artisanat durable, façonnés par la main de l'homme.",
        description: "Chaque pièce de notre atelier saisonnier incarne une intégrité matérielle unique. Chêne tourné à la main, grès façonné au tour, céramiques cuites en fosse et infusions botaniques pressées à froid créées en éditions limitées."
      },
      filter: {
        all: "Toutes les Œuvres",
        ceramics: "Céramiques",
        textiles: "Textiles",
        woodwork: "Ébénisterie",
        apothecary: "Apothicaire"
      },
      disciplines: {
        all: "Affichage de Toutes les Disciplines",
        ceramics: "Affichage Céramiques (Studio Kiso & Atelier Vence)",
        textiles: "Affichage Textiles (Clare Atelier & Lin de Normandie)",
        woodwork: "Affichage Ébénisterie (Chêne de Småland & Cèdre de Hida)",
        apothecary: "Affichage Apothicaire (Plantes de Sainte-Baume)"
      },
      product: {
        buyNow: "Acheter",
        addedToast: "Ajouté \"{title}\" à votre collection",
        viewBag: "Voir Panier &rarr;"
      },
      products: {
        1: {
          title: "Amphore Cannelée en Terre Brute",
          provenance: "Céramique &bull; Studio Kiso, Nagano",
          material: "Grès chamotté émaillé au feldspath mat, cuisson au bois pendant 48 heures.",
          badge: "Édition 01 / 24"
        },
        2: {
          title: "Plaid en Laine Tissé à l'Indigo",
          provenance: "Textiles &bull; Clare Atelier, Irlande",
          material: "Toison bio des hautes terres et lin brut, teinture végétale à l'indigo naturel.",
          badge: "Édition 04 / 15"
        },
        3: {
          title: "Planche Piédestal en Chêne Fumé",
          provenance: "Ébénisterie &bull; M. Lindqvist, Småland",
          material: "Chêne blanc d'Europe de chablis, fumé à la tourbe et protégé à l'huile de noix bio.",
          badge: "Édition 02 / 18"
        },
        4: {
          title: "Huile de Cyprès et Vétiver Sauvage",
          provenance: "Apothicaire &bull; Distillerie Sainte-Baume",
          material: "Aiguilles de cyprès distillées à froid, racine de vétiver sauvage et résine amère en flacon ambré 100ml.",
          badge: "Lot Nº 09"
        },
        5: {
          title: "Coupe Basse Émaillée à la Cendre",
          provenance: "Céramique &bull; Atelier Vence, Provence",
          material: "Terre cuite émaillée à la cendre de pin, révélant de subtiles cristallisations vertes.",
          badge: "Édition 08 / 30"
        },
        6: {
          title: "Robe d'Atelier en Lin Lavé",
          provenance: "Textiles &bull; Atelier du Lin, Normandie",
          material: "Lin lourd de Normandie adouci à la pierre ponce volcanique pour une structure souple.",
          badge: "Édition 03 / 12"
        },
        7: {
          title: "Bassin Sculptural en Cèdre Brûlé",
          provenance: "Ébénisterie &bull; Studio Hida, Gifu",
          material: "Cèdre rouge japonais sculpté à la gouge et fini selon la méthode traditionnelle shou sugi ban.",
          badge: "Pièce Unique 01 / 01"
        },
        8: {
          title: "Orange Amère et Résine Fumée",
          provenance: "Apothicaire &bull; Botanica Occitane",
          material: "Briques compressées d'écorces d'agrumes bio, larmes d'encens sauvage et copeaux de cèdre.",
          badge: "Lot Nº 14"
        }
      },
      manifesto: {
        title: "L'Exigence de la Provenance",
        text: "Chaque création de LOOPEACE est numérotée, répertoriée et expédiée avec son dossier d'artisan et un certificat d'authenticité d'archive. Nous ne produisons pas en série ; les éditions prennent fin dès que les matières premières s'épuisent.",
        tag1: "Guilde en Petites Séries",
        tag2: "Rémunération Juste des Artisans",
        tag3: "Emballage Biodégradable",
        tag4: "Expédition Sécurisée Internationale"
      },
      drawer: {
        title: "Panier d'Atelier",
        countSingular: "édition",
        countPlural: "éditions",
        emptyTitle: "Votre panier est actuellement vide",
        emptySub: "Explorez nos disciplines d'artisanat pour commencer à acquérir nos pièces d'atelier.",
        subtotal: "Sous-total",
        shipping: "Emballage soigné d'atelier et livraison sécurisée par coursier inclus.",
        checkout: "Commander",
        remove: "Retirer",
        qtyDecrease: "Diminuer quantité",
        qtyIncrease: "Augmenter quantité"
      },
      confirmation: {
        title: "Réservation Confirmée",
        sub: "Vos pièces d'atelier sont réservées pour leur emballage soigné.",
        recordLabel: "Numéro de Réservation",
        editionsLabel: "Éditions Réservées",
        totalLabel: "Montant Total",
        certLabel: "Certificat d'Authenticité",
        certValue: "Tampon d'Archive Inclus",
        returnBtn: "Retourner à la Galerie",
        toastConfirmed: "Réservation confirmée. Merci pour votre confiance."
      }
    }
  };

  // --- Product Catalog Database ---
  const PRODUCTS = [
    {
      id: 1,
      category: "ceramics",
      price: 140,
      image: "assets/ceramics-vase.jpg"
    },
    {
      id: 2,
      category: "textiles",
      price: 260,
      image: "assets/textiles-throw.jpg"
    },
    {
      id: 3,
      category: "woodwork",
      price: 185,
      image: "assets/woodwork-pedestal.jpg"
    },
    {
      id: 4,
      category: "apothecary",
      price: 65,
      image: "assets/apothecary-oil.jpg"
    },
    {
      id: 5,
      category: "ceramics",
      price: 110,
      image: "assets/ceramics-vase.jpg"
    },
    {
      id: 6,
      category: "textiles",
      price: 220,
      image: "assets/textiles-throw.jpg"
    },
    {
      id: 7,
      category: "woodwork",
      price: 310,
      image: "assets/woodwork-basin.jpg"
    },
    {
      id: 8,
      category: "apothecary",
      price: 48,
      image: "assets/apothecary-incense.jpg"
    }
  ];

  // --- Application State ---
  const state = {
    bag: [], // Array of { id, quantity }
    activeFilter: 'all',
    currentLang: 'en',
    searchQuery: '',
    isSearchOpen: false
  };

  // --- DOM Elements ---
  const langSelector = document.getElementById('langSelector');
  const bagTrigger = document.getElementById('bagTrigger');
  const bagCounter = document.getElementById('bagCounter');
  const bagDrawer = document.getElementById('bagDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerBody = document.getElementById('drawerBody');
  const drawerItemsList = document.getElementById('drawerItemsList');
  const emptyNotice = document.getElementById('emptyNotice');
  const drawerItemCount = document.getElementById('drawerItemCount');
  const drawerSubtotal = document.getElementById('drawerSubtotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const catalogGrid = document.getElementById('catalogGrid');
  const filterPills = document.querySelectorAll('.filter-pill');
  const disciplineStatus = document.getElementById('disciplineStatus');
  const toastIndicator = document.getElementById('toastIndicator');
  const toastMessage = document.getElementById('toastMessage');

  // Search DOM Elements
  const searchWrap = document.getElementById('searchWrap');
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  const searchQueryBanner = document.getElementById('searchQueryBanner');
  const searchQueryText = document.getElementById('searchQueryText');
  const searchQueryClear = document.getElementById('searchQueryClear');
  const searchEmptyState = document.getElementById('searchEmptyState');
  const searchEmptyText = document.getElementById('searchEmptyText');
  const searchResetBtn = document.getElementById('searchResetBtn');

  let toastTimeout = null;
  let lastFocusedElement = null;

  // --- Get Localized Product Property ---
  function getProductText(id, property) {
    const lang = state.currentLang;
    const itemTrans = TRANSLATIONS[lang]?.products?.[id] || TRANSLATIONS['en'].products[id];
    return itemTrans ? itemTrans[property] : '';
  }

  // --- Translation Engine ---
  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'en';
    state.currentLang = lang;
    document.documentElement.lang = lang;

    if (langSelector) {
      langSelector.value = lang;
    }

    const t = TRANSLATIONS[lang];

    // 1. Translate all static [data-i18n] elements
    const translatables = document.querySelectorAll('[data-i18n]');
    translatables.forEach(el => {
      const keyPath = el.getAttribute('data-i18n');
      const keys = keyPath.split('.');
      let val = t;
      for (const k of keys) {
        val = val ? val[k] : undefined;
      }
      if (val !== undefined) {
        el.innerHTML = val;
      }
    });

    // 2. Update Discipline Status text
    updateDisciplineStatusText();

    // 3. Update "Buy Now" button aria-labels on catalog cards
    document.querySelectorAll('.text-add-btn').forEach(btn => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      if (id) {
        const title = getProductText(id, 'title');
        btn.setAttribute('aria-label', `${t.product.buyNow}: ${title}`);
      }
    });

    // 4. Update Search controls placeholders and text
    if (searchInput) {
      searchInput.placeholder = t.masthead.searchPlaceholder || t.search?.placeholder || 'Search pieces…';
    }
    if (searchBtn) {
      searchBtn.setAttribute('aria-label', t.masthead.searchAria || 'Search catalog');
    }
    if (state.searchQuery) {
      if (searchQueryText) {
        const template = t.search?.searching || 'Searching: {query}';
        searchQueryText.textContent = template.replace('{query}', state.searchQuery.trim());
      }
      if (searchEmptyState && searchEmptyState.style.display !== 'none' && searchEmptyText) {
        const emptyTemplate = t.search?.empty || 'No pieces found for "{query}" — try another search';
        searchEmptyText.textContent = emptyTemplate.replace('{query}', state.searchQuery.trim());
        if (searchResetBtn) searchResetBtn.textContent = t.search?.clear || 'Clear search';
      }
    }

    // 5. Re-render Bag items and summary in the selected language
    renderBag();
  }

  function updateDisciplineStatusText() {
    const t = TRANSLATIONS[state.currentLang];
    const cat = state.activeFilter;
    if (disciplineStatus && t.disciplines[cat]) {
      disciplineStatus.textContent = t.disciplines[cat];
    }
  }

  // --- Initialize App ---
  function init() {
    setupEventListeners();
    setLanguage('en');
    runIntroAnimations();
  }

  // --- Animations with GSAP ---
  function runIntroAnimations() {
    if (typeof gsap === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.masthead', {
      y: -20,
      opacity: 0,
      duration: 0.6
    })
    .from('.intro-headline', {
      y: 28,
      opacity: 0,
      duration: 0.8
    }, '-=0.3')
    .from('.intro-description', {
      y: 18,
      opacity: 0,
      duration: 0.6
    }, '-=0.5')
    .from('.filter-sticky-bar', {
      opacity: 0,
      y: 10,
      duration: 0.5
    }, '-=0.3')
    .from('.product-card', {
      y: 35,
      opacity: 0,
      stagger: 0.08,
      duration: 0.7,
      ease: 'power2.out'
    }, '-=0.4');
  }

  // --- Filter Category Logic ---
  function setCategory(category) {
    state.activeFilter = category;

    // Update pill UI
    filterPills.forEach(pill => {
      const isMatch = pill.getAttribute('data-category') === category;
      pill.classList.toggle('active', isMatch);
      pill.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    // Update status text in current language
    updateDisciplineStatusText();

    // If active search query exists, clear it when user explicitly switches category
    if (state.searchQuery || (searchInput && searchInput.value)) {
      state.searchQuery = '';
      if (searchInput) searchInput.value = '';
    }

    updateSearchResults();
  }

  // --- Search Operations ---
  function openSearch() {
    state.isSearchOpen = true;
    if (searchWrap) searchWrap.classList.add('open');
    if (searchBtn) searchBtn.setAttribute('aria-expanded', 'true');
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 120);
  }

  function closeSearch() {
    state.isSearchOpen = false;
    if (searchWrap) searchWrap.classList.remove('open');
    if (searchBtn) {
      searchBtn.setAttribute('aria-expanded', 'false');
      searchBtn.focus();
    }
    if (state.searchQuery || (searchInput && searchInput.value)) {
      state.searchQuery = '';
      if (searchInput) searchInput.value = '';
      updateSearchResults();
    }
  }

  function toggleSearch() {
    if (state.isSearchOpen) {
      closeSearch();
    } else {
      openSearch();
    }
  }

  function clearSearch() {
    state.searchQuery = '';
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    updateSearchResults();
  }

  function updateSearchResults() {
    const rawQuery = state.searchQuery ? state.searchQuery.trim() : '';
    const query = rawQuery.toLowerCase();
    const t = TRANSLATIONS[state.currentLang];
    const cards = Array.from(document.querySelectorAll('.product-card'));

    if (!query) {
      if (searchQueryBanner) searchQueryBanner.style.display = 'none';
      if (searchEmptyState) searchEmptyState.style.display = 'none';

      const matchedCards = [];
      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (state.activeFilter === 'all' || cardCategory === state.activeFilter) {
          card.style.display = 'flex';
          matchedCards.push(card);
        } else {
          card.style.display = 'none';
        }
      });

      updateDisciplineStatusText();

      if (typeof gsap !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.fromTo(matchedCards, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'power2.out' }
        );
      }
      return;
    }

    // Active Search: show query pill banner (overrides discipline tab filter)
    if (searchQueryBanner && searchQueryText) {
      searchQueryBanner.style.display = 'flex';
      const template = t.search?.searching || 'Searching: {query}';
      searchQueryText.textContent = template.replace('{query}', rawQuery);
    }

    const matchedCards = [];
    cards.forEach(card => {
      const id = parseInt(card.getAttribute('data-id'), 10);
      const category = (card.getAttribute('data-category') || '').toLowerCase();
      
      const domTitle = (card.querySelector('.card-title')?.textContent || '').toLowerCase();
      const domMaterial = (card.querySelector('.card-material')?.textContent || '').toLowerCase();
      const domProvenance = (card.querySelector('.card-provenance')?.textContent || '').toLowerCase();

      const textTokens = [category, domTitle, domMaterial, domProvenance];

      ['en', 'es', 'fr'].forEach(lang => {
        const prod = TRANSLATIONS[lang]?.products?.[id];
        if (prod) {
          if (prod.title) textTokens.push(prod.title.toLowerCase());
          if (prod.material) textTokens.push(prod.material.toLowerCase());
          if (prod.provenance) textTokens.push(prod.provenance.toLowerCase());
        }
        const catName = TRANSLATIONS[lang]?.filter?.[category];
        if (catName) textTokens.push(catName.toLowerCase());
      });

      const fullText = textTokens.join(' ');
      const isMatch = fullText.includes(query);

      if (isMatch) {
        card.style.display = 'flex';
        matchedCards.push(card);
      } else {
        card.style.display = 'none';
      }
    });

    if (matchedCards.length === 0) {
      if (searchEmptyState && searchEmptyText) {
        searchEmptyState.style.display = 'flex';
        const emptyTemplate = t.search?.empty || 'No pieces found for "{query}" — try another search';
        searchEmptyText.textContent = emptyTemplate.replace('{query}', rawQuery);
        if (searchResetBtn) searchResetBtn.textContent = t.search?.clear || 'Clear search';

        if (typeof gsap !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          gsap.fromTo(searchEmptyState,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
          );
        }
      }
    } else {
      if (searchEmptyState) searchEmptyState.style.display = 'none';
      if (typeof gsap !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.fromTo(matchedCards, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'power2.out' }
        );
      }
    }
  }

  // --- Bag Operations ---
  function addToBag(productId, openDrawerAfter = false) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = state.bag.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.bag.push({ id: productId, quantity: 1 });
    }

    renderBag();

    const title = getProductText(productId, 'title');
    const t = TRANSLATIONS[state.currentLang];
    const toastStr = t.product.addedToast.replace('{title}', title);
    showToast(toastStr, true);

    // Micro-bump counter animation
    if (typeof gsap !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.fromTo(bagCounter, 
        { scale: 1.4 }, 
        { scale: 1, duration: 0.35, ease: 'back.out(2)' }
      );
    }

    if (openDrawerAfter) {
      openDrawer();
    }
  }

  function updateQuantity(productId, delta) {
    const item = state.bag.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      state.bag = state.bag.filter(i => i.id !== productId);
    }

    renderBag();
  }

  function removeFromBag(productId) {
    state.bag = state.bag.filter(i => i.id !== productId);
    renderBag();
  }

  function renderBag() {
    const t = TRANSLATIONS[state.currentLang];
    const totalItems = state.bag.reduce((sum, item) => sum + item.quantity, 0);
    bagCounter.textContent = totalItems;
    
    const countUnit = totalItems === 1 ? t.drawer.countSingular : t.drawer.countPlural;
    drawerItemCount.textContent = `${totalItems} ${countUnit}`;

    // Ensure footer is visible when rendering regular bag
    const drawerFooter = document.getElementById('drawerFooter');
    if (drawerFooter) drawerFooter.style.display = 'block';

    if (state.bag.length === 0) {
      emptyNotice.style.display = 'flex';
      drawerItemsList.innerHTML = '';
      drawerSubtotal.textContent = '$0.00';
      checkoutBtn.disabled = true;
      return;
    }

    emptyNotice.style.display = 'none';
    let subtotal = 0;

    drawerItemsList.innerHTML = state.bag.map(bagItem => {
      const product = PRODUCTS.find(p => p.id === bagItem.id);
      if (!product) return '';

      const lineTotal = product.price * bagItem.quantity;
      subtotal += lineTotal;
      const title = getProductText(product.id, 'title');

      return `
        <li class="drawer-item" data-id="${product.id}">
          <img src="${product.image}" alt="${title}" class="drawer-item-img" onerror="this.onerror=null;this.src='assets/ceramics-vase.jpg'">
          <div class="drawer-item-info">
            <div>
              <h3 class="drawer-item-title">${title}</h3>
              <span class="drawer-item-price">$${product.price}</span>
            </div>
            <div class="drawer-item-controls">
              <div class="qty-stepper" aria-label="${title}">
                <button type="button" class="qty-btn" data-action="decrease" data-id="${product.id}" aria-label="${t.drawer.qtyDecrease}">&minus;</button>
                <span class="qty-display">${bagItem.quantity}</span>
                <button type="button" class="qty-btn" data-action="increase" data-id="${product.id}" aria-label="${t.drawer.qtyIncrease}">&plus;</button>
              </div>
              <button type="button" class="remove-btn" data-action="remove" data-id="${product.id}">${t.drawer.remove}</button>
            </div>
          </div>
        </li>
      `;
    }).join('');

    drawerSubtotal.textContent = `$${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
    checkoutBtn.disabled = false;
  }

  // --- Drawer Open / Close with Focus Trap & Inert Background ---
  function openDrawer() {
    lastFocusedElement = document.activeElement;
    bagDrawer.classList.add('open');
    bagDrawer.setAttribute('aria-hidden', 'false');
    drawerBackdrop.classList.add('open');
    drawerBackdrop.setAttribute('aria-hidden', 'false');
    bagTrigger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Accessibility: make background content inert
    const masthead = document.getElementById('masthead');
    const main = document.getElementById('storefrontMain');
    if (masthead) masthead.setAttribute('inert', '');
    if (main) main.setAttribute('inert', '');

    drawerCloseBtn.focus();
  }

  function closeDrawer() {
    bagDrawer.classList.remove('open');
    bagDrawer.setAttribute('aria-hidden', 'true');
    drawerBackdrop.classList.remove('open');
    drawerBackdrop.setAttribute('aria-hidden', 'true');
    bagTrigger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    // Remove inert attribute from background
    const masthead = document.getElementById('masthead');
    const main = document.getElementById('storefrontMain');
    if (masthead) masthead.removeAttribute('inert');
    if (main) main.removeAttribute('inert');

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    } else {
      bagTrigger.focus();
    }
  }

  // Focus trap inside modal drawer
  bagDrawer.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;

    const focusable = bagDrawer.querySelectorAll('button:not(:disabled), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable.length === 0) return;

    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  });

  // --- Toast Notification with View Bag action ---
  function showToast(message, withAction = false) {
    if (toastTimeout) clearTimeout(toastTimeout);
    const t = TRANSLATIONS[state.currentLang];
    
    if (withAction) {
      toastMessage.innerHTML = `${message} &bull; <button type="button" id="toastBagBtn" style="color:#FAF8F5;text-decoration:underline;cursor:pointer;font-weight:600;margin-left:4px;">${t.product.viewBag}</button>`;
      const toastBagBtn = document.getElementById('toastBagBtn');
      if (toastBagBtn) {
        toastBagBtn.addEventListener('click', () => {
          openDrawer();
          toastIndicator.classList.remove('show');
        });
      }
    } else {
      toastMessage.textContent = message;
    }

    toastIndicator.classList.add('show');

    toastTimeout = setTimeout(() => {
      toastIndicator.classList.remove('show');
    }, 3200);
  }

  // --- WhatsApp Checkout Flow ---
  function executeCheckout() {
    if (state.bag.length === 0) return;

    let subtotal = 0;
    const lines = state.bag.map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (!product) return '';
      const lineTotal = product.price * item.quantity;
      subtotal += lineTotal;
      const title = getProductText(item.id, 'title');
      return `• ${title} x${item.quantity} — $${lineTotal}`;
    }).filter(Boolean);

    const message = `🛒 New Order - LOOPEACE\n${lines.join('\n')}\nTotal: $${subtotal}\nPlease confirm my order.`;
    const whatsappUrl = `https://wa.me/5493624057561?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Notify user
    const toastRedirect = state.currentLang === 'es' 
      ? 'Redirigiendo a WhatsApp...' 
      : (state.currentLang === 'fr' ? 'Redirection vers WhatsApp...' : 'Opening WhatsApp order...');
    showToast(toastRedirect);
  }

  // --- Event Listeners Setup ---
  function setupEventListeners() {
    // Language Switcher
    if (langSelector) {
      langSelector.addEventListener('change', (e) => {
        setLanguage(e.target.value);
      });
    }

    // Bag Drawer triggers
    bagTrigger.addEventListener('click', openDrawer);
    drawerCloseBtn.addEventListener('click', closeDrawer);
    drawerBackdrop.addEventListener('click', closeDrawer);

    // Escape key handling for search and drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (state.isSearchOpen) {
          e.preventDefault();
          closeSearch();
          return;
        }
        if (bagDrawer && bagDrawer.classList.contains('open')) {
          closeDrawer();
        }
      }
    });

    // Discipline Filter Pills
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const category = pill.getAttribute('data-category');
        setCategory(category);
      });
    });

    // Buy Now buttons on product cards
    catalogGrid.addEventListener('click', (e) => {
      const targetBtn = e.target.closest('.text-add-btn');
      if (targetBtn) {
        const id = parseInt(targetBtn.getAttribute('data-id'), 10);
        if (id) {
          addToBag(id, false);
        }
      }
    });

    // Drawer quantity adjustments & removal
    drawerItemsList.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;

      const action = btn.getAttribute('data-action');
      const id = parseInt(btn.getAttribute('data-id'), 10);
      if (!id) return;

      if (action === 'increase') {
        updateQuantity(id, 1);
      } else if (action === 'decrease') {
        updateQuantity(id, -1);
      } else if (action === 'remove') {
        removeFromBag(id);
      }
    });

    // In-Drawer Archival Checkout Flow
    checkoutBtn.addEventListener('click', () => {
      executeCheckout();
    });

    // Live Search events
    if (searchBtn) {
      searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSearch();
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        updateSearchResults();
      });

      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          e.stopPropagation();
          closeSearch();
        }
      });
    }

    if (searchQueryClear) {
      searchQueryClear.addEventListener('click', (e) => {
        e.preventDefault();
        clearSearch();
      });
    }

    if (searchResetBtn) {
      searchResetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        clearSearch();
      });
    }
  }

  // Launch on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
