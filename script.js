document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    let formIsValid = true; // Variable para rastrear la validez del formulario

    // Validar campos obligatorios
    const fields = ['name', 'lastName', 'user', 'email', 'password', 'confirmPassword'];
    fields.forEach(field => {
        const input = document.getElementById(field);
        if (input.value.trim() === '') {
            input.classList.add('is-invalid');
            formIsValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    // Validar email
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        formIsValid = false;
    } else {
        emailInput.classList.remove('is-invalid');
    }

    // Validar contraseñas
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.classList.add('is-invalid');
        formIsValid = false;
    } else {
        confirmPasswordInput.classList.remove('is-invalid');
    }

    // Si el formulario es válido, se puede enviar
    if (formIsValid) {
        alert('Formulario enviado correctamente');
        // Borrar el contenido de todos los campos
        fields.forEach(field => {
            const input = document.getElementById(field);
            input.value = '';  // Borrar el contenido del campo
        });
        // Aquí puedes enviar el formulario
        // event.target.submit();
    }
});
