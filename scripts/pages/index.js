 async function getPhotographers() {
        return fetch(`../data/photographers.json`)
        .then(dataPhotographers => dataPhotographers.json())
        .then( dataPhotographersJson  => {
            console.log(dataPhotographersJson);
            var listPhotographer = dataPhotographersJson.photographers;
            console.log(listPhotographer);
            return listPhotographer;

        })
    }
console.log(getPhotographers())






    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const listePhotographersInit = await getPhotographers();
        displayData(listePhotographersInit);
    };
    
    init();
    