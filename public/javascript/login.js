var button = document.getElementsByClassName('in')[0];

function onSubmit(){
fetch('/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: document.getElementsByClassName('usernameInput')[0].value,
        password: document.getElementsByClassName('passwordInput')[0].value
    })
}).then(response => {
    if(response.status === 200){
        return response.json().then(data=>{
            localStorage.setItem('token', data.token);

            location.href = "/switch";
        });
    } else {
        alert('Login failed');
    }})
}