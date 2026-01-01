/* 
  COMO AGREGAR UN RECUERDO:
  1. Sube tu foto a la carpeta 'img' del repositorio.
  2. Copia y pega un bloque entre llaves { ... },
  3. Cambia la fecha, titulo, descripción y el nombre de la imagen.
*/

const memories = [
    {
        date: "14 de Febrero, 2023",
        title: "Nuestra Primera Cita",
        description: "Recuerdo que estaba muy nervioso, pero cuando sonreíste todo se iluminó. Fuimos por ese café helado que tanto te gusta.",
        image: "img/ima1.JPG" // Asegúrate de que el nombre coincida con tu archivo
    },
    {
        date: "25 de Diciembre, 2023",
        title: "Primera Navidad Juntos",
        description: "Ver películas navideñas y cocinar esa cena (aunque se nos quemó un poco) fue lo mejor del año.",
        image: "img/ima2.jpeg"
    },
    // Copia desde aquí para agregar otro...
    {
        date: "AÑO NUEVO 2024",
        title: "Viaje a la Playa",
        description: "El atardecer fue increíble, pero verte feliz fue aún mejor.",
        image: "https://images.unsplash.com/photo-1516131206008-dd041a9764fd?w=800" // Puedes usar links de internet también
    }
    // ... hasta aquí
];
