
// var lien = window.location.search
// console.log(lien);
// var url = new URLSearchParams(lien);
// var quelestlid = url.get('id');
// console.log(quelestlid)

// window.onload = async function getMediaPhotographers() {
//     return fetch(`../data/photographers.json`)
//     .then(dataPhotographers => dataPhotographers.json())
//     .then( dataPhotographersJson  => {
//         console.log(dataPhotographersJson);
//         var listPhotographer = dataPhotographersJson.photographers;
//         console.log(listPhotographer);
//         var listMedia = dataPhotographersJson.media;
//         console.log(listMedia);


//         function getPhotographByCode(id) {
//             return listPhotographer.filter(
//               function(listPhotographer) {
//                 return listPhotographer.id == id
//               }
//             );
//           }
          
//           var found = getPhotographByCode(quelestlid);
          
//           var namePhotographe = found[0].name;
//           console.log(namePhotographe);
//           var pricePhotographe = found[0].price;
//           console.log(pricePhotographe);
//           var cityPhotographe = found[0].city;
//           console.log(cityPhotographe);
//           var countryPhotographe = found[0].country;
//           console.log(countryPhotographe);
//           var taglinePhotographe = found[0].tagline;
//           console.log(taglinePhotographe);
//           var portraitPhotographe = found[0].portrait;
//           console.log(portraitPhotographe);
//         document.querySelector('.photographer_page_name').innerHTML = namePhotographe;
//         document.querySelector('.photographer_page_citycountry').innerHTML = cityPhotographe+", "+countryPhotographe;
//         document.querySelector('.photographer_page_tagline').innerHTML = taglinePhotographe;
//         document.querySelector('.photographer_page_portrait').setAttribute('src', '/assets/photographers/'+portraitPhotographe);

//         function getMediaByCode(photographerId) {
//             return listMedia.filter(
//               function(listMedia) {
//                 return listMedia.photographerId == photographerId
//               }
//             );
//           }
//         var foundMedia = getMediaByCode(quelestlid);
//         console.log(foundMedia)


//           /////////////////////////////////
//           function photoMediaprint(foundMedia) {
//             const { id, date, image, photographerId, like, price, title} = foundMedia;
        
//             const pictureMedia = `assets/photographers/${image}`;
        
//             function getUserMediaCardDOM() {
//                 const lienMedia = document.createElement('a')
//                 lien.setAttribute('href',"")
//                 const img = document.createElement( 'img' );
//                 img.setAttribute("src", pictureMedia)
//                 img.setAttribute("alt", title)
//                 const titleMedia = document.createElement( 'h2' );
//                 titleMedia.textContent = title;
//                 const likeMedia = document.createElement('h3');
//                 likeMedia.textContent = like

//                 lienMedia.appendChild(img);
//                 lienMedia.appendChild(h2);
//                 lienMedia.appendChild(h3);
//                 return (lienMedia);
//             }
//             return { image, title, like, getUserMediaCardDOM }
            
//         }


//         async function displayMedia(foundMedia) {
//             const photographersMedia = document.querySelector(".liste");
    
//             foundMedia.forEach((id) => {
//                 console.log("test")
//                 const photographerMedia = photographerFactory(photographer);
//                 const userMediaCardDOM = photographerMedia.getUserMediaCardDOM();
//                 photographersMedia.appendChild(userMediaCardDOM);
//             });
//         };

//         async function initMedia() {
//             // Récupère les datas des photographes
//             const MediaPhotographersInit = await getMediaPhotographers();
//             displayMedia(MediaPhotographersInit);
//         };
        
//         // initMedia();
//     })
// }

            
            


