

var checkbox = document.getElementById('switch');
getState();
function getState() {
    fetch('/api/state', {
        method: 'GET'
    })
    .then(response => {
        if(response.status === 200){
            return response.json();
        } else {
            href="/login";
        }
    })
    .then(data => {
        checkbox.checked = data.state;
    });
}
function switchState() {
    fetch('/api/switch', {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }).then(
        response =>{
            if(response.status === 401){
                location.href="/login";
            }
        }
    );
}