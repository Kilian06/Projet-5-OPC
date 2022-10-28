// Function de récupération des données du JSON pour créer la liste des photographes

async function getPhotographers() {
        return fetch(`./data/photographers.json`)
        .then(dataPhotographers => dataPhotographers.json())
        .then( dataPhotographersJson  => {
            var listPhotographer = dataPhotographersJson.photographers;
            return listPhotographer;

        })
    }


// Function qui va permettre d'afficher les informations de chaque photographe sur la page
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        photographers.forEach((media) => {
            const photographerModel = photographerFactory(media);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const listePhotographersInit = await getPhotographers();
        // Appel de la fonction d'affichage et mise en forme
        displayData(listePhotographersInit);
    };
    
    // Initialisation au chargement de la page
    init();
    