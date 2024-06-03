class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.sucsess;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    getFormOject() {
        const formObject = {};
        const fields = this.form.querySelector('[name]');
        fields.forEach((fields) => {
            formObject[fields.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    async sendForm() {
        try {
            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                },
                body: JSON.stringify(this.getFormOject()),
            });

            this.displaySuccess();
        } catch (error) {
        this.displayError();
        throw new Error(error);
        }
    }

    init() {
        if (this.form) this.formButton.addEventListener("click", () => this.sendForm);
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem Enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>"
});

formSubmit.init();
