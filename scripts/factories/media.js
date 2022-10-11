function MediaFactory(data) {
    const {id, photographerId, image, video, title, likes, date ,price } = data;

    const picture = `assets/images/${image}`;
    const vid = `assets/images/${video}`;


    function MediaCardDOM() {
        const divMedia = document.createElement('div')
        divMedia.setAttribute('class',"vignette-media")
        if(image === undefined){
            const vidMedia = document.createElement( 'video' );
            vidMedia.setAttribute("src", vid);
            vidMedia.setAttribute("alt", "");
            divMedia.appendChild(vidMedia);
        }else{
            const imgMedia = document.createElement( 'img' );
            imgMedia.setAttribute("src", picture);
            imgMedia.setAttribute("alt", "");
            divMedia.appendChild(imgMedia);
        }
        const divMediaBot = document.createElement('div')
        divMediaBot.setAttribute('class',"vignette-media-bot")
        const titleMedia = document.createElement( 'div' );
        titleMedia.setAttribute('class',"vignette-media-title")
        titleMedia.textContent = title;
        const likeMedia = document.createElement( 'div' );
        likeMedia.setAttribute('class',"vignette-media-like")
        likeMedia.textContent = likes;
        divMedia.appendChild(divMediaBot);
        divMediaBot.appendChild(titleMedia);
        divMediaBot.appendChild(likeMedia);

        return (divMedia);
    }
    return {id, photographerId,image, video, vid, title, likes, date ,price, MediaCardDOM }


}
