const phone = document.getElementById('phone');
phone.getElementsByTagName('a')[0].onclick = function () {
    phone.innerHTML = '<a href="tel:+380500000000">+380500000000</a>';
}

const email = document.getElementById('email');
email.getElementsByTagName('a')[0].onclick = function () {
    email.innerHTML = '<a href="mailto:dev.vladyslav@gmail.com">dev.vladyslav@gmail.com</a>';
}