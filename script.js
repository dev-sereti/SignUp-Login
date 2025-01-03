const loginForm = document.getElementById('loginForm');
const signUpForm = document.getElementById('signUpForm');

function showSignUp() {
    loginForm.classList.add('hidden');
    signUpForm.classList.remove('hidden');
}

function showLogin() {
    signUpForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
}

function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    alert(`Logging in with Email: ${email}`);
}

function signUpUser() {
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    alert(`Signing up as ${name} with Email: ${email}`);
}
