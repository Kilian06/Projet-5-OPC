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
        photographers.forEach((media) => {
            const photographerModel = photographerFactory(media);
            console.log(photographerModel)
            const userCardDOM = photographerModel.getUserCardDOM();
            console.log(userCardDOM)
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const listePhotographersInit = await getPhotographers();
        displayData(listePhotographersInit);
    };
    
    init();
    