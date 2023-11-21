var loginEmail = document.querySelector('#loginEmail');
var loginPassword = document.querySelector('#loginPassword');
var loginBtn = document.querySelector('#loginBtn');
var user = [];
var user = JSON.parse(localStorage.getItem('user'));

loginBtn.addEventListener('click', function () {
    if (loginEmail.value == '' || loginPassword.value == '') {
        document.getElementById('message').innerHTML = `<p class='text-danger'>Invalid Input</p>`;
    } else {
        check()
    }
})
function check() {
    for (var i = 0; i < user.length; i++) {
        if (loginEmail.value == user[i].email && loginPassword.value == user[i].password) {
            var y = user[i].name;
            localStorage.setItem('username', y)
            location.href = "../home/index.html"
            break;
        }
    }
}