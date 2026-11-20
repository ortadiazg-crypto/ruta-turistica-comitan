// Distancias y tiempos desde Comitán, tomados del mapa turístico oficial (impreso).
// "consultaMapa" es lo que se busca en Google Maps para trazar la ruta.
const ATRACTIVOS = [
  {
    "titulo": "Atractivos turísticos cercanos a Comitán",
    "destinos": [
      { "nombre": "Junchavín", "imagen": "img/Atractivos/Junchavin.jpeg", "km": "2", "tiempo": "7 min", "consultaMapa": "Zona Arqueológica Junchavín, Comitán, Chiapas" },
      { "nombre": "Tenam Puente", "imagen": "img/Atractivos/Tenam_Puente.jpeg", "km": "11.6", "tiempo": "18 min", "consultaMapa": "Zona Arqueológica Tenam Puente, Chiapas" },
      { "nombre": "Chukumaltic", "imagen": "img/Atractivos/Chucumaltik.jpeg", "km": "26.9", "tiempo": "34 min", "consultaMapa": "Zona Arqueológica Chukumaltic, Chiapas" },
      { "nombre": "Uninajab", "imagen": "img/Atractivos/Uninajab.jpeg", "km": "27.5", "tiempo": "37 min", "consultaMapa": "Uninajab, Chiapas" },
      { "nombre": "Laguna Koilá", "km": "27.7", "tiempo": "40 min", "consultaMapa": "Laguna Koilá, Chiapas" },
      { "nombre": "Cascadas del Chiflón", "imagen": "img/Atractivos/Cascada_Chiflon.jpeg", "km": "36.8", "tiempo": "46 min", "consultaMapa": "Cascadas El Chiflón, Chiapas" },
      { "nombre": "Chinkultic", "km": "49", "tiempo": "50 min", "consultaMapa": "Zona Arqueológica Chinkultic, Chiapas" },
      { "nombre": "Xbulanjá", "km": "51.9", "tiempo": "2 h 32 min", "consultaMapa": "Xbulanjá, Chiapas" },
      { "nombre": "Parque Nacional Lagunas de Montebello", "km": "59", "tiempo": "1 h", "consultaMapa": "Parque Nacional Lagunas de Montebello, Chiapas" },
      { "nombre": "Lago Tziscao", "km": "60", "tiempo": "1 h", "consultaMapa": "Lago Tziscao, Chiapas" },
      { "nombre": "Copanahuastla", "km": "64.2", "tiempo": "1 h 21 min", "consultaMapa": "Copanahuastla, Chiapas" },
      { "nombre": "Lagos de Colón", "km": "68.5", "tiempo": "1 h 12 min", "consultaMapa": "Lagos de Colón, Chiapas" },
      { "nombre": "Las Nubes", "km": "128", "tiempo": "3 h 15 min", "consultaMapa": "Centro Ecoturístico Las Nubes, Chiapas" },
      { "nombre": "Miramar", "km": "150", "tiempo": "4 h", "nota": "+ 8 km de sendero: 1 h a caballo o 3 h a pie", "consultaMapa": "Laguna Miramar, Chiapas" },
      { "nombre": "Selvaje", "km": "205", "tiempo": "4 h 30 min", "consultaMapa": "Selvaje, Chiapas" },
      { "nombre": "Canto de la Selva", "km": "208", "tiempo": "4 h 40 min", "consultaMapa": "Canto de la Selva, Chiapas" },
      { "nombre": "Las Guacamayas", "km": "248", "tiempo": "5 h", "consultaMapa": "Las Guacamayas, Reforma Agraria, Chiapas" }
    ]
  },
  {
    "titulo": "Distancia a ciudades principales",
    "destinos": [
      { "nombre": "San Cristóbal de las Casas", "km": "93", "tiempo": "2 h", "consultaMapa": "San Cristóbal de las Casas, Chiapas" },
      { "nombre": "Tuxtla Gutiérrez", "km": "149", "tiempo": "3 h", "consultaMapa": "Tuxtla Gutiérrez, Chiapas" },
      { "nombre": "Palenque", "km": "228", "tiempo": "6 h", "consultaMapa": "Palenque, Chiapas" },
      { "nombre": "Tapachula", "km": "241", "tiempo": "5 h", "consultaMapa": "Tapachula, Chiapas" }
    ]
  }
];
