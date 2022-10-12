function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const lien = document.createElement('a')
        lien.setAttribute('href',"photographer.html" + "?id="+id)
        lien.setAttribute('aria-label',name)
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", "")
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = city +", "+country
        const h4 = document.createElement('h4');
        h4.textContent = tagline;
        const h5 = document.createElement('h5');
        h5.textContent = price+ "€/jour";
        article.appendChild(lien)
        lien.appendChild(img);
        lien.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h5);
        return (article);
    }
    return {  name, city, country, tagline, price, picture, getUserCardDOM }


}


function photographerFactoryPage(data) {

    const { name, id, city, country, tagline, price, portrait} = data;
    const picture = `assets/photographers/${portrait}`
    function getPhotographCardDOM() {
        const main = document.createElement('div');
        main.setAttribute('class',"photograph-header_main");
        const left = document.createElement('div');
        left.setAttribute('class',"photograph-header_left");
        const contact = document.querySelector(".photographer_page_contact")
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        const div3 = document.createElement('div');
        div3.setAttribute('class',"photograph-header_location_tagline");
        const div31 = document.createElement('div');
        div31.setAttribute('class',"photograph-header_location");
        div31.textContent = city+", "+country
        const div32 = document.createElement('div');
        div32.setAttribute('class',"photograph-header_tagline");
        div32.textContent = tagline
        const divPortait = document.createElement('div');
        divPortait.setAttribute('class',"photographer_page_portrait");
        const imgPortait = document.createElement('img');
        imgPortait.setAttribute("src", picture);
        h1.setAttribute('class',"photographer_page_name");
        const priceBot = document.getElementById("priceBot")
        priceBot.textContent = price+ "€/jour";
        main.appendChild(left)
        main.appendChild(contact)
        main.appendChild(divPortait)
        left.appendChild(h1);
        left.appendChild(div3)
        div3.appendChild(div31)
        div3.appendChild(div32)
        divPortait.appendChild(imgPortait)

        return (main);
    }
    return {   name, id, city, country, tagline, price, portrait, getPhotographCardDOM }
}

