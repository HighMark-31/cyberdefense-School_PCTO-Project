// Testi pagina disclaimer.html per renderlo dinamico , a solo scopo di dimostrare le competenze in JavaScript
const pageData = {
    title: "Disclaimer – CyberDefense",
    header: {
        logoText: "CyberDefense",
        navLinks: [
            { text: "Home", url: "index.html", active: false },
            { text: "Perché è importante", url: "importanza.html", active: true },
            { text: "Inizia a proteggerti oggi", url: "proteggersi.html", active: false }
        ]
    },
    main: {
        title: "Disclaimer",
        disclaimers: [
            {
                heading: "ATTENZIONE",
                paragraphs: [
                    "Questo sito è stato realizzato a scopo scolastico e non ha alcun riferimento allo stato attuale della sicurezza informatica.",
                    "CyberDefenders ™ non è assolutamente collegata con questo nè tantomeno i contenuti che sono stati recuperati da articoli su internet e conoscenze personali.",
                    "Si prega di utilizzare le informazioni a proprio rischio e di consultare esperti di sicurezza informatica per consigli professionali.",
                    "Gli obiettivi inseriti nel footer e il nome sono di pura FANTASIA.",
                    "Disclaimer by Marco N. 3DI Informatica 2024/2025 - Istituto Istruzione Superiore \"G. Vallauri\""
                ]
            },
            {
                heading: "NOTE",
                paragraphs: [
                    "Sito realizzato in HTML , CSS , JS (JS usato unicamente in questa pagina per dimostrare le competenze nella creazione di siti dinamici).",
                    "Il sito è stato realizato per i PCTO 2024/2025 della scuola Istituto Istruzione Superiore \"G. Vallauri\".",
                    "Disclaimer by Marco N. 3DI Informatica 2024/2025 - Istituto Istruzione Superiore \"G. Vallauri\""
                ]
            }
        ]
    },
    footer: {
        intro: "Il nostro obiettivo è educare e informare sulle migliori pratiche di cybersecurity, aiutandoti a navigare in sicurezza nel mondo digitale.",
        pages: [
            { text: "Home", url: "index.html" },
            { text: "Perché la Cybersecurity è importante", url: "importanza.html" },
            { text: "Inizia a proteggerti oggi", url: "proteggersi.html" }
        ],
        credit: 'Realizzato da <a href="https://highmark.it " target="_blank">Marco N.</a> per PCTO Vallauri 2024/2025 - Tutti i diritti riservati'
    }
};
// al caricamento della pagina aggiungo tutti gli elementi e testi
function loadPage() {
    const body = document.getElementById("page-body");

    const header = document.createElement("header");
    header.innerHTML = `
        <div class="header-container">
            <a href="index.html" class="logo">
                <span class="logo-text">${pageData.header.logoText}</span>
            </a>
            <nav>
                <ul id="navMenu">
                    ${pageData.header.navLinks.map(link => `
                        <li><a href="${link.url}" class="nav-protection${link.active ? ' active' : ''}">${link.text}</a></li>
                    `).join('')}
                </ul>
            </nav>
        </div>
    `;
    body.appendChild(header);

    const main = document.createElement("main");
    main.innerHTML = `
        <section class="disclaimers">
            <div class="disclaimer-container">
                <div class="section-title"><h2>${pageData.main.title}</h2></div>
                ${pageData.main.disclaimers.map(d => `
                    <div class="disclaimerX fade-in">
                        <div class="disclaimer-content">
                            <h3>${d.heading}</h3>
                            ${d.paragraphs.map(p => `<p>${p}</p>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
    body.appendChild(main);


    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-col">
                    <h4>${pageData.footer.intro.split('.')[0]}</h4>
                    <p>${pageData.footer.intro}</p>
                </div>
                <div class="footer-col">
                    <h4>Pagine</h4>
                    <ul>
                        ${pageData.footer.pages.map(page => `
                            <li><a href="${page.url}">${page.text}</a></li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            <div class="footer-credit">
                <p>${pageData.footer.credit}</p>
            </div>
        </div>
    `;
    body.appendChild(footer);
}

document.addEventListener("DOMContentLoaded", loadPage);