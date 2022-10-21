function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    var header = document.querySelector('header')
    header.setAttribute("aria-hidden", "true");
    var main = document.querySelector('main')
    main.setAttribute("aria-hidden", "true");
    var shortby = document.querySelector('.shortby')
    shortby.setAttribute("aria-hidden", "true");
    var linklist = document.querySelector('.grille_media')
    linklist.setAttribute("aria-hidden", "true");
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    document.getElementById('contactForm').reset();
    modal.style.display = "none";
    modal.setAttribute("aria-hiden",true)
    const openModal = document.getElementById("openModalId")
    openModal.focus()
    var header = document.querySelector('header')
    header.setAttribute("aria-hidden", "false");
    var main = document.querySelector('main')
    main.setAttribute("aria-hidden", "false");
    var shortby = document.querySelector('.shortby')
    shortby.setAttribute("aria-hidden", "false");
    var linklist = document.querySelector('.grille_media')
    linklist.setAttribute("aria-hidden", "false");
}


function modalloop (){
    document.getElementById("closeModalContact").focus()
}

function resetmodalloop (){
    document.getElementById("prenom").focus()
}

var inputPrenom = document.getElementById("prenom").value;
var inputNom = document.getElementById("nom").value;
var inputEmail = document.getElementById("email").value;
var inputMsg = document.getElementById("msg").value;



function send(event){
    event.preventDefault();
    var inputPrenom = document.getElementById("prenom").value;
    var inputNom = document.getElementById("nom").value;
    var inputEmail = document.getElementById("email").value;
    var inputMsg = document.getElementById("msg").value;
    console.log("Prenom : "+inputPrenom +"\n"+ "Nom : "+inputNom +"\n"+ "Email : "+inputEmail +"\n"+ "Message : "+inputMsg);
    document.getElementById('contactForm').reset();
    closeModal();
}
