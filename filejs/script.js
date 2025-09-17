document.querySelector('#whatsapp-button').addEventListener('click',()=>{
    const phoneNumber = '2250503543804';
    const message = 'Bonjour ML Business & Consulting, j\'aimerais avoir plus d\'informations sur vos services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});

document.getElementById('contact-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const objet = document.getElementById('objet').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const piecesJointe = document.getElementById('pieces-jointe').files[0];
//creer un objet formdata pour envoyer les donnees du formulaire
    const formData = new FormData();
    formData.append('objet', objet);
    formData.append('email', email);
    formData.append('message', message);
    if(piecesJointe) {
        formData.append('pieces-jointe', piecesJointe);
    }
    //envoyer les donnees du formulaire
     fetch('/node_modules/app.js', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify({
            objet:objet,
            email:email,
            message:message,
            piecesJointe:piecesJointe
         })
    })
    .then(response => response.json())
    .then(data => {
        const confirmationMessage=getElementById('confirmation-message');
        confirmationMessage.textContent='merci de nous avoir contacté nous allons vous repondre dans les plus brefs delais';
        confirmationMessage.style.display='block';
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    });
});
