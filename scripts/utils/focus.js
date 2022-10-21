
function focusopen(){
    const links = Array.from(document.querySelectorAll('.lien_vignette_media'));
    links.forEach(link => link.addEventListener('click', e => {
        console.log(link.id)

        var header = document.querySelector('header')
        header.setAttribute("aria-hidden", "true");
        var main = document.querySelector('main')
        main.setAttribute("aria-hidden", "true");
        var modalbg = document.querySelector('.bground')
        modalbg.setAttribute("aria-hidden", "true");
        var shortby = document.querySelector('.shortby')
        shortby.setAttribute("aria-hidden", "true");
        var linklist = document.querySelector('.grille_media')
        linklist.setAttribute("aria-hidden", "true");
        window.idOpen = link.id
        e.preventDefault()
        console.log("focus img")   
        var capture = document.getElementById("idImage")
        capture.focus()
        })
    )
}
export{focusopen}


  

