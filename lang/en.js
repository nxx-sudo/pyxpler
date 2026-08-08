/* =========================================================
   Language: English (en)
   To add a new language, duplicate this file, translate the
   values (never the keys), and link it in the <head> of
   every HTML page. See README.md for the full walkthrough.
   ========================================================= */
window.translations = window.translations || {};
window.translations.en = {
  meta: {
    label: "English",
    titleHome: "PyxPler — The Wishing Well: consult its 4 voices on Discord",
    titlePrivacy: "Privacy Policy — PyxPler",
    titleTerms: "Terms and Conditions — PyxPler"
  },

  nav: {
    home: "Home",
    howItWorks: "How it works",
    features: "Voices of the Well",
    privacy: "Privacy",
    terms: "Terms",
    invite: "Add to Discord"
  },

  lang: {
    selectLabel: "Language"
  },

  hero: {
    title: "Consult the depths of the Well and discover its answers",
    subtitle: "An interactive AI-powered ecosystem: four distinct voices await at the bottom of the Well, each with its own way of seeing the world.",
    installCta: "Install",
    discordCta: "Add to Discord"
  },

  voices: {
    eyebrow: "Voices of the Well",
    title: "Four ways to hear the Well",
    lede: "Each voice has its own character, its own tone, and its own price in coins.",
    sabio: {
      title: "The Sage",
      body: "Enigmatic, mystical and poetic. Answers with brief, deep metaphors about existence."
    },
    sarcastico: {
      title: "The Sarcastic One",
      body: "Ironic, sharp and direct. Brings clever dark humor and spicy answers with no filter."
    },
    scibot: {
      title: "Sci-Bot",
      body: "Rigorous scientific and technical analysis. Explains complex phenomena with precision, structured sources and technical language."
    },
    alma: {
      title: "The Soul",
      body: "Empathetic, warm and understanding. Offers comfort, emotional support and active listening in a close, caring tone."
    }
  },

  steps: {
    eyebrow: "Getting started",
    title: "From invite to your first answer from the Well",
    step1: {
      title: "Add the Well to your Discord",
      body: "Invite it to your server in one click and grant basic permissions in the channels you choose."
    },
    step2: {
      title: "Pick a voice and ask",
      body: "Use your daily coins to talk to The Sage, The Sarcastic One, Sci-Bot or The Soul."
    },
    step3: {
      title: "Get the Well's answer",
      body: "Each voice replies in its own tone and style, right in your Discord channel."
    }
  },

  economy: {
    eyebrow: "The Well's economy",
    title: "Coins to consult the Well",
    lede: "A simple daily-coin system keeps the ecosystem balanced for the whole community.",
    daily: {
      figureNum: "5",
      figureUnit: " / day",
      title: "Daily coins",
      body: "Every user gets 5 coins per day, automatically resetting at 00:00 UTC."
    },
    cost: {
      figureNum: "1 – 2",
      figureUnit: "",
      title: "Cost per query",
      body: "The Sage, The Sarcastic One and The Soul cost 1 coin per query. Sci-Bot costs 2 coins, due to the density of its technical analysis."
    },
    serverCap: {
      figureNum: "20",
      figureUnit: " / day",
      title: "Server limit",
      body: "Each server has a global cap of 20 daily coins, to keep the ecosystem stable."
    }
  },

  cta: {
    title: "Bring the Well to your community",
    body: "Getting started is free and takes less than a minute to set up."
  },

  footer: {
    tagline: "An AI ecosystem with four mystical voices, right inside your Discord.",
    linksHeading: "Explore",
    legalHeading: "Legal",
    rights: "All rights reserved."
  },

  common: {
    backHome: "Back to home"
  },

  invite: {
    eyebrow: "Add to Discord",
    title: "Where do you want to install the bot?",
    body: "Choose whether to add it to a whole server or install it just for your account.",
    serverTitle: "Server",
    serverBody: "Available to every member of the server you choose.",
    userTitle: "User",
    userBody: "You use it yourself, in any server or in DMs.",
    close: "Close"
  },

  install: {
    eyebrow: "Install",
    title: "Choose your platform",
    body: "The PyxPler app is on its way to more platforms. Pick yours to be the first to know.",
    android: "Android",
    ios: "iOS",
    mac: "Mac",
    windows: "Windows",
    linux: "Linux",
    comingSoon: "Coming soon",
    available: "Install",
    close: "Close"
  },

  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: [fill in this date]",
    intro: "This policy explains what data PyxPler collects, both on Discord and on this website, and how we use it. Replace the bracketed text with your project's real details before publishing this page.",
    s1: {
      title: "What data we collect",
      body: "When you use the bot on Discord, we process your user ID, the server ID, your daily coin balance, and the content of the queries you send to each voice, solely to generate a response. This website does not use tracking cookies: your language and theme preferences are stored only in your own browser (localStorage) and are never sent to our servers."
    },
    s2: {
      title: "How we use the data",
      body: "We use the data to process your queries, generate responses — including, where applicable, calls to third-party AI providers —, track your daily coin balance, and detect abuse or misuse of the service. We do not use your messages for advertising purposes."
    },
    s3: {
      title: "Who we share data with",
      body: "We share data only with the technical providers needed to run the bot (for example, hosting or AI providers), under their own confidentiality commitments. We do not sell personal data to third parties. We may disclose information if required by law or a court order."
    },
    s4: {
      title: "How long we keep data",
      body: "We keep query logs for the minimum time needed to run and improve the service [specify a period, e.g. 30 days], unless we must keep them longer due to a legal obligation or to investigate abuse."
    },
    s5: {
      title: "Your rights",
      body: "You can request access to, correction of, or deletion of your data by writing to [contact email]. If you live in the European Economic Area or another region with equivalent data protection, these rights apply under your local regulations."
    },
    s6: {
      title: "Security",
      body: "We apply reasonable measures to protect the information we process, though no system is completely infallible. We recommend not sharing sensitive information in the queries you send to the Well."
    },
    s7: {
      title: "Minors",
      body: "The bot follows Discord's minimum age requirements (13, or the minimum age required in your country). We do not intentionally target this service at users below that age."
    },
    s8: {
      title: "Changes to this policy",
      body: "We may update this policy as the service changes. We will post the new update date at the top of this page."
    },
    s9: {
      title: "Contact",
      body: "For any privacy questions, write to us at [contact email] or through [your Discord support server]."
    }
  },

  terms: {
    title: "Terms and Conditions",
    updated: "Last updated: [fill in this date]",
    intro: "By adding or using PyxPler you accept these terms. Replace the bracketed text with your project's real details before publishing this page.",
    s1: {
      title: "Acceptance of terms",
      body: "By inviting the bot to your server or interacting with it, you confirm that you accept these terms and Discord's Terms of Service and Community Guidelines."
    },
    s2: {
      title: "What the service is",
      body: "PyxPler is a Discord bot that gives access to The Wishing Well: an ecosystem with four AI personalities (The Sage, The Sarcastic One, Sci-Bot and The Soul) that answer queries in exchange for daily coins. Its answers are generated automatically and may contain errors or inaccuracies; they do not replace advice from a qualified professional, especially on medical, legal or financial matters."
    },
    s3: {
      title: "Usage requirements",
      body: "You must meet Discord's minimum age requirement (13, or whatever your jurisdiction requires) and follow its Terms of Service at all times."
    },
    s4: {
      title: "Acceptable use",
      body: "You may not use the bot to send spam, generate illegal content, attempt to extract its internal instructions or other users' data, manipulate the coin system, deliberately overload the service, or bypass any usage limits we set."
    },
    s5: {
      title: "Limitation of liability",
      body: "The service is provided \"as is\", with no guarantee of accuracy or continuous availability. We are not responsible for decisions you make based on any of the Well's voices' answers."
    },
    s6: {
      title: "Intellectual property",
      body: "The name, brand and content of this site and the bot belong to their operators. You may freely use content the bot generates for you, as long as it does not infringe third-party rights."
    },
    s7: {
      title: "Service availability and changes",
      body: "We may modify, pause or discontinue the service — including the coin economy or the available voices —, in whole or in part, at any time and without prior notice. We do not guarantee uninterrupted availability."
    },
    s8: {
      title: "Termination",
      body: "We may restrict or block bot access for any user or server that breaches these terms."
    },
    s9: {
      title: "Changes to these terms",
      body: "We may update these terms as the service changes. Continued use of the bot after a change means you accept it."
    },
    s10: {
      title: "Contact",
      body: "For any questions about these terms, write to us at [contact email] or through [your Discord support server]."
    }
  }
};
