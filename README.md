# `Prueba Técnica - Social WOW `

`🎟 Reto planteado en el inicio del proceso de selección.`

---

#### Índice

- Objetivos
  - Objetivos generales y objetivos técnicos
- Hoja de ruta
- Resultado
  - Imagen de la aplicación _vista escritorio_
  - Imagen de la aplicación _vista móvil_
- Descripción del proyecto
- Conclusiones

---

#### ` 🏁 Objetivos generales`

1️⃣ Código documentado

2️⃣ Aplicar buenas prácticas

3️⃣ Implementar testing

---

#### ` ⚙️ Objetivos técnicos`

☝Proyecto desarrollado en ReactJs

✌️Vista previa de un calendario actual

🤟 Evento click con ventana modal para añadir citas al calendario

🖖 Incluir formulario en modal con título, hora de inicio y hora final

🖐 Mostrar lista de citas ordenadas por hora de inico

🆓 Usar librerías consideradas.

---

#### ` 🗺 Mi hoja de ruta`

📝 Estructar pasos y ordenar plan de desarrollo

🕵️‍♀️ Investigación previa sobre implementar calendarios y posibles librerías para React

👩‍💻 Leer docu de librerías y estudiar su manejo

⚖️ Planteamiento de diferentes opciones y decisión final.

---

#### ` 📸 Resultado`

_Vista escritorio_

![FireShot Capture 162 - Prueba técnica - Social WOW - Estíbaliz Barato - localhost](https://user-images.githubusercontent.com/70572595/105962080-a3ca7680-607f-11eb-88d9-463fe27fe36c.png)

_Vista mobile_

![FireShot Capture 173 - Prueba técnica - Social WOW - Estíbaliz Barato - localhost](https://user-images.githubusercontent.com/70572595/105962502-33702500-6080-11eb-9764-9457c174ab35.png)

---

#### `🚀 Descripción del proyecto`

##### Desarrollo

El proyecto permite seleccionar una día en los días hábiles de calendario inicial (izquierda)

Tras seleccionar el día, aparece una modal con un formulario a rellenar.
El formulario consta de tres inputs:

- el título o nombre de cita/evento
- una hora de inicio
- una hora final.

Al confirmar los datos, la ventana modal desaparece y los datos introducidos se almacenan en el LocalStorage

Finalmente se piden recogen esos datos, se suben a un JSON (donde se encuentran añadidos los ejemplos iniciales) y se renderizan en el calendario de eventos, en el día seleccionado.

##### Librerías

Durante el desarrollo de esta pequeña aplicación web se ha utilizado las siguientes tecnologías:

- Proptypes
- Librerías
  - React day picker
  - React modal
  - Moment js
  - Node Sass
  - Material-ui
  - Bootstrap

##### Estructura Interna

Componentes

- App (estados y gestión de eventos)
- Header (planteado para añadir mejora)
- Main
  - Calendar (calendiario inicial)
  - WindowModal (Modal)
    - Formulario
  - Schedule (calendario lista de eventos)
  - Footer

Services

- data.json (ejemplo de eventos añadidos)

Stylesheets

- app.scss (variables y estilos)
- calendar.scss
- form.scss (modal y formulario)
- schedule.scss
- footer

Images

---

#### `🧗‍♀️ Desafíos y conclusiones `

👩‍💻 Me he estrenado el en uso de librerías para trabajar con calendarios y he aprendido un montón.

He comprendido la importancia de analizar cual es la que mejor se adapta a mis conocimientos actuales. También la complejidad de averiguar cuál es la que presta servicios en relación a lograr los objetivos marcados y sobre todo, comprender su estructura para conseguir adapatarla a las necesidades del proyecto.

⚠️ Sorpresas

- Inicié el proyecto con la librería bigCalendar y decidí recalcular ruta (pues finalmente me resultó bastante compleja)
- La ventana modal no conseguía cerrarla (resultó ser un error de lógica)

---

#### `✨Futuras mejoras 🗓 `

Para mejorar la experiencia del usuario:

- 1 Botón de reset de datos / eliminar cita
- 2 Opción de cambiar cita
- 3 Botón de mejora de accesibilidad
- 4 Añadir otras opciones de calendarios locales

Aumentar garantía:

- 1 Validar formulario
- 2 Incluir un testing

Mejoras en el diseño

- 1 Aplicar un landing inicial en el componente Header.js
- 2 Añadir más animaciones o transiciones y aumetar el dinamismo

---

Gracias!!
