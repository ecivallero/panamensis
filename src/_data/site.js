export default {
  name: "Panamensis",
  description: {
    en: "An independent research programme building an interconnected documentary corpus for the histories of science, nature, environment, and knowledge in Panama.",
    es: "Un programa de investigación independiente que construye un corpus documental interconectado para las historias de la ciencia, la naturaleza, el ambiente y el conocimiento en Panamá."
  },
  nav: {
    en: [
      ["Explore", "/en/#explore"], ["Stories", "/en/#stories"], ["Research", "/en/#research"],
      ["Sources", "/en/#sources"], ["About", "/en/#about"]
    ],
    es: [
      ["Explorar", "/es/#explore"], ["Historias", "/es/#stories"], ["Investigación", "/es/#research"],
      ["Fuentes", "/es/#sources"], ["Acerca de", "/es/#about"]
    ]
  },
  threadIds: ["PNS-PER-000002", "PNS-AST-000001", "PNS-CLM-000001", "PNS-SEG-000004", "PNS-SRC-000004", "PNS-DOS-000001"],
  threadTargets: ["#corpus", "#research", "#sources", "#sources", "#sources", "#research"],
  threadKinds: {
    en: ["Person", "Documented claim", "Claim expression", "Source passage", "Source", "Research dossier"],
    es: ["Persona", "Afirmación documentada", "Expresión de la afirmación", "Pasaje de una fuente", "Fuente", "Dosier de investigación"]
  },
  threadLabels: {
    en: [
      "James Zetek",
      "Zetek served as Curator, 1923–1945",
      "Obituary: curator role chronology",
      "Zetek obituary role chronology",
      "1959 James Zetek obituary",
      "Case A: Barro Colorado / James Zetek / CZBA"
    ],
    es: [
      "James Zetek",
      "Zetek ejerció como curador, 1923–1945",
      "Obituario: cronología de su función como curador",
      "Pasaje cronológico del obituario de Zetek",
      "Obituario de James Zetek de 1959",
      "Caso A: Barro Colorado / James Zetek / CZBA"
    ]
  },
  threadPredicates: {
    en: ["is the subject of", "is represented by", "draws on", "belongs to", "is examined in"],
    es: ["es el sujeto de", "está representada por", "se basa en", "pertenece a", "se examina en"]
  }
};
