// header.js
document.addEventListener("DOMContentLoaded", function() {
    var headerHTML = `
    <header>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-5">
                    <p>CONSULTORIA HOSPITALAR PROFISSIONAL</p>
                </div>
                <div class="col-md-8 col-sm-7 text-align-right">
                    <span class="phone-icon"><i class="fa fa-instagram"></i><a href="https://www.instagram.com/orientacaoconsultoria/" target="_blank">@orientacaoconsultoria</a></span>
                    <span class="phone-icon"><i class="fa fa-phone"></i><a href="https://api.whatsapp.com/send/?phone=5511940520882&text&type=phone_number&app_absent=0" target="_blank"> (11) 94052-0882</a></span>
                    <span class="email-icon"><i class="fa fa-envelope-o"></i> <a href="mailto:contato.orientacaoconsultoria@gmail.com" target="_blank">contato.orientacaoconsultoria@gmail.com</a></span>
                </div>
            </div>
        </div>
    </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

});