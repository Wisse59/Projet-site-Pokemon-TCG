document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = 'lightgrey';

    const automatisationCartes = [ //Le JSON est intégré direcement dans le javascript pour resoudre le pblm CORS
        {
            "numero": 1,
            "nom": "Bulbizarre",
            "image": "../index/pictures/bulbi_1.png",
            "couleur": "🟣",
            "lien": "../pages%20pokemon%201-4/bulbasaur.html"
        },
        {
            "numero": 2,
            "nom": "Herbizarre",
            "image": "../index/pictures/herbi_1.png",
            "couleur": "🟣",
            "lien": "../pages%20pokemon%201-4/ivysaur.html"
        },
        {
            "numero": 3,
            "nom": "Florizarre",
            "image": "../index/pictures/flori_1.png",
            "couleur": "🟣",
            "lien": "../pages%20pokemon%201-4/venusaur.html"
        },
        {
            "numero": 4,
            "nom": "Florizarre",
            "image": "../index/pictures/flori_2.png",
            "couleur": "🟣",
            "lien": "../pages%20pokemon%201-4/venusaur.html"
        },
        {
            "numero": 5,
            "nom": "Chenipan",
            "image": "../index/pictures/cheni_1.png",
            "couleur": "🟡",
            "lien": "#"
        },
        {
            "numero": 6,
            "nom": "Chrysacier",
            "image": "../index/pictures/chrys_1.png",
            "couleur": "🟡",
            "lien": "#"
        },
        {
            "numero": 7,
            "nom": "Papilusion",
            "image": "../index/pictures/papil_1.png",
            "couleur": "🟡",
            "lien": "#"
        },
        {
            "numero": 8,
            "nom": "Aspicot",
            "image": "../index/pictures/aspic_1.png",
            "couleur": "🟣",
            "lien": "#"
        },
        {
            "numero": 9,
            "nom": "Coconfort",
            "image": "../index/pictures/cocon_1.png",
            "couleur": "🟣",
            "lien": "#"
        },
        {
            "numero": 10,
            "nom": "Dardagnan",
            "image": "../index/pictures/darda_1.png",
            "couleur": "🟣",
            "lien": "#"
        },
        {
            "numero": 11,
            "nom": "Mystherbe",
            "image": "../index/pictures/mysth_1.png",
            "couleur": "🔴",
            "lien": "#"
        },
        {
            "numero": 12,
            "nom": "Ortide",
            "image": "../index/pictures/ortid_1.png",
            "couleur": "🔴",
            "lien": "#"
        },
        {
            "numero": 13,
            "nom": "Rafflesia",
            "image": "../index/pictures/raffl_1.png",
            "couleur": "🔴",
            "lien": "#"
        },
        {
            "numero": 14,
            "nom": "Paras",
            "image": "../index/pictures/paras_1.png",
            "couleur": "🟡",
            "lien": "#"
        },
        {
            "numero": 15,
            "nom": "Parasecte",
            "image": "../index/pictures/paras2_1.png",
            "couleur": "🟡",
            "lien": "#"
        }
    ];

    let contenu = "";

    for (let i = 0; i < 3; i++) {
        contenu += `<li>`;
        for (let j = 0 + (i*5); j < 5 + (i*5); j++) {
            const carte = automatisationCartes[j];
            contenu += `
                <div class="carte">
                    <a href=${carte.lien}>
                        <img src=${carte.image} class="rounded mx-auto d-block img-fluid" alt="${carte.nom} image ${j + (i*5) + 1}" height="200" />
                    </a>
                    <p>Carte n°${carte.numero} : ${carte.nom} ${carte.couleur}</p>
                </div>
            `;
        }
        contenu += `</li>`;
    }
    
    document.getElementById("boucleCartes").innerHTML = contenu;
});