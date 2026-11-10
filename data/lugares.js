// Datos de los lugares. Cada "id" se enlaza con la tarjeta (#tarjeta-ID) y con el icono del plano (lugar-ID).
// Esto es JavaScript (no JSON) para que el sitio funcione también abriendo index.html con doble clic.
const LUGARES = [
  {
    "id": 1,
    "categoria": "Tienda y Módulo Turístico",
    "color": "#6B2D82",
    "lugares": [
      {
        "id": 101,
        "nombre": "Tienda Turística",
        "direccion": "Av. Central Sur Dr. B. Domínguez (A un costado de Presidencia Municipal)",
        "descripcion": "Punto de información y atención al visitante del centro histórico, ubicado a un costado de la Presidencia Municipal.",
        "consultaMapa": "Tienda Turística, Presidencia Municipal",
        "imagen": "img/lugares/Tiendaturistica.jpeg"
      },
      {
        "id": 102,
        "nombre": "Módulo Turístico",
        "direccion": "Dentro del parque Central, contra esquina del Teatro Junchavín",
        "descripcion": "Módulo de atención al turista dentro del Parque Central, contra esquina del Teatro Junchavín.",
        "consultaMapa": "Módulo de Información Turística, Parque Central",
        "imagen": "img/lugares/Moduloturistico.jpeg"
      }
    ]
  },
  {
    "id": 2,
    "categoria": "Arquitectura Religiosa",
    "color": "#C2185B",
    "lugares": [
      {
        "id": 201,
        "nombre": "Templo de Santo Domingo y Parque Central Benito Juárez",
        "direccion": "1a. Av. Oriente Sur, Centro",
        "descripcion": "Templo de origen colonial frente al Parque Central Benito Juárez, uno de los símbolos del centro histórico de Comitán.",
        "consultaMapa": "Templo de Santo Domingo",
        "imagen": "img/lugares/TemploSantoDomingo.jpg"
      },
      {
        "id": 202,
        "nombre": "Templo de San José",
        "direccion": "3a. Calle Sur Pte., Barrio de San José",
        "descripcion": "Templo del Barrio de San José, parte del recorrido de arquitectura religiosa del centro histórico.",
        "imagen": "img/lugares/TemploSanJose.jpg"
      },
      {
        "id": 203,
        "nombre": "Templo y Parque de Guadalupe",
        "direccion": "1a. Calle Sur Poniente, Barrio de Guadalupe",
        "descripcion": "Templo y parque del Barrio de Guadalupe, un rincón tranquilo para caminar y descansar.",
        "consultaMapa": "Templo de Guadalupe",
        "imagen": "img/lugares/IglesiaGuada1.jpeg"
      },
      {
        "id": 204,
        "nombre": "Templo del Calvario",
        "direccion": "1a. Calle Nte. Pte. No. 2, Barrio de El Calvario",
        "descripcion": "Templo del Barrio de El Calvario, parte de la ruta de arquitectura religiosa de Comitán.",
        "consultaMapa": "Templo del Calvario",
        "imagen": "img/lugares/TemploCalvario.jpg"
      },
      {
        "id": 205,
        "nombre": "Templo San Caralampio y Parque de La Pila",
        "direccion": "3a. Av. Ote. Nte. No. 19, Barrio de La Pila",
        "descripcion": "Templo de San Caralampio junto al Parque de La Pila, en el Barrio de La Pila.",
        "consultaMapa": "Templo de San Caralampio",
        "imagen": "img/lugares/TemploSanCaralampio.jpg"
      },
      {
        "id": 206,
        "nombre": "Templo de Jesusito",
        "direccion": "2a. Av. Ote. Sur No. 23, Barrio de Jesusito",
        "descripcion": "Templo del Barrio de Jesusito, cerca de la Plaza de las Artesanías.",
        "imagen": "img/lugares/TemploJesusito.jpg"
      },
      {
        "id": 207,
        "nombre": "Templo de San Sebastián, Casa del Santo Niñito Jesús Fundador y Parque de La Corregidora",
        "direccion": "1a. Avenida Ote. Sur No. 86, San Sebastián",
        "descripcion": "Templo de San Sebastián, junto a la Casa del Santo Niñito Jesús Fundador y el Parque de La Corregidora.",
        "consultaMapa": "Templo de San Sebastián",
        "imagen": "img/lugares/TemploSanSebastian.jpg"
      }
    ]
  },
  {
    "id": 3,
    "categoria": "Centros Culturales y Museos",
    "color": "#AD1457",
    "lugares": [
      {
        "id": 301,
        "nombre": "Mural Génesis e Historia de Los Hombres del Maíz",
        "direccion": "Avenida Central Norte No. 1 Int. Presidencia Mpal.",
        "descripcion": "Mural al interior de la Presidencia Municipal que narra el origen y la historia de Los Hombres del Maíz.",
        "consultaMapa": "Presidencia Municipal",
        "imagen": "img/lugares/MuralGenesis.jpg"
      },
      {
        "id": 302,
        "nombre": "Teatro de la Ciudad Junchavín",
        "direccion": "1a. Calle Sur Pte. 2, Centro",
        "descripcion": "Teatro municipal frente al Parque Central, sede de espectáculos y eventos culturales.",
        "imagen": "img/lugares/TeatroJunchavin.jpg"
      },
      {
        "id": 303,
        "nombre": "Casa Museo Belisario Domínguez",
        "direccion": "Av. Central Sur Dr. B. Domínguez, Centro",
        "descripcion": "Casa donde vivió el médico y senador comiteco Belisario Domínguez, hoy museo dedicado a su vida y legado.",
        "imagen": "img/lugares/CasaMuseo.jpg"
      },
      {
        "id": 304,
        "nombre": "Centro Cultural Rosario Castellanos",
        "direccion": "1a. Calle Sur Poniente, Col. Centro",
        "descripcion": "Espacio cultural en honor a la escritora Rosario Castellanos, con corredores de piedra y actividades artísticas.",
        "consultaMapa": "Centro Cultural Rosario Castellanos",
        "imagen": "img/lugares/CentroCulturalrosario.jpg"
      },
      {
        "id": 305,
        "nombre": "Archivo Histórico de Comitán",
        "direccion": "Primera Calle Sur Ote., Centro",
        "descripcion": "Archivo que resguarda documentos de la historia de Comitán.",
        "imagen": "img/lugares/ArchivoHistorico.jpeg"
      },
      {
        "id": 306,
        "nombre": "Museo Arqueológico de Comitán (INAH)",
        "direccion": "Primera Calle Sur Ote., Centro",
        "descripcion": "Museo del INAH con piezas arqueológicas de la región de Comitán.",
        "consultaMapa": "Museo Arqueológico de Comitán",
        "imagen": "img/lugares/MuseoArqueologico.png"
      },
      {
        "id": 307,
        "nombre": "Oficinas de Correos de México",
        "direccion": "Av. Central Sur No. 45, Dr. Belisario Domínguez 1a Sección",
        "descripcion": "Oficina postal ubicada en el centro histórico de Comitán.",
        "imagen": "img/lugares/CorreosMexico.jpg"
      },
      {
        "id": 308,
        "nombre": "Museo de Arte Moderno Hermila Domínguez de Castellanos",
        "direccion": "Av. Central Sur, Dr. Belisario Domínguez",
        "descripcion": "Museo de arte moderno que lleva el nombre de Hermila Domínguez de Castellanos.",
        "consultaMapa": "Museo de Arte Moderno Hermila Domínguez de Castellanos",
        "imagen": "img/lugares/MuseoArteModerno.jpg"
      },
      {
        "id": 309,
        "nombre": "Museo de la Ciudad",
        "direccion": "4a. Sur Ote. No. 5, Barrio de San José",
        "descripcion": "Museo que presenta la historia y el desarrollo de la ciudad de Comitán.",
        "consultaMapa": "Museo de la Ciudad",
        "imagen": "img/lugares/museo-ciudad-comitan.jpg"
      },
      {
        "id": 310,
        "nombre": "Museo Rosario Castellanos - MUROC",
        "direccion": "3ra Calle Sur Oriente No. 12, Barrio de Jesusito",
        "descripcion": "Museo dedicado a la vida y obra de la escritora Rosario Castellanos.",
        "consultaMapa": "Museo Rosario Castellanos",
        "imagen": "img/lugares/MuseoRosario.jpg"
      },
      {
        "id": 311,
        "nombre": "Auditorio Municipal Prof. Roberto Bonifaz Caballero",
        "direccion": "Central Ote. No. 3, Centro",
        "descripcion": "Auditorio municipal para eventos culturales, sociales y comunitarios en el centro.",
        "imagen": "img/lugares/AuditorioMunicipal.jpg"
      }
    ]
  },
  {
    "id": 4,
    "categoria": "Mercado y Artesanías",
    "color": "#D81B60",
    "lugares": [
      {
        "id": 401,
        "nombre": "Mercado 1 de Mayo",
        "direccion": "Central Ote. No. 14, Centro",
        "descripcion": "Mercado tradicional del centro de Comitán, con productos locales, comida y mercancía de la región.",
        "imagen": "img/lugares/Mercado1mayo.jpg"
      },
      {
        "id": 402,
        "nombre": "Plaza de las Artesanías",
        "direccion": "2a. Avenida Ote. Sur No. 35, Barrio de Jesusito",
        "descripcion": "Plaza con puestos de artesanías, ideal para llevarse un recuerdo de Comitán.",
        "imagen": "img/lugares/PlazaArtesanias.jpeg"
      }
    ]
  },
  {
    "id": 5,
    "categoria": "Transporte Público",
    "color": "#253b85",
    "lugares": [
      {
        "id": 501,
        "nombre": "Parada de transporte público",
        "direccion": "",
        "descripcion": "Parada de transporte público señalada en el plano turístico del centro histórico de Comitán.",
        "imagen": "img/lugares/Parada.jpeg",
        "sinRuta": true
      },
      {
        "id": 502,
        "nombre": "Parada de transporte público",
        "direccion": "",
        "descripcion": "Parada de transporte público señalada en el plano turístico del centro histórico de Comitán.",
        "imagen": "img/lugares/Parada.jpeg",
        "sinRuta": true
      },
      {
        "id": 503,
        "nombre": "Parada de transporte público",
        "direccion": "",
        "descripcion": "Parada de transporte público señalada en el plano turístico del centro histórico de Comitán.",
        "imagen": "img/lugares/Parada.jpeg",
        "sinRuta": true
      },
      {
        "id": 504,
        "nombre": "Parada de transporte público",
        "direccion": "",
        "descripcion": "Parada de transporte público señalada en el plano turístico del centro histórico de Comitán.",
        "imagen": "img/lugares/Parada.jpeg",
        "sinRuta": true
      },
      {
        "id": 505,
        "nombre": "Parada de transporte público",
        "direccion": "",
        "descripcion": "Parada de transporte público señalada en el plano turístico del centro histórico de Comitán.",
        "imagen": "img/lugares/Parada.jpeg",
        "sinRuta": true
      },
      {
        "id": 506,
        "nombre": "Parada de transporte público",
        "direccion": "",
        "descripcion": "Parada de transporte público señalada en el plano turístico del centro histórico de Comitán.",
        "imagen": "img/lugares/Parada.jpeg",
        "sinRuta": true
      },
      {
        "id": 507,
        "nombre": "Parada de transporte público",
        "direccion": "",
        "descripcion": "Parada de transporte público señalada en el plano turístico del centro histórico de Comitán.",
        "imagen": "img/lugares/Parada.jpeg",
        "sinRuta": true
      },
      {
        "id": 508,
        "nombre": "Parada de transporte público",
        "direccion": "",
        "descripcion": "Parada de transporte público señalada en el plano turístico del centro histórico de Comitán.",
        "imagen": "img/lugares/Parada.jpeg",
        "sinRuta": true
      },
      {
        "id": 509,
        "nombre": "Parada de transporte público",
        "direccion": "",
        "descripcion": "Parada de transporte público señalada en el plano turístico del centro histórico de Comitán.",
        "imagen": "img/lugares/Parada.jpeg",
        "sinRuta": true
      }
    ],
    "soloMapa": true
  }
];
