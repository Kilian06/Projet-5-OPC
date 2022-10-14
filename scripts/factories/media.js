
function MediaFactory(data) {
    const {id, photographerId, image, video, title, likes, date ,price } = data;

    const picture = `assets/images/${image}`;
    const vid = `assets/images/${video}`;

    function MediaCardDOM() {
        const divMedia = document.createElement('div');
        divMedia.setAttribute('class',"vignette-media");
        const aImg = document.createElement('a');
        aImg.setAttribute('class',"lien_vignette_media");

        if(image === undefined){
            aImg.setAttribute("href", vid);
            const vidMedia = document.createElement( 'video' );
            vidMedia.setAttribute("src", vid);
            vidMedia.setAttribute("alt", "");
            aImg.appendChild(divMedia);
            divMedia.appendChild(vidMedia);
        }else{
            aImg.setAttribute("href", picture);
            const imgMedia = document.createElement( 'img' );
            imgMedia.setAttribute("src", picture);
            imgMedia.setAttribute("alt", "");
            aImg.appendChild(divMedia);
            divMedia.appendChild(imgMedia);

        }
        const divMediaBot = document.createElement('div')
        divMediaBot.setAttribute('class',"vignette-media-bot")
        const titleMedia = document.createElement( 'div' );
        titleMedia.setAttribute('class',"vignette-media-title")
        titleMedia.textContent = title +" ";
        const likeDiv = document.createElement( 'div' );
        likeDiv.setAttribute('class',"vignette-likediv")
        const likeMedia = document.createElement( 'div' );
        likeMedia.setAttribute('class',"vignette-media-like")
        likeMedia.textContent = likes;
        const heart = document.createElement('i');
        heart.setAttribute('class',"fa-solid fa-heart")
        divMedia.appendChild(divMediaBot);
        divMediaBot.appendChild(titleMedia);
        divMediaBot.appendChild(likeDiv)
        likeDiv.appendChild(likeMedia);
        likeDiv.appendChild(heart);

        return (aImg);
    }
    return {id, photographerId,image, video, vid, title, likes, date ,price, MediaCardDOM }


}
