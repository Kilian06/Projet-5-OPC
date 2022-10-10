
var lien = window.location.search
console.log(lien);
var url = new URLSearchParams(lien);
var quelestlid = url.get('id');
console.log(quelestlid)

window.onload = async function getPhotographers() {
    return fetch(`../data/photographers.json`)
    .then(dataPhotographers => dataPhotographers.json())
    .then( dataPhotographersJson  => {
        console.log(dataPhotographersJson);
        var listPhotographer = dataPhotographersJson.photographers;
        console.log(listPhotographer);
        var listMedia = dataPhotographersJson.media;
        console.log(listMedia);


        function getPhotographByCode(id) {
            return listPhotographer.filter(
              function(listPhotographer) {
                return listPhotographer.id == id
              }
            );
          }
          
          var found = getPhotographByCode(quelestlid);
          
          var namePhotographe = found[0].name;
          console.log(namePhotographe);
          var pricePhotographe = found[0].price;
          console.log(pricePhotographe);
          var cityPhotographe = found[0].city;
          console.log(cityPhotographe);
          var countryPhotographe = found[0].country;
          console.log(countryPhotographe);
          var taglinePhotographe = found[0].tagline;
          console.log(taglinePhotographe);
          var portraitPhotographe = found[0].portrait;
          console.log(portraitPhotographe);
        document.querySelector('.photographer_page_name').innerHTML = namePhotographe;
        document.querySelector('.photographer_page_citycountry').innerHTML = cityPhotographe+", "+countryPhotographe;
        document.querySelector('.photographer_page_tagline').innerHTML = taglinePhotographe;
        document.querySelector('.photographer_page_portrait').setAttribute('src', '/assets/photographers/'+portraitPhotographe);

        function getMediaByCode(photographerId) {
            return listMedia.filter(
              function(listMedia) {
                return listMedia.photographerId == photographerId
              }
            );
          }
          
        var foundMedia = getMediaByCode(quelestlid);
        console.log(foundMedia)


    })
}

            
            


