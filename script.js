document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("timeline-container");

    memories.forEach((memory) => {
        // Crear la tarjeta HTML
        const card = document.createElement("div");
        card.classList.add("memory-card");

        // Rellenar el contenido
        card.innerHTML = `
            <img src="${memory.image}" alt="${memory.title}" loading="lazy">
            <div class="date">${memory.date}</div>
            <h2 class="title">${memory.title}</h2>
            <p class="description">${memory.description}</p>
        `;

        // Añadir al contenedor
        container.appendChild(card);
    });
});
