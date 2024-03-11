const preguntas = [
  {
      pregunta: "¿En qué año fue fundado el Club Guaraní?",
      respuestas: [
          "1903",
          "1904",
          "1906"
      ],
      correcta: 0
  },
  {
      pregunta: "¿Cuál fue el primer título nacional obtenido por el Club Guaraní?",
      respuestas: [
          "Campeonato Paraguayo",
          "Copa Paraguay",
          "Torneo Apertura"
      ],
      correcta: 1
  },
  {
      pregunta: "¿Cuál es el apodo tradicional del Club Guaraní?",
      respuestas: [
          "Los Caciques",
          "Los Aurinegros",
          "Los Aborígenes"
      ],
      correcta: 0
  },
  {
      pregunta: "¿En qué año el Club Guaraní se coronó campeón invicto del Campeonato Paraguayo?",
      respuestas: [
          "1949",
          "1956",
          "1964"
      ],
      correcta: 2
  },
  {
      pregunta: "¿Cuál fue el primer estadio del Club Guaraní?",
      respuestas: [
          "Estadio Rogelio Livieres",
          "Estadio Dos Bocas",
          "Estadio Para Uno"
      ],
      correcta: 1
  },
  {
      pregunta: "¿Quién fue el máximo goleador histórico del Club Guaraní?",
      respuestas: [
          "Tiburcio Ortíz",
          "Juan Bautista Agüero",
          "Carlos Gamarra"
      ],
      correcta: 0
  },
  {
      pregunta: "¿En qué año el Club Guaraní disputó su primera Copa Libertadores?",
      respuestas: [
          "1964",
          "1978",
          "1982"
      ],
      correcta: 0
  },
  {
      pregunta: "¿Cuál es el clásico rival del Club Guaraní?",
      respuestas: [
          "Cerro Porteño",
          "Olimpia",
          "Libertad"
      ],
      correcta: 0
  },
  {
      pregunta: "¿Quién es el único entrenador que ha dirigido al Club Guaraní en más de una ocasión en torneos nacionales?",
      respuestas: [
          "Gustavo Florentín",
          "Fernando Jubero",
          "Jorge Amado Nunes"
      ],
      correcta: 2
  },
  {
      pregunta: "¿En qué año el Club Guaraní se consagró campeón de la División Intermedia?",
      respuestas: [
          "1995",
          "2002",
          "2010"
      ],
      correcta: 1
  },
  {
      pregunta: "¿Quién fue el primer presidente del Club Guaraní?",
      respuestas: [
          "Juan Aurelio Benítez",
          "Juan Manuel Bazán",
          "Manuel Pintos Saldívar"
      ],
      correcta: 0
  },
  {
      pregunta: "¿Cuál es el récord de asistencia en un partido del Club Guaraní?",
      respuestas: [
          "50,000 espectadores",
          "60,000 espectadores",
          "70,000 espectadores"
      ],
      correcta: 2
  },
  {
      pregunta: "¿Cuál es la denominación oficial del estadio actual del Club Guaraní?",
      respuestas: [
          "Estadio Rogelio Livieres",
          "Estadio Dos Bocas",
          "Estadio Dr. Nicolás Leoz"
      ],
      correcta: 2
  },
  {
      pregunta: "¿En qué año el Club Guaraní ganó su primer título internacional?",
      respuestas: [
          "1965",
          "1966",
          "1968"
      ],
      correcta: 1
  },
  {
      pregunta: "¿Quién es el jugador con más partidos disputados en la historia del Club Guaraní?",
      respuestas: [
          "Juan Bautista Agüero",
          "José Torrente",
          "Edgar Aranda"
      ],
      correcta: 0
  },
  {
      pregunta: "¿Cuál es la mayor goleada registrada a favor del Club Guaraní en torneos nacionales?",
      respuestas: [
          "9-0",
          "10-1",
          "12-2"
      ],
      correcta: 1
  },
  {
      pregunta: "¿En qué año el Club Guaraní obtuvo su primer título en la era profesional del fútbol paraguayo?",
      respuestas: [
          "1949",
          "1950",
          "1951"
      ],
      correcta: 1
  },
  {
      pregunta: "¿Quién fue el primer jugador del Club Guaraní en ser convocado a la selección paraguaya?",
      respuestas: [
          "Cristóbal Maldonado",
          "Fernando Jubero",
          "Alberto Espínola"
      ],
      correcta: 0
  },
  {
      pregunta: "¿Cuál es el récord de goles marcados por el Club Guaraní en una sola edición de la Copa Libertadores?",
      respuestas: [
          "25 goles",
          "29 goles",
          "32 goles"
      ],
      correcta: 2
  },
  {
      pregunta: "¿Cuál fue el primer título internacional ganado por el Club Guaraní?",
      respuestas: [
          "Copa Sudamericana",
          "Copa Interamericana",
          "Copa Ganadores de Copa"
      ],
      correcta: 1
  }
];





  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
   const correctas = new Set()
   const totalDePreguntas = preguntas.length
   const mostrarTotal = document.querySelector('#aciertos span')
   mostrarTotal.textContent = correctas.size + ' de ' + totalDePreguntas
   
  
  // Itera sobre cada pregunta en el array 'preguntas'
  for(const item of preguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pregunta
    
    
  for(let respuesta of item.respuestas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = respuesta
      dt.querySelector('input').setAttribute('name', 'pregunta-' + preguntas.indexOf(item))
      dt.querySelector('input').value = item.respuestas.indexOf(respuesta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorrecta = event.target.value == item.correcta
  
        correctas.delete(item)
        if(estaCorrecta) {
         correctas.add(item)
  
        }
      mostrarTotal.textContent = correctas.size + ' de ' + totalDePreguntas
      }
    
      quizItem.querySelector('dl').appendChild(dt) 
    }
  
  
     quizItem.querySelector('dl dt').remove()
    
    
    // Agrega 'quizItem' al final del elemento con el id 'quiz' en el HTML
    quiz.appendChild(quizItem)
  }