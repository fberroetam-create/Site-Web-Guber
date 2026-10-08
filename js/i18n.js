/* GUBERNARE — i18n.js (vanilla, no dependencies)
   The HTML is authored in Spanish (default, indexable). This script swaps
   text to English on demand using the dictionary below, keyed by the exact
   Spanish text. The choice is remembered in localStorage. */
(function () {
  'use strict';

  var STORAGE_KEY = 'gubernare-lang';

  var EN = {
    /* --- page titles + meta descriptions --- */
    'Contacto — Gubernare': 'Contact — Gubernare',
    'Converse con Gubernare sobre su próximo proyecto de consultoría o integración tecnológica.': 'Talk to Gubernare about your next consulting or technology integration project.',
    'Gubernare — Consultoría e Integración Tecnológica': 'Gubernare — Consulting & Technology Integration',
    'Servicios Tecnológicos Gubernare SpA: consultoría de gestión e ingeniería e integración tecnológica en terreno para empresas, organismos del Estado, comunidades y particulares.': 'Servicios Tecnológicos Gubernare SpA: management and engineering consulting and on-site technology integration for companies, government agencies, communities and individuals.',
    'Nosotros — Gubernare': 'About Us — Gubernare',
    'Conozca a Servicios Tecnológicos Gubernare SpA: el origen de nuestro nombre y la metodología ágil con la que gobernamos proyectos end-to-end.': 'Meet Servicios Tecnológicos Gubernare SpA: the origin of our name and the agile methodology we use to govern projects end to end.',
    'Proyectos — Gubernare': 'Projects — Gubernare',
    'Sistemas y proyectos que Gubernare diseña e integra: CCTV, control de acceso, data center, redes, fotovoltaica y más.': 'Systems and projects Gubernare designs and integrates: CCTV, access control, data centers, networks, photovoltaics and more.',
    'Servicios — Gubernare': 'Services — Gubernare',
    'Consultoría de gestión e ingeniería e integración tecnológica en terreno. Conozca en detalle las dos líneas de servicio de Gubernare.': 'Management and engineering consulting and on-site technology integration. Learn about Gubernare\'s two service lines in detail.',

    /* --- navigation / shared --- */
    'Tecnología & Consultoría': 'Technology & Consulting',
    'Inicio': 'Home',
    'Servicios': 'Services',
    'Proyectos': 'Projects',
    'Nosotros': 'About Us',
    'Contacto': 'Contact',
    'Hablemos': 'Let\'s talk',
    'Abrir menú': 'Open menu',
    'Navegación': 'Navigation',
    'Correo': 'Email',
    'Consultoría de gestión e ingeniería': 'Management and engineering consulting',
    'Integración tecnológica': 'Technology integration',
    'Santiago, Chile — remoto y en terreno': 'Santiago, Chile — remote and on site',
    'Formulario de contacto': 'Contact form',
    'Servicios Tecnológicos Gubernare SpA. Consultoría de gestión e ingeniería e integración tecnológica para empresas, organismos del Estado, comunidades y particulares.': 'Servicios Tecnológicos Gubernare SpA. Management and engineering consulting and technology integration for companies, government agencies, communities and individuals.',
    'Servicios Tecnológicos Gubernare SpA': 'Servicios Tecnológicos Gubernare SpA',
    'Operación 100% remota y atención en terreno a nivel nacional.': '100% remote operation and on-site service nationwide.',

    /* --- contacto --- */
    'Conversemos sobre su proyecto': 'Let\'s talk about your project',
    'Cuéntenos su necesidad — consultoría o integración en terreno — y le responderemos con los siguientes pasos.': 'Tell us what you need — consulting or on-site integration — and we will reply with the next steps.',
    'Escríbanos': 'Write to us',
    'Nombre completo': 'Full name',
    'Su nombre': 'Your name',
    'Empresa / institución': 'Company / institution',
    'Nombre de la organización': 'Organization name',
    'Tipo de cliente': 'Client type',
    'Seleccione una opción': 'Select an option',
    'Empresa privada': 'Private company',
    'Organismo público / municipalidad': 'Public agency / municipality',
    'Comunidad': 'Community',
    'Persona particular': 'Individual',
    'Otro': 'Other',
    'Correo electrónico': 'Email address',
    'Teléfono (opcional)': 'Phone (optional)',
    'Cuéntenos su proyecto': 'Tell us about your project',
    'Describa brevemente su necesidad, plazos y alcance estimado.': 'Briefly describe your need, timeline and estimated scope.',
    'Enviar mensaje': 'Send message',
    'Al enviar, se abrirá su cliente de correo con el mensaje pre-cargado hacia gubernar@gubernare.cl.': 'When you submit, your email client will open with the message pre-filled to gubernar@gubernare.cl.',
    'Otras vías': 'Other ways',
    'Hablemos por el canal que le acomode': 'Reach us through the channel you prefer',

    /* --- index --- */
    'Consultoría e Integración Tecnológica': 'Consulting & Technology Integration',
    'Ingeniería y tecnología para instituciones que exigen resultados.': 'Engineering and technology for institutions that demand results.',
    'Somos Gubernare: una consultora tecnológica, especializada en proyectos para empresas privadas, organismos del Estado, comunidades y particulares. Diseñamos, integramos y proveemos las soluciones que su operación necesita.': 'We are Gubernare: a technology consultancy specialized in projects for private companies, government agencies, communities and individuals. We design, integrate and provide the solutions your operation needs.',
    'Conversemos su proyecto': 'Let\'s discuss your project',
    'Ver servicios': 'View services',
    'Empresas privadas': 'Private companies',
    'Organismos del Estado': 'Government agencies',
    'Comunidades': 'Communities',
    'Particulares': 'Individuals',
    'Operación remota + en terreno': 'Remote + on-site operation',
    'Qué hacemos': 'What we do',
    'Dos líneas de servicio, una sola forma de trabajar': 'Two service lines, one way of working',
    'Combinamos asesoría estratégica y acompañamiento en terreno para que su organización avance sin fricciones operativas.': 'We combine strategic advisory and on-site support so your organization moves forward without operational friction.',
    'Línea 01': 'Line 01',
    'Consultoría de Gestión e Ingeniería': 'Management & Engineering Consulting',
    'Asesorías integrales en gestión de proyectos, optimización de procesos operacionales, arquitectura de soluciones e ingeniería técnica adaptada a los requerimientos de cada cliente.': 'Comprehensive advisory in project management, operational process optimization, solution architecture and technical engineering tailored to each client\'s requirements.',
    'Conocer más': 'Learn more',
    'Línea 02': 'Line 02',
    'Integración Tecnológica y Acompañamiento en Terreno': 'Technology Integration & On-Site Support',
    'Acompañamiento y asesoría técnica en el diseño, la especificación y la supervisión de proyectos de equipamiento, redes de datos e infraestructura eléctrica de baja tensión, en las dependencias del cliente.': 'Technical support and advisory in the design, specification and supervision of equipment, data network and low-voltage electrical infrastructure projects, at the client\'s premises.',
    'Cómo trabajamos': 'How we work',
    'Metodología ágil, con visibilidad en cada etapa': 'Agile methodology, with visibility at every stage',
    'Gestionamos cada proyecto con metodología ágil y herramientas de software especializadas: levantamos y priorizamos requisitos, identificamos brechas, riesgos y bloqueos a tiempo, y definimos estrategias de mitigación antes de que afecten el resultado.': 'We manage every project with agile methodology and specialized software tools: we gather and prioritize requirements, identify gaps, risks and blockers early, and define mitigation strategies before they affect the outcome.',
    'Gestión de requisitos': 'Requirements management',
    'Levantamos, documentamos y priorizamos los requisitos del proyecto con herramientas de software, manteniendo trazabilidad de principio a fin.': 'We gather, document and prioritize project requirements with software tools, keeping traceability from start to finish.',
    'Identificación de brechas, riesgos y bloqueos': 'Identification of gaps, risks and blockers',
    'Detectamos desviaciones y riesgos de forma temprana, y definimos estrategias de mitigación concretas para cada uno.': 'We detect deviations and risks early and define concrete mitigation strategies for each one.',
    'Verificación de cumplimiento': 'Compliance verification',
    'Revisamos periódicamente el avance del proyecto contra lo comprometido, validando entregables en cada etapa.': 'We periodically review project progress against commitments, validating deliverables at every stage.',
    'Monitoreo de plazos y calidad': 'Schedule and quality monitoring',
    'Hacemos seguimiento de plazos y calidad mediante indicadores (KPI\'s) definidos junto al cliente al inicio del proyecto.': 'We track schedule and quality through indicators (KPIs) defined with the client at the start of the project.',
    'A quién atendemos': 'Who we serve',
    'Industrias que atendemos': 'Industries we serve',
    'Trabajamos con organizaciones de distintos sectores, públicos y privados, y con personas particulares.': 'We work with organizations from different sectors, public and private, and with individuals.',
    'Transporte': 'Transportation',
    'Energía': 'Energy',
    'Minería': 'Mining',
    'Forestal': 'Forestry',
    'Entidades públicas': 'Public entities',
    'Personas particulares': 'Individuals',
    '¿Tiene un proyecto en mente?': 'Have a project in mind?',
    'Cuéntenos sus requerimientos técnicos u operativos. Respondemos con una propuesta ajustada a su proyecto.': 'Tell us your technical or operational requirements. We reply with a proposal tailored to your project.',
    'Contactar a Gubernare': 'Contact Gubernare',
    'Explorar servicios': 'Explore services',

    /* --- nosotros --- */
    'Una consultora que gobierna sus proyectos de principio a fin': 'A consultancy that governs your projects from start to finish',
    'Servicios Tecnológicos Gubernare SpA acompaña cada proyecto end-to-end, con una metodología ágil que hace seguimiento de requisitos, riesgos y calidad en cada etapa.': 'Servicios Tecnológicos Gubernare SpA supports every project end to end, with an agile methodology that tracks requirements, risks and quality at every stage.',
    'Ciclo de vida del proyecto': 'Project life cycle',
    'Cómo la metodología impacta cada etapa': 'How the methodology shapes every stage',
    'Cada proyecto recorre las mismas cinco etapas, con prácticas ágiles concretas aplicadas en cada una — de extremo a extremo, sin interrupciones.': 'Every project goes through the same five stages, with concrete agile practices applied at each one — end to end, without interruptions.',
    'Diagnóstico': 'Diagnosis',
    'Levantamos requisitos y objetivos junto al cliente, con trazabilidad desde el día uno.': 'We gather requirements and objectives with the client, with traceability from day one.',
    'Planificación': 'Planning',
    'Definimos plazos, hitos y KPI\'s, e identificamos brechas, riesgos y bloqueos.': 'We define timelines, milestones and KPIs, and identify gaps, risks and blockers.',
    'Acompañamiento': 'Support',
    'Asesoramos y supervisamos la ejecución por iteraciones cortas, con seguimiento continuo y mitigación activa de riesgos.': 'We advise on and supervise execution in short iterations, with continuous follow-up and active risk mitigation.',
    'Verificación': 'Verification',
    'Revisamos el cumplimiento de cada entregable contra lo comprometido.': 'We check each deliverable against what was committed.',
    'Entrega y soporte': 'Delivery and support',
    'Cerramos el proyecto y damos seguimiento posterior, de extremo a extremo.': 'We close the project and provide follow-up afterwards, end to end.',
    'Nuestra metodología': 'Our methodology',
    'Asesoría y acompañamiento de principio a fin, con metodología ágil en cada etapa': 'Advisory and support from start to finish, with agile methodology at every stage',
    'Acompañamos cada proyecto de principio a fin — desde el diagnóstico inicial hasta la puesta en marcha y el soporte posterior — con un mismo equipo asesor que mantiene la visión completa y coordina a los distintos proveedores.': 'We support every project from start to finish — from the initial diagnosis through commissioning and subsequent support — with a single advisory team that keeps the full picture and coordinates the different providers.',
    'Gestionamos cada etapa con metodología ágil y herramientas de software: levantamos requisitos, identificamos riesgos y bloqueos a tiempo, definimos estrategias de mitigación, y monitoreamos plazos y calidad con KPI\'s definidos junto al cliente.': 'We manage each stage with agile methodology and software tools: we gather requirements, identify risks and blockers early, define mitigation strategies, and monitor schedule and quality with KPIs defined together with the client.',
    'Clientes corporativos': 'Corporate clients',
    'Empresas privadas de distintos sectores que requieren consultoría e integración técnica.': 'Private companies from different sectors that need consulting and technical integration.',
    'Clientes institucionales': 'Institutional clients',
    'Organismos del Estado y municipalidades.': 'Government agencies and municipalities.',
    'Comunidades y particulares': 'Communities and individuals',
    'Comunidades organizadas y personas naturales que requieren asesoría o integración técnica.': 'Organized communities and individuals who need advisory or technical integration.',
    'El origen del nombre': 'The origin of our name',
    'Gubernare: gobernar el rumbo': 'Gubernare: governing the course',
    'En latín,': 'In Latin,',
    'significa gobernar o timonear — sostener el timón de una nave y trazar su curso. De ahí tomamos nuestro nombre: en cada proyecto, quien gobierna es el cliente. La visión, las prioridades y las decisiones son suyas. Nosotros ponemos la ingeniería, la tecnología y el acompañamiento experto para materializar esas ideas y objetivos.': 'means to govern or steer — to hold the helm of a ship and chart its course. That is where our name comes from: in every project, the client is the one who governs. The vision, the priorities and the decisions are theirs. We bring the engineering, the technology and the expert support to turn those ideas and goals into reality.',
    'Hablemos sobre su próximo proyecto': 'Let\'s talk about your next project',
    'Estamos disponibles para empresas, organismos del Estado, comunidades y particulares en todo Chile.': 'We are available for companies, government agencies, communities and individuals throughout Chile.',
    'Ir a contacto': 'Go to contact',

    /* --- proyectos --- */
    'Sistemas que diseñamos, integramos y ponemos en marcha': 'Systems we design, integrate and commission',
    'Desde CCTV y control de acceso hasta data center y energía fotovoltaica: estos son algunos de los sistemas que ejecutamos de forma end-to-end.': 'From CCTV and access control to data centers and photovoltaic energy: these are some of the systems we deliver end to end.',
    'Sistemas de CCTV': 'CCTV Systems',
    'Circuitos cerrados de televisión para vigilancia perimetral e interior, con monitoreo remoto.': 'Closed-circuit television for perimeter and indoor surveillance, with remote monitoring.',
    'Diseño y acompañamiento en la instalación de circuitos cerrados de televisión (CCTV) para vigilancia perimetral e interior, con analítica de video y monitoreo remoto, integrados a la operación de seguridad del recinto.': 'Design and installation support for closed-circuit television (CCTV) for perimeter and indoor surveillance, with video analytics and remote monitoring, integrated into the site\'s security operation.',
    'Centros de Control': 'Control Centers',
    'Salas de operación y monitoreo centralizado que integran múltiples sistemas en un mismo punto de gestión.': 'Centralized operation and monitoring rooms that bring multiple systems together in a single management point.',
    'Diseño de salas de control y operación (tipo NOC/SOC/COC) que centralizan la visualización y gestión de los distintos sistemas del recinto o de una red de instalaciones.': 'Design of control and operation rooms (NOC/SOC/COC type) that centralize the visualization and management of the different systems of a site or a network of facilities.',
    'Control de Acceso': 'Access Control',
    'Identificación y control de ingreso (tarjetas, biometría, torniquetes) integrado a la seguridad del recinto.': 'Identification and entry control (cards, biometrics, turnstiles) integrated into site security.',
    'Sistemas de identificación y control de ingreso — tarjetas, biometría, torniquetes y barreras — integrados a la gestión de seguridad y, cuando corresponde, al control de acceso de personas y vehículos.': 'Identification and entry control systems — cards, biometrics, turnstiles and barriers — integrated into security management and, where applicable, into access control for people and vehicles.',
    'Sistemas de Señalización Variable': 'Variable Message Signs',
    'Paneles de mensaje variable (VMS) para gestión de tránsito e información vial.': 'Variable message signs (VMS) for traffic management and road information.',
    'Paneles de mensaje variable (VMS/SMV) para gestión de tránsito, información vial y alertas en carreteras, túneles y vías urbanas.': 'Variable message signs (VMS) for traffic management, road information and alerts on highways, tunnels and urban roads.',
    'Sistemas Meteorológicos': 'Weather Systems',
    'Estaciones y redes de sensores para monitoreo de variables climáticas y ambientales.': 'Stations and sensor networks for monitoring climate and environmental variables.',
    'Estaciones y redes de sensores para el monitoreo de variables climáticas y ambientales en tiempo real, con transmisión de datos a un centro de gestión.': 'Stations and sensor networks for real-time monitoring of climate and environmental variables, with data transmission to a management center.',
    'Data Center': 'Data Center',
    'Infraestructura crítica para alojamiento de servidores y equipos de TI, con redundancia según disponibilidad requerida.': 'Critical infrastructure for housing servers and IT equipment, with redundancy according to required availability.',
    'Infraestructura crítica para alojamiento de servidores y equipos de TI — eléctrica, climatización, cableado y seguridad — con el nivel de redundancia que defina el proyecto.': 'Critical infrastructure for housing servers and IT equipment — electrical, cooling, cabling and security — with the level of redundancy the project defines.',
    'Calidad de Aire en Lugares Confinados': 'Air Quality in Confined Spaces',
    'Monitoreo y ventilación forzada para espacios confinados, con condiciones seguras de trabajo.': 'Monitoring and forced ventilation for confined spaces, with safe working conditions.',
    'Sistemas de monitoreo de gases y ventilación forzada para espacios confinados, orientados a mantener condiciones seguras de trabajo para las personas.': 'Gas monitoring and forced ventilation systems for confined spaces, aimed at maintaining safe working conditions for people.',
    'Redes de Fibra Óptica': 'Fiber Optic Networks',
    'Backbone de datos de alta capacidad para interconexión de sitios, edificios y sistemas.': 'High-capacity data backbone for interconnecting sites, buildings and systems.',
    'Diseño y tendido de redes de fibra óptica como backbone de datos de alta capacidad, para interconexión de sitios, edificios y sistemas.': 'Design and laying of fiber optic networks as a high-capacity data backbone, for interconnecting sites, buildings and systems.',
    'Redes Inalámbricas': 'Wireless Networks',
    'Redes Wi-Fi y de radiofrecuencia para conectividad de datos en interiores y exteriores.': 'Wi-Fi and radio-frequency networks for indoor and outdoor data connectivity.',
    'Redes Wi-Fi y de radiofrecuencia para conectividad de datos en interiores y exteriores, incluyendo enlaces punto a punto entre sitios.': 'Wi-Fi and radio-frequency networks for indoor and outdoor data connectivity, including point-to-point links between sites.',
    'Comunicaciones Satelitales': 'Satellite Communications',
    'Enlaces satelitales para conectividad de datos y voz en sitios remotos o sin cobertura terrestre.': 'Satellite links for data and voice connectivity at remote sites or sites without terrestrial coverage.',
    'Enlaces satelitales para conectividad de datos y voz en sitios remotos, faenas aisladas o sin cobertura de redes terrestres.': 'Satellite links for data and voice connectivity at remote sites, isolated work sites or places without terrestrial network coverage.',
    'Sistemas Fotovoltaicos': 'Photovoltaic Systems',
    'Generación solar aislada (off-grid), sin conexión a la red eléctrica pública.': 'Stand-alone solar generation (off-grid), with no connection to the public power grid.',
    'Diseño y acompañamiento en la instalación de sistemas fotovoltaicos aislados (off-grid), con acumulación en baterías, para sitios sin acceso a la red eléctrica pública o que requieren independencia total de la red.': 'Design and installation support for stand-alone (off-grid) photovoltaic systems with battery storage, for sites without access to the public power grid or that require total grid independence.',
    'Sistemas de Citofonía': 'Intercom Systems',
    'Comunicación de voz y video entre accesos y unidades interiores, integrada al control de acceso.': 'Voice and video communication between entrances and indoor units, integrated with access control.',
    'Sistemas de citofonía y videoportero para comunicación entre accesos y unidades interiores, integrados al control de acceso del recinto.': 'Intercom and video door-entry systems for communication between entrances and indoor units, integrated with the site\'s access control.',
    'Control de Iluminación': 'Lighting Control',
    'Automatización y gestión eficiente del alumbrado interior y exterior.': 'Automation and efficient management of indoor and outdoor lighting.',
    'Automatización del alumbrado interior y exterior — por horario, sensores de presencia o luminosidad — para una gestión más eficiente del consumo.': 'Automation of indoor and outdoor lighting — by schedule, presence sensors or light level — for more efficient energy use.',
    'Control de Ventilación': 'Ventilation Control',
    'Automatización de la climatización y renovación de aire según ocupación y calidad del aire.': 'Automation of climate control and air renewal according to occupancy and air quality.',
    'Automatización de la ventilación y renovación de aire de recintos, ajustando el funcionamiento de los equipos según ocupación y calidad del aire.': 'Automation of ventilation and air renewal in buildings, adjusting equipment operation according to occupancy and air quality.',
    '¿No encuentra el sistema que necesita?': 'Can\'t find the system you need?',
    'Cuéntenos su proyecto — si no está en esta lista, igual podemos ayudarle a definir el alcance.': 'Tell us about your project — if it isn\'t on this list, we can still help you define the scope.',

    /* --- servicios --- */
    'Dos líneas de servicio integradas para su operación': 'Two integrated service lines for your operation',
    'Desde la estrategia hasta la puesta en marcha en terreno: asesoramos y acompañamos a empresas, instituciones, comunidades y personas en la modernización de su infraestructura tecnológica.': 'From strategy to on-site commissioning: we advise and support companies, institutions, communities and individuals in modernizing their technology infrastructure.',
    'Gestión de proyectos': 'Project management',
    'Planificación, seguimiento y control de iniciativas tecnológicas de principio a fin.': 'Planning, tracking and control of technology initiatives from start to finish.',
    'Optimización de procesos': 'Process optimization',
    'Diagnóstico y rediseño de procesos operacionales para mejorar eficiencia y trazabilidad.': 'Diagnosis and redesign of operational processes to improve efficiency and traceability.',
    'Arquitectura de soluciones': 'Solution architecture',
    'Diseño técnico de soluciones a medida, alineadas a los objetivos del negocio o del organismo.': 'Technical design of tailored solutions, aligned with the objectives of the business or agency.',
    'Ingeniería técnica': 'Technical engineering',
    'Especificaciones, memorias de cálculo y documentación técnica según el proyecto.': 'Specifications, calculation reports and technical documentation according to the project.',
    '¿Cuándo la necesita?': 'When do you need it?',
    'Cuando su organización requiere una mirada externa y experta para planificar, ordenar o justificar técnicamente un proyecto de modernización — antes de invertir en infraestructura o equipamiento.': 'When your organization needs an external, expert view to plan, organize or technically justify a modernization project — before investing in infrastructure or equipment.',
    'Solicitar una asesoría': 'Request advisory',
    'Acompañamiento en terreno': 'On-site support',
    'Asesoramos y acompañamos al cliente durante el montaje, la instalación y la puesta en marcha en los inmuebles o recintos que defina, en cualquier punto del país, velando por que lo ejecutado cumpla lo diseñado.': 'We advise and support the client during assembly, installation and commissioning at the properties or sites they define, anywhere in the country, making sure what is built matches what was designed.',
    'Coordinar una visita técnica': 'Schedule a technical visit',
    'Acompañamiento y asesoría técnica en el diseño, la especificación y la supervisión de proyectos de equipamiento, redes de datos e infraestructura eléctrica de baja tensión.': 'Technical support and advisory in the design, specification and supervision of equipment, data network and low-voltage electrical infrastructure projects.',
    'Redes de datos': 'Data networks',
    'Asesoría en el diseño de cableado estructurado, conectividad y redes internas, y acompañamiento durante su implementación.': 'Advisory on the design of structured cabling, connectivity and internal networks, and support during their implementation.',
    'Infraestructura eléctrica de baja tensión': 'Low-voltage electrical infrastructure',
    'Asesoría técnica y revisión de las instalaciones eléctricas asociadas a los equipos del proyecto.': 'Technical advisory and review of the electrical installations associated with the project\'s equipment.',
    'Acompañamiento en la integración de equipamiento': 'Support in equipment integration',
    'Apoyo técnico y supervisión en la instalación, configuración y puesta en marcha de hardware y sistemas tecnológicos.': 'Technical support and supervision in the installation, configuration and commissioning of hardware and technology systems.',
    'Cuéntenos qué necesita resolver': 'Tell us what you need to solve',
    'Ya sea una asesoría puntual o el acompañamiento de un proyecto de integración en terreno, podemos ayudarle a definir el alcance.': 'Whether it is a one-off advisory or support for an on-site integration project, we can help you define the scope.',
    'Escribir a Gubernare': 'Write to Gubernare',

    /* --- runtime messages (contact.js) --- */
    'Se abrió su cliente de correo con el mensaje pre-cargado. Si no ocurre nada, escríbanos directamente a ': 'Your email client opened with the message pre-filled. If nothing happens, write to us directly at '
  };

  var ATTRS = ['placeholder', 'aria-label', 'title'];
  var lang = 'es';
  var textNodes = [];   // { node, es, lead, trail }
  var attrNodes = [];   // { el, attr, es }
  var metaDesc = null, metaEs = '', titleEs = document.title;

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

  function tr(es) {
    if (lang !== 'en') return es;
    var key = norm(es);
    return Object.prototype.hasOwnProperty.call(EN, key) ? EN[key] : es;
  }

  function collect() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.nodeName)) return NodeFilter.FILTER_REJECT;
        return norm(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = walker.nextNode())) {
      var v = n.nodeValue;
      textNodes.push({
        node: n,
        es: norm(v),
        lead: /^\s/.test(v) ? ' ' : '',
        trail: /\s$/.test(v) ? ' ' : ''
      });
    }
    document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(function (el) {
      ATTRS.forEach(function (a) {
        if (el.hasAttribute(a)) attrNodes.push({ el: el, attr: a, es: el.getAttribute(a) });
      });
    });
    metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaEs = metaDesc.getAttribute('content');
  }

  function apply() {
    textNodes.forEach(function (t) {
      var out = lang === 'en' && EN.hasOwnProperty(t.es) ? EN[t.es] : t.es;
      t.node.nodeValue = t.lead + out + t.trail;
    });
    attrNodes.forEach(function (a) {
      a.el.setAttribute(a.attr, lang === 'en' && EN.hasOwnProperty(norm(a.es)) ? EN[norm(a.es)] : a.es);
    });
    document.title = lang === 'en' && EN.hasOwnProperty(norm(titleEs)) ? EN[norm(titleEs)] : titleEs;
    if (metaDesc) metaDesc.setAttribute('content', lang === 'en' && EN.hasOwnProperty(norm(metaEs)) ? EN[norm(metaEs)] : metaEs);
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function setLang(next) {
    lang = next === 'en' ? 'en' : 'es';
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage may be blocked */ }
    apply();
  }

  function buildSwitch() {
    var wrap = document.createElement('div');
    wrap.className = 'lang-switch';
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Idioma / Language');
    [['es', 'ES', 'Español'], ['en', 'EN', 'English']].forEach(function (l) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('data-lang', l[0]);
      b.setAttribute('lang', l[0]);
      b.setAttribute('title', l[2]);
      b.textContent = l[1];
      b.addEventListener('click', function () { setLang(l[0]); });
      wrap.appendChild(b);
    });
    return wrap;
  }

  function init() {
    /* inject the switcher before collecting, then keep its labels out of translation */
    var actions = document.querySelector('.nav-actions');
    if (actions) actions.insertBefore(buildSwitch(), actions.firstChild);
    collect();

    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    var q = /[?&]lang=(en|es)\b/.exec(location.search);
    if (q) saved = q[1];
    lang = saved === 'en' ? 'en' : 'es';
    apply();
  }

  /* exposed so other scripts (contact.js) can translate runtime messages */
  window.GUBERNARE_I18N = {
    t: tr,
    getLang: function () { return lang; },
    setLang: setLang
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
