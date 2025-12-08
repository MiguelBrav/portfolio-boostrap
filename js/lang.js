document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("languageSelect");
    const storedLang = localStorage.getItem("lang") || "en";
    select.value = storedLang;
    setLanguage(storedLang);

    select.addEventListener("change", (e) => {
        const lang = e.target.value;
        localStorage.setItem("lang", lang);
        setLanguage(lang);
    });
});

function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(el => {
        const key = el.getAttribute("data-translate");
        const translation = translations[lang][key];
        if (translation) el.innerHTML  = translation;
    });

    for (let i = 1; i <= 3; i++) {
        const titleEl = document.querySelector(`#portfolioModal${i} .portfolio-modal-title`);
        const textEl = document.querySelector(`#portfolioModal${i} .mb-4`);
        const githubBtn = document.querySelector(`#portfolioModal${i} .btn-github`);
        const demoBtn = document.querySelector(`#portfolioModal${i} .btn-demo`);

        if(titleEl) titleEl.textContent = translations[lang][`portfolio${i}_title`];
        if(textEl) textEl.textContent = translations[lang][`portfolio${i}_text`];
        if(githubBtn) githubBtn.onclick = () => window.open(translations[lang][`portfolio${i}_github`], '_blank');
        if(demoBtn) demoBtn.onclick = () => window.open(translations[lang][`portfolio${i}_demo`], '_blank');
    }
}


const translations = {
    en: {
        navbar_home: "Miguel Segura",
        navbar_portfolio: "Portfolio",
        navbar_about: "About",
        navbar_contact: "Contact",
        about_heading: "About",
        navbar_experience: "Experience",
        about_paragraph_1: "Skilled in designing and implementing RESTful APIs, GraphQL endpoints, and gRPC services to build scalable and maintainable solutions.",
        about_paragraph_2: "On the frontend side, I work with Razor Pages, Blazor, and core web technologies like HTML, CSS, and JavaScript to create web applications.",
        contact_heading: "Contact Me",
        aboutme: "Backend Developer<br>Computer Systems Engineer with 3 and a half years of experience in backend development using .NET (C#).",
        portfolio1_title: "To-Do List API",
        portfolio1_text: "This ToDo List API allows users to manage their tasks. It is built with .NET 6 and includes features for user authorization, adding tasks, marking tasks as completed, and deleting tasks,etc.",
        portfolio1_demo: "https://todolist.application-service.work/swagger/index.html",
        portfolio1_github: "https://github.com/MiguelBrav/ToDoList",
        portfolio2_title: "Grpc Server API",
        portfolio2_text: "gRPC Server to query Yu-Gi-Oh! information, and a Web API client that consumes the gRPC services. Both are built with .NET 8. The client implements in-memory caching to store recent query results, reducing latency and preventing repeated requests to the gRPC server.",
        portfolio2_demo: "https://ygoclient.application-service.work/swagger/index.html",
        portfolio2_github: "https://github.com/MiguelBrav/YGOWiki",
        portfolio3_title: "URL Shortener API",
        portfolio3_text: "A complete URL shortening and analytics REST API built with .NET 8 Minimal APIs. It  allows users to create, manage, and analyze shortened URLs. It supports authentication, usage tracking, favorites, reports.",
        portfolio3_demo: "https://shortys.application-service.work/swagger/index.html",
        portfolio3_github: "https://github.com/MiguelBrav/shorter-url-api",
        form_close: "<i class=\"fas fa-xmark fa-fw\"></i> Close Window",
        form_demo : "<i class=\"fas fa-external-link-alt\"></i> Live Demo",
        about_download_en: "Download CV (EN)",
        about_download_es: "Download CV (ES)",
        about_github: "GitHub Profile",
        experience_title: "Experience",
        experience_frontend_title: "Frontend Development",
        experience_backend_title: "Backend Development",
        experience_html: "HTML",
        experience_css: "CSS",
        experience_javascript: "JavaScript",
        experience_bootstrap: "Bootstrap",
        experience_razor: "Razor Pages",
        experience_tsql: "T-SQL",
        experience_dotnet: ".Net",
        experience_csharp: "C#",
        experience_git: "Git",
        experience_graphql: "GraphQL",
        experience_grpc: "gRPC",
        experience_basic: "Basic",
        experience_intermediate: "Intermediate",
        experience_experienced: "Experienced"
    },
    es: {
        navbar_home: "Miguel Segura",
        navbar_portfolio: "Portafolio",
        navbar_about: "Acerca de",
        navbar_contact: "Contacto",
        about_heading: "Acerca de",
        navbar_experience: "Experiencia",
        about_paragraph_1: "Experto en diseñar e implementar APIs RESTful, endpoints GraphQL y servicios gRPC para construir soluciones escalables y mantenibles.",
        about_paragraph_2: "En el frontend, trabajo con Razor Pages, Blazor y tecnologías web básicas como HTML, CSS y JavaScript para crear aplicaciones web.",
        contact_heading: "Contáctame",
        aboutme: "Desarrollador Backend<br>Ingeniero en Sistemas Computacionales con 3 años y medio de experiencia en desarrollo backend usando .NET (C#).",
        portfolio1_title: "API To-Do",
        portfolio1_text: "Esta API ToDo permite a los usuarios gestionar sus tareas. Está construida con .NET 6 e incluye funciones para autorización de usuarios, agregar tareas, marcar tareas como completadas y eliminar tareas, entre otras.",
        portfolio1_demo: "https://todolist.application-service.work/swagger/index.html",
        portfolio1_github: "https://github.com/MiguelBrav/ToDoList",
        portfolio2_title: "API Servidor gRPC",
        portfolio2_text: "Servidor gRPC usando .NET para consultar información de Yu-Gi-Oh! y cliente Web API para consumir los servicios gRPC. Ambos construidos con .NET 8. El cliente implementa cache en memoria para almacenar resultados de consultas recientes, disminuyendo la latencia y evitando solicitudes repetidas al servidor gRPC.",
        portfolio2_demo: "https://ygoclient.application-service.work/swagger/index.html",
        portfolio2_github: "https://github.com/MiguelBrav/YGOWiki",
        portfolio3_title: "API Acortador de URLs",
        portfolio3_text: "API completa de acortamiento de URLs y análisis construida con .NET 8 Minimal APIs. Permite a los usuarios crear, gestionar y analizar URLs acortadas. Soporta autenticación, seguimiento de uso, favoritos y reportes.",
        portfolio3_demo: "https://shortys.application-service.work/swagger/index.html",
        portfolio3_github: "https://github.com/MiguelBrav/shorter-url-api",
        form_close: "<i class=\"fas fa-xmark fa-fw\"></i> Cerrar Ventana",
        form_demo : "<i class=\"fas fa-external-link-alt\"></i> Demo en Vivo",
        about_download_en: "Descargar CV (EN)",
        about_download_es: "Descargar CV (ES)",
        about_github: "Perfil de GitHub",
        experience_title: "Experiencia",
        experience_frontend_title: "Desarrollo Frontend",
        experience_backend_title: "Desarrollo Backend",
        experience_html: "HTML",
        experience_css: "CSS",
        experience_javascript: "JavaScript",
        experience_bootstrap: "Bootstrap",
        experience_razor: "Razor Pages",
        experience_tsql: "T-SQL",
        experience_dotnet: ".Net",
        experience_csharp: "C#",
        experience_git: "Git",
        experience_graphql: "GraphQL",
        experience_grpc: "gRPC",
        experience_basic: "Básico",
        experience_intermediate: "Intermedio",
        experience_experienced: "Avanzado"
    }
};
