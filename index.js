const preguntas = [
  {
    pregunta: "¿En qué año fue fundado el Club Guaraní?",
    respuestas: [
      "1903",
      "1912",
      "1924"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuál fue el primer presidente del Club Guaraní?",
    respuestas: [
      "Manuel Quevedo",
      "Vicente Fretes",
      "César Jara"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es el apodo del Club Guaraní?",
    respuestas: [
      "El Ciclón",
      "El Aborigen",
      "El Decano"
    ],
    correcta: 1
  },
  {
    pregunta: "¿En qué año ganó el Club Guaraní su primer título de liga?",
    respuestas: [
      "1906",
      "1912",
      "1921"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es el máximo goleador histórico del Club Guaraní?",
    respuestas: [
      "José Saturnino Cardozo",
      "Juan José Morales",
      "Néstor Bareiro"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Quién es conocido como el 'Mago' y jugó en el Club Guaraní?",
    respuestas: [
      "Roberto 'Toro' Acuña",
      "Carlos Bonet",
      "Julio Dos Santos"
    ],
    correcta: 0
  },
  {
    pregunta: "¿En qué año el Club Guaraní alcanzó las semifinales de la Copa Libertadores?",
    respuestas: [
      "1966",
      "1978",
      "2015"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es el estadio principal del Club Guaraní?",
    respuestas: [
      "Estadio Feliciano Cáceres",
      "Estadio Rogelio Livieres",
      "Estadio Defensores del Chaco"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es el color principal de la camiseta del Club Guaraní?",
    respuestas: [
      "Rojo y blanco",
      "Amarillo y negro",
      "Azul y negro"
    ],
    correcta: 0
  },
  {
    pregunta: "¿En qué ciudad tiene su sede el Club Guaraní?",
    respuestas: [
      "Asunción",
      "Capiatá",
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