// Distancias y tiempos desde Comitán, tomados del mapa turístico oficial (impreso).
// "consultaMapa" es lo que se busca en Google Maps para trazar la ruta.
// "transporte" indica qué línea de urbana o colectivo tomar en Comitán y de dónde sale.
const ATRACTIVOS = [
  {
    "titulo": "Atractivos turísticos cercanos a Comitán",
    "destinos": [
      {
        "nombre": "Junchavín", "imagen": "img/Atractivos/Junchavin.jpeg", "km": "2", "tiempo": "7 min",
        "consultaMapa": "Zona Arqueológica Junchavín, Comitán, Chiapas",
        "descripcion": "Sitio arqueológico maya en la cima de un cerro, muy cerca de la ciudad, con vista panorámica del valle de Comitán.",
        "transporte": "Toma un Colectivo que vaya para Quija y que te baje en Junchavin o puedes tomar un taxi de sitio en el Parque Central y pide que te lleve a la zona arqueológica Junchavín."
      },
      {
        "nombre": "Tenam Puente", "imagen": "img/Atractivos/Tenam_Puente.jpeg", "km": "11.6", "tiempo": "18 min",
        "consultaMapa": "Zona Arqueológica Tenam Puente, Chiapas",
        "descripcion": "Zona arqueológica maya sobre un lomerío, con acrópolis, plazas y juegos de pelota rodeados de bosque.",
        "transporte": "Toma el transporte Ejidal Tenam Puente Sale de Comitán y llega a la zona arqueológica, o toma la camioneta colectiva que va al ejido Francisco Sarabia, en el Boulevard Belisario Domínguez, cerca del mercado, y pide que te bajen en la entrada de la zona arqueológica."
      },
      {
        "nombre": "Chukumaltic", "imagen": "img/Atractivos/Chucumaltik.jpeg", "km": "26.9", "tiempo": "34 min",
        "consultaMapa": "Chukumaltik, Tzimol, Chiapas",
        "descripcion": "Cenote en forma de laguna de agua azul intenso, rodeado de vegetación; ideal para nadar y hacer fotos.",
        "transporte": "Colectivo a Tzimol de Transportes La Angostura, en la Calle Central Benito Juárez No. 27, Centro. En Tzimol toma un taxi hasta el cenote."
      },
      {
        "nombre": "Uninajab", "imagen": "img/Atractivos/Uninajab.jpeg", "km": "27.5", "tiempo": "37 min",
        "consultaMapa": "Uninajab, Chiapas",
        "descripcion": "Centro ecoturístico con pozas de agua turquesa, pequeñas cascadas y un mirador con vista al valle. Por la carretera estatal 226 Comitán – La Angostura.",
        "transporte": "Colectivo de Transportes La Angostura, en la Calle Central Benito Juárez No. 27, Centro (ruta Uninajab – Tzimol – Socoltenango). Pide que te bajen en el desvío a San Francisco Uninajab, a unos 3 km de la entrada."
      },
      {
        "nombre": "Laguna Koilá", "imagen": "img/Atractivos/Laguna koila.jpeg", "km": "27.7", "tiempo": "40 min",
        "consultaMapa": "Laguna Koilá, Chiapas",
        "descripcion": "Laguna de color azul turquesa de unos 240 metros de diámetro y entre 80 y 120 metros de profundidad, apropiada para nadar y bucear. Cuenta con área de palapas y asadores.",
        "transporte": "Colectivo hacia Tzimol de Transportes La Angostura, en la Calle Central Benito Juárez No. 27, Centro. Pide que te bajen en el desvío a la Laguna Koilá, sobre la carretera 226 Comitán – La Angostura."
      },
      {
        "nombre": "Cascadas del Chiflón", "imagen": "img/Atractivos/Cascada_Chiflon.jpeg", "km": "36.8", "tiempo": "46 min",
        "consultaMapa": "Cascadas El Chiflón, Chiapas",
        "descripcion": "Serie de cascadas de agua turquesa sobre el río San Vicente; la más alta, el Velo de Novia, mide unos 120 metros. Tiene senderos, pozas y tirolesa.",
        "transporte": "Colectivo hacia Tzimol / Socoltenango de Transportes La Angostura, en la Calle Central Benito Juárez No. 27, Centro. Pide que te bajen en El Chiflón; de ahí son unos 10 minutos caminando a la entrada. El regreso se toma del lado opuesto de la carretera."
      },
      {
        "nombre": "Chinkultic", "imagen": "img/Atractivos/Chinkultic.jpeg", "km": "49", "tiempo": "50 min",
        "consultaMapa": "Zona Arqueológica Chinkultic, Chiapas",
        "descripcion": "Zona arqueológica maya junto a un cenote, con una acrópolis desde la que se ven las lagunas de Montebello.",
        "transporte": "Colectivo de Transportes Montebello (Línea de Pasajeros Comitán – Lagos de Montebello), en la 2a. Av. Poniente Sur, esquina con la 2a. Calle Sur Poniente. Pide que te bajen en el crucero del ejido Miguel Hidalgo y camina entre 1 y 2 km hasta la zona arqueológica."
      },
      {
        "nombre": "Xbulanjá", "imagen": "img/Atractivos/Xbulanja.jpeg", "km": "51.9", "tiempo": "2 h 32 min",
        "consultaMapa": "Xbulanjá, Chiapas",
        "descripcion": "Centro ecoturístico con cascadas y pozas de agua turquesa en plena naturaleza, cerca de Puente Santo Domingo.",
        "transporte": "Colectivo de Transportadora Tzobol, en la 4a. Av. Poniente Sur (ruta de la Carretera Fronteriza hacia Las Nubes). Pide que te bajen en el desvío a Xbulanjá, por Puente Santo Domingo."
      },
      {
        "nombre": "Parque Nacional Lagunas de Montebello", "imagen": "img/Atractivos/Lagunas de Montebello.jpeg", "km": "59", "tiempo": "1 h",
        "consultaMapa": "Parque Nacional Lagunas de Montebello, Chiapas",
        "descripcion": "Reserva natural de 6,022 hectáreas con 59 lagunas en tonalidades que van del verde esmeralda al azul turquesa, rodeadas de bosque de pino. Carretera estatal 225, km 36, municipio de La Trinitaria.",
        "transporte": "Colectivo de Transportes Montebello (Línea de Pasajeros Comitán – Lagos de Montebello), en la 2a. Av. Poniente Sur, esquina con la 2a. Calle Sur Poniente. Salen aprox. cada 20 – 30 min; el trayecto es de una hora y pasa por las principales lagunas."
      },
      {
        "nombre": "Lago Tziscao", "imagen": "img/Atractivos/Lago tziscao.jpeg", "km": "60", "tiempo": "1 h",
        "consultaMapa": "Lago Tziscao, Chiapas",
        "descripcion": "El lago más grande de Montebello, en la frontera con Guatemala; se puede pasear en balsa, kayak y hospedarse en cabañas.",
        "transporte": "Colectivo de Transportes Montebello (Línea de Pasajeros Comitán – Lagos de Montebello), en la 2a. Av. Poniente Sur, esquina con la 2a. Calle Sur Poniente. La ruta termina en Tziscao."
      },
      {
        "nombre": "Copanahuastla", "imagen": "img/Atractivos/Copanaguastla.jpeg", "km": "64.2", "tiempo": "1 h 21 min",
        "consultaMapa": "Ex Convento de Copanaguastla, Socoltenango, Chiapas",
        "descripcion": "Ruinas de un antiguo convento dominico del siglo XVI, abandonado desde el siglo XVII, con su gran fachada de estilo plateresco.",
        "transporte": "Colectivo a Socoltenango de Transportes La Angostura, en la Calle Central Benito Juárez No. 27, Centro. En Socoltenango toma un taxi hasta el ex convento; el acceso final es de 4 km de terracería."
      },
      {
        "nombre": "Lagos de Colón", "imagen": "img/Atractivos/Lagos_Colon.jpeg", "km": "68.5", "tiempo": "1 h 12 min",
        "consultaMapa": "Lagos de Colón, Chiapas",
        "descripcion": "Conjunto de lagos de agua cristalina rodeados de selva, junto a la zona arqueológica de Lagartero, cerca de la frontera.",
        "transporte": "Toma los colectivos que van a Frontera Comalapa: Transportes Rápidos de la Frontera (TRF) o TAOSA, en el Boulevard Belisario Domínguez, entre la 1a. y 2a. Calle Sur Poniente. Bájate en Chamic (aprox. 1 h) y ahí toma un taxi compartido hasta los Lagos de Colón (aprox. 20 min)."
      },
      {
        "nombre": "Las Nubes", "imagen": "img/Atractivos/Las nubes.jpeg", "km": "128", "tiempo": "3 h 15 min",
        "consultaMapa": "Centro Ecoturístico Las Nubes, Chiapas",
        "descripcion": "Centro ecoturístico a la orilla del río Santo Domingo, con cascadas y rápidos de agua turquesa, puente colgante y cabañas.",
            "transporte": "Hay dos líneas que te llevan desde Comitán. 1) Línea Comitán Montebello (terminal en el Barrio Guadalupe): toma la ruta hacia Benemérito de las Américas, que pasa por los Lagos de Montebello y sigue por la Carretera Fronteriza; pide que te bajen en el crucero de Jerusalén, donde está la señal de Las Nubes, y de ahí toma un taxi colectivo, unos 20 minutos por terracería pasando por Nueva Jerusalén y La Fortuna. 2) Transportadora Tzobol (4a. Av. Poniente Sur, tel. 963 632 7739): hace el mismo recorrido; al subir pregunta si entra hasta Las Nubes o te deja en el crucero de Jerusalén. El viaje dura unas 3 horas. Las salidas desde Comitán suelen ser por la tarde y los regresos muy temprano, así que lo mejor es quedarte a dormir en las cabañas del centro ecoturístico. Confirma horarios antes de viajar.",
      },
      {
        "nombre": "Miramar", "imagen": "img/Atractivos/Miramar.jpeg", "km": "150", "tiempo": "4 h", "nota": "+ 8 km de sendero: 1 h a caballo o 3 h a pie",
        "consultaMapa": "Laguna Miramar, Chiapas",
        "descripcion": "Laguna de aguas cristalinas en el corazón de la Selva Lacandona, dentro de la Reserva de la Biosfera Montes Azules.",
        "transporte": "Colectivo a Las Margaritas, que sale de la 6a. Calle Sur Oriente No. 52. En Las Margaritas toma otro colectivo hacia San Quintín / Emiliano Zapata; desde la comunidad se llega a la laguna por un sendero de 8 km, a pie o a caballo."
      },
      {
        "nombre": "Selvaje", "imagen": "img/Atractivos/Selvaje.jpeg", "km": "205", "tiempo": "4 h 30 min",
        "consultaMapa": "Selvaje, Chiapas",
        "descripcion": "Centro ecoturístico en la selva, cerca de El Pirú, rodeado de ríos y vegetación tropical.",
        "transporte": "No hay colectivo directo desde Comitán; se recomienda ir en auto o con un tour. Contactalos a traves de sus redes sociales."
      },
      {
        "nombre": "Canto de la Selva", "imagen": "img/Atractivos/Canto de la selva.jpeg", "km": "208", "tiempo": "4 h 40 min",
        "consultaMapa": "Canto de la Selva, Chiapas",
        "descripcion": "Centro ecoturístico en la región de la Selva Lacandona, con cascadas, senderos y avistamiento de fauna.",
        "transporte": "No hay colectivo directo desde Comitán; se recomienda ir en auto o con un tour."
      },
      {
        "nombre": "Las Guacamayas", "imagen": "img/Atractivos/Las guacamayas.jpeg", "km": "248", "tiempo": "5 h",
        "consultaMapa": "Las Guacamayas, Reforma Agraria, Chiapas",
        "descripcion": "Centro ecoturístico en Reforma Agraria, a la orilla del río Lacantún, famoso por el avistamiento de la guacamaya roja.",
        "transporte": "No hay colectivo directo desde Comitán; se recomienda ir en auto o con un tour. La opción más cercana es Transportadora lagos de Montebello o Tzobol."
      }
    ]
  },
  {
    "titulo": "Distancia a ciudades principales",
    "destinos": [
      {
        "nombre": "San Cristóbal de las Casas", "imagen": "img/Atractivos/San_Cristobal.jpeg", "km": "93", "tiempo": "2 h",
        "consultaMapa": "San Cristóbal de las Casas, Chiapas",
        "descripcion": "Pueblo Mágico de los Altos de Chiapas, con calles coloniales, templos, mercados de artesanías y gran ambiente cultural.",
            "transporte": "Puedes llegar en autobús ADO u OCC desde la terminal de autobuses de Comitán, ubicada en Blvd. Sur Belisario Domínguez No. 43, Barrio Cristóbal Colón, con salidas a lo largo del día y un viaje de unas 2 horas. También hay urbans y colectivos más económicos que salen de pequeñas terminales en el Boulevard, entre la 1a y 2a Calle Sur Poniente, cerca del centro; salen con frecuencia y el viaje dura alrededor de 1 h 30 min.",
      },
      {
        "nombre": "Tuxtla Gutiérrez", "imagen": "img/Atractivos/Tuxtla_Gutierrez.jpeg", "km": "149", "tiempo": "3 h",
        "consultaMapa": "Tuxtla Gutiérrez, Chiapas",
        "descripcion": "Capital de Chiapas y punto de partida al Cañón del Sumidero; cuenta con aeropuerto internacional.",
            "transporte": "Puedes llegar en autobús ADO u OCC desde la terminal de autobuses de Comitán, ubicada en Blvd. Sur Belisario Domínguez No. 43, Barrio Cristóbal Colón, con varias salidas al día. También puedes tomar las camionetas de la línea La Angostura, en la Calle Central Benito Juárez No. 27, Centro, que hacen la ruta Comitán–Tuxtla y salen con frecuencia durante el día.",
      },
      {
        "nombre": "Palenque", "imagen": "img/Atractivos/Palenque.png", "km": "228", "tiempo": "6 h",
        "consultaMapa": "Palenque, Chiapas",
        "descripcion": "Pueblo Mágico famoso por su zona arqueológica maya en medio de la selva, Patrimonio de la Humanidad.",
            "transporte": "Puedes llegar en autobús OCC desde la terminal de autobuses de Comitán, ubicada en Blvd. Sur Belisario Domínguez No. 43, Barrio Cristóbal Colón; el viaje es largo, de unas 9 a 11 horas, porque pasa por San Cristóbal de las Casas. Tambien puedes tomar transporte a Palenque en la linea Lagos de Montebello. Conviene salir temprano.",
      },
      {
        "nombre": "Tapachula", "imagen": "img/Atractivos/Tapachula.jpeg", "km": "241", "tiempo": "5 h",
        "consultaMapa": "Tapachula, Chiapas",
        "descripcion": "Ciudad de la región del Soconusco, junto al volcán Tacaná, conocida por sus fincas cafetaleras.",
            "transporte": "Puedes llegar en autobús OCC desde la terminal de autobuses de Comitán, ubicada en Blvd. Sur Belisario Domínguez No. 43, Barrio Cristóbal Colón, con un viaje de unas 5 h 30 min. Si prefieres una opción más económica, puedes ir en urbans por tramos: primero de Comitán a Motozintla con la línea La Angostura (unas 4 horas), después de Motozintla a Huixtla en colectivo o urban (alrededor de 1 h 30 min) y finalmente de Huixtla a Tapachula en urban, por ejemplo con Rápidos del Sur (unos 45 minutos).",
      }
    ]
  }
];
