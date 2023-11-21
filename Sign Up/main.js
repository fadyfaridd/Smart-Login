var nameInput = document.querySelector('#nameInput');
var emailInput = document.querySelector('#emailInput');
var passwordInput = document.querySelector('#passwordInput');
var account;

if (localStorage.getItem('user') != null) {
    account = JSON.parse(localStorage.getItem('user'));
} else {
    var account = [];
}

function signUp() {
    if (nameInput.value == '' || emailInput.value == '' || passwordInput.value == '') {
        document.getElementById('message').innerHTML = `<p class='text-danger'>Invalid Input</p>`;
    } else {
        var x = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        }
        account.push(x);
        localStorage.setItem('user', JSON.stringify(account));
        document.getElementById('message').innerHTML = `<p class='text-success'>Success</p>`;
        location.href = "../Login/index.html";
        console.log(account);
        clear();
    }
}
function clear() {
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}