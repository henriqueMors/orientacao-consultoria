(function(){
    emailjs.init("YOUR_USER_ID");
})();

document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Create the template parameters
    var templateParams = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };

    // Send the email
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Formulário enviado com sucesso!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Falha ao enviar o formulário. Tente novamente.');
        });
});
