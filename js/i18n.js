// ============================================================
// i18n.js — EN / PT-BR language switching
// ============================================================

const TRANSLATIONS = {
  en: {
    'nav.gallery':     'Gallery',
    'nav.details':     'Details',
    'nav.certificate': 'Certificate',
    'nav.enquire':     'Enquire',

    'hero.award':    'Bellerophon Privilege Award \u00a0·\u00a0 No. 163',
    'hero.subtitle': 'Natural Emerald \u00a0·\u00a0 Brazil \u00a0·\u00a0 19.15 kg',
    'hero.discover': 'Discover',

    'intro.quote': '\u201cRare in both size and quality, the possession of such natural emeralds in matrix is a singular privilege.\u201d',
    'intro.cite':  'Martial Curti \u00a0·\u00a0 CEO & Founder, Bellerophon Gemlab S.A.S.',

    'gallery.label':         'The Specimen',
    'gallery.heading':       '360\u00b0 Photography',
    'gallery.caption':       'Professional gemmological photography \u00a0·\u00a0 31 high-resolution images \u00a0·\u00a0 Click to enlarge',
    'gallery.video.label':   'In Motion',
    'gallery.video.heading': 'A Closer Look',

    'specs.label': 'Provenance & Details',
    'specs.heading': 'The Stone',
    'specs.kg':    'Kilograms',
    'specs.cm':    'Centimetres',
    'specs.age':   'Million Years Old',
    'specs.award': 'Privilege Award Number',

    'specs.row.identification': 'Identification',
    'specs.row.color':          'Color',
    'specs.row.clarity':        'Clarity',
    'specs.row.shape':          'Shape',
    'specs.row.origin':         'Origin',
    'specs.row.geoage':         'Geological Age',
    'specs.row.fluorescence':   'Fluorescence',
    'specs.row.treatment':      'Treatment',
    'specs.row.chemical':       'Chemical Formula',
    'specs.row.classification': 'Classification',

    'specs.val.identification': 'Natural Emeralds on Matrix',
    'specs.val.color':          'Intense Vivid Green',
    'specs.val.clarity':        'Translucent',
    'specs.val.shape':          'Rough \u00b7 Nature-Formed Octagonal',
    'specs.val.origin':         'Bahia State, Brazil',
    'specs.val.geoage':         '~520 Million Years (Proterozoic)',
    'specs.val.fluorescence':   'None',
    'specs.val.treatment':      'Minor Clarity Modification',
    'specs.val.classification': 'Beryl \u00b7 Cyclosilicate',

    'cert.label':        'Documentation',
    'cert.heading':      'Laboratory Certification',
    'cert.certby':       'Certified By',
    'cert.report':       'Report Number',
    'cert.date':         'Date Issued',
    'cert.gemmologist':  'Chief Gemmologist',
    'cert.manager':      'Laboratory Manager',
    'cert.analysis':     'Comprehensive analysis performed using UV-VIS-NIR spectroscopy, Raman spectroscopy, photoluminescence measurements, FTIR and EDXRF \u2014 the most rigorous suite of non-destructive gemmological testing available.',
    'cert.download':     '\u2193 \u00a0Download Certificate',
    'cert.preview':      'Preview \u2192',

    'award.label':    'Distinction',
    'award.subtitle': 'No. 163 \u2014 An Extremely Rare Distinction',
    'award.body':     'The Bellerophon Privilege Award is bestowed only upon gemstones of extraordinary rarity \u2014 specimens that transcend conventional classification and represent a singular achievement of nature. Award No. 163 places this emerald among the most remarkable stones ever to pass through the Bellerophon laboratories.',
    'award.download': '\u2193 \u00a0Download Privilege Report',
    'award.preview':  'Preview \u2192',

    'story.label':   'History & Legend',
    'story.heading': 'The Eternal Green',
    'story.p1':      'The emerald derives its name from the ancient Greek <em>\u03a3\u03bc\u03ac\u03c1\u03b1\u03b3\u03b4\u03bf\u03c2</em> \u2014 smaragdus \u2014 a word that has echoed through millennia of human fascination. Pliny the Elder captured its essence in a single declaration that has never been surpassed:',
    'story.pullquote': '\u201c\u2026nothing greens greener.\u201d',
    'story.pullcite':  '\u2014 Pliny the Elder',
    'story.p2':      'For centuries, no stone has commanded the reverence afforded to the emerald. Cleopatra adorned herself and her palace with them, gifted them to ambassadors as symbols of authority, and had them carved with her portrait as tokens of sovereign power. In ancient belief, emeralds were said to grant the power to foresee the future, reveal truth, and shield their bearer from evil. Biblical tradition names emerald among the four precious stones bestowed upon King Solomon.',
    'story.p3':      'The great emerald deposits of South America were first encountered by Spanish explorers in the sixteenth century, who found the Inca civilisation in possession of stones of incomparable beauty. Brazil \u2014 and specifically the state of Bahia \u2014 emerged as one of the world\u2019s most significant sources. The region of Campo Formoso and Pindoba\u00e7u, approximately 400 kilometres from Salvador, has yielded some of the finest specimens ever documented.',
    'story.p4':      '<em>Esper\u00e2n\u00e7a Da Serra</em> \u2014 Hope of the Mountain Range \u2014 was formed approximately 520 million years ago during the Proterozoic era, within the serpentine rocks of the Campo Formoso granite batholith. Its vivid chromium-driven green, its translucent clarity, and its exceptional mass of 19.15 kilograms place it in a category occupied by only the rarest specimens in recorded gemmological history.',
    'story.p5':      'Today, Brazilian emerald deposits of this calibre are no longer actively exploited. The stone before you is not merely a gemstone \u2014 it is a geological monument, a piece of Earth\u2019s deep history, preserved in the most vivid green nature has ever produced.',

    'contact.label':   'Acquisition',
    'contact.heading': 'Enquire About This Piece',
    'contact.body':    'For serious inquiries, private viewings, or further documentation, please reach us directly. We welcome correspondence from collectors, institutions, and serious buyers worldwide.',
    'contact.email':   '\u2709 \u00a0Send an Enquiry',

    'footer.tagline': 'A Singular Privilege',
    'footer.rights':  '\u00a9 2024 \u00b7 All rights reserved',
  },

  pt: {
    'nav.gallery':     'Galeria',
    'nav.details':     'Detalhes',
    'nav.certificate': 'Certificado',
    'nav.enquire':     'Consultar',

    'hero.award':    'Pr\u00eamio Bellerophon Privilege \u00a0·\u00a0 N\u00ba 163',
    'hero.subtitle': 'Esmeralda Natural \u00a0·\u00a0 Brasil \u00a0·\u00a0 19,15 kg',
    'hero.discover': 'Descubra',

    'intro.quote': '\u201cRara tanto em tamanho quanto em qualidade, a posse de tais esmeraldas naturais em matriz \u00e9 um privil\u00e9gio singular.\u201d',
    'intro.cite':  'Martial Curti \u00a0·\u00a0 CEO e Fundador, Bellerophon Gemlab S.A.S.',

    'gallery.label':         'O Esp\u00e9cime',
    'gallery.heading':       'Fotografia 360\u00b0',
    'gallery.caption':       'Fotografia gemol\u00f3gica profissional \u00a0·\u00a0 31 imagens de alta resolu\u00e7\u00e3o \u00a0·\u00a0 Clique para ampliar',
    'gallery.video.label':   'Em Movimento',
    'gallery.video.heading': 'Uma Vis\u00e3o Mais Pr\u00f3xima',

    'specs.label': 'Proveni\u00eancia e Detalhes',
    'specs.heading': 'A Pedra',
    'specs.kg':    'Quilogramas',
    'specs.cm':    'Cent\u00edmetros',
    'specs.age':   'Milh\u00f5es de Anos',
    'specs.award': 'N\u00famero do Pr\u00eamio Privilege',

    'specs.row.identification': 'Identifica\u00e7\u00e3o',
    'specs.row.color':          'Cor',
    'specs.row.clarity':        'Clareza',
    'specs.row.shape':          'Forma',
    'specs.row.origin':         'Origem',
    'specs.row.geoage':         'Idade Geol\u00f3gica',
    'specs.row.fluorescence':   'Fluoresc\u00eancia',
    'specs.row.treatment':      'Tratamento',
    'specs.row.chemical':       'F\u00f3rmula Qu\u00edmica',
    'specs.row.classification': 'Classifica\u00e7\u00e3o',

    'specs.val.identification': 'Esmeraldas Naturais em Matriz',
    'specs.val.color':          'Verde Intenso V\u00edvido',
    'specs.val.clarity':        'Translúcida',
    'specs.val.shape':          'Bruta \u00b7 Octogonal Natural',
    'specs.val.origin':         'Estado da Bahia, Brasil',
    'specs.val.geoage':         '~520 Milh\u00f5es de Anos (Proterozoico)',
    'specs.val.fluorescence':   'Nenhuma',
    'specs.val.treatment':      'Leve Modifica\u00e7\u00e3o de Clareza',
    'specs.val.classification': 'Berilo \u00b7 Ciclossilicato',

    'cert.label':        'Documenta\u00e7\u00e3o',
    'cert.heading':      'Certifica\u00e7\u00e3o Laboratorial',
    'cert.certby':       'Certificado Por',
    'cert.report':       'N\u00famero do Relat\u00f3rio',
    'cert.date':         'Data de Emiss\u00e3o',
    'cert.gemmologist':  'Gem\u00f3logo Chefe',
    'cert.manager':      'Gerente de Laborat\u00f3rio',
    'cert.analysis':     'An\u00e1lise abrangente realizada com espectroscopia UV-VIS-NIR, espectroscopia Raman, medi\u00e7\u00f5es de fotoluminesc\u00eancia, FTIR e EDXRF \u2014 o conjunto mais rigoroso de testes gemol\u00f3gicos n\u00e3o destrutivos dispon\u00edveis.',
    'cert.download':     '\u2193 \u00a0Baixar Certificado',
    'cert.preview':      'Visualizar \u2192',

    'award.label':    'Distin\u00e7\u00e3o',
    'award.subtitle': 'N\u00ba 163 \u2014 Uma Distin\u00e7\u00e3o Extremamente Rara',
    'award.body':     'O Pr\u00eamio Bellerophon Privilege \u00e9 concedido apenas a pedras preciosas de rara excepcionalidade \u2014 esp\u00e9cimes que transcendem a classifica\u00e7\u00e3o convencional e representam uma conquista singular da natureza. O Pr\u00eamio N\u00ba 163 coloca esta esmeralda entre as pedras mais not\u00e1veis j\u00e1 avaliadas pelos laborat\u00f3rios Bellerophon.',
    'award.download': '\u2193 \u00a0Baixar Relat\u00f3rio Privilege',
    'award.preview':  'Visualizar \u2192',

    'story.label':   'Hist\u00f3ria e Lenda',
    'story.heading': 'O Verde Eterno',
    'story.p1':      'A esmeralda deriva seu nome do grego antigo <em>\u03a3\u03bc\u03ac\u03c1\u03b1\u03b3\u03b4\u03bf\u03c2</em> \u2014 smaragdus \u2014 uma palavra que ecoou por mil\u00eanios de fascina\u00e7\u00e3o humana. Pl\u00ednio, o Velho, capturou sua ess\u00eancia numa \u00fanica declara\u00e7\u00e3o que jamais foi superada:',
    'story.pullquote': '\u201c\u2026nada \u00e9 mais verde que o verde.\u201d',
    'story.pullcite':  '\u2014 Pl\u00ednio, o Velho',
    'story.p2':      'Por s\u00e9culos, nenhuma pedra comandou a revert\u00eancia concedida \u00e0 esmeralda. Cle\u00f3patra se adornava e decorava seu pal\u00e1cio com elas, as presenteava a embaixadores como s\u00edmbolo de autoridade e mandava esculpir seu retrato nelas como s\u00edmbolo de poder soberano. Na cren\u00e7a antiga, dizia-se que as esmeraldas concediam o poder de prever o futuro, revelar a verdade e proteger seu portador do mal. A tradi\u00e7\u00e3o b\u00edblica nomeia a esmeralda entre as quatro pedras preciosas concedidas ao Rei Salom\u00e3o.',
    'story.p3':      'Os grandes dep\u00f3sitos de esmeraldas da Am\u00e9rica do Sul foram descobertos por exploradores espan\u00f3is no s\u00e9culo XVI, que encontraram a civiliza\u00e7\u00e3o Inca em posse de pedras de beleza incompar\u00e1vel. O Brasil \u2014 e especificamente o estado da Bahia \u2014 emergiu como uma das mais importantes fontes mundiais. A regi\u00e3o de Campo Formoso e Pindoba\u00e7u, a aproximadamente 400 quil\u00f4metros de Salvador, produziu alguns dos mais finos esp\u00e9cimes j\u00e1 documentados.',
    'story.p4':      '<em>Esper\u00e2n\u00e7a Da Serra</em> \u2014 Esperan\u00e7a da Serra \u2014 foi formada h\u00e1 aproximadamente 520 milh\u00f5es de anos durante a era Proterozoica, nas rochas serpent\u00ednicas do batolito gran\u00edtico de Campo Formoso. Seu verde v\u00edvido impulsionado pelo cromo, sua clareza translúcida e sua massa excepcional de 19,15 quilogramas a colocam em uma categoria ocupada apenas pelos esp\u00e9cimes mais raros da hist\u00f3ria gemol\u00f3gica registrada.',
    'story.p5':      'Hoje, os dep\u00f3sitos brasileiros de esmeraldas desse calibre n\u00e3o s\u00e3o mais ativamente explorados. A pedra diante de voc\u00ea n\u00e3o \u00e9 meramente uma gema \u2014 \u00e9 um monumento geol\u00f3gico, um peda\u00e7o da hist\u00f3ria profunda da Terra, preservado no verde mais v\u00edvido que a natureza jamais produziu.',

    'contact.label':   'Aquisi\u00e7\u00e3o',
    'contact.heading': 'Consulte Sobre Esta Pe\u00e7a',
    'contact.body':    'Para consultas s\u00e9rias, visitas privadas ou documenta\u00e7\u00e3o adicional, entre em contato diretamente. Recebemos correspond\u00eancias de colecionadores, institui\u00e7\u00f5es e compradores s\u00e9rios de todo o mundo.',
    'contact.email':   '\u2709 \u00a0Enviar Consulta',

    'footer.tagline': 'Um Privil\u00e9gio Singular',
    'footer.rights':  '\u00a9 2024 \u00b7 Todos os direitos reservados',
  },
};

function applyLang(lang) {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[lang][key] !== undefined) el.textContent = TRANSLATIONS[lang][key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (TRANSLATIONS[lang][key] !== undefined) el.innerHTML = TRANSLATIONS[lang][key];
  });

  localStorage.setItem('lang', lang);

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'pt' ? 'EN' : 'PT';
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang');
  const auto  = navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  applyLang(saved || auto);

  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    const next = localStorage.getItem('lang') === 'pt' ? 'en' : 'pt';
    applyLang(next);
  });
});
