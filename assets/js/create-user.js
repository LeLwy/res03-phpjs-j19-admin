function createUser(){
    
    let form = document.getElementById('create-user-form');
    
    form.addEventListener('submit', function(event){
        
        event.preventDefault();
        
        let username = document.getElementById('username').value;
        let firstName = document.getElementById('firstname').value;
        let lastName = document.getElementById('lastname').value;
        let email = document.getElementById('email').value;
        
        formData = new FormData();
        formData.append('username', username);
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        
        const options = {
            method: 'POST',
            body: formData
        };
        
        fetch('https://louischancioux.sites.3wa.io/php/res03-php-j19-api/create-user', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    })
}

export { createUser };