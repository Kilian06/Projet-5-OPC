// Factorie des medias du photographe
function MediaFactory(data) {
    const {id, photographerId, image, video, title, likes, date ,price } = data;

    const picture = `assets/images/${image}`;
    const vid = `assets/images/${video}`;

    function MediaCardDOM() {
        const divVignette = document.createElement('div')

        const divMedia = document.createElement('div');
        divMedia.setAttribute('class',"vignette-media");
        const aImg = document.createElement('a');
        aImg.setAttribute('class',"lien_vignette_media");
        aImg.setAttribute('id',id);

// Gestion de l'image ou video
        if(image === undefined){
            aImg.setAttribute("href", vid + "?title="+title);
            const vidMedia = document.createElement( 'video' );
            vidMedia.setAttribute("src", vid);
            vidMedia.setAttribute("alt", title + ", closeup view");
            aImg.appendChild(divMedia);
            divMedia.appendChild(vidMedia);
            
        }else{
            aImg.setAttribute("href", picture + "?title="+title);
            const imgMedia = document.createElement( 'img' );
            imgMedia.setAttribute("src", picture);
            imgMedia.setAttribute("alt", title + ", closeup view");
            aImg.appendChild(divMedia);
            divMedia.appendChild(imgMedia);

        }
        divVignette.appendChild(aImg)
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
        heart.setAttribute('aria-label',"like")
        divVignette.appendChild(divMediaBot);
        divMediaBot.appendChild(titleMedia);
        divMediaBot.appendChild(likeDiv)
        likeDiv.appendChild(likeMedia);
        likeDiv.appendChild(heart);

        return (divVignette);
    }
    return {id, photographerId,image, video, vid, title, likes, date ,price, MediaCardDOM }


}
