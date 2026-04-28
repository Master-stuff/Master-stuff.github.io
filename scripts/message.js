const INPUTS = document.querySelectorAll('section.contact div.content .form div.inputBox .input');

INPUTS.forEach(input => {
    input.addEventListener('input', () => {
        if (!input.classList.contains('submit')) {
            if (input.value === ' ') {
                input.value = '';
            }
            if (input.value === '') {
                input.classList.remove('valid', 'invalid');
            }
            else {
                input.classList.add('valid');
            }
        }
    });
});

INPUTS[4].addEventListener('click', () => {
    INPUTS.forEach(input => {
        if (!input.classList.contains('submit')) {
            if (!input.checkValidity()) {
                input.classList.add('invalid');
                input.classList.remove('valid');
            }
            else if (input.checkValidity() && input.value === '') {
                input.classList.remove('valid', 'invalid');
            }
            else {
                input.classList.add('valid');
                input.classList.remove('invalid');
            }
        }
    });

    let validity = true;
    INPUTS.forEach(elmt => {
        if (!elmt.checkValidity()) {
            validity = false;
        }
    });

    if (validity === true) {
        let subject = encodeURIComponent(INPUTS[2].value);
        let body = encodeURIComponent(INPUTS[3].value);
        let from = '%A0%A0%A0From :    ' + encodeURIComponent(INPUTS[0].value) + '%0A' + 'E-mail :    ' + encodeURIComponent(INPUTS[1].value);
        window.open('mailto:abuubaydah07@gmail.com?subject=' + subject + '&body=' + body + from, '_blank');
    }
});
