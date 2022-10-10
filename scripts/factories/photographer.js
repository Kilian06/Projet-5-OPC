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