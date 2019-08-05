# Hackathon de Películas - Netflix Top

## Índice

- [Título del proyecto:](##Título-del-proyecto:)
- [Resumen:](##Resumen:)
- [Objetivos:](##Objetivos:)
- [Investigación UX:](##Investigación-UX:)
  - [1) Descubrimiento e investigación (Research):](###1-Descubrimiento-e-investigación-(Research):)
  - [2) Síntesis y definición:](###2-Síntesis-y-definición:)
  - [3) Ideación:](###3-Ideación:)
  - [4) Prototipado:](###4-Prototipado:)
     - [PROTOTIPO DE BAJA FIDELIDAD:](####PROTOTIPO-DE-BAJA-FIDELIDAD---VERSIÓN-DESKTOP:)
    - [PROTOTIPO DE ALTA FIDELIDAD:](####PROTOTIPO-DE-ALTA-FIDELIDAD---VERSIÓN-DESKTOP:)
  - [5) User Testing:](###5-User-Testing:)

 *

## Título del proyecto:
 NETFLIX TOP
 
## Resumen:
<b>Netflix Top</b> es una web dirigida a los más de 130 millones de suscriptores de Netflix, que les permite obtener información actualizada de las películas y series más recomendadas de entre todas las que se encuentran actualmente disponibles en la plataforma. Todo ello gracias a que cuenta con una interfaz amigable que además de mostrar el trailer e información de la películo o serie, las filtra por categorías cinematograficas y las ordena por años, con la finalidad de que nuestros usuarios tengan la libertad de ver la lista de recomendaciones según el género de su agrado y año de publicación.


## - Objetivos:
El objetivo de Netflix Top es recomendarle a sus usuarios las mejores y más recomendadas películas o series que puedan encontrar en la plataforma de Netflix, para asegurarles una buena experiencia.

## Investigación UX:
Para el desarrollo de la investigación UX, seguimos las 5 fases del proceso de diseño de experiencia de usuario:

### 1) Descubrimiento e investigación (Research):
#### Investigación Contextual:
Nuestros usuarios son suscriptores o futuros suscriptores de la plataforma de streaming, Netflix. 
Se observa que los usuarios son personas de género y edad indistinta, con conocimiento intermedio del uso de tecnologías y aplicaciones móviles. Estos usuarios se caracterizan principalmente por ser amantes de las películas y series de diversos géneros, quienes disfrutan verlas en casa o desde un dispositivo móvil. 

✓ En éste punto se realizó una lista de preguntas a diferentes usuarios de Netflix, la cual se visualiza en el siguiente link: https://forms.gle/FU8teV1WA1pNpoyM9. Con estas respuesta se obtuvo una idea más clara y concisa del perfil y necesidades de nuestros usuarios. 
Además  contamos con una carpeta en Google Drive, la cual contiene todo el material digital usado y recopilado en nuestro estudio UX: https://drive.google.com/drive/folders/1zN5lvLH3QYLjwXdcNHXBHbR5GU7LyYHD?usp=sharing .

### 2) Síntesis y definición:
En la etapa de Investigación Contextual se reconoció de forma clara el perfil común de un usuario, además de sus necesidades. En este punto se usará los datos coleccionados para idear el desarrollo de la web.
#### Entendimiento de necesidades y requerimientos (Historias de Usuario):
##### - Historia de usuario 1 
Como usuario quiero poder visualizar una lista de todas las películas y series más recomendadas de Netflix para navegar y ver cuáles son en general.
##### - Historia de usuario 2
Como usuario quiero poder visualizar una lista de películas y otra de series para diferenciarlas por tipo y saber cómo buscarlas en la plataforma de Netflix.
##### -  Historia de usuario 3
Como usuaria quiero poder filtrar las películas por género cinematográfico para elegir una según el género de mi preferencia.
##### - Historia de usuario 4
Como usuario quiero poder buscar una película o serie por su título para saber si ésta es recomendada o no.
##### - Historia de usuario 5
Como usuario quiero poder ordenar las películas o series por año de estreno para saber cuáles son las más modernas o antiguas de la plataforma.


### 3) Ideación:
En este punto se sabe que el foco es la cantidad en vez de la calidad, por lo que se idearon y maquetaron varias posibles propuestas para cada funcionalidad a implementar. A continuación se mostrarán principalmente los bocetos de aquellas pantallas de las cuales recibimos feedback que nos indicaba mejorar o cambiar la interfaz.

     ✓ Para el desarrollo de la interfaz de nuestra web se implementó una guía de estilos con tipografía y gama de colores que decidimos seguir, la cual se encuentra en el siguiente link: https://docs.google.com/document/d/1uCBBsHPkYyZcu7woXzEVUKG5jdT985xZVxHwRg7SNhM/edit?usp=sharing

##### - Bocetos de ideación para las funcionalidad:

- <b>PANTALLA PRINCIPAL:</b>
En ésta pantalla se consideró tener dentro del menú de navegación una opción de "tipo" que permita desplegar las subopciones: películas, series y episodios, además de las opciones: Cartelera, Género y Filtro.  

  ![WhatsApp Image 2019-08-02 at 9 46 42 AM](https://user-images.githubusercontent.com/51203238/62378627-d935e880-b50a-11e9-8693-e951649407d7.jpeg)

   ✓ <b>Luego del feedback:</b> Reconocimos que la interfaz ideada no era muy amigable y entendible para el usuario, puesto que no quedaba muy claro lo que mostraría cada una de las opciones en el menú.


- <b>PANTALLA PRINCIPAL - LUEGO DEL 1ER FEEDBACK:</b>
Para ésta edición se decidió quitar la opción "Tipo" del navegador y mostrar cada una de las subopciones, que estabas contenidas en él, como opciones parte del navegador.

  ![WhatsApp Image 2019-08-02 at 9 46 43 AM](https://user-images.githubusercontent.com/51203238/62378682-f79be400-b50a-11e9-8b2e-03ae7e3977fe.jpeg)

  ✓ <b>Luego de feedback:</b> Se nos indicó que la opción "Filtro" no debería llamarse así, porque era un ordenamiento de años, por lo tanto se  decidió cambiarla por "Ordenar". Además se decidió cambiar el place holder del input de búsqueda para evitar redundancia entre el texto de éste y el del botón. 


- <b>PANTALLA PRINCIPAL - LUEGO DEL 2DO FEEDBACK:</b>
En ésta pantalla se realizaron los cambios sugeridos en el feedback anterior y se agregó un carrusel de imágenes que mostraran las mejores series y películas. Éste carrusel se oculta cuando el usuario se desplaza hacia abajo para que se le permite mejor visión de la lista completa de contenido.

   ![WhatsApp Image 2019-08-02 at 9 46 43 AM (1)](https://user-images.githubusercontent.com/51203238/62378706-05ea0000-b50b-11e9-971a-506358d0eb0b.jpeg)


### 4) Prototipado:
En éste punto procedimos a unir insights adquiridas en el proceso de Ideación y los feedbacks para lograr obtener una interfaz adecuada y y amigable para el tipo de usuario.

#### - PROTOTIPO DE BAJA FIDELIDAD:
##### . Pantalla Principal:

![WhatsApp Image 2019-08-02 at 9 46 43 AM (1)](https://user-images.githubusercontent.com/51203238/62378706-05ea0000-b50b-11e9-971a-506358d0eb0b.jpeg)

   ![WhatsApp Image 2019-08-02 at 9 46 44 AM](https://user-images.githubusercontent.com/51203238/62378724-14d0b280-b50b-11e9-90b8-18c6b7b05493.jpeg)

##### . Pantalla de opción Género:

![WhatsApp Image 2019-08-02 at 9 56 29 AM](https://user-images.githubusercontent.com/51203238/62379102-e2738500-b50b-11e9-9f99-1ef3bd614816.jpeg)

##### . Pantalla de opción Ordenar:

![WhatsApp Image 2019-08-02 at 10 07 31 AM](https://user-images.githubusercontent.com/51203238/62379864-6ed27780-b50d-11e9-9c7a-4d77d367e36c.jpeg)


#### - PROTOTIPO DE ALTA FIDELIDAD:
* Herramienta utilizada: Figma 
   
   Link del prototipo en figma: https://www.figma.com/file/q37wwsRGwu6BDcdlzg9Be2/Untitled?node-id=0%3A1


##### . Pantalla Principal:

![pantalla 1](https://user-images.githubusercontent.com/51203238/62377907-4a749c00-b509-11e9-881d-3b35a8da38aa.PNG)

##### . Pantalla de opción Género:

![pantalla 2](https://user-images.githubusercontent.com/51203238/62377960-5e200280-b509-11e9-9bca-540ecc2ac85a.PNG)

##### . Pantalla de opción Ordenar:

![pantalla 3](https://user-images.githubusercontent.com/51203238/62377992-6e37e200-b509-11e9-8b6b-5416952c73c7.PNG)

En feedback del prototipo en figma nos sugirieron cambiar el color de fondo del contenedor general para lograr un mejor contraste entre los contenedores que cada película o serie y el fondo. Por lo que decidimos cambiarlo de color blanco  a negro.

#### . Pantalla de Inicio - Antes de Feedback:

![pantalla antes de feedback](https://user-images.githubusercontent.com/51203238/62378110-b22ae700-b509-11e9-9396-b58d1baba7bf.PNG)


### 5) User Testing:
Para ésta fase del proceso de Desarrollo del diseño, se realizaron pruebas de usabilidad a usuarios finales. A los cuales se les asignó una "Lista de tareas" que debían llevar a cabo en la interfaz de la web, sin que se le diera mayores indicaciones de uso. Además se les realizó una lista de preguntas con la finalidad de obtener feedback y asegurarnos que nuestra interfaz cumplía con las reglas de usabilidad necesarias según nuestro tipo de usuario.

  ✓ De las pruebas de usabilidad realizadas a los usuarios se obtuvieron, a modo de archivo digitales, grabaciones de audio, los cuales se pueden obtener en el siguiente link: https://drive.google.com/drive/folders/1rb4cAzrv6jpGqywC7Rd4nuobOJnD6_9e?usp=sharing )

De acuerdo al Testing con los usuarios en mención, nuestra web cumple con los estándares de usabilidad y es de architectura amigable, porque navegar en la interfaz es sencillo y preciso, además de que muestra la data que el usuario desea obtener, mas no información irrelevante.
Otra de las finalidad del testing con usuario, fue comprobar que si se habían priorizado las funcionalidades requeridas, lo cual, según feedback, fue favorable.

_