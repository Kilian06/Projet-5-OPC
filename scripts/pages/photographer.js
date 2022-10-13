import {Lightbox} from '../utils/slider.js';


var lien = window.location.search
var url = new URLSearchParams(lien);
var quelestlid = url.get('id');

///// Récupération des infos du photographe

async function getPhotographers() {
    return fetch(`./data/photographers.json`)
    .then(dataPhotographers => dataPhotographers.json())
    .then( dataPhotographersJson  => {
        var listPhotographer = dataPhotographersJson.photographers;
        var photographHeader = listPhotographer.filter(
                          function(listPhotographer) {
                            return listPhotographer.id == quelestlid
                          }
                        )
        return photographHeader;
    })
}

async function displayData(photographers) {
    const photographerHeader = document.querySelector(".photograph-header");
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactoryPage(photographer);
        const userCardDOM = photographerModel.getPhotographCardDOM();
        photographerHeader.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const listePhotographersInit = await getPhotographers();
    displayData(listePhotographersInit);
};


init();



///// Récupération de la liste des medias

async function getMediaPhotographers() {
    return fetch(`./data/photographers.json`)
    .then(dataPhotographers => dataPhotographers.json())
    .then( dataPhotographersJson  => {
        var listMedia = dataPhotographersJson.media;
        var MediaPhotographer = listMedia.filter(
            function(listMedia) {
              return listMedia.photographerId == quelestlid
            }
          )
return MediaPhotographer;
    })
}

async function displayDataMedia(media) {
    const photographerList = document.getElementById("mediaList");
    media.forEach((media) => {
        const photographerMedia = MediaFactory(media);
        const MediaCardDOM = photographerMedia.MediaCardDOM();
        photographerList.appendChild(MediaCardDOM);

    });
};

async function initMedia() {
    // Récupère les datas des photographes
    const listeMediaInit = await getMediaPhotographers();
    console.log(listeMediaInit);
    let likeCount = 0;
    for(let i = 0; i < listeMediaInit.length; i++) {
        likeCount += listeMediaInit[i].likes;
    }
    console.log(likeCount);
    const likeBot = document.getElementById("likeBot")
    likeBot.textContent = likeCount;
    displayDataMedia(listeMediaInit);
    Lightbox.init();

};



initMedia();

