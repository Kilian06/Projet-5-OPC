function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    document.getElementById('contactForm').reset();
    modal.style.display = "none";
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