// ============================================================
// Vibecoding · config.js
// ------------------------------------------------------------
// ESTE ES EL ARCHIVO MÁS IMPORTANTE DEL BOILERPLATE.
// Todo el branding, copy, features y configuración del producto vive aquí.
// Cambiar este archivo cambia el producto entero — sin abrir JSX.
//
// Estructura:
//   - app:      identidad del producto (nombre, descripción, dominio, color)
//   - features: toggles para encender/apagar funcionalidades
//   - ai:       configuración de OpenAI
//   - email:    configuración de Resend
//   - auth:     providers habilitados
//   - landing:  copy de la página pública
//   - pricing:  planes (si features.pricing está activo; el cobro real es features.paypal)
//
// Tip Sem 1: empieza editando `app` y `landing.hero` con los datos de tu producto.
// ============================================================

const config = {
  // -----------------------------------------------------------
  // Identidad del producto
  // -----------------------------------------------------------
  app: {
    name: "Wine Box Vide",
    description:
    "Protegemos lo que hay detrás de cada botella con empaques diseñados para un transporte seguro.",
    domain: "wineboxvide.com",
    locale: "es",
    // URL pública: usa NEXT_PUBLIC_APP_URL en .env. En este config solo definimos el default.
    defaultUrl: "http://localhost:3000",
  },

  // -----------------------------------------------------------
  // Identidad visual
  // -----------------------------------------------------------
  brand: {
    // Color primario en HEX. DaisyUI lo aplica como --color-primary via theme.
    primary: "#8B1E3F", // color vino
    // Logo: puede ser texto o ruta a /public/logo.svg
    logoText: "Wine Box Vide",
    logoSrc: null,
    // Estilo del bordeado global (DaisyUI usa esto para botones, cards)
    radius: "1rem",
  },
    // -----------------------------------------------------------
  // Contacto
  // -----------------------------------------------------------
  contact: {
    whatsapp: "526146012040",
    whatsappMessage:
      "Hola, visité la página de Wine Box Vide y me gustaría recibir información sobre sus soluciones de protección para botellas.",
  },

  // -----------------------------------------------------------
  // Open Graph / redes sociales (WhatsApp, Facebook, LinkedIn, X)
  // -----------------------------------------------------------
  social: {
    title: "Protegemos lo que hay detrás de cada botella.",
    description:
      "Diseñamos soluciones de empaque que brindan seguridad, presentación y confianza para el transporte de botellas de vino.",
    imageAlt: "Wine Box Vide — empaques seguros para botellas de vino",
  },

  // -----------------------------------------------------------
  // Toggles de features — encienden/apagan rutas y componentes
  // -----------------------------------------------------------
  features: {
    waitlist: true, // Captura emails en landing — Sem 1
    googleAuth: true, // Login con Google — Sem 2
    emailLogin: false, // Magic link email — opcional
    aiChat: true, // Chat AI en /chat — Sem 3
    toolUse: true, // Tool use registry — Sem 4
    agents: true, // LangGraph agents — Sem 5 (opcional-avanzado)
    resend: true, // Email — Sem 1+
    pricing: true, // Muestra la sección de precios en la landing (vitrina; el cobro real es `paypal`)
    paypal: false, // Botón PayPal.me en Pricing (configura `payment` abajo)
    adminPanel: true, // Panel /admin de leads (waitlist) — requiere ADMIN_PASSWORD en .env.local
  },

  // -----------------------------------------------------------
  // PayPal.me (si features.paypal está activo)
  // -----------------------------------------------------------
  payment: {
    paypalMeUsername: "", // tu usuario de https://paypal.me (sin @ ni URL)
    defaultAmount: 0, // 0 = el comprador elige el monto
    currency: "USD",
    buttonText: "Pagar con PayPal",
  },

  // -----------------------------------------------------------
  // OpenAI
  // -----------------------------------------------------------
  ai: {
    chatModel: "gpt-4o-mini", // default barato y rápido
    structuredModel: "gpt-4o-mini",
    agentModel: "gpt-4o", // los agentes razonan mejor con full gpt-4o
    maxTokens: 1500,
    temperature: 0.4,
  },

  // -----------------------------------------------------------
  // Resend (email transaccional)
  // -----------------------------------------------------------
  email: {
    // Asegúrate de tener el dominio verificado en Resend antes de cambiar `from`.
    // En desarrollo Resend permite enviar a tu propio correo desde `onboarding@resend.dev`.
    from: "Vibecoding <onboarding@resend.dev>",
    replyTo: "hola@vibecoding.dev",
    supportEmail: "soporte@vibecoding.dev",
  },

  // -----------------------------------------------------------
  // Auth providers
  // -----------------------------------------------------------
  auth: {
    loginUrl: "/login",
    afterLoginUrl: "/dashboard",
    afterLogoutUrl: "/",
    providers: ["google"], // se sincroniza con features.googleAuth / emailLogin
  },

  // -----------------------------------------------------------
  // Landing — todo el copy de la página pública
  // -----------------------------------------------------------
  landing: {
    nav: [
      { label: "Inicio", href: "/" },
      { label: "Soluciones", href: "#soluciones" },
      { label: "Nuestros Kits", href: "#kits" },
      { label: "¿Cómo usarías Wine Box?", href: "#para-empresas" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],
    hero: {
      eyebrow: "Empaques seguros para botellas de vino",
      title: "Protegemos lo que hay detrás de cada botella.",
      subtitle:
      "Diseñamos soluciones de empaque que brindan seguridad, presentación y confianza para el transporte de botellas de vino.",
      cta: { label: "Quiero cotizar", href: "#waitlist" },
      ctaSecondary: { label: "Conocer más", href: "#features" },
    },
   problem: {
  eyebrow: "El problema",
  title: "¿Sabe cuánto cuesta realmente una botella rota?",
  subtitle:
    "Una botella dañada puede convertirse en pérdidas, reposiciones y una mala experiencia para tu cliente.",
  items: [
    {
      icon: "PackageX",
      title: "Mermas de inventario",
      body: "Producto dañado que deja de cumplir su venta o entrega esperada.",
    },
    {
      icon: "TrendingDown",
      title: "Pérdidas económicas",
      body: "Reposiciones, nuevo empaque, logística y reenvíos pueden aumentar el costo.",
    },
    {
      icon: "UserRoundX",
      title: "Experiencia del cliente",
      body: "Recibir una botella dañada genera molestias, espera y pérdida de confianza.",
    },
    {
      icon: "ShieldAlert",
      title: "Imagen de marca",
      body: "Un mal envío puede terminar afectando la percepción de tu negocio.",
    },
  ],
},
features: {
  eyebrow: "Nuestra solución",
  title: "Una solución creada para proteger productos de alto valor",
  subtitle:
    "Protección funcional para botellas de vidrio durante su manipulación, transporte y envío.",
  items: [
    {
      icon: "ShieldCheck",
      title: "Protección y amortiguación",
      body: "Su estructura ayuda a absorber y distribuir impactos durante el transporte.",
    },
    {
      icon: "Gem",
      title: "Presentación profesional",
      body: "Una solución de cartón corrugado que protege sin recurrir a plásticos ni unicel.",
    },
    {
      icon: "Package",
      title: "Armable y fácil de almacenar",
      body: "Se almacena plano y se arma fácilmente sin herramientas.",
    },
    {
      icon: "Layers",
      title: "Soluciones para diferentes necesidades",
      body: "Opciones para 1, 2, 6 y 12 botellas, además de requerimientos especiales.",
    },
  ],
},
    differentiator: {
      eyebrow: "Diferenciador",
      title: "¿Por qué Wine Box Vide?",
      subtitle:
        "Combinamos diseño, funcionalidad y protección para ofrecer una solución especializada en el transporte de botellas.",
      items: [
        {
          icon: "BadgeCheck",
          title: "Diseño Industrial Registrado ante el IMPI",
          body: "Diseño Industrial Registrado ante el IMPI (Registro No. 72493). Desarrollo propio, respaldo formal y una solución que no encontrarás genérica en el mercado.",
        },
        {
          icon: "Trophy",
          title: "Convocatoria Vende tu Proyecto 2026 — Gobierno Municipal de Chihuahua",
          body: "Primer lugar · Vende tu Proyecto 2026. Reconocidos con uno de los primeros lugares en la convocatoria \"Vende tu Proyecto 2026\" del Gobierno Municipal de Chihuahua.",
        },
        {
          icon: "Wine",
          title: "Diseño especializado para botellas",
          body: "Cada pieza está pensada para el transporte seguro de vidrio.",
        },
        {
          icon: "ShieldCheck",
          title: "Producto registrado como diseño industrial",
          body: "Registro No. 72493 ante el IMPI.",
        },
        {
          icon: "Boxes",
          title: "Solución adaptable a diferentes necesidades",
          body: "Kits modulares y opciones a medida.",
        },
        {
          icon: "Handshake",
          title: "Atención personalizada para cada proyecto",
          body: "Te acompañamos en tu cotización y envío.",
        },
      ],
    },
    faq: {
  eyebrow: "Preguntas frecuentes",
  title: "Todo lo que necesitas saber antes de hacer tu pedido.",
  items: [
    {
      q: "¿Puedo personalizar el empaque con mi marca?",
      a: "Actualmente, Wine Box Vide se especializa en la solución de protección mediante nuestros insertos. Si tu proyecto requiere características específicas de presentación o identificación, cuéntanos tu necesidad y revisaremos contigo las alternativas disponibles.",
    },
    {
      q: "¿Qué tipo de botellas son compatibles?",
      a: "Nuestros insertos están diseñados para proteger botellas de vidrio utilizadas en vinos, mezcales, sotoles y otras bebidas. Si tu producto tiene una forma, tamaño o presentación diferente, contáctanos para conocer sus características y orientarte sobre la solución más adecuada para tu negocio.",
    },
    {
      q: "¿Qué ventajas ofrece el inserto protector de Wine Box Vide?",
      a: "Nuestro inserto protector está diseñado para brindar mayor seguridad durante la manipulación y el transporte de botellas de vidrio. Su estructura armable ayuda a mantener la botella firme y sus cámaras de aire contribuyen a absorber impactos y reducir el riesgo de daños. Además, se entrega plano, se arma sin herramientas y está fabricado en cartón corrugado, ofreciendo una solución funcional para negocios que comercializan, entregan y envían botellas. En Wine Box Vide no solo vendemos un empaque; vendemos seguridad en el transporte.",
    },
    {
      q: "¿Hacen envíos a todo México?",
      a: "Sí. Realizamos envíos a toda la República Mexicana mediante servicios de paquetería confiables.",
    },
    {
      q: "¿Cuáles son los tiempos de entrega?",
      a: "Los tiempos de entrega dependen de las características y el volumen de cada pedido. Para pedidos por volumen, el tiempo estimado es de 7 a 12 días hábiles, dependiendo de la cantidad solicitada y del destino de envío.",
    },
    {
      q: "¿Emiten factura?",
      a: "Sí. Emitimos factura por nuestros pedidos. Para la facturación solicitamos los datos fiscales correspondientes al momento de confirmar el pedido.",
    },
    {
      q: "¿Cómo realizo un pedido?",
      a: "El proceso es sencillo: 1) Contáctanos por WhatsApp, formulario o a través de nuestro asistente en línea. 2) Cuéntanos qué producto y tipo de botella necesitas proteger. 3) Indícanos la cantidad aproximada que requieres. 4) Revisamos tu necesidad y te recomendamos la solución más adecuada. 5) Te enviamos una cotización. 6) Al confirmar el pedido, coordinamos producción, facturación y envío. Cada negocio tiene necesidades diferentes, por eso buscamos conocer tu operación antes de recomendarte una solución.",
    },
  ],
},
    
      finalCta: {
        eyebrow: "Protege tus botellas",
        title: "Hablemos de tu proyecto.",
        subtitle:
          "Cuéntanos qué tipo de botella deseas proteger, cuántas piezas necesitas y te ayudaremos a encontrar la solución adecuada para tu negocio.",
        cta: { label: "Quiero cotizar", href: "#contacto" },
        ctaSecondary: { label: "Conocer nuestros kits", href: "#kits" },
      },
      waitlist: {
        eyebrow: "Cotiza tu proyecto",
        title: "Protege tus botellas con la solución adecuada.",
        subtitle:
          "Cuéntanos qué tipo de botella manejas y qué cantidad necesitas proteger. Te orientamos y preparamos una cotización de acuerdo con las necesidades de tu negocio.",
        successMessage:
          "¡Gracias! Recibimos tu información y nos pondremos en contacto contigo.",
        buttonLabel: "Solicitar cotización",
        placeholder: "Tu correo electrónico",
      },
      footer: {
        tagline: "Protegemos lo que hay detrás de cada botella.",
        columns: [
          {
            title: "Wine Box Vide",
            links: [
              { label: "Nuestra solución", href: "#features" },
              { label: "Nuestros kits", href: "#pricing" },
              { label: "Preguntas frecuentes", href: "#faq" },
            ],
          },
          {
            title: "Contacto",
            links: [
              { label: "Quiero cotizar", href: "#contacto" },
              { label: "Cotiza tu proyecto", href: "#waitlist" },
            ],
          },
        ],
        links: [],
      },
    },

  // -----------------------------------------------------------
  // Pricing — vitrina de planes.
  // Se muestra en la landing si features.pricing === true.
  // El cobro real (PayPal.me) depende de features.paypal.
  // -----------------------------------------------------------
  pricing: {
   eyebrow: "Nuestros Kits",
title: "Soluciones para diferentes necesidades de envío",
  subtitle: "Protección y practicidad para diferentes necesidades de envío.",
plans: [
  {
    id: "kit-1",
    name: "Kit Premium",
    capacity: "1 botella",
          description: "Ideal para envíos individuales, regalos y ventas en línea.",
    cta: "Solicitar cotización",
  },
  {
    id: "kit-2",
    name: "Kit Duo",
    capacity: "2 botellas",
          description: "Una solución práctica para selecciones, regalos y entregas especiales.",
    cta: "Solicitar cotización",
  },
  {
    id: "kit-6",
    name: "Kit 6 botellas",
    capacity: "6 botellas",
         description: "Pensado para vinícolas, tiendas y envíos de varias botellas.",
    cta: "Solicitar cotización",
  },
  {
    id: "kit-12",
    name: "Kit Master",
    capacity: "12 botellas",
    description: "Diseñado para distribución, pedidos por volumen y operaciones comerciales.",
    cta: "Solicitar cotización",
  },
],
  },
}
 


export default config








