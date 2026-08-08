/* =========================================================
   Idioma: Español (es)
   Para crear un idioma nuevo, duplica este archivo, traduce
   los valores (nunca las claves) y enlázalo en el <head> de
   cada página HTML. Ver README.md para el paso a paso.
   ========================================================= */
window.translations = window.translations || {};
window.translations.es = {
  meta: {
    label: "Español",
    titleHome: "PyxPler — El Pozo de los Deseos: consulta sus 4 voces en Discord",
    titlePrivacy: "Política de Privacidad — PyxPler",
    titleTerms: "Términos y Condiciones — PyxPler"
  },

  nav: {
    home: "Inicio",
    features: "Voces del Pozo",
    privacy: "Privacidad",
    terms: "Términos",
    invite: "Añadir a Discord"
  },

  theme: {
    ariaPrefix: "Tema",
    auto: "Automático (según el sistema)",
    light: "Claro",
    dark: "Oscuro"
  },

  lang: {
    selectLabel: "Idioma"
  },

  hero: {
    title: "Consulta las profundidades del Pozo y descubre sus respuestas",
    subtitle: "Un ecosistema interactivo con Inteligencia Artificial: cuatro voces distintas te esperan al fondo del Pozo, cada una con su propia forma de ver el mundo.",
    installCta: "Instalar",
    discordCta: "Añadir a Discord"
  },

  voices: {
    eyebrow: "Las voces del Pozo",
    title: "Cuatro formas de escuchar al Pozo",
    lede: "Cada voz tiene su propio carácter, su propio tono y su propio precio en monedas.",
    sabio: {
      title: "El Sabio",
      body: "Enigmático, místico y poético. Responde con metáforas breves y profundas sobre la existencia."
    },
    sarcastico: {
      title: "El Sarcástico",
      body: "Irónico, ácido y directo. Aporta humor negro inteligente y respuestas picantes sin rodeos."
    },
    scibot: {
      title: "Sci-Bot",
      body: "Análisis científico y técnico riguroso. Explica fenómenos complejos con precisión, fuentes estructuradas y lenguaje técnico."
    },
    alma: {
      title: "El Alma",
      body: "Empático, cálido y comprensivo. Ofrece consuelo, apoyo emocional y escucha activa en un tono cercano."
    }
  },

  steps: {
    eyebrow: "Cómo empezar",
    title: "De la invitación a tu primera respuesta del Pozo",
    step1: {
      title: "Añade el Pozo a tu Discord",
      body: "Invítalo a tu servidor con un clic y concede los permisos básicos en los canales que elijas."
    },
    step2: {
      title: "Elige una voz y consulta",
      body: "Usa tus monedas diarias para hablar con El Sabio, El Sarcástico, Sci-Bot o El Alma."
    },
    step3: {
      title: "Recibe la respuesta del Pozo",
      body: "Cada voz responde con su propio tono y estilo, directo en tu canal de Discord."
    }
  },

  economy: {
    eyebrow: "Economía del Pozo",
    title: "Monedas para consultar al Pozo",
    lede: "Un sistema simple de monedas diarias mantiene el ecosistema equilibrado para toda la comunidad.",
    daily: {
      figure: "5 🪙 / día",
      title: "Monedas diarias",
      body: "Cada usuario recibe 5 monedas por día, con reinicio automático a las 00:00 UTC."
    },
    cost: {
      figure: "1 🪙 – 2 🪙",
      title: "Costo por consulta",
      body: "El Sabio, El Sarcástico y El Alma cuestan 1 moneda por consulta. Sci-Bot cuesta 2 monedas, por la densidad de su análisis técnico."
    },
    serverCap: {
      figure: "20 🪙 / día",
      title: "Límite del servidor",
      body: "Cada servidor tiene un tope global de 20 monedas diarias, para mantener la estabilidad del ecosistema."
    }
  },

  cta: {
    title: "Lleva El Pozo a tu comunidad",
    body: "Empezar es gratuito y tarda menos de un minuto en configurarse."
  },

  footer: {
    tagline: "Un ecosistema de IA con cuatro voces místicas, directo en tu Discord.",
    linksHeading: "Explorar",
    legalHeading: "Legal",
    rights: "Todos los derechos reservados."
  },

  common: {
    backHome: "Volver al inicio"
  },

  invite: {
    eyebrow: "Añadir a Discord",
    title: "¿Dónde querés instalar el bot?",
    body: "Elegí si querés añadirlo a un servidor completo o instalarlo solo para tu cuenta.",
    serverTitle: "Servidor",
    serverBody: "Disponible para todos los miembros del servidor que elijas.",
    userTitle: "Usuario",
    userBody: "Lo usás vos, en cualquier servidor o mensaje directo.",
    close: "Cerrar"
  },

  install: {
    eyebrow: "Instalar",
    title: "Elegí tu plataforma",
    body: "La aplicación de PyxPler está en camino para más plataformas. Elegí la tuya para enterarte primero.",
    android: "Android",
    ios: "iOS",
    mac: "Mac",
    windows: "Windows",
    linux: "Linux",
    comingSoon: "Próximamente",
    available: "Instalar",
    close: "Cerrar"
  },

  privacy: {
    title: "Política de Privacidad",
    updated: "Última actualización: [completa esta fecha]",
    intro: "Esta política explica qué datos recopila PyxPler, tanto en Discord como en este sitio web, y cómo los usamos. Sustituye los textos entre corchetes por la información real de tu proyecto antes de publicar esta página.",
    s1: {
      title: "Qué datos recopilamos",
      body: "Al usar el bot en Discord, procesamos tu identificador de usuario, el identificador del servidor, tu saldo de monedas diarias y el contenido de las consultas que envías a cada voz, únicamente para generar una respuesta. En este sitio web no usamos cookies de seguimiento: tu preferencia de idioma y de tema se guarda solo en tu propio navegador (localStorage) y nunca se envía a nuestros servidores."
    },
    s2: {
      title: "Cómo usamos los datos",
      body: "Usamos los datos para procesar tus consultas, generar respuestas —incluyendo, cuando corresponde, llamadas a proveedores de inteligencia artificial de terceros—, llevar el conteo de monedas diarias y detectar abuso o mal uso del servicio. No usamos tus mensajes con fines publicitarios."
    },
    s3: {
      title: "Con quién compartimos datos",
      body: "Compartimos datos únicamente con los proveedores técnicos necesarios para operar el bot (por ejemplo, hosting o proveedores de IA), sujetos a sus propios compromisos de confidencialidad. No vendemos datos personales a terceros. Podemos divulgar información si una ley o una orden judicial nos obliga a ello."
    },
    s4: {
      title: "Cuánto tiempo conservamos los datos",
      body: "Conservamos los registros de consultas el tiempo mínimo necesario para operar y mejorar el servicio [especifica el plazo, por ejemplo 30 días], salvo que debamos conservarlos más tiempo por obligación legal o para investigar un abuso."
    },
    s5: {
      title: "Tus derechos",
      body: "Puedes solicitar acceso, corrección o eliminación de tus datos escribiendo a [correo de contacto]. Si resides en el Espacio Económico Europeo u otra región con protección de datos equivalente, estos derechos aplican conforme a su normativa local."
    },
    s6: {
      title: "Seguridad",
      body: "Aplicamos medidas razonables para proteger la información que procesamos, aunque ningún sistema es completamente infalible. Te recomendamos no compartir información sensible en las consultas que envíes al Pozo."
    },
    s7: {
      title: "Menores de edad",
      body: "El bot sigue los requisitos mínimos de edad de Discord (13 años, o la edad mínima exigida en tu país). No dirigimos este servicio intencionalmente a menores por debajo de ese límite."
    },
    s8: {
      title: "Cambios en esta política",
      body: "Podemos actualizar esta política cuando cambie el servicio. Publicaremos la nueva fecha de actualización en la parte superior de esta página."
    },
    s9: {
      title: "Contacto",
      body: "Para cualquier consulta sobre privacidad, escríbenos a [correo de contacto] o a través de [tu servidor de soporte en Discord]."
    }
  },

  terms: {
    title: "Términos y Condiciones",
    updated: "Última actualización: [completa esta fecha]",
    intro: "Al añadir o usar PyxPler aceptas estos términos. Sustituye los textos entre corchetes por la información real de tu proyecto antes de publicar esta página.",
    s1: {
      title: "Aceptación de los términos",
      body: "Al invitar el bot a tu servidor o al interactuar con él, confirmas que aceptas estos términos y las Condiciones de Servicio y Directrices de la Comunidad de Discord."
    },
    s2: {
      title: "Qué es el servicio",
      body: "PyxPler es un bot de Discord que da acceso a El Pozo de los Deseos: un ecosistema con cuatro personalidades de inteligencia artificial (El Sabio, El Sarcástico, Sci-Bot y El Alma) que responden consultas a cambio de monedas diarias. Sus respuestas se generan automáticamente y pueden contener errores o imprecisiones; no sustituyen el consejo de un profesional cualificado, especialmente en temas médicos, legales o financieros."
    },
    s3: {
      title: "Requisitos de uso",
      body: "Debes cumplir la edad mínima exigida por Discord (13 años, o la que establezca tu jurisdicción) y respetar en todo momento sus Condiciones de Servicio."
    },
    s4: {
      title: "Uso aceptable",
      body: "No está permitido usar el bot para enviar spam, generar contenido ilegal, intentar extraer sus instrucciones internas o los datos de otros usuarios, manipular el sistema de monedas, saturar el servicio de forma deliberada, ni eludir los límites de uso que establezcamos."
    },
    s5: {
      title: "Limitación de responsabilidad",
      body: "El servicio se ofrece «tal cual», sin garantías de exactitud o disponibilidad continua. No somos responsables de las decisiones que tomes basándote en las respuestas de ninguna de las voces del Pozo."
    },
    s6: {
      title: "Propiedad intelectual",
      body: "El nombre, la marca y el contenido de este sitio y del bot pertenecen a sus operadores. Puedes usar libremente el contenido que el bot genere para ti, siempre que no infrinja derechos de terceros."
    },
    s7: {
      title: "Disponibilidad y cambios del servicio",
      body: "Podemos modificar, pausar o discontinuar el servicio —incluyendo la economía de monedas o las voces disponibles—, total o parcialmente, en cualquier momento y sin previo aviso. No garantizamos disponibilidad ininterrumpida."
    },
    s8: {
      title: "Terminación",
      body: "Podemos restringir o bloquear el acceso al bot a cualquier usuario o servidor que incumpla estos términos."
    },
    s9: {
      title: "Cambios en estos términos",
      body: "Podemos actualizar estos términos cuando cambie el servicio. El uso continuado del bot después de un cambio implica su aceptación."
    },
    s10: {
      title: "Contacto",
      body: "Para cualquier duda sobre estos términos, escríbenos a [correo de contacto] o a través de [tu servidor de soporte en Discord]."
    }
  }
};
