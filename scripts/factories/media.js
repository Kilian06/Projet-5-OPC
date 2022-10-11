function MediaFactory(data) {
    const {id, photographerId, image, video, title, likes, date ,price } = data;

    const picture = `assets/images/${image}`;
    const vid = `assets/images/${video}`;


    function MediaCardDOM() {
        const divMedia = document.createElement('div')
        divMedia.setAttribute('class',"vignette-media")
        const article = document.createElement( 'article' );
        const imgMedia = document.createElement( 'img' );
        imgMedia.setAttribute("src", picture);
        imgMedia.setAttribute("alt", "");
        const divMediaBot = document.createElement('div')
        divMediaBot.setAttribute('class',"vignette-media-bot")

        const vidMedia = document.createElement( 'video' );
        vidMedia.setAttribute("src", vid);
        vidMedia.setAttribute("alt", "");
        const titleMedia = document.createElement( 'div' );
        titleMedia.setAttribute('class',"vignette-media-title")
        titleMedia.textContent = title;
        const likeMedia = document.createElement( 'div' );
        likeMedia.setAttribute('class',"vignette-media-like")
        likeMedia.textContent = likes;
        divMedia.appendChild(imgMedia)
        divMedia.appendChild(divMediaBot);
        divMediaBot.appendChild(titleMedia);
        divMediaBot.appendChild(likeMedia);

        return (divMedia);
    }
    return {id, photographerId,image, video, vid, title, likes, date ,price, MediaCardDOM }


}

//

// if(picture === undefined)

// function capture() {
//     var canvas = document.getElementById("canvas");
//     var video = document.querySelector("video");
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     canvas
//       .getContext("2d")
//       .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  
//     /** Code to merge image **/
//     /** For instance, if I want to merge a play image on center of existing image **/
//     const playImage = new Image();
//     playImage.src = "path to image asset";
//     playImage.onload = () => {
//       const startX = video.videoWidth / 2 - playImage.width / 2;
//       const startY = video.videoHeight / 2 - playImage.height / 2;
//       canvas
//         .getContext("2d")
//         .drawImage(playImage, startX, startY, playImage.width, playImage.height);
//       canvas.toBlob() = (blob) => {
//         const img = new Image();
//         img.src = window.URL.createObjectUrl(blob);
//       };
//     };
//     /** End **/
//   }
  
//   capture();
  