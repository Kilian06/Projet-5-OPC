// Import des différentes fonctions
import { focusopen } from '../utils/focus.js';
import {Lightbox} from '../utils/slider.js';
import {sortList} from '../utils/sort.js';
import {addLike} from '../utils/like.js';

// Récupération de l'ID du photographe passé en parametre
var lien = window.location.search
var url = new URLSearchParams(lien);
var quelEstlId = url.get('id');


// Récupération des infos du photographe en fonction de l'id passé en parametre
async function getPhotographers() {
    return fetch(`./data/photographers.json`)
    .then(dataPhotographers => dataPhotographers.json())
    .then( dataPhotographersJson  => {
        var listPhotographer = dataPhotographersJson.photographers;
        var photographHeader = listPhotographer.filter(
                          function(listPhotographer) {
                            return listPhotographer.id == quelEstlId
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

// Initialisation du header au chargement de la page
init();



//Récupération de la liste des medias du photograph
async function getMediaPhotographers() {
    return fetch(`./data/photographers.json`)
    .then(dataPhotographers => dataPhotographers.json())
    .then( dataPhotographersJson  => {
        var listMedia = dataPhotographersJson.media;
        var MediaPhotographer = listMedia.filter(
            function(listMedia) {
              return listMedia.photographerId == quelEstlId
            }
          )
return MediaPhotographer;
    })
}
// Affichage des medias
async function displayDataMedia(media) {
    const photographerList = document.getElementById("mediaList");
    media.forEach((media) => {
        const photographerMedia = MediaFactory(media);
        const MediaCardDOM = photographerMedia.MediaCardDOM();
        photographerList.appendChild(MediaCardDOM);

    });
};

async function initMedia() {
    // Récupère les media du photographe
    document.getElementById("mediaList").innerHTML = ""
    const listeMediaInit = await getMediaPhotographers();
    const listeMediaInitSort =  sortList(listeMediaInit);
    let likeCount = 0;
    for(let i = 0; i < listeMediaInit.length; i++) {
        likeCount += listeMediaInit[i].likes;
    }
    const likeBot = document.getElementById("likeBot")
    const heart = document.createElement('i');
    heart.setAttribute('class',"fa-solid fa-heart")
    likeBot.textContent = likeCount;
    displayDataMedia(listeMediaInit);
    Lightbox.init();
    focusopen();
    document.querySelectorAll(".vignette-likediv").forEach(heart => 
        heart.addEventListener("click",addLike)
      )

};

//ecoute du select pour le tri en cas de changement rechargement de la parti media
document.getElementById("mediasort").addEventListener('change', initMedia)


initMedia();


export {getMediaPhotographers}
export {initMedia}





