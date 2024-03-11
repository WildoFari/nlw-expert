const preguntas = [
    {
      pregunta: "¿Qué es JavaScript?",
      respuestas: [
        "Un lenguaje de programación para diseñar estructuras de base de datos",
        "Un lenguaje de programación de alto nivel para crear contenido web dinámico",
        "Un lenguaje de marcado para definir la estructura y el contenido de una página web"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Cuál es la sintaxis correcta para declarar una variable en JavaScript?",
      respuestas: [
        "var myVar = 5;",
        "variable myVar = 5;",
        "myVar = 5;"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Qué método se utiliza para imprimir en la consola en JavaScript?",
      respuestas: [
        "console.log()",
        "print()",
        "log.console()"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Cuál de las siguientes NO es una estructura de control en JavaScript?",
      respuestas: [
        "if-else",
        "for-loop",
        "select-case"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué tipo de datos se utiliza para almacenar texto en JavaScript?",
      respuestas: [
        "cadena",
        "número",
        "booleano"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Cuál es la función de JavaScript que se utiliza para modificar el contenido de un elemento HTML?",
      respuestas: [
        "changeText()",
        "innerHTML()",
        "setText()"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué operador se utiliza para concatenar cadenas en JavaScript?",
      respuestas: [
        "+",
        "&",
        "*"
      ],
      correcta: 0
    },
    {
      pregunta: "¿Cuál es el valor de la expresión '10 % 3'?",
      respuestas: [
        "0",
        "1",
        "3"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Cuál es el tipo de datos que representa un valor verdadero o falso en JavaScript?",
      respuestas: [
        "string",
        "boolean",
        "number"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Qué método se utiliza para convertir una cadena a un número en JavaScript?",
      respuestas: [
        "parseInt()",
        "convertToInt()",
        "toNumber()"
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