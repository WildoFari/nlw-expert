const preguntas = [
  {
      pregunta: "¿En qué año fue fundado el Club Olimpia?",
      respuestas: [
          "1902",
          "1904",
          "1906"
      ],
      correcta: 0
  },
  {
      pregunta: "¿Cuántas veces ha ganado el Club Olimpia la Copa Libertadores de América?",
      respuestas: [
          "2 veces",
          "3 veces",
          "4 veces"
      ],
      correcta: 1
  },
  {
      pregunta: "¿Quién fue el máximo goleador en la historia del Club Olimpia?",
      respuestas: [
          "Roque Santa Cruz",
          "Osvaldo Domínguez Dibb",
          "Saturnino Arrúa"
      ],
      correcta: 2
  },
  {
      pregunta: "¿En qué año el Club Olimpia alcanzó la final de la Copa Intercontinental?",
      respuestas: [
          "1979",
          "1990",
          "2002"
      ],
      correcta: 1
  },
  {
      pregunta: "¿Quién fue el primer presidente del Club Olimpia?",
      respuestas: [
          "Juan Alberto Acosta",
          "Manuel Ferreira",
          "José Benítez"
      ],
      correcta: 1
  },
  {
      pregunta: "¿Cuál es el récord de partidos consecutivos invictos del Club Olimpia?",
      respuestas: [
          "48 partidos",
          "56 partidos",
          "64 partidos"
      ],
      correcta: 2
  },
  {
      pregunta: "¿Cuál fue el primer título internacional ganado por el Club Olimpia?",
      respuestas: [
          "Copa Libertadores de América",
          "Copa Interamericana",
          "Copa Sudamericana"
      ],
      correcta: 0
  },
  {
      pregunta: "¿En qué año el Club Olimpia ganó su primer título de liga en Paraguay?",
      respuestas: [
          "1912",
          "1915",
          "1918"
      ],
      correcta: 2
  },
  {
      pregunta: "¿Quién fue el entrenador del Club Olimpia en la final de la Copa Libertadores 1979?",
      respuestas: [
          "Luis Cubilla",
          "Nery Pumpido",
          "Miguel Ángel Russo"
      ],
      correcta: 0
  },
  {
      pregunta: "¿Cuál fue el resultado del primer partido oficial del Club Olimpia?",
      respuestas: [
          "Victoria por 2-1",
          "Empate 0-0",
          "Derrota por 3-2"
      ],
      correcta: 2
  },
  {
      pregunta: "¿En qué año el Club Olimpia inauguró su estadio, el Manuel Ferreira?",
      respuestas: [
          "1922",
          "1924",
          "1926"
      ],
      correcta: 1
  },
  {
      pregunta: "¿Cuántas finales de la Copa Libertadores ha disputado el Club Olimpia?",
      respuestas: [
          "5 finales",
          "6 finales",
          "7 finales"
      ],
      correcta: 2
  },
  {
      pregunta: "¿Quién es el jugador con más partidos disputados en la historia del Club Olimpia?",
      respuestas: [
          "Saturnino Arrúa",
          "Roberto Perfumo",
          "Juan Bautista Agüero"
      ],
      correcta: 0
  },
  {
      pregunta: "¿Cuál es la mayor goleada registrada en la historia del Club Olimpia en torneos nacionales?",
      respuestas: [
          "9-0",
          "10-0",
          "12-0"
      ],
      correcta: 1
  },
  {
      pregunta: "¿Cuál es el lenguaje de programación utilizado para desarrollar aplicaciones móviles nativas en iOS?",
      respuestas: [
          "Swift",
          "Java",
          "Objective-C"
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