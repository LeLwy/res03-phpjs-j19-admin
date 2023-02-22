function loadUser(id){
    
    fetch(`https://louischancioux.sites.3wa.io/php/res03-php-j19-api/user/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}

export {loadUser}