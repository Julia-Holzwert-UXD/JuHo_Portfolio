const projectsData = {
  projects: [
    //Heads Up Display
    {
      slug: "headsUp",
      title: "HeadsUp",
      href: "./projectSites/headsUp.html",
      categories: ["Immersive-Experience", "Group-Project", "Accessibility", "Ethical-Design"],
      coverImage: "./pngs/Projects/HeadsUp/Logo.png",

      detail: {
        meta: "Group Project from 2024 for 4 Months",

        sections: {
          summary: "HeadsUp is an adaptive automotive HUD concept for navigation, calls, setup, rear camera access, and safety warnings. It reduces distraction by showing only situation-relevant information in the driver’s field of view.",

          challenge: "The core challenge was deciding what should disappear. The HUD had to connect phone setup, windshield feedback, device transfer, and safety warnings without creating hesitation or visual overload in a driving context.",

          approach: "My main responsibility was the information architecture and interaction logic for the adaptive HUD modules. I translated setup, navigation, calls, rear camera access, and safety warnings into task flows, screen states, and module behavior. Specific screens included the phone setup flow, windshield start screen, saved profile overview, transfer state, and rear camera selection flow. We tested the prototype with 12 participants and tracked setup tasks, HUD recognition, rear camera access, errors, assists, and subjective feedback. I conducted two participant sessions and identified that users hesitated on the windshield start screen because setup and transfer actions had the same visual weight. This led to a clearer action hierarchy, improved transfer wording, explicit profile naming, a saved profile overview, responsive button groups, and a gray information preview.",

          creativeDirection: "HeadsUp is positioned as a calm safety interface rather than a futuristic automotive display. Clear hierarchy, controlled warning states, direct feedback, and situational modules carry the direction. Decorative motion and dense dashboard aesthetics were reduced because the system needed fast understanding, not visual impact.",

          keyVisualSystem: "The visual system uses Inter to create the precision of a neutral system interface. The color logic follows familiar mobile state semantics, since most study participants used Android and the HUD needed to feel recognizable under pressure. Blue marks active guidance, selected routes, and interaction focus. Green confirms safe states. Red is reserved for critical warnings, so urgency stays distinct. Gray reduces inactive elements without removing context. Fixed module zones, reusable components, responsive button groups, and preview states make setup, transfers, calls, routes, and warnings predictable at a glance.",

          result: [
            "System Structuring: I owned the HUD information architecture and interaction logic, turning broad driving scenarios into task flows, screen states, and module rules.",
            "Concrete Screen Work: I structured the phone setup flow, windshield start screen, saved profile overview, transfer state, rear camera selection flow, and safety warning states.",
            "Validated with Users: We tested with 12 participants and tracked task behavior, errors, assists, HUD recognition, rear camera access, and subjective feedback.",
            "Iteration from Evidence: My test observations revealed hesitation on the start screen, leading to clearer button hierarchy, profile confirmation, improved transfer wording, and preview feedback.",
            "Constraint-Aware System: Phone configuration, HUD output, transfer logic, and safety alerts were designed as one connected flow to reduce ambiguity under driving pressure."
          ],

          takeawayTitle: "Takeaway",
          takeaway: "HeadsUp taught me that safety-critical UX depends on subtraction, hierarchy, and confirmation. Users did not need more elements. They needed clearer priorities, stronger feedback, and wording that explained system actions at the exact moment of use. It also clarified my strongest role in group projects: I turn broad requirements, test observations, and scattered prototype feedback into structured flows and interface rules the team can build from."
        }

        ,

        images: [
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/HeadsUp/Navigation 2 - High Volume Cars.jpg",
                alt: "HeadsUp in action"
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
          },
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/HeadsUp/Unfall - Frontal Kolision.jpg",
                alt: "HeadsUp in action"
              }
            ]
          }
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

      detail: {
        meta: "Group Project from 2025 for 4 Months",

        sections: {
          summary: "CampusTalk is a mobile web app and desktop website concept designed to reduce prejudice against students. The platform combines educational content, quizzes, personal stories, anonymous statements, and community spaces to make reflection approachable, credible, and non judgmental.",

          challenge: "The core challenge was reducing defensiveness. Students needed recognition and safe ways to share real experiences, while outsiders needed low pressure entry points that would not make them feel attacked. The second challenge was information overload: too much text, too many features, or an overly moral tone would make users leave before reflection could happen.",

          approach: "My main focus was the synthesis and structure of the platform concept. I translated interviews, personas, feature clusters, and card sorting into a clearer content architecture around learning, reflection, and exchange. Specific screens and flows included the homepage with topic cards, quiz and self-test entries, anonymous statements, themed articles, forum areas, and profile settings for privacy and participation. Based on research findings, we moved away from a broad social-feed concept and reduced the experience into guided areas with clearer purpose. I also contributed to the summative evaluation by conducting participant sessions and documenting observations. The early validation included 3 participants rating the application across 8 items on a 7-point scale, with scores ranging from 3 to 7. This supported the concept direction, but showed that interaction clarity and perceived value still needed sharper communication in future iterations.",

          creativeDirection: "CampusTalk is positioned as a calm credibility space rather than an activist campaign or open social network. The product had to make users curious without making them defensive. Its tone is structured, respectful, and human, using guided reflection instead of confrontation. Loud advocacy aesthetics, aggressive messaging, and overloaded education layouts were avoided because they would weaken trust, especially for users who already approach the topic with distance or uncertainty.",

          keyVisualSystem: "The visual system uses a deep-to-bright violet gradient as the primary identity layer. Violet gives the platform a reflective and educational character without feeling institutional, political, or confrontational. White content surfaces create calm reading spaces for sensitive topics, selected states, and structured cards. Black text keeps explanations direct and readable on white backgrounds, while muted gray separates inactive or secondary elements without removing them from context. The card-based structure, clear topic areas, and reduced hierarchy support the main strategy: make stories, quizzes, articles, and community content easy to scan before asking users to reflect more deeply.",

          result: [
            "Concept Structure: I structured the research findings into personas, content areas, screen logic, and platform architecture instead of only contributing isolated interface ideas.",
            "Evidence-Based Iteration: Interviews, card sorting, and early validation shifted the concept away from a broad social feed toward guided topic cards, quizzes, anonymous statements, and moderated exchange.",
            "Specific Screen Logic: The concept includes homepage topic cards, quiz and self-test flows, anonymous contribution areas, themed articles, forum spaces, and privacy-related profile settings.",
            "Constraint-Aware Design: The platform balances trust, anonymity, moderation, accessibility, and emotional tone so the experience can address prejudice without amplifying conflict.",
            "Specific Design System: Violet identity, white content surfaces, muted inactive states, and card-based hierarchy support credibility, calmness, and guided discovery."
          ],

          takeawayTitle: "Takeaway",
          takeaway: "CampusTalk taught me that designing for prejudice is less about explaining more and more about lowering resistance. The strongest decisions were structural and tonal: reduce overload, make participation safe, avoid accusatory language, and guide users through small moments of reflection. It also clarified my strongest role in group projects. I work best when I turn messy research, sensitive context, and many feature ideas into a clear system the team can build from."
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
          },
          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/CampusTalk/Hautton.jpg",
                alt: "CampusTalk test start"
              },
              {
                src: "../pngs/Projects/CampusTalk/Ergebnis.jpg",
                alt: "CampusTalk test result"
              }
            ]
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

      detail: {
        meta: "Private Project from 2026",
        sections: {
          summary: "“Buying a luxury watch is just the start — the real experience happens after the purchase.” Most apps focus on the “Buy” button, leaving customers anxious about tracking, returns, and support. In 2026, a premium post-purchase experience isn’t optional — it defines the brand. ",
          challenge: "Making post-purchase simple, transparent, and reassuring. Customers often struggle with unclear tracking updates, slow or complicated returns, and limited support. Critical flows like “My package missing” create frustration and stress. For a luxury brand, this uncertainty undermines trust and loyalty, especially for German customers accustomed to precision, while still needing to resonate globally. ",
          approach: "I started by putting post-purchase care at the center. Tracking shows the watch in 3D from the Bavarian workshop to the doorstep, with grouped info on delivery time, customs, and delays. Alerts combine color, icons, and text, while optional voice notifications make updates accessible. Buttons are larger, consistently spaced, and core actions are always visible. The flow is simplified to three steps: Track, Report an Issue, Manage Return. Navigation is predictable across screens, errors are easy to recover from, and offline mode ensures critical info is available anywhere. Every design choice focuses on clarity, confidence, and a human experience. ",

          creativeDirection: "The creative direction positions Après as a premium post-purchase concierge rather than a standard tracking app. The experience had to reassure luxury watch customers after checkout, when uncertainty can weaken trust faster than the purchase journey can build it. The visual system uses a refined 3D shipment narrative, clear status grouping, calm alerts, generous spacing, and always-visible core actions to make every step feel controlled and precise. I avoided transactional delivery patterns and overloaded support flows because luxury service depends on confidence, not information density. The key judgement was to treat aftercare as part of the brand promise, turning tracking, issues, and returns into moments of reassurance.",

          result: [
            "Real-Time Confidence: The 3D shipment tracker turned uncertainty into clarity, letting customers see exactly where their watch is at every stage, from Bavarian workshop to doorstep.",
            "Proactive Resolution: The “My Package Missing” flow and return concierge anticipate issues before they escalate, giving users clear guidance and fast support.",
            "Global Luxury, Local Precision: The experience balances Bavarian attention to detail with international usability, ensuring customers worldwide feel informed, cared for, and confident.",
            "Post-Purchase as Brand: Every interaction after checkout reinforces trust and loyalty, making post-purchase care a defining part of the luxury experience rather than an afterthought. "
          ],
          takeawayTitle: "Takeaway",
          takeaway: "Most designers focus on the “Buy” button, but few address the “My package missing” flow. This project demonstrates a complete understanding of the full Customer Experience, from purchase to resolution. "
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

      detail: {
        meta: "Private Project from 2024",
        sections: {
          summary: "“Users should never feel trapped by design.” FairFlow focuses on auditing a popular German subscription app with hidden unsubscribe options, misleading defaults, and manipulative upsells. The project rethinks these interactions to make them ethical, transparent, and trustworthy while maintaining business goals and revenue. ",
          challenge: "Balancing user trust with profitability. Many German users are highly sensitive to deceptive practices and expect transparency, but the app also operates internationally, where subscription models rely on clear upsells. The challenge was to remove dark patterns that frustrate users while designing flows that still encourage conversion and retention. ",
          approach: "I conducted a full dark UX audit, mapping every point where the user could be misled or trapped. Subscription flows, consent dialogs, and hidden options were redesigned with clear labeling, visible opt-out buttons, and plain-language explanations. Incentives were reframed ethically: discounts, benefits, and reminders were transparent but compelling. Microcopy reassured users of control and privacy. Testing with German participants validated trust and comprehension, while international testing ensured flows were culturally neutral and effective globally. ",

          creativeDirection: "The creative direction positions FairFlow as a transparent subscription experience rather than a conversion trap. The project had to prove that business goals can be met without hiding choices, pressuring users, or weakening trust. The visual and communicative system relies on clear hierarchy, visible exits, plain-language consent, honest incentives, and reassuring microcopy that gives users control at every decision point. I avoided manipulative urgency, misleading defaults, and buried unsubscribe paths because they create short-term retention at the cost of long-term brand credibility. The key judgement was to design monetization as a trust signal, making transparency part of the product’s value instead of a legal obligation.",

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

      detail: {
        meta: "Group Project from Winter Semester 2025/2026 for 4 months",

        sections: {
          summary: "Bodique is a concept for reducing fashion returns through a digital twin and virtual try on experience. The idea combines body scanning, fit recommendations, and a smart mirror interface to help users choose the right size before buying.",

          challenge: "The challenge was addressing a real business problem with high complexity. Fashion has one of the highest return rates, mainly due to fit uncertainty, while users still expect speed, convenience, and trust. At the same time, the team had to align different understandings of the product, manage time pressure, and keep the process structured despite fast project shifts.",

          approach: "We used a Lean UX process with hypotheses, collaborative ideation, personas, and repeated testing. The concept focused on reducing decision stress through a digital twin, intuitive guidance, and a low entry barrier for first time use. Several testing rounds helped us validate user trust, navigation clarity, and the perceived usefulness of the recommendations. Based on feedback, we simplified the interface, reduced visual overload, and replaced a rigid sidebar with a more flexible modular system.",

          creativeDirection: "The creative direction positions Bodique is positioned as a precise fitting assistant rather than a fashion gimmick or data-heavy tech product. The experience had to reduce return behavior by making size decisions feel informed, private, and low effort. The visual system therefore focuses on clean product logic, modular interface areas, realistic body representation, and restrained guidance instead of expressive fashion styling. We avoided overloaded dashboards and playful try-on effects because the main barrier was trust, not entertainment. The key judgement was to make the digital twin feel useful before it feels impressive, turning sensitive body data into clear recommendations that support confident purchase decisions.",

          result: [
            "Validated Core Value: Users understood the digital twin concept and saw strong potential for reducing size related returns.",
            "Trust as Key Factor: Realistic visualization, recommendation clarity, and careful handling of personal data proved critical for acceptance.",
            "Simplified Experience: Testing led to a leaner and more modular interface that reduced visual overload and improved usability.",
            "Lean UX in Practice: The project demonstrates an iterative, hypothesis driven design process that connects user needs with measurable business impact."
          ],

          takeawayTitle: "Takeaway",
          takeaway: "This project shows my ability to work on business relevant UX challenges with an iterative and research informed process. It highlights strengths in hypothesis driven design, interface simplification, and translating testing insights into clearer and more trustworthy product experiences."
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

      detail: {
        meta: "Group Project from 2023/24 for 4 Months",
        sections: {
          summary: "Finding products in a store takes time, especially in unfamiliar layouts. This project focuses on guiding users through stores efficiently while supporting product comparison and decision making.",
          challenge: "The main challenge was building a flexible routing system while staying within a fixed project scope. Weekly team meetings produced many ideas, which made it difficult to stay focused on the core requirements. At the same time, the team had limited experience with UX design, so the process needed to stay simple and structured. The solution had to balance guidance, usability, and clarity without becoming overly complex.",
          approach: "Working in a small team, we focused on making in store navigation fast and predictable. We built the concept around guided routing, where users are led step by step through store layouts instead of searching manually. My role was to define the core interaction and structure of the app. I shaped how routes are generated and how information is presented along the journey. Product details and comparison are integrated directly into the route, so users can make decisions without breaking their flow. We kept the interface simple and consistent, ensuring users always know where they are and what to do next. Every decision supports speed, clarity, and reliable use in real shopping situations.",

          creativeDirection: "The creative direction positions Store Guide as a practical orientation tool rather than a feature-heavy shopping companion. The experience had to support people in a moment where patience is low and decisions need to happen quickly. The visual system therefore relies on clear route hierarchy, simple step logic, consistent product cards, and direct comparison cues. I avoided exploratory navigation patterns and decorative retail aesthetics because they would slow users down and distract from the core promise: finding the right product with less effort. The key judgement was to make guidance feel predictable, so users can trust the route, stay oriented, and make decisions without interrupting their shopping flow.",

          result: [
            "Fast Route Generation: Users reach products quickly with minimal effort",
            "Clear Navigation: Simple structure improves orientation inside the store",
            "Better Decisions: Product comparison supports informed choices",
            "Positive Feedback: Users highlighted ease of use and practical value in daily shopping"
          ],
          takeawayTitle: "Takeaway",
          takeaway: "In store navigation often creates unnoticed friction until it disrupts the shopping experience. This project shows my ability to design structured, user focused solutions in a team, turning complex requirements into clear, usable experiences that support real behavior.",
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
                src: "../pngs/Projects/Store Guide/Home + Tastatur.png",
                alt: "Store Guide Homescreen + Keyboard"
              }
            ]
          },

          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/Store Guide/Sonderfall.png",
                alt: "Store special case"
              },
              {
                src: "../pngs/Projects/Store Guide/Lokalisation.jpg",
                alt: "Store Guide localization"
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
                src: "../pngs/Projects/Store Guide/Produktinformationen.png",
                alt: "Store Guide productinformation"
              }
            ]
          },

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

      detail: {
        meta: "Private Project from 2024",
        sections: {
          summary: "Across the THI campus, office printers serve students and professors daily — yet the existing interface added friction to what should be a seamless, two-step task. This project reimagined the display experience from the ground up, turning a cluttered institutional tool into something intuitive, fast, and consistent with the university's visual identity.",
          challenge: "Campus printers serve a wide range of users under time pressure. The existing interface presented too many options at once, lacked clear visual hierarchy, and offered no coherent connection between the web-based preparation tool and the physical printer display. The result was confusion, slower print jobs, and underuse of available features. The challenge was consolidating a fragmented system into a single, cohesive experience without sacrificing the flexibility users needed.",
          approach: "I built the redesign around THI's existing blue-centric colour scheme, using it as a structural tool rather than just a branding choice. Active elements draw attention only when relevant, while passive states recede — reducing cognitive load and letting users focus on the task at hand. Visual hierarchy was established through depth, contrast, and deliberate simplification, surfacing only the most essential actions at each step. The web-to-printer flow was unified so that orders prepared online translated directly and clearly to the physical display, eliminating the disconnect between the two touchpoints.",

          creativeDirection: "The creative direction positions the Printer Interface Redesign as a dependable campus utility rather than a generic machine interface. The design had to support students and professors in a task that should feel quick, clear, and almost invisible. The visual system uses THI’s blue identity, strong hierarchy, reduced action states, and consistent web-to-display logic to make the process feel coherent across touchpoints. I avoided feature-heavy menus and technical printer conventions because they created unnecessary hesitation in a time-sensitive context. The key judgement was to treat institutional software with the same clarity as a consumer product, turning a fragmented workflow into a focused service experience.",

          result: [
            "Faster Interactions: Removing conflicting visual principles and unnecessary steps shortened the time from arrival to print, benefiting users with tight schedules.",
            "Reduced Friction: A consistent interface language across web and display made the system predictable, lowering the learning curve for first-time users.",
            "Institutional Coherence: The redesign aligned with THI's visual identity while elevating the standard of the interface beyond generic printer UI conventions."
          ],
          takeawayTitle: "Takeaway",
          takeaway: "This project proves that even constrained, unglamorous interfaces benefit from rigorous design thinking. Institutional tools shape daily life for hundreds of users — and treating them with the same care as consumer products makes a measurable difference.",
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

      detail: {
        meta: "Private Project from 2026 for 2 Weeks",
        sections: {
          summary: "The same interface, three entirely different experiences. - The INVG app gives users quick access to local transport information — but its existing design left room for both visual and structural improvement. Rather than producing a single redesign, this project used the INVG app as a foundation to explore how visual design language shapes usability, perception, and trust across three distinct design systems.",
          challenge: "Applying strong visual styles to a functional transit app without breaking its usability is harder than it sounds. Each design system — Glassmorphism, Bauhaus, and Material Design — carries its own rules around hierarchy, contrast, spacing, and interaction. The challenge was not simply aesthetic translation, but ensuring that each version remained legible, navigable, and fit for real transit conditions: quick glances, moving environments, and users under time pressure.",
          approach: "I began by deconstructing the original INVG interface, mapping its information architecture, user flows, and hierarchy before touching any visuals. That foundation stayed constant across all three versions. From there, each redesign was built on the core principles of its respective system — Glassmorphism's layered depth and soft transparency, Bauhaus's bold geometry and typographic discipline, and Material Design's structured clarity and component logic. In each case, contrast and visual weight were calibrated to surface critical information — next departure, platform, delay — within seconds of opening the app.",

          creativeDirection: "The creative direction positions the INVG App Redesign as a study in visual trust under real transport pressure. The project had to show how the same transit information can feel different depending on the design system, without weakening speed, legibility, or orientation. Each version uses its own visual logic: layered transparency for Glassmorphism, geometric discipline for Bauhaus, and structured component clarity for Material Design. I avoided treating the styles as surface decoration because public transport interfaces depend on fast recognition and confidence. The key judgement was to keep the functional core stable while letting visual language change perception, proving that style affects usability when applied with restraint.",

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

      detail: {
        meta: "Private Project from 2024 for 6 Months",
        sections: {
          summary: "Memory loss shouldn't mean losing connection - For individuals living with dementia and their families, staying in touch and maintaining a daily routine is both essential and increasingly difficult. MemoWe was designed to bridge that gap — offering a product that supports both patients and their loved ones without adding complexity to already demanding lives.",
          challenge: "Designing for users with dementia requires an entirely different standard of clarity. Cognitive load, visual noise, and inconsistent patterns are not just inconveniences — they are genuine barriers. At the same time, the product needed to serve family members who may be less tech-savvy or emotionally overwhelmed. The challenge was creating a single, unified experience that felt intuitive, warm, and reliable for both audiences simultaneously.",
          approach: "I led the full product design from architecture to interface, grounding every decision in human-centered principles. Warm colour palettes and high-contrast layouts were chosen to reduce visual stress and aid recognition. Navigation was stripped to its essentials — predictable, repeatable, and forgiving of mistakes. The daily routine feature was structured around familiar rhythms, giving patients a sense of stability and control. Family-facing flows were designed for quick, low-friction check-ins, ensuring connection remained easy to maintain even at a distance.",

          creativeDirection: "The creative direction positions MemoWe as a calm support system rather than a medical tool or productivity app. The experience had to help people with dementia and their families feel guided, connected, and safe without adding emotional or cognitive pressure. The visual system therefore relies on warm colours, high contrast, familiar patterns, large readable elements, and predictable flows. I avoided complex dashboards, clinical aesthetics, and feature-heavy navigation because they would increase stress for users who need reassurance and repetition. The key judgement was to design around trust before functionality, making every interaction feel simple enough to return to and meaningful enough to support daily connection.",
          result: [
            "Meaningful Connection: Users and families reported that the app made staying in touch feel simple and natural, reducing the emotional distance that memory loss can create.",
            "Routine as Reassurance: The daily structure feature provided consistency for patients, supporting both cognitive retention and emotional wellbeing.",
            "Inclusive by Design: The interface performed across a wide demographic range, from elderly patients to younger family members, without requiring technical literacy.",
            "Foundation for Growth: MemoWe's architecture is built to expand — with planned features for different dementia stages, tailored family tools, and enhanced care coordination"
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

      detail: {
        meta: "Group Project from 2026 for 5 Weeks",
        sections: {
          summary: "A remote control is one of the most handled objects in any home — yet rarely designed to merge within surroundings. PikBre was a collaborative product design project focused on conceiving, developing, and presenting a remote control with a defined functional brief. Working as a small team, the project spanned the full design process — from initial concept to physical prototype and formal presentation.",
          challenge: "Delivering a complete product design process within a tight five-week window, alongside other academic commitments, required both disciplined time management and clear team coordination. Beyond logistics, the real design challenge was developing a coherent visual and functional language for an everyday object — one where every formal decision needed to be grounded in design theory, from aesthetic principles to sign and symbol function.",
          approach: "The team divided work according to individual strengths while maintaining a unified creative direction. The process moved through moodboarding, ideation sketches, AI-assisted visual exploration, and 3D modelling before culminating in a physical prototype. Weekly check-ins kept the project on track and allowed the team to identify and address weak areas early. Every design decision — form, material language, interaction logic — was developed with a theoretical foundation drawn from formal aesthetics and semiotics, ensuring the final presentation could defend each choice with a clear design argument.",

          creativeDirection: "The creative direction positions PikBre as an expressive ambient controller rather than a neutral household remote. The product had to communicate function through object language before interaction: a flower-like silhouette, honeycomb control head, leaf-shaped buttons, and a glowing power signal. The visual system uses dark surfaces, green illumination, modular geometry, and a plant-inspired form to make the remote feel visible, playful, and readable in a gaming or desk environment. We avoided minimal domestic styling because it would ignore the object’s character and presentation value. The key judgement was to turn everyday control into a small interactive presence, balancing functional symbols with a memorable sculptural identity.",

          result: [
            "Cohesive Concept to Prototype: The project moved from abstract brief to physical object with a consistent visual and functional identity maintained throughout.",
            "Theory-Driven Decision Making: Every formal choice was grounded in design theory, producing a presentation that argued for the design rather than simply showcasing it.",
            "Effective Collaboration: Clear role distribution and regular team alignment allowed the group to work efficiently under pressure without losing creative coherence.",
            "Presentation Confidence: The final showcase demonstrated not just the object, but the full reasoning behind it — reflecting a mature understanding of how design is communicated professionally."
          ],
          takeawayTitle: "Takeaway",
          takeaway: "PikBre was the first project graded entirely on the strength of the final presentation — with every preceding decision left to the team. It reinforced that good design is only as strong as the argument behind it, and that collaborative process, when structured well, produces better outcomes than working alone."
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

      detail: {
        meta: "Private Project from 2026",
        sections: {
          summary: "“Millions rely on this app daily, including elderly passengers and people with disabilities.” In 2026, Accessibility isn’t “extra”, it’s a legal requirement for most big companies.",

          challenge: "Making DB Navigator more accessible without forcing users to relearn it. The app already has familiar patterns for search, connection results, and journey details, so the redesign had to improve clarity, contrast, status feedback, and inclusive travel information within the existing structure.",

          approach: "I focused on an Accessibility upgrade rather than a full rebrand. Connection results, journey details, delay states, occupancy indicators, and route-level Accessibility information were redesigned around clearer hierarchy and stronger status communication. A new display option adds inclusive travel details directly into the journey flow, including wheelchair spaces, elevators, step-free access, accessible toilets, vibration alerts, tactile guidance, hearing support, and assistance services. No user testing was conducted, so the project is presented as a concept based on Accessibility heuristics and UI system decisions.",

          creativeDirection: "The redesign is positioned as a reliability upgrade for public mobility. I avoided a completely new interaction model because Accessibility often depends on recognition and consistency. The interface keeps familiar DB Navigator structures but makes critical information easier to scan through stronger contrast, icon-supported labels, clearer grouping, and predictable hierarchy.",

          keyVisualSystem: "The visual system uses Inter for functional reading in dense travel contexts. Delay, punctuality, and occupancy each receive distinct state colors with light surfaces and dark text for contrast. Dark surfaces support focused travel information, while white and light gray cards keep standard views readable. A new white icon palette on categorized backgrounds marks mobility, sanitary access, sensory support, and assistance services. The icons act as functional markers, helping users compare Accessibility options at route level.",

          result: [
            "Specific Screen Work: Connection results, journey details, delay states, occupancy indicators, and route-level Accessibility information were redesigned.",
            "New Inclusion Feature: A dedicated Accessibility display option brings wheelchair spaces, elevators, step-free access, accessible toilets, vibration alerts, tactile guidance, hearing support, and assistance services into the normal journey flow.",
            "System-Aware Redesign: The concept builds on the existing DB Navigator architecture instead of replacing learned patterns.",
            "Concrete Visual System: Typography, contrast, state colors, icon categories, and card hierarchy were defined to make critical travel information easier to scan.",
            "Honest Scope: No user testing was conducted, so the project communicates design reasoning and heuristic improvement rather than measured usability impact."
          ],

          takeawayTitle: "Takeaway",
          takeaway: "This project taught me that Accessibility redesign is often about integration, not separation. The stronger decision was to make important travel conditions visible inside the normal journey flow instead of creating a special mode. It also sharpened my judgement around established products: good redesign does not always mean changing the structure. Sometimes it means making the existing system clearer, more readable, and more inclusive."
        }
        ,
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

      detail: {
        meta: "Private Project from 2026",
        sections: {
          summary: "“Productivity tools shouldn’t be limited to a screen.” In 2026, AR and VR offer the chance to rethink how people organize tasks and time. By extending a simple to-do list into a spatial interface, users can interact with their tasks in three dimensions, creating context, awareness, and presence while staying immersed in their environment. ",
          challenge: "Transforming a basic to-do list into a spatial experience without overwhelming the user. Traditional lists work linearly, but in AR/VR, poorly structured overlays can feel cluttered, distracting, or confusing. Tasks need to feel tangible, easy to prioritize, and always accessible without breaking immersion. The challenge was balancing functionality, comfort, and spatial cognition. ",
          approach: "I reimagined tasks as floating, manipulable objects anchored in the user’s environment. Key items appear in the primary field of view, while lower-priority tasks float around peripheral zones, fading dynamically. Gestures and eye-tracking let users move, expand, or mark tasks complete intuitively. Contextual reminders attach to objects in the physical space, linking digital tasks to real-world triggers. Color, light, and subtle haptic cues communicate urgency and deadlines without creating visual noise. The system adapts dynamically to the user’s focus and spatial movement, creating a seamless, human-centered workflow in 3D. ",

          creativeDirection: "The creative direction positions Spatial To-Do as a spatial productivity layer rather than a list placed inside AR or VR. The experience had to make tasks feel present, prioritized, and connected to the user’s environment without creating visual clutter. The visual system relies on floating task objects, depth-based hierarchy, peripheral fading, subtle urgency cues, and gesture-led interaction to support focus in three dimensions. I avoided dense overlays and screen-like layouts because they would fight against immersion and increase cognitive load. The key judgement was to use space as a functional structure, turning task management into something users can see, arrange, and act on naturally.",

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

      detail: {
        meta: "Private Project from 2024",
        sections: {
          summary: "“Privacy is the first product.” For apps handling sensitive data, users hesitate at the first step: onboarding. HealthyStart focuses on explaining permissions, security, and data use in a way that feels transparent, reassuring, and easy to understand, even for non-technical users. ",
          challenge: "Designing an onboarding experience that communicates privacy clearly to non-technical users while respecting regional expectations. German users expect precision, control, and compliance with strict privacy standards like GDPR, but the interface also needed to feel approachable and intuitive for international audiences. Users often hesitate at first because health data is sensitive, and poor explanations can reduce adoption. ",
          approach: "I layered information to balance simplicity and depth. Permissions are grouped by type and impact, highlighting the required versus optional data. Security practices like encryption, secure storage, and two-factor authentication are explained through visual cues and plain-language animations rather than technical jargon. Microcopy reassures users at each step, using culturally familiar language and references for the German audience while maintaining clarity for international users. Interactive walkthroughs let users preview and adjust settings before completing onboarding, and default settings prioritize privacy. ",

          creativeDirection: "The creative direction positions HealthyStart as a trust-building onboarding experience rather than a permission checklist. The product had to make sensitive health data feel understandable, controlled, and protected from the first interaction. The visual system uses layered explanations, clear permission groups, calm microcopy, plain-language security cues, and privacy-first defaults to reduce hesitation without hiding important details. I avoided legalistic copy, technical security dashboards, and fear-based messaging because they would create distance instead of confidence. The key judgement was to make privacy feel actionable, showing users what happens to their data before asking for commitment.",

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
        ]
      }
    },
  ]
};
