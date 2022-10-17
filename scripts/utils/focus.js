
function focusopen(){
    const links = Array.from(document.querySelectorAll('.lien_vignette_media'));
    links.forEach(link => link.addEventListener('click', e => {
        console.log(link.id)
        window.pipi = link.id
        e.preventDefault()
        console.log("focus img")
        var capture = document.getElementById("idImage")
        capture.focus()

})
    )
}
export{focusopen}