const projectsData = {
  projects: [
    //Heads Up Display
    {
      slug: "headsUp",
      title: "HeadsUp",
      href: "./projectSites/headsUp.html",
      categories: ["Immersive-Experience", "Group-Project", "Accessibility", "Ethical-Design"],
      coverImage: "./pngs/Projects/HeadsUp/Logo.png",
      coverBannerImage: "./pngs/Projects/HeadsUp/Logo.png",
      coverBackgroundColor: "#FEFEFE",
      coverZoom: 130,

      detail: {
        meta: "Group Project from 2024 for 4 Months",

        sections: {
          summary: "HeadsUp is an adaptive automotive HUD concept for navigation, calls, setup, rear camera access, and safety warnings. It reduces distraction by showing only situation-relevant information in the driver’s field of view.",

          challenge: "The core challenge was deciding what should disappear. The HUD had to connect phone setup, windshield feedback, device transfer, and safety warnings without creating hesitation or visual overload in a driving context.",

          approach: "I owned the HUD information architecture and interaction logic, translating phone setup, navigation, calls, rear camera access, and safety warnings into task flows and screen states. We tested with 12 participants and found that users hesitated on the start screen due to equal visual weight between setup and transfer actions — leading to a clearer hierarchy, improved wording, and a saved profile overview.",

          creativeDirection: "HeadsUp is positioned as a calm safety interface rather than a futuristic automotive display — clear hierarchy, controlled warning states, direct feedback, and situational modules prioritize understanding over visual impact. Decorative motion and dashboard density were stripped to reduce cognitive load under driving pressure.",

          keyVisualSystem: "The visual system uses Inter for neutral, legible interface typography and a focused color logic where blue marks active guidance, green confirms safe states, and red is reserved for critical warnings only. Module placement is consistent across navigation, calls, and alerts, so drivers never search for information — it appears in predictable zones.",

          result: [
            "System Structuring: I owned HUD information architecture and interaction logic across 5 driving scenarios. ",
            "Validated with 12 drivers: task completion increased 40% after iteration, and setup hesitation dropped to 12% when actions had clear visual hierarchy.",
            "Iteration from Evidence: Test observations revealed that users needed explicit profile confirmation and transfer wording that explained system action.",
            "Constraint-Aware System: Phone setup, HUD display, transfer logic, and safety warnings were designed as one connected flow instead of isolated modules."
          ],

          takeawayTitle: "Takeaway",
          takeaway: "Safety-critical UX depends on subtraction, hierarchy, and confirmation. Users did not need more elements. They needed clearer priorities, stronger feedback, and wording that explained system actions at the exact moment of use. It also clarified my strongest role in group projects: I turn broad requirements, test observations, and scattered prototype feedback into structured flows and interface rules the team can build from."
        }

        ,

        images: [
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/HeadsUp/Greeting.jpg",
                alt: "HeadsUp Greeting"
              }
            ]
          },
          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/HeadsUp/iPhone 16 - Connect.jpg",
                alt: "HeadsUp amount to display "
              },
              {
                src: "../pngs/Projects/HeadsUp/iPhone 16 - Übertragen.jpg",
                alt: "HeadsUp transfer data app screen"
              }
            ]
          },
          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/HeadsUp/iPhone 16 - Amount.jpg",
                alt: "HeadsUp amount to display on hud"
              },
              {
                src: "../pngs/Projects/HeadsUp/iPhone 16 - Speichern 2.jpg",
                alt: "HeadsUp app overview"
              }
            ]
          }
        ],
        extraImages: [
          {
            src: "./pngs/Projects/HeadsUp/Navigation 2 - High Volume Cars.jpg",
            alt: "HeadsUp in action"
          },
          {
            src: "./pngs/Projects/HeadsUp/Telefonieren 1 - Anruf.jpg",
            alt: "HeadsUp Telefonat"
          },
          {
            src: "./pngs/Projects/HeadsUp/Unfall - Frontal Kolision.jpg",
            alt: "HeadsUp in action"
          },
          {
            src: "./pngs/Projects/HeadsUp/Telefonieren 2 - im anruf.png",
            alt: "HeadsUp in action"
          },
          {
            src: "./pngs/Projects/HeadsUp/Unfall - Auffahr.png",
            alt: "HeadsUp in action"
          },
        ]
      }
    },

    //CampusTalk
    {
      slug: "campusTalk",
      title: "CampusTalk",
      href: "./projectSites/campusTalk.html",
      categories: ["Group-Project", "Ethical-Design"],
      coverImage: "./pngs/Projects/CampusTalk/Logo.png",
      coverBannerImage: "./pngs/Projects/CampusTalk/Logo.png",
      coverBackgroundColor: "linear-gradient(90deg, #2D2077 50%, #35278F 68%)",
      coverZoom: 120,

      detail: {
        meta: "Group Project from 2025 for 4 Months",

        sections: {
          summary: "CampusTalk is a mobile web app designed to reduce prejudice by combining guided reflection, anonymous community exchange, and curated educational content — making participation feel safe instead of accusatory.",

          challenge: "The core challenge was reducing defensiveness. Students needed recognition and safe ways to share real experiences, while outsiders needed low pressure entry points that would not make them feel attacked. The second challenge was information overload: too much text, too many features, or an overly moral tone would make users leave before reflection could happen.",

          approach: "I synthesized 12 interviews with students and non-students into 4 distinct personas, then mapped their needs into 5 core content areas: Learn, Reflect, Share Anonymously, Community Forum, and Profile. I designed the homepage topic card structure, quiz flows with progress feedback, anonymous contribution areas with moderation workflows, and privacy-aware profile settings — all based on early card sorting research that showed users preferred guided exploration over open feeds.",

          creativeDirection: "CampusTalk is positioned as a calm credibility space rather than an activist campaign or social network — making participation feel guided and safe instead of confrontational. Loud advocacy aesthetics, technical jargon, and aggressive messaging were avoided because they trigger defensiveness in users who already approach the topic with skepticism or distance.",

          keyVisualSystem: "The visual system uses violet (#6E368C) as the primary identity, giving the platform a reflective and educational character without feeling institutional or political. White content surfaces create calm reading spaces for sensitive topics, while black text and muted gray hierarchy prevent visual noise from interrupting reflection.",

          result: [
            "Content Architecture: Synthesized interviews into 4 personas and 5 core platform areas instead of a single social feed.",
            "Guided Participation: Users move through Learn → Reflect → Share flow instead of unstructured community exploration.",
            "Evidence-Based Iteration: Card sorting research revealed users preferred guided topic cards over open feeds, leading to a structured discovery model. ",
            "Tonal Direction: Avoided activist language and technical complexity; every label and CTA was tested for emotional neutrality."
          ],

          takeawayTitle: "Takeaway",
          takeaway: "Designing for prejudice is less about explaining more and more about lowering resistance. The strongest decisions were structural and tonal: reduce overload, make participation safe, avoid accusatory language, and guide users through small moments of reflection. It also clarified my strongest role in group projects. I work best when I turn messy research, sensitive context, and many feature ideas into a clear system the team can build from."
        },


        images: [
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/CampusTalk/Games.jpg",
                alt: "CampusTalk desktop quiz overview"
              }
            ]
          },
          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/CampusTalk/Create Topic.jpg",
                alt: "CampusTalk add a post on mobile"
              },
              {
                src: "../pngs/Projects/CampusTalk/Game(2).jpg",
                alt: "CampusTalk mobile quiz frontpage"
              }
            ]
          },

          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/CampusTalk/Forum, übersicht über alle topics, (allgemeiner Feed).jpg",
                alt: "CampusTalk desktop forum"
              }
            ]
          }
        ],
        extraImages: [
          {
            src: "./pngs/Projects/Store Guide/logo.jpg",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Store Guide/app.jpg",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Store Guide/add.jpg",
            alt: "Store Guide Another Add"
          }
        ]
      }
    },

    //Après
    {
      slug: "Après",
      title: "Après",
      href: "./projectSites/Après.html",
      categories: ["Immersive-Experience"],
      coverImage: "./pngs/Projects/Aprés/Frame 59.png",
      coverBannerImage: "./pngs/Projects/Aprés/Frame 59.png",
      coverBackgroundColor: "#F4EFE5",
      coverZoom: 80,

      detail: {
        meta: "Private Project from 2026",
        sections: {
          summary: "“Buying a luxury watch is just the start — the real experience happens after the purchase.” Most apps focus on the “Buy” button, leaving customers anxious about tracking, returns, and support. In 2026, a premium post-purchase experience isn’t optional — it defines the brand. ",
          challenge: "Making post-purchase simple, transparent, and reassuring. Customers often struggle with unclear tracking updates, slow or complicated returns, and limited support. Critical flows like “My package missing” create frustration and stress. For a luxury brand, this uncertainty undermines trust and loyalty, especially for German customers accustomed to precision, while still needing to resonate globally. ",
          approach: "I designed the complete post-purchase flow across 6 screens: dashboard, tracking, alert states, return flow, care guide, and warranty management. The 3D tracker shows every stage from Bavarian workshop to doorstep; alerts combine color, icon, and microcopy for accessibility; and return management simplifies handoff through step-by-step guidance and pickup scheduling.",

          creativeDirection: "Après positions post-purchase care as luxury service, not logistics. The design prioritizes reassurance over information density — using calm alerts, generous spacing, consistent navigation, and a warm color system that echoes Bavarian craftsmanship instead of corporate efficiency. Every decision reinforces trust: customers feel guided, not transactional.",
          keyVisualSystem: "Color system uses Tannengrün (#1A2E1A) for headlines and primary actions, with Cognac (#8B6B47) exclusively for borders and details — avoiding corporate grays. Typographically, Cormorant Garamond gives headlines editorial heritage, while Jost keeps tracking and support microcopy clear and scannable. 8px baseline spacing throughout creates a mathematical precision that feels handcrafted, not mechanical.",
          result: [
            "Real-Time Confidence: The 3D shipment tracker turned uncertainty into clarity, letting customers see exactly where their watch is at every stage, from Bavarian workshop to doorstep.",
            "Proactive Resolution: The “My Package Missing” flow and return concierge anticipate issues before they escalate, giving users clear guidance and fast support.",
            "Global Luxury, Local Precision: The experience balances Bavarian attention to detail with international usability, ensuring customers worldwide feel informed, cared for, and confident.",
            "Post-Purchase as Brand: Every interaction after checkout reinforces trust and loyalty, making post-purchase care a defining part of the luxury experience rather than an afterthought. "
          ],
          takeawayTitle: "Takeaway",
          takeaway: "Most designers focus on the 'Buy' button, but few address the 'My package missing' flow. This project taught me that post-purchase experience is where luxury brands prove they care — and that trust is built through clarity, not complexity."
        },
        images: [
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/Aprés/Post-Purchase Landing.png",
                alt: "Aprés desktop Post-Purchase Landing"
              }
            ]
          },
          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/Aprés/3D Shipment Tracker.png",
                alt: "Aprés mobile 3D Shipment Tracker"
              },
              {
                src: "../pngs/Projects/Aprés/My Package Missing_ Flow.png",
                alt: "Aprés mobile My Package Missing Flow"
              }
            ]
          },
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/Aprés/Proaktiver Alert (Zollverzögerung).png",
                alt: "Aprés desktop proactive alert"
              }
            ]
          },
          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/Aprés/Return Concierge.png",
                alt: "Aprés mobile Return Concierge"
              },
              {
                src: "../pngs/Projects/Aprés/After-Care & Loyalität.png",
                alt: "Aprés mobile after care & loyalty"
              }
            ]
          }
        ],
        extraImages: [
          {
            src: "./pngs/Projects/Store Guide/logo.jpg",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Store Guide/app.jpg",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Store Guide/add.jpg",
            alt: "Store Guide Another Add"
          }
        ]
      }
    },

    //FairFlow
    {
      slug: "fairFlow",
      title: "FairFlow",
      href: "./projectSites/fairFlow.html",
      categories: ["Ethical-Design", "Data-Privacy", "Mobile-App"],
      coverImage: "",
      coverBannerImage: "",

      detail: {
        meta: "Private Project from 2024",
        sections: {
          summary: "“Users should never feel trapped by design.” FairFlow focuses on auditing a popular German subscription app with hidden unsubscribe options, misleading defaults, and manipulative upsells. The project rethinks these interactions to make them ethical, transparent, and trustworthy while maintaining business goals and revenue. ",
          challenge: "Balancing user trust with profitability. Many German users are highly sensitive to deceptive practices and expect transparency, but the app also operates internationally, where subscription models rely on clear upsells. The challenge was to remove dark patterns that frustrate users while designing flows that still encourage conversion and retention. ",
          approach: "I conducted a full dark UX audit, mapping every point where the user could be misled or trapped. Subscription flows, consent dialogs, and hidden options were redesigned with clear labeling, visible opt-out buttons, and plain-language explanations. Incentives were reframed ethically: discounts, benefits, and reminders were transparent but compelling. Microcopy reassured users of control and privacy. Testing with German participants validated trust and comprehension, while international testing ensured flows were culturally neutral and effective globally. ",

          creativeDirection: "The creative direction positions FairFlow as a transparent subscription experience rather than a conversion trap. The project had to prove that business goals can be met without hiding choices, pressuring users, or weakening trust. The visual and communicative system relies on clear hierarchy, visible exits, plain-language consent, honest incentives, and reassuring microcopy that gives users control at every decision point. I avoided manipulative urgency, misleading defaults, and buried unsubscribe paths because they create short-term retention at the cost of long-term brand credibility. The key judgement was to design monetization as a trust signal, making transparency part of the product’s value instead of a legal obligation.",
          keyVisualSystem: "",
          result: [
            "Ethical Monetization: Subscription and upsell flows remain profitable but are fully transparent, reducing complaints and cancellations caused by frustration.",
            "Trust as Differentiator: Clear unsubscribe options, consent dialogs, and transparent incentives increase user confidence, particularly in Bavaria and Germany, where privacy and honesty are highly valued.",
            "Global Consistency: Ethical design choices scale across international markets, proving that transparency and business goals can coexist.",
            "Business-Aligned UX: The project demonstrates the ability to argue for users’ rights while understanding revenue, retention, and conversion metrics."
          ],
          takeawayTitle: "Takeaway",
          takeaway: "Hier steht, was das Projekt über deine Fähigkeiten zeigt."
        },
        images: [
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/Printer Display Redesign/Xerox-Used-Office-Copier-Printer.jpg",
                alt: "Printer Interface overview"
              }
            ]
          },
          {
            layout: "two",
            items: [
              {
                src: "../pngs/your-image-2.jpg",
                alt: "Printer detail 1"
              },
              {
                src: "../pngs/your-image-3.jpg",
                alt: "Printer detail 2"
              }
            ]
          }
        ],
        extraImages: [
          {
            src: "./pngs/Projects/Store Guide/logo.jpg",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Store Guide/app.jpg",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Store Guide/add.jpg",
            alt: "Store Guide Another Add"
          }
        ]
      }
    },

    //Bodique
    {
      slug: "bodique",
      title: "Bodique",
      href: "./projectSites/bodique.html",
      categories: ["Product-Design", "Data-Privacy", "Group-Project"],
      coverImage: "./pngs/Projects/Bodique/Logo.png",
      coverBannerImage: "./pngs/Projects/Bodique/Logo.png",
      coverBackgroundColor: "#FEFEFE",
      coverZoom: 40,

      detail: {
        meta: "Group Project from Winter Semester 2025/2026 for 4 months",

        sections: {
          summary: "Bodique is a digital twin and virtual try-on experience designed to reduce fashion returns by showing customers their actual size fit before purchase — addressing one of retail's biggest problems: size-related return rates.",

          challenge: "The challenge was addressing a real business problem with high complexity. Fashion has one of the highest return rates, mainly due to fit uncertainty, while users still expect speed, convenience, and trust. At the same time, the team had to align different understandings of the product, manage time pressure, and keep the process structured despite fast project shifts.",

          approach: "I used a Lean UX process: developed 3 competitor hypotheses, tested with 8 participants on digital twin credibility, and iterated based on feedback showing that users prioritized realistic visualization over playful effects. The redesign simplified the interface, moved from a rigid sidebar to modular controls, and added a compact control strip for different guidance levels.",

          creativeDirection: "Bodique is positioned as a precise fitting assistant, not a fashion gimmick or tech showcase. The visual system prioritizes realistic body representation and clear recommendations over impressive effects — because the main barrier to adoption is trust, not entertainment.",
          keyVisualSystem: "Glassmorphism creates soft interface layers while keeping the digital twin and garment in focus. White and gray elements support readability under bright store lighting, while a large central interaction area lets users evaluate fit and silhouette without competing UI elements. Navigation works as full bar or compact movable strip, supporting different levels of guidance preference.",
          result: [
            "Validated Core Value: Users understood the digital twin concept and saw strong potential for reducing size related returns.",
            "Trust as Key Factor: Realistic visualization, recommendation clarity, and careful handling of personal data proved critical for acceptance.",
            "Simplified Experience: Testing led to a leaner and more modular interface that reduced visual overload and improved usability.",
            "Lean UX in Practice: The project demonstrates an iterative, hypothesis driven design process that connects user needs with measurable business impact."
          ],

          takeawayTitle: "Takeaway",
          takeaway: "In fashion, realistic visualization earns trust faster than impressive technology. Users chose size recommendations based on how their body looked, not on the confidence of the algorithm. It also showed that when users have control over the interface (compact vs. full bar), they engage more — and that personal preference matters more than 'best practice'."
        },

        images: [
          {
            layout: "one",
            items: [
              {
                type: "video",
                src: "../pngs/Projects/Bodique/video.mp4",
                alt: "Bodique trailer"
              }
            ]
          },

          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/Bodique/WhatsApp Image 2026-03-27 at 23.13.44.jpeg",
                alt: "Bodique homescreen"
              },
              {
                src: "../pngs/Projects/Bodique/WhatsApp Image 2026-03-28 at 01.17.01.jpeg",
                alt: "Bodique testing insights"
              }
            ]
          },

          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/Bodique/WhatsApp Image 2026-03-28 at 01.19.51.jpeg",
                alt: "Bodique interaction screens"
              }
            ]
          },

          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/Bodique/WhatsApp Image 2026-03-28 at 01.19.34.jpeg",
                alt: "Bodique brands and clothe preferences"
              }
            ]
          }
        ],
        extraImages: [
          {
            src: "./pngs/Projects/Store Guide/logo.jpg",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Store Guide/app.jpg",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Store Guide/add.jpg",
            alt: "Store Guide Another Add"
          }
        ]
      }
    },

    //StoreGuide
    {
      slug: "storeGuide",
      title: "Store Guide",
      href: "./projectSites/storeGuide.html",
      categories: ["Mobile-App", "Group-Project"],
      coverImage: "./pngs/Projects/Store Guide/cover.png",
      coverBannerImage: "./pngs/Projects/Store Guide/cover.png",
      coverBackgroundColor: "#30782F",
      coverZoom: 90,

      detail: {
        meta: "Group Project from 2023/24 for 4 Months",
        sections: {
          summary: "StoreGuide is an in-store navigation app that helps users find products quickly and compare options without manually searching store layouts — reducing friction in a high-pressure shopping context.",
          challenge: "The core challenge was designing fast, predictable routing that users could trust under time pressure — without letting exploratory features distract from the main task of finding the right product.",
          approach: "I defined the core interaction model: guided step-by-step routing where users follow clear instructions instead of searching manually. Product details and comparison are integrated directly into routes, so users make decisions without breaking their flow — every decision supports speed and clarity.",

          creativeDirection: "StoreGuide is positioned as a practical orientation tool, not a feature-heavy shopping companion — prioritizing speed and clarity because users are impatient and decisions need to happen quickly.",
          keyVisualSystem: "Deep green marks guidance, active states, and primary actions, while white and light gray keep product information and route steps readable in busy shopping environments. Simple card structure, direct step indicators, and clear route hierarchy minimize decoration so users can stay focused on finding and comparing products.",
          result: [
            "Interaction Model: Defined guided routing with integrated product comparison instead of separate search and details views. ",
            "Reduced Friction: Users reach products quickly with minimal steps.",
            "Navigation Clarity: Simple step indicators and consistent module placement improve orientation and confidence. ",
            "Design in Constraints: Built a structured experience within a limited project scope and with a team new to UX design"
          ],
          takeawayTitle: "Takeaway",
          takeaway: "In time-pressured contexts, simplicity and predictability matter more than features or aesthetics. Users don't want a beautiful shopping assistant — they want to find what they need and move on. It also showed me that good design systems in constrained teams come from clear ownership and documented decisions.",
          link: "../Booklets/Booklet Final Holzwert Julia.pdf"
        },
        images: [
          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/Store Guide/Home.png",
                alt: "Store Guide Homescreen"
              },
              {
                src: "../pngs/Projects/Store Guide/Sonderfall.png",
                alt: "Store Guide special case"
              }
            ]
          },
          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/Store Guide/Produkt.png",
                alt: "Store Guide Start route"
              },
              {
                src: "../pngs/Projects/Store Guide/Lokalisation.jpg",
                alt: "Store Guide localization"
              }
            ]
          }

        ],
        extraImages: [
          {
            src: "./pngs/Projects/Store Guide/logo.jpg",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Store Guide/app.jpg",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Store Guide/add.jpg",
            alt: "Store Guide Another Add"
          }
        ]

      }

    },

    //Printer Interface Redesign
    {
      slug: "printerInterface",
      title: "Printer Interface Redesign",
      href: "./projectSites/printerInterface.html",
      categories: ["Redesign"],
      coverImage: "./pngs/Projects/Printer Display Redesign/logo.png",
      coverBannerImage: "./pngs/Projects/Printer Display Redesign/logo.png",
      coverBackgroundColor: "#ffffff",
      coverZoom: 20,

      detail: {
        meta: "Private Project from 2024",
        sections: {
          summary: "This project redesigned a campus printer interface to reduce friction in an urgent, high-pressure context — transforming a cluttered institutional tool into something intuitive and consistent with the university's visual identity.",
          challenge: "Campus printers serve a wide range of users under time pressure. The existing interface presented too many options at once, lacked clear visual hierarchy, and offered no coherent connection between the web-based preparation tool and the physical printer display. The result was confusion, slower print jobs, and underuse of available features. The challenge was consolidating a fragmented system into a single, cohesive experience without sacrificing the flexibility users needed.",
          approach: "I led the interaction redesign and visual hierarchy, using THI's blue identity as a structural tool instead of just a branding choice. I simplified menus, unified the web-to-printer flow so preparation translated directly to the display, and established a visual hierarchy where active elements draw attention only when relevant — reducing cognitive load in time-pressured situations.",

          creativeDirection: "The printer is positioned as a dependable campus utility, not a feature-heavy machine interface — prioritizing clarity and speed because users are impatient and have other priorities.",
          keyVisualSystem: "Deep blue (THI's identity) marks active guidance and primary actions, while white reduces visual weight around inactive elements without removing context. The system uses fixed module zones and reusable components so setup, transfers, and printing remain predictable at a glance — supporting fast, confident use under time pressure.",
          result: [
            "Faster Interactions: Removing conflicting visual principles and unnecessary steps shortened the time from arrival to print, benefiting users with tight schedules.",
            "Reduced Friction: A consistent interface language across web and display made the system predictable, lowering the learning curve for first-time users.",
            "Institutional Coherence: The redesign aligned with THI's visual identity while elevating the standard of the interface beyond generic printer UI conventions."
          ],
          takeawayTitle: "Takeaway",
          takeaway: "Institutional software deserves the same design rigor as consumer products — and that removing friction from 'boring' workflows can have real impact. Even an unglamorous tool like a campus printer shapes daily experience for hundreds of users. When designed with care, it becomes invisible (good) instead of frustrating (common).",
          link: "../Booklets/Booklet II Final Julia Holzwert.pdf"
        },
        images: [
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/Printer Display Redesign/Login.png",
                alt: "Printer Interface Login"
              }
            ]
          },
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/Printer Display Redesign/Home.png",
                alt: "Printer Interface Homescreen"
              }
            ]
          },
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/Printer Display Redesign/Senden-Sendeziel.png",
                alt: "Printer Interface Overview"
              }
            ]
          },
          {
            layout: "one",
            items: [
              {
                type: "compare",
                before: "../pngs/Projects/Printer Display Redesign/before.jpeg",
                after: "../pngs/Projects/Printer Display Redesign/Senden-Standardeinstellungen.jpg",
                altBefore: "INVG before Redesign",
                altAfter: "INVG after Redesign"
              }
            ]
          }
        ],
        extraImages: [
          {
            src: "./pngs/Projects/Printer Display Redesign/Frame 1-min.jpg",
            alt: "Printer Interfaces"
          },
          {
            src: "./pngs/Projects/Printer Display Redesign/MicrosoftTeams-image20521.jpg",
            alt: "Printer in Use"
          },
          {
            src: "./pngs/Projects/Printer Display Redesign/Xerox-Used-Office-Copier-Printer.jpg",
            alt: "Printer in Foreground"
          },
          {
            src: "./pngs/Projects/Printer Display Redesign/office-printers-and-mfps-data.jpg",
            alt: "Printer in Foreground"
          }
        ]
      }
    },

    //INVG App Redesign
    {
      slug: "invg",
      title: "INVG App Redesign",
      href: "./projectSites/invg.html",
      categories: ["Mobile-App", "Public-Transport", "Redesign"],
      coverImage: "./pngs/Projects/INVG App Redesign/Logo.png",
      coverBannerImage: "./pngs/Projects/INVG App Redesign/Logo.png",
      coverBackgroundColor: "#ffffff",
      coverZoom: 20,

      detail: {
        meta: "Private Project from 2026 for 2 Weeks",
        sections: {
          summary: "The same interface, three entirely different experiences. - The INVG app gives users quick access to local transport information — but its existing design left room for both visual and structural improvement. Rather than producing a single redesign, this project used the INVG app as a foundation to explore how visual design language shapes usability, perception, and trust across three distinct design systems.",
          challenge: "Applying strong visual styles to a functional transit app without breaking its usability is harder than it sounds. Each design system — Glassmorphism, Bauhaus, and Material Design — carries its own rules around hierarchy, contrast, spacing, and interaction. The challenge was not simply aesthetic translation, but ensuring that each version remained legible, navigable, and fit for real transit conditions: quick glances, moving environments, and users under time pressure.",
          approach: "I began by deconstructing the original INVG interface, mapping its information architecture, user flows, and hierarchy before touching any visuals. That foundation stayed constant across all three versions. From there, each redesign was built on the core principles of its respective system — Glassmorphism's layered depth and soft transparency, Bauhaus's bold geometry and typographic discipline, and Material Design's structured clarity and component logic. In each case, contrast and visual weight were calibrated to surface critical information — next departure, platform, delay — within seconds of opening the app.",

          creativeDirection: "The creative direction positions the INVG App Redesign as a study in visual trust under real transport pressure. The project had to show how the same transit information can feel different depending on the design system, without weakening speed, legibility, or orientation. Each version uses its own visual logic: layered transparency for Glassmorphism, geometric discipline for Bauhaus, and structured component clarity for Material Design. I avoided treating the styles as surface decoration because public transport interfaces depend on fast recognition and confidence. The key judgement was to keep the functional core stable while letting visual language change perception, proving that style affects usability when applied with restraint.",
          keyVisualSystem: "",
          result: [
            "Three Distinct Experiences, One Functional Core: Each version delivered a different visual tone and emotional register while preserving identical usability and navigation logic.",
            "Design System Fluency: The project demonstrated the ability to work fluidly across visual languages — adapting layout, typography, and interaction patterns without defaulting to personal style.",
            "Usability Under Constraint: All three interfaces were tested against real transit use conditions, confirming that bold visual choices and functional clarity are not mutually exclusive.",
            "Deeper Design Thinking: Redesigning the same product three times revealed how much visual language influences user confidence and perceived reliability — even when the underlying information is identical."
          ],
          takeawayTitle: "Takeaway",
          takeaway: "This project is a study in design systems and adaptive thinking. Understanding how visual language shapes user perception — not just appearance — is what separates surface-level styling from considered interface design.",
          link: "../Booklets/Booklet Final Holzwert Julia.pdf"
        },
        images: [

          {
            layout: "one",
            items: [
              {
                type: "compare",
                before: "../pngs/Projects/INVG App Redesign/before.png",
                after: "../pngs/Projects/INVG App Redesign/Frame 2.jpg",
                altBefore: "INVG before redesign",
                altAfter: "INVG after redesign"
              }
            ]
          },

          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/INVG App Redesign/frame 3.png",
                alt: "invg2"
              },
              {
                src: "../pngs/Projects/INVG App Redesign/frame 1.png",
                alt: "invg3"
              }
            ]
          },
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/INVG App Redesign/Bus-VGI-1-Foto-INVG.png",
                alt: "invg4"
              }
            ]
          },
        ]
      }

    },

    //MemoWe
    {
      slug: "memowe",
      title: "MemoWe",
      href: "./projectSites/memowe.html",
      categories: ["Health-Tech", "Accessibility"],
      coverImage: "./pngs/Projects/MemoWe/Logo.png",
      coverBannerImage: "./pngs/Projects/MemoWe/Logo.png",
      coverBackgroundColor: "#30BAC7",
      coverZoom: 110,

      detail: {
        meta: "Private Project from 2024 for 6 Months",
        sections: {
          summary: "Memory loss shouldn't mean losing connection - For individuals living with dementia and their families, staying in touch and maintaining a daily routine is both essential and increasingly difficult. MemoWe was designed to bridge that gap — offering a product that supports both patients and their loved ones without adding complexity to already demanding lives.",
          challenge: "Designing for users with dementia requires an entirely different standard of clarity. Cognitive load, visual noise, and inconsistent patterns are not just inconveniences — they are genuine barriers. At the same time, the product needed to serve family members who may be less tech-savvy or emotionally overwhelmed. The challenge was creating a single, unified experience that felt intuitive, warm, and reliable for both audiences simultaneously.",
          approach: "I led the full product design from architecture to interface, grounding every decision in cognitive accessibility principles. Warm color palettes, high-contrast layouts, predictable navigation, and a daily routine feature were designed to reduce cognitive load and give patients a sense of stability and control.",
          creativeDirection: "MemoWe is a calm support system rather than a medical tool or productivity app. The experience had to help people with dementia and their families feel guided, connected, and safe without adding emotional or cognitive pressure. The visual system therefore relies on warm colours, high contrast, familiar patterns, large readable elements, and predictable flows. I avoided complex dashboards, clinical aesthetics, and feature-heavy navigation because they would increase stress for users who need reassurance and repetition. The key judgement was to design around trust before functionality, making every interaction feel simple enough to return to and meaningful enough to support daily connection.",
          keyVisualSystem: "Turquoise (#00A099) creates a clear, recognizable structure without falling into clinical health-tech aesthetics. Light orange accent adds warmth and emotional balance, while glassmorphism supports soft, approachable interface layers that feel modern but not overwhelming. Large readable elements, high contrast, and repeated patterns support recognition and reduce navigation uncertainty.",
          result: [
            "End-to-End Product Ownership: Led full product design from information architecture to final interface.",
            "Accessibility-First Structure: Daily routine features and simplified navigation gave patients stability; warm colors and high contrast reduced visual stress. ",
            "User Feedback Integration: Early testing with families revealed need for predictable patterns and large touch targets — incorporated throughout.",
            "Inclusive Design: The interface performed across elderly patients and younger family members without requiring technical literacy."
          ],
          takeawayTitle: "Takeaway",
          takeaway: "MemoWe demonstrates my ability to design for high-stakes, emotionally sensitive contexts where clarity and empathy are not optional. Building a product that genuinely supports vulnerable users — and the people caring for them — is one of the most meaningful challenges a designer can take on"
        },
        images: [

          {
            layout: "one",
            items: [
              {
                type: "video",
                src: "../pngs/Projects/MemoWe/MemoWe_Ad_JuHo.mp4",
                alt: "MemoWe Trailer"
              }
            ]
          },

          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/MemoWe/profile home.png",
                alt: "MemoWe Profile"
              }
            ]
          },
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/MemoWe/upload.png",
                alt: "MemoWe Upload"
              }
            ]
          },
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/MemoWe/activity tracker.jpg",
                alt: "MemoWe Resident Profile Information"
              }
            ]
          }
        ],
        extraImages: [
          {
            src: "./pngs/Projects/MemoWe/Frame_151.jpg",
            alt: "MemoWe Screens"
          },         
          {
            src: "./pngs/Projects/MemoWe/Memowe_laptop.png",
            alt: "MemoWe Social Media"
          },
          {
            src: "./pngs/Projects/MemoWe/picture gallery.jpg",
            alt: "MemoWe Photo Gallery"
          },
          {
            src: "./pngs/Projects/MemoWe/activity.jpg",
            alt: "MemoWe Activity"
          }
        ]
      }
    },

    //PikBre 3D - Remote Control
    {
      slug: "pikBre3D-RemoteControl",
      title: "PikBre 3D - Remote Control",
      href: "./projectSites/pikBre3D-RemoteControl.html",
      categories: ["Product-Design", "Group-Project"],
      coverImage: "./pngs/Projects/PikBre 3D - Remote Control/logo.png",
      coverBannerImage: "./pngs/Projects/PikBre 3D - Remote Control/logo.png",
      coverBackgroundColor: "#FEFEFE",
      coverZoom: 30,

      detail: {
        meta: "Group Project from 2026 for 5 Weeks",
        sections: {
          summary: "PikBre is an expressive ambient remote control designed to be visible and playful in gaming environments — balancing functional symbols with a memorable sculptural identity that blends into a collector's space.",
          challenge: "Delivering a complete product design process within a tight five-week window, alongside other academic commitments, required both disciplined time management and clear team coordination. Beyond logistics, the real design challenge was developing a coherent visual and functional language for an everyday object — one where every formal decision needed to be grounded in design theory, from aesthetic principles to sign and symbol function.",
          approach: "I led the form exploration and interaction logic, using a Pikmin-inspired flower silhouette to make the remote feel like a collectible object instead of a generic peripheral. Black body with green illumination creates a gaming-room aesthetic, while honeycomb controls and leaf-shaped buttons communicate function through object language before interaction.",

          creativeDirection: "PikBre is positioned as an expressive ambient controller, not a neutral household remote — treating the object as a visible design presence in gaming spaces rather than something to be hidden.",
          keyVisualSystem: "Black body and green illumination reference gaming peripherals and gaming culture, while the flower-like silhouette makes the remote feel collectible and character-driven. Form follows function: honeycomb controls area, leaf-shaped buttons, and glowing power signal create symbolic cues without relying on conventional remote layouts — making the object readable and memorable.",
          result: [
            "Form Language: Designed a flower-inspired silhouette and honeycomb controls that make the remote feel like an expressive object, not a neutral tool.",
            "Symbolic Communication: Leaf buttons and glowing power signal communicate function through object design before interaction.",
            "Cultural Integration: Black and green color language positions the remote within gaming peripherals and collector aesthetics.",
            "Theory-Driven Defense: Every formal choice was grounded in design theory, enabling a presentation that argued for the design rather than just showcasing it."
          ],
          takeawayTitle: "Takeaway",
          takeaway: "Even functional products benefit from expressive form language and cultural context. A remote control doesn't have to be neutral. When designed with intention, it becomes a visible object that users want to display, not hide — which changes how people perceive and interact with it."
        },
        images: [
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/PikBre 3D - Remote Control/early stage.jpeg",
                alt: "PikBre early Stage"
              }
            ]
          },
          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/PikBre 3D - Remote Control/first impression.jpeg",
                alt: "PikBre first Impression"
              },
              {
                src: "../pngs/Projects/PikBre 3D - Remote Control/product.jpeg",
                alt: "PikBre Product"
              }
            ]
          },

          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/PikBre 3D - Remote Control/WhatsApp Image 2026-03-27 at 22.28.53.jpeg",
                alt: "PikBre Quality & Complexity"
              },
              {
                src: "../pngs/Projects/PikBre 3D - Remote Control/WhatsApp Image 2026-03-27 at 22.29.35.jpeg",
                alt: "PikBre Quality & Complexity"
              }
            ]
          }
        ],
        extraImages: [
          {
            src: "./pngs/Projects/PikBre 3D - Remote Control/in use.jpeg",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/PikBre 3D - Remote Control/anzeichen.jpeg",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/PikBre 3D - Remote Control/produkt.jpg",
            alt: "Store Guide Another Add"
          }
        ]
      }
    },

    //DB Navigator Redesign
    {
      slug: "DBNavigatorRedesign",
      title: "DB Navigator Redesign",
      href: "./projectSites/DBNavigatorRedesign.html",
      categories: ["Accessibility", "Mobile-App", "Public-Transport", "Redesign"],
      coverImage: "./pngs/Projects/DB Navigator Redesign/Logo.png",
      coverBannerImage: "./pngs/Projects/DB Navigator Redesign/Logo.png",
      coverBackgroundColor: "#ffffff",
      coverZoom: 50,

      detail: {
        meta: "Private Project from 2026",
        sections: {
          summary: "This project improves DB Navigator accessibility for elderly passengers and disabled users — redesigning connection results, journey details, and travel information with stronger contrast, clearer hierarchy, and integrated accessibility features.",

          challenge: "Making DB Navigator more accessible without forcing users to relearn it. The app already has familiar patterns for search, connection results, and journey details, so the redesign had to improve clarity, contrast, status feedback, and inclusive travel information within the existing structure.",

          approach: "I redesigned connection results, journey details, and delay states to improve contrast, icon support, and grouping logic. A new Accessibility display option brings wheelchair spaces, elevators, step-free access, accessible toilets, vibration alerts, tactile guidance, hearing support, and assistance services directly into the journey flow instead of a separate mode.",

          creativeDirection: "The redesign is positioned as a reliability upgrade that keeps familiar DB Navigator structures while making critical information easier to scan through stronger contrast, icon support, and clearer hierarchy.",

          keyVisualSystem: "Inter typography supports functional reading in dense travel contexts. Delay, punctuality, and occupancy each receive distinct state colors: strong contrast pairing dark backgrounds with white text. A new white icon palette on categorized backgrounds (mobility, sanitary, sensory, assistance) marks accessibility options, helping users scan and compare at route level.",

          result: [
            "Specific Screen Work: Connection results, journey details, delay states, occupancy indicators, and route-level Accessibility information were redesigned.",
            "New Inclusion Feature: A dedicated Accessibility display option brings wheelchair spaces, elevators, step-free access, accessible toilets, vibration alerts, tactile guidance, hearing support, and assistance services into the normal journey flow.",
            "System-Aware Redesign: The concept builds on the existing DB Navigator architecture instead of replacing learned patterns.",
            "Concrete Visual System: Typography, contrast, state colors, icon categories, and card hierarchy were defined to make critical travel information easier to scan.",
            "Honest Scope: No user testing was conducted, so the project communicates design reasoning and heuristic improvement rather than measured usability impact."
          ],

          takeawayTitle: "Takeaway",
          takeaway: "This project taught me that Accessibility redesign is often about integration, not separation. The stronger decision was to make important travel conditions visible inside the normal journey flow instead of creating a special mode. It also sharpened my judgement around established products: good redesign does not always mean changing the structure. Sometimes it means making the existing system clearer, more readable, and more inclusive."
        },
        images: [

          {
            layout: "one",
            items: [
              {
                type: "compare",
                before: "../pngs/Projects/DB Navigator Redesign/Darkmode.png",
                after: "../pngs/Projects/DB Navigator Redesign/Lightmode.png",
                altBefore: "DB Navigator before WCAG AAA in Lightmode",
                altAfter: "DB Navigator before WCAG AAA in Darkmode"
              }
            ]
          },

          {
            layout: "one",
            items: [
              {
                type: "compare",
                before: "../pngs/Projects/DB Navigator Redesign/Tickets D.png",
                after: "../pngs/Projects/DB Navigator Redesign/Tickets L.png",
                altBefore: "DB Navigator with Inclusion add on in Lightmode",
                altAfter: "DB Navigator with Inclusion add on in Darkmode"
              }
            ]
          },

          {
            layout: "one",
            items: [
              {
                type: "compare",
                before: "../pngs/Projects/DB Navigator Redesign/Fahrten 100_.png",
                after: "../pngs/Projects/DB Navigator Redesign/Fahrten 100_(1).png",
                altBefore: "DB Navigator with Accessibility-Infos in Lightmode",
                altAfter: "DB Navigator with Accessibility-Infos in Darkmode"
              }
            ]
          },

          {
            layout: "one",
            items: [
              {
                type: "compare",
                before: "../pngs/Projects/DB Navigator Redesign/Acc Infos(2).png",
                after: "../pngs/Projects/DB Navigator Redesign/Acc Infos(1).png",
                altBefore: "DB Navigator Accessibility-Information in Lightmode",
                altAfter: "DB Navigator Accessibility-Information in Darkmode"
              }
            ]
          }

        ],
        extraImages: [
          {
            src: "./pngs/Projects/Store Guide/logo.jpg",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Store Guide/app.jpg",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Store Guide/add.jpg",
            alt: "Store Guide Another Add"
          }
        ]
      }
    },



    //Spatial To-Do
    {
      slug: "spatialTo-Do",
      title: "Spatial To-Do",
      href: "./projectSites/spatialTo-Do.html",
      categories: ["Immersive-Experience"],
      coverImage: "",
      coverBannerImage: "",

      detail: {
        meta: "Private Project from 2026",
        sections: {
          summary: "“Productivity tools shouldn’t be limited to a screen.” In 2026, AR and VR offer the chance to rethink how people organize tasks and time. By extending a simple to-do list into a spatial interface, users can interact with their tasks in three dimensions, creating context, awareness, and presence while staying immersed in their environment. ",
          challenge: "Transforming a basic to-do list into a spatial experience without overwhelming the user. Traditional lists work linearly, but in AR/VR, poorly structured overlays can feel cluttered, distracting, or confusing. Tasks need to feel tangible, easy to prioritize, and always accessible without breaking immersion. The challenge was balancing functionality, comfort, and spatial cognition. ",
          approach: "I reimagined tasks as floating, manipulable objects anchored in the user’s environment. Key items appear in the primary field of view, while lower-priority tasks float around peripheral zones, fading dynamically. Gestures and eye-tracking let users move, expand, or mark tasks complete intuitively. Contextual reminders attach to objects in the physical space, linking digital tasks to real-world triggers. Color, light, and subtle haptic cues communicate urgency and deadlines without creating visual noise. The system adapts dynamically to the user’s focus and spatial movement, creating a seamless, human-centered workflow in 3D. ",

          creativeDirection: "The creative direction positions Spatial To-Do as a spatial productivity layer rather than a list placed inside AR or VR. The experience had to make tasks feel present, prioritized, and connected to the user’s environment without creating visual clutter. The visual system relies on floating task objects, depth-based hierarchy, peripheral fading, subtle urgency cues, and gesture-led interaction to support focus in three dimensions. I avoided dense overlays and screen-like layouts because they would fight against immersion and increase cognitive load. The key judgement was to use space as a functional structure, turning task management into something users can see, arrange, and act on naturally.",
          keyVisualSystem: "",
          result: [
            "Immersive Task Awareness: Users see tasks in context, spatially organized to reduce cognitive load and increase retention.",
            "Intuitive Interaction: Gestures, gaze, and voice commands replace clicks, making task management faster and more natural.",
            "Contextual Productivity: Tasks anchor to real-world cues, creating a blend of digital organization and physical environment awareness.",
            "Future-Ready Design: The spatial interface establishes a blueprint for productivity tools in AR/VR, balancing functionality, immersion, and comfort for long-term use."
          ],
          takeawayTitle: "Takeaway",
          takeaway: "Spatial computing is already redefining everyday tools. This project shows my ability to design emerging interfaces while keeping the human experience central. "
        },
        images: [
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/Printer Display Redesign/Xerox-Used-Office-Copier-Printer.jpg",
                alt: "Printer Interface overview"
              }
            ]
          },
          {
            layout: "two",
            items: [
              {
                src: "../pngs/your-image-2.jpg",
                alt: "Printer detail 1"
              },
              {
                src: "../pngs/your-image-3.jpg",
                alt: "Printer detail 2"
              }
            ]
          }
        ],
        extraImages: [
          {
            src: "./pngs/Projects/Store Guide/logo.jpg",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Store Guide/app.jpg",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Store Guide/add.jpg",
            alt: "Store Guide Another Add"
          }
        ]
      }
    },

    //HealthyStart
    {
      slug: "healthyStart",
      title: "HealthyStart",
      href: "./projectSites/healthyStart.html",
      categories: ["Health-Tech", "Data-Privacy", "Mobile-App"],
      coverImage: "./pngs/Projects/HealthyStart/Logo.png",
      coverBannerImage: "./pngs/Projects/HealthyStart/Logo.png",
      coverBackgroundColor: "#FAFAF8",
      coverZoom: 0,

      detail: {
        meta: "Private Project from 2024",
        sections: {
          summary: "“Privacy is the first product.” For apps handling sensitive data, users hesitate at the first step: onboarding. HealthyStart focuses on explaining permissions, security, and data use in a way that feels transparent, reassuring, and easy to understand, even for non-technical users. ",
          challenge: "Designing an onboarding experience that communicates privacy clearly to non-technical users while respecting regional expectations. German users expect precision, control, and compliance with strict privacy standards like GDPR, but the interface also needed to feel approachable and intuitive for international audiences. Users often hesitate at first because health data is sensitive, and poor explanations can reduce adoption. ",
          approach: "I layered information to balance simplicity and depth. Permissions are grouped by type and impact, highlighting the required versus optional data. Security practices like encryption, secure storage, and two-factor authentication are explained through visual cues and plain-language animations rather than technical jargon. Microcopy reassures users at each step, using culturally familiar language and references for the German audience while maintaining clarity for international users. Interactive walkthroughs let users preview and adjust settings before completing onboarding, and default settings prioritize privacy. ",

          creativeDirection: "The creative direction positions HealthyStart as a trust-building onboarding experience rather than a permission checklist. The product had to make sensitive health data feel understandable, controlled, and protected from the first interaction. The visual system uses layered explanations, clear permission groups, calm microcopy, plain-language security cues, and privacy-first defaults to reduce hesitation without hiding important details. I avoided legalistic copy, technical security dashboards, and fear-based messaging because they would create distance instead of confidence. The key judgement was to make privacy feel actionable, showing users what happens to their data before asking for commitment.",
          keyVisualSystem: "Forest Teal (#2D7D6F) creates a calm health-tech identity while Warm White keeps the onboarding light and approachable. DM Serif Display gives key privacy statements a human, editorial quality, while Inter keeps permissions and microcopy direct and functional — supporting the core strategy of making privacy feel actionable, not bureaucratic.",
          result: [
            "Immediate Trust: Users understand what health data is collected, why, and how it is protected, reducing anxiety and increasing onboarding completion.",
            "Localized Confidence: The flow aligns with German expectations for precision and transparency while remaining clear and approachable for global users.",
            "Privacy as Brand: The onboarding establishes data protection as a core part of the app experience, reinforcing long-term trust and loyalty."
          ],
          takeawayTitle: "Takeaway",
          takeaway: "Privacy and trust are essential for health apps. This project proves my ability to build trust through UI, a senior level skill. "
        },
        images: [
          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/HealthyStart/Welcome & First Impression.png",
                alt: "HealthyStart Welcome & First Impression"
              },
              {
                src: "../pngs/Projects/HealthyStart/Permission Grouping.png",
                alt: "HealthyStart Permission Grouping"
              }
            ]
          },
          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/HealthyStart/Security Explanation.png",
                alt: "HealthyStart Security Explanation"
              },
              {
                src: "../pngs/Projects/HealthyStart/Interactive Privacy Preview.png",
                alt: "HealthyStart Interactive Privacy Preview"
              }
            ]
          },
          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/HealthyStart/Microcopy & Lokalisierung.png",
                alt: "HealthyStart/Microcopy & Location"
              },
              {
                src: "../pngs/Projects/HealthyStart/Onboarding Completion.png",
                alt: "HealthyStart Onboarding Completion"
              }
            ]
          }
        ],
        extraImages: [
          {
            src: "./pngs/Projects/Store Guide/logo.jpg",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Store Guide/app.jpg",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Store Guide/add.jpg",
            alt: "Store Guide Another Add"
          }
        ]
      }
    },
  ]
};
