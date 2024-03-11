const preguntasOlimpia = [
  {
    pregunta: "¿En qué año fue fundado el Club Olimpia?",
    respuestas: [
      "1902",
      "1903",
      "1904"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuál es el apodo del Club Olimpia?",
    respuestas: [
      "El Ciclón",
      "El Decano",
      "El Rey de Copas"
    ],
    correcta: 2
  },
  {
    pregunta: "¿En qué año ganó el Club Olimpia su primer título internacional?",
    respuestas: [
      "1979",
      "1980",
      "1972"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuántas veces ha ganado el Club Olimpia la Copa Libertadores de América?",
    respuestas: [
      "2 veces",
      "3 veces",
      "4 veces"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Quién es el máximo goleador histórico del Club Olimpia?",
    respuestas: [
      "Roque Santa Cruz",
      "Osvaldo Domínguez Dibb",
      "Norberto Méndez"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es el estadio principal del Club Olimpia?",
    respuestas: [
      "Estadio Defensores del Chaco",
      "Estadio Manuel Ferreira",
      "Estadio Luis Alfonso Giagni"
    ],
    correcta: 1
  },
  {
    pregunta: "¿En qué año el Club Olimpia alcanzó la final de la Copa Intercontinental?",
    respuestas: [
      "1979",
      "1990",
      "2002"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Quién fue el entrenador del Club Olimpia en la final de la Copa Libertadores 1979?",
    respuestas: [
      "Luis Cubilla",
      "Ernesto Díaz",
      "Manuel Ferreira"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuál es el color principal de la camiseta del Club Olimpia?",
    respuestas: [
      "Blanco",
      "Negro",
      "Rojo"
    ],
    correcta: 0
  },
  {
    pregunta: "¿En qué ciudad tiene su sede el Club Olimpia?",
    respuestas: [
      "Asunción",
      "Encarnación",
      "Luque"
    ],
    correcta: 0
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