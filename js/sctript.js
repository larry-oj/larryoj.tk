const phone = document.getElementById('phone');
phone.getElementsByTagName('a')[0].onclick = function () {
    phone.innerHTML = '+380 (50) 770-64-34';
}

const email = document.getElementById('email');
email.getElementsByTagName('a')[0].onclick = function () {
    email.innerHTML = 'dev.vladyslav@gmail.com';
}