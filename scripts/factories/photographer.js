function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const lienAccueil = document.createElement('a')
        lienAccueil.setAttribute('href', id+".html")
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = city +", "+country
        const h4 = document.createElement('h4');
        h4.textContent = tagline;
        const h5 = document.createElement('h5');
        h5.textContent = price+ "€/jour";
        article.appendChild(lienAccueil)
        lienAccueil.appendChild(img);
        lienAccueil.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h5);


        return (article);
    }
    return {  name, city, country, tagline, price, picture, getUserCardDOM }
}