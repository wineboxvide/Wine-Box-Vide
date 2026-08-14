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
      { label: "Nuestros Kits", href: "#kits" },
  { label: "¿Cómo funciona?", href: "#como-funciona" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" }
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
      title: "El vidrio no perdona un mal empaque",
      subtitle:
        "En el transporte y almacenaje, el punto débil casi nunca es el producto: es lo que lo rodea.",
      items: [
        {
          icon: "Wine",
          title: "Botellas rotas",
          body: "Cada envío dañado es producto perdido, flete pagado y utilidad que se evapora.",
        },
        {
          icon: "PackageX",
          title: "Devoluciones",
          body: "Reposiciones, reenvíos y horas de tu equipo resolviendo lo que no debió romperse.",
        },
        {
          icon: "Frown",
          title: "Mala experiencia",
          body: "El cliente final recibe una caja mojada y ese recuerdo pesa más que tu etiqueta.",
        },
        {
          icon: "Award",
          title: "Imagen de marca",
          body: "Una botella rota vale mucho más que su precio: golpea la reputación que construiste.",
        },
      ],
    },
    features: {
      eyebrow: "Nuestra solución",
      title: "Una solución creada para proteger productos de alto valor",
      subtitle:
        "Una botella representa más que un producto: representa una experiencia, una historia y el esfuerzo detrás de cada marca. En Wine Box Vide creamos soluciones de protección que ayudan a reducir riesgos durante el transporte y envío, permitiendo que vinos y bebidas premium lleguen en perfectas condiciones hasta el cliente final.",
      items: [
        {
          icon: "ShieldCheck",
          title: "Amortiguación real",
          body: "El golpe se disipa en la estructura, no en tu producto.",
        },
        {
          icon: "Gem",
          title: "Presentación premium",
          body: "Sin plásticos ni unicel.",
        },
        {
          icon: "Package",
          title: "Fácil almacenamiento y armado",
          body: "Se envía plano, ocupa poco almacén y se arma sin herramientas.",
        },
        {
          icon: "Wine",
          title: "Protección durante el transporte",
          body: "Estructura que absorbe impactos y reduce el riesgo de roturas en el envío.",
        },
        {
          icon: "Boxes",
          title: "Fácil armado y almacenamiento",
          body: "Diseño armable que se monta en minutos y se guarda plano hasta su uso.",
        },
        {
          icon: "Layers",
          title: "Solución para diferentes presentaciones",
          body: "Kits para 1, 2, 6 y 12 botellas según la necesidad de cada negocio.",
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
            a: "Sí. Trabajamos impresión y personalización de la caja exterior con tu logotipo e identidad. La personalización aplica a partir de pedidos por volumen; lo cotizamos por WhatsApp según tiraje.",
          },
          {
            q: "¿Qué tipo de botellas son compatibles?",
            a: "Nuestros insertos están diseñados para proteger botellas de vino, mezcal y otras bebidas premium. Si tu producto tiene un tamaño o presentación especial, contáctanos y con gusto te orientaremos sobre la mejor opción para tu negocio.",
          },
          {
            q: "¿Qué ventajas ofrece el inserto protector de Wine Box Vide?",
            a: "Nuestro inserto protector está diseñado para brindar mayor seguridad durante el transporte de botellas de vino, mezcal y otras bebidas premium. Su diseño armable proporciona estabilidad, ayuda a reducir el riesgo de daños, mejora la presentación del producto y se adapta a diferentes capacidades, ofreciendo una solución práctica y profesional para negocios que comercializan y envían botellas. En Wine Box Vide no solo vendemos un empaque; vendemos seguridad en el transporte.",
          },
          {
            q: "¿Hacen envíos a todo México?",
            a: "Sí, enviamos a toda la República Mexicana mediante paqueterías confiables.",
          },
          {
            q: "¿Cuáles son los tiempos de entrega?",
            a: "Los tiempos de entrega dependen del tipo de pedido. Para pedidos por volumen o personalizados, el tiempo estimado es de 7 a 12 días hábiles, dependiendo de la cantidad solicitada y del destino de envío.",
          },
          {
            q: "¿Emiten factura?",
            a: "Sí, facturamos todos los pedidos. Solo necesitamos tu constancia de situación fiscal y el uso de CFDI al confirmar la compra.",
          },
          {
            q: "¿Cómo realizo un pedido?",
            a: "Escríbenos por WhatsApp. Cuéntanos qué tipo de botella deseas proteger. Te recomendamos la mejor solución. Te enviamos tu cotización. Confirmamos tu pedido y programamos el envío. Una vez que conozcamos tus necesidades, te recomendaremos la mejor solución para proteger tus botellas y te enviaremos una cotización personalizada.",
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
    title: "Soluciones para proteger tus botellas.",
    subtitle:
      "Elige la opción que mejor se adapte a tu producto y a las necesidades de tu negocio.",
    plans: [
      {
        id: "kit-1",
        name: "Kit 1 botella",
        price: "Cotizar",
currency: "",
interval: "",
        description: "Protección individual para una botella.",
        features: [
          "Inserto protector armable",
          "Diseñado para transporte seguro",
          "Ideal para regalos y entregas",
        ],
        cta: "Quiero cotizar",
      },
      {
        id: "kit-2",
        name: "Kit Duo",
        price: "Cotizar",
currency: "",
interval: "",
        description: "Solución para transportar dos botellas.",
        features: [
          "Inserto protector para 2 botellas",
          "Diseño práctico y armable",
          "Ideal para presentaciones especiales",
        ],
        cta: "Quiero cotizar",
        highlighted: true,
      },
      {
        id: "kit-6",
        name: "Kit 6 botellas",
        price: "Cotizar",
currency: "",
interval: "",
        description: "Protección para pedidos de mayor volumen.",
        features: [
          "Protección para 6 botellas",
          "Ahorro de espacio al almacenarse",
          "Ideal para envíos y distribución",
        ],
        cta: "Quiero cotizar",
      },
      {
        id: "kit-12",
        name: "Kit Master",
        price: "Cotizar",
currency: "",
interval: "",
        description: "Solución para transportar hasta 12 botellas.",
        features: [
          "Protección para 12 botellas",
          "Diseñado para operaciones de mayor volumen",
          "Ideal para bodegas y distribuidores",
        ],
        cta: "Quiero cotizar",
      },
    ],
  },
}

export default config








