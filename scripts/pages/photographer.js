var lien = window.location.search
console.log(lien);
var url = new URLSearchParams(lien);
var quelestlid = url.get('id');
console.log(quelestlid)

///// Récupération des infos du photographe

async function getPhotographers() {
    return fetch(`../data/photographers.json`)
    .then(dataPhotographers => dataPhotographers.json())
    .then( dataPhotographersJson  => {
        console.log(dataPhotographersJson);
        var listPhotographer = dataPhotographersJson.photographers;
        console.log(listPhotographer);
        var photographHeader = listPhotographer.filter(
                          function(listPhotographer) {
                            return listPhotographer.id == quelestlid
                          }
                        )
        console.log(photographHeader)
        return photographHeader;
    })
}
console.log(getPhotographers())






async function displayData(photographers) {
    const photographerHeader = document.querySelector(".photograph-header");
    photographers.forEach((photographer) => {
        console.log(photographer)
        const photographerModel = photographerFactoryPage(photographer);
        console.log(photographerModel)
        const userCardDOM = photographerModel.getPhotographCardDOM();
        console.log(userCardDOM);
        console.log(photographerHeader);
        photographerHeader.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const listePhotographersInit = await getPhotographers();
    console.log(listePhotographersInit)
    console.log(listePhotographersInit[0].id)
    displayData(listePhotographersInit);
};



init();



///// Récupération de la liste des medias

async function getMediaPhotographers() {
    return fetch(`../data/photographers.json`)
    .then(dataPhotographers => dataPhotographers.json())
    .then( dataPhotographersJson  => {
        console.log(dataPhotographersJson);
        var listMedia = dataPhotographersJson.media;
        console.log(listMedia);
        var MediaPhotographer = listMedia.filter(
            function(listMedia) {
              return listMedia.photographerId == quelestlid
            }
          )
console.log(MediaPhotographer)
return MediaPhotographer;
    })
}

async function displayDataMedia(media) {
    const photographerList = document.getElementById("mediaList");
    media.forEach((media) => {
        console.log(media)
        const photographerMedia = MediaFactory(media);
        console.log(photographerMedia)
        const MediaCardDOM = photographerMedia.MediaCardDOM();
        console.log(MediaCardDOM);
        console.log(photographerList)
        photographerList.appendChild(MediaCardDOM);

    });
};

async function initMedia() {
    // Récupère les datas des photographes
    const listeMediaInit = await getMediaPhotographers();
    console.log(listeMediaInit)
    displayDataMedia(listeMediaInit);
};



initMedia();
