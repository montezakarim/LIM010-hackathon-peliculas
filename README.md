
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
     - [PROTOTIPO DE BAJA FIDELIDAD - VERSIÓN MOBILE:](####PROTOTIPO-DE-BAJA-FIDELIDAD---VERSIÓN-MOBILE:)
     - [PROTOTIPO DE BAJA FIDELIDAD - VERSIÓN DESKTOP:](####PROTOTIPO-DE-BAJA-FIDELIDAD---VERSIÓN-DESKTOP:)
     - [PROTOTIPO DE ALTA FIDELIDAD - VERSIÓN MOBILE:](####PROTOTIPO-DE-ALTA-FIDELIDAD---VERSIÓN-MOBILE:)
    - [PROTOTIPO DE ALTA FIDELIDAD - VERSIÓN DESKTOP:](####PROTOTIPO-DE-ALTA-FIDELIDAD---VERSIÓN-DESKTOP:)
  - [5) User Testing:](###5-User-Testing:)

 ***

## Título del proyecto:
 NETFLIX TOP
 
## Resumen:
<b>Netflix Top</b> es una web dirigida a los más de 130 millones de suscriptores de Netflix, que les permite obtener información actualizada de las películas y series más recomendadas de entre todas las que se encuentran actualmente disponibles en la plataforma. Todo ello gracias a que cuenta con una interfaz amigable que además de mostrar el trailer e información de la películo o serie, las filtra por categorías cinematográficas y las ordena por años, con la finalidad de que nuestros usuarios tengan la libertad de ver la lista de recomendaciones según el género de su agrado y año de publicación.


## - Objetivos:
El objetivo de Netflix Top es recomendarle a sus usuarios las mejores y más recomendadas películas o series que puedan encontrar en la plataforma de Netflix, para asegurarles una buena experiencia.

## Investigación UX:
Para el desarrollo de la investigación UX, seguimos las 5 fases del proceso de diseño de experiencia de usuario:

### 1) Descubrimiento e investigación (Research):
#### Investigación Contextual:
Nuestros usuarios son suscriptores o futuros suscriptores de la plataforma de streaming, Netflix. 
Se observa que los usuarios son personas de género y edad indistinta, con conocimiento intermedio del uso de tecnologías y aplicaciones móviles. Estos usuarios se caracterizan principalmente por ser amantes de las películas y series de diversos géneros, quienes disfrutan verlas en casa o desde un dispositivo móvil. 

✓ En éste punto se realizaron entrevistas a 3 usuarios de diferentes edades. (Archivo digital de entrevista realizada: https://drive.google.com/drive/folders/11ztplsycDBON0fzXqdGahNXjN_wcUOI_?usp=sharing ). De éstas entrevistas se obtuvo una idea más clara y concisa del perfil y necesidades de nuestros usuarios.

  
### 2) Síntesis y definición:
En la etapa de Investigación Contextual se reconció de forma clara el perfil común de un usuario, además de sus necesidades. En este punto se usará los datos coleccionados para idear el desarrollo de la web.
#### Entendimiento de necesidades y requerimientos (Historias de Usuario):
##### - Historia de usuario 1 
Como usuario quiero poder visualizar una lista de todas las películas y series más recomendadas de Netflix.
##### - Historia de usuario 2
Como usuario quiero poder visualizar una lista de películas y otra de series para reconocerlas mejor y saber cómo buscarlas en la plataforma de Netflix.
##### -  Historia de usuario 3
Como usuaria quiero poder filtrar las películas y series según su género cinematográfico para elegir una según el de mi preferencia.
##### - Historia de usuario 4
Como usuario quiero poder buscar una película o serie por su título para saber si ésta es recomendada o no.
##### - Historia de usuario 5
Como usuario quiero poder elegir una película o serie del listado para poder visualizar mayores detalles de la misma.
##### - Historia de usuario 6
Como usuario quiero poder ordenar las películas o series por año de publicación para saber cuáles son las más modernas o antigüas de la plataforma.


### 3) Ideación:
<!-- En este punto se sabe que el foco es la cantidad en vez de la calidad, por lo que se idearon y maquetaron varias posibles propuestas para cada funcionalidad a implementar. A continuación se mostrarán principalmente los bocetos de aquellas pantallas de las cuales recibimos feedback que nos indicaba mejorar o cambiar la interfaz.

##### - Bocetos de ideación para las funcionalidad:

- <b>PANTALLA DE INICIO:</b>
La primera pantalla maquetada fue la de inicio, puesto que la de login ya estaba preestablecida para el proyecto. 
En ésta pantalla se consideró un espacio en la parte izquierda para mostrar la imagen y datos del usuario. Además de un menú de fijo que mostrara las opciones entre las que podría elegir el usuario.

  -----imagen

   ✓ <b>Luego de feedback:</b> Reconocimos que la interfaz ideada no era muy amigable y entendible para el usuario, que no quedaba muy claro lo que mostraría cada una de las opciones en el menú. Que el menú estático ocupaba mucho espacio.


- <b>PANTALLA DE INICIO - LUEGO DEL 1ER FEEDBACK:</b>
Para ésta edición se planteo incluir un menpu de tipo hamburguesa que permitiese la selección de cada una de las opción de navegación, sin ocupar demasiado espacio dentro de la pantalla.

  -----imagen

  ✓ <b>Luego de feedback:</b> Se notó que el menú de tipo hamburguesa tampoco era el adecuado debido a que no permitía mostrar visiblemente el acceso entre una y otra opción, inclusibe en algunas oportunidades algunos usuarios no notaban el logo del menú y no les era posible ir hacia otra opción además hacía falta implementar un header y un footer para darle estatus y seriedad a la interfaz. Además se nos sugirió que implementásemos un header y footer fijo, con la finalidad de darle estatus e información a nuestra interfaz.


- <b>PANTALLA DE INICIO - LUEGO DEL 2DO FEEDBACK:</b>
En ésta pantalla se cambió el menú de tipo hamburguesa por uno de navegación que se mantendría fijo a modo de header en toda la experiencia de uso, excepto la pantalla de login y de bloqueo. Además se cumplió con implementar un footer.

   -----imagen
  ✓ <b>Luego de feedback:</b>
  En éste feedback rescatamos la idea de que darle un espacio con información de usuario era innecesaria, puesto que lo más importante para nuestros usuarios era tener acceso directo, ordenado y fluido a la indormación de sus pókemon mas que a la suya.

- <b>PANTALLA DE BLOQUEO:</b>
  Para la pantalla de bloqueo inicialmente decidimos colocar una imágen de signo de admiración en el centro, añadido al mensaje de indicación para el usuario, luego de haber excesidido el número de posibilidades de intento de login.

  -----imagen

  ✓ <b>Luego de feedback:</b>
  El feedback para ésta pantalla nos indicaba que la imagen en el centro era demasiado invasiva y algo desagradable porque alertaba de forma 'poco amigable' que no podía seguir. -->


### 4) Prototipado:
En éste punto procedimos a unir insights adquiridas en el proceso de Ideación y los feedbacks para lograr obtener una interfaz adecuada y y amigable para el tipo de usuario.

#### - PROTOTIPO DE BAJA FIDELIDAD - VERSIÓN MOBILE:
 
  ##### . Pantalla de Inicio:

  ##### . Pantalla de opción Género:

  ##### . Pantalla de opción Filtrar:

  ##### . Pantalla de detalle de película o serie:


#### - PROTOTIPO DE BAJA FIDELIDAD - VERSIÓN DESKTOP:
 ##### . Pantalla de Inicio:

  ##### . Pantalla de opción Género:

  ##### . Pantalla de opción Filtrar:

  ##### . Pantalla de detalle de película o serie:

### - PROTOTIPO DE ALTA FIDELIDAD - VERSIÓN MOBILE:
* Herramienta utilizada: Figma 
   
   Link del prototipo en figma: https://www.figma.com/file/9yFifZHZGroZAHjDzAdMRu/Data-lovers-Copy?node-id=1%3A2
##### . Pantalla de Inicio:

  ##### . Pantalla de opción Género:

  ##### . Pantalla de opción Filtrar:

  ##### . Pantalla de detalle de película o serie:


#### - PROTOTIPO DE ALTA FIDELIDAD - VERSIÓN DESKTOP:
##### . Pantalla de Inicio:

  ##### . Pantalla de opción Género:

  ##### . Pantalla de opción Filtrar:

  ##### . Pantalla de detalle de película o serie:


<!-- ### - Resumen de feedback para el diseño de Alta Fidelidad:
Luego de los feedbacks recibidos decidimos y como se observa en el prototipado final, se implementó una pantalla , llamada "Pantalla de Inicio" en la que además de darle la bienvenida a nuestros usuarios, les daríamos algunas indicaciones de la utilidad de la wed y las funciones que en ella encontrará.

<b>El feedback para algunas de nuestras pantallas fue el siguiente:

Pantalla pokedex:</b>
- Agregar una imagen al lado de la palabra incubadora en el navegador.
- Eliminar el usuario del menú superior, puesto que ocupaba espacio innecesario y mostraba información irrelevante.
- Cambiar texto de información por pokemones atrapados y pokemones no atrapados.
- Cambiar el orden para mostrar pokemones por imagen,nombre y número.

<b>Footer:</b>
- Ponerle un background que permitiera sistinguir el footer de los demás elementos de la interfaz.

<b>Pantalla de bloqueo:</b>
- Decidimos reemplazar la imagen del triàngulo de admiración por un fondo de pantalla  acorde al tema pokemon y conservamos el texto.

En un siguiente feedback del prototipo en figma nos sugirieron cambiar el color de fondo del contenedor de cada pokemon  para que se visualice mejor. Por lo que decidimos cambiarlo de color blanco con opacidad a negro con opacidad. -->


### 5) User Testing:
Para ésta fase del proceso de Desarrollo del diseño, se realizaron pruebas de usabilidad a usuarios finales. A los cuales se les asignó una "Lista de tareas" que debían llevar a cabo en la interfaz de la web, sin que se le diera mayores indicaciones de uso. Además se les realizó una lista de preguntas con la finalidad de obtener feedback y asegurarnos que nuestra interfaz cumplía con las reglas de usabilidad necesarias según nuestro tipo de usuario.

  ✓ De las pruebas de usabilidad realizadas a los usuarios se obtuvieron, a modo de archivo digitales, grabaciones de audio, los cuales se pueden ontener en el siguiente link: https://drive.google.com/drive/folders/1WS7TPIvu-c8ZdSIeFVWUToKAtMpyKHQK?usp=sharing )

De acuerdo al Testing con los usuarios en mensión, nuestra web cumple con los estandares de usabilidad y es de architectura amigable, porque navegar en la interfaz es sencillo y preciso, además de que muestra la data que el usuario desea obtener, mas no información irrelevante.
Otra de las finalidad del testing con usuario, fue comprobar que si se habían priorizado las funcionalidades requeridas, lo cual, según feedback, fue favorable.

