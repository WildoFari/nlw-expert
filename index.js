const preguntasMezcladas = [
  {
    pregunta: "¿Cuál es el lenguaje de programación principal para el desarrollo de aplicaciones Android?",
    respuestas: [
      "Java",
      "Swift",
      "JavaScript"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué es React Native?",
    respuestas: [
      "Un framework para desarrollar aplicaciones web",
      "Un framework para desarrollar aplicaciones móviles multiplataforma",
      "Un sistema de gestión de bases de datos"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál de los siguientes NO es un lenguaje de programación para frontend?",
    respuestas: [
      "Java",
      "JavaScript",
      "HTML"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuál es el lenguaje de programación utilizado para desarrollar aplicaciones móviles nativas en iOS?",
    respuestas: [
      "Swift",
      "Java",
      "Objective-C"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué es Firebase?",
    respuestas: [
      "Un sistema operativo para dispositivos móviles",
      "Una plataforma de desarrollo de aplicaciones móviles de Google",
      "Un lenguaje de programación para backend"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es el propósito principal de CSS en el desarrollo web?",
    respuestas: [
      "Definir la estructura y el contenido de una página web",
      "Definir el comportamiento dinámico de una página web",
      "Estilizar la apariencia de una página web"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué significa HTML?",
    respuestas: [
      "Hypertext Markup Language",
      "Hyperlink and Text Markup Language",
      "Hyper Transfer Markup Language"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuál es un framework popular para el desarrollo de aplicaciones móviles híbridas?",
    respuestas: [
      "React Native",
      "Flutter",
      "Ionic"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué es una API REST?",
    respuestas: [
      "Una interfaz para interactuar con una base de datos relacional",
      "Un protocolo de transferencia de hipertexto",
      "Un estilo de arquitectura para el desarrollo de APIs basado en HTTP"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es un servicio de alojamiento de repositorios de código fuente ampliamente utilizado?",
    respuestas: [
      "GitHub",
      "Dropbox",
      "Google Drive"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuál de los siguientes NO es un sistema operativo móvil?",
    respuestas: [
      "Android",
      "iOS",
      "Windows"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Cuál es el lenguaje de programación utilizado para el desarrollo de aplicaciones iOS?",
    respuestas: [
      "Objective-C",
      "Swift",
      "JavaScript"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es un banco de datos NoSQL?",
    respuestas: [
      "MySQL",
      "MongoDB",
      "PostgreSQL"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué es un sistema de control de versiones?",
    respuestas: [
      "Un sistema para gestionar bases de datos",
      "Un sistema para controlar el acceso a los recursos de una aplicación",
      "Un sistema para gestionar cambios en el código fuente"
    ],
    correcta: 2
  },
  {
    pregunta: "¿Qué es un APK en el contexto de desarrollo móvil?",
    respuestas: [
      "Un archivo de configuración de la aplicación",
      "Un archivo ejecutable para Android",
      "Un formato de archivo para bases de datos"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es un lenguaje de programación popular para el desarrollo de aplicaciones bancarias?",
    respuestas: [
      "JavaScript",
      "Java",
      "Python"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Qué es GraphQL?",
    respuestas: [
      "Un lenguaje de consultas para APIs",
      "Una base de datos relacional",
      "Un sistema operativo móvil"
    ],
    correcta: 0
  },
  {
    pregunta: "¿Cuál es un SDK utilizado en el desarrollo de aplicaciones móviles?",
    respuestas: [
      "Software Development Kit",
      "System Development Kit",
      "Script Development Kit"
    ],
    correcta: 0
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
    pregunta: "¿En qué año ganó el Club Olimpia su primer título internacional?",
    respuestas: [
      "1979",
      "1980",
      "1972"
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