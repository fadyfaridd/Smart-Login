var logoutBtn = document.querySelector('#logoutBtn');
document.getElementById('x').innerHTML = `Welcome ${localStorage.getItem('username')}`

logoutBtn.addEventListener('click', function () {
    location.href = "../login/index.html"
})