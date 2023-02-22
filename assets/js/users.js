function loadUsers(){
    
    fetch(`https://louischancioux.sites.3wa.io/php/res03-php-j19-api/users`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        for(let i=0; i<data.length; i++){
            
            let tbody = document.querySelector('#users-list > table > tbody');
            
            let tr = document.createElement('tr');
            
            let idTd = document.createElement('td');
            let usernameTd = document.createElement('td');
            let firstNameTd = document.createElement('td');
            let lastNameTd = document.createElement('td');
            let emailTd = document.createElement('td');
            let modifTd = document.createElement('td');
            
            let viewLink = document.createElement('a');
            let editLink = document.createElement('a');
            let delLink = document.createElement('a');
            
            viewLink.setAttribute('href', `https://louischancioux.sites.3wa.io/php/res03-phpjs-j19-admin/user.html?user_id=${data[i].id}`)
            editLink.setAttribute('href', `https://louischancioux.sites.3wa.io/php/res03-phpjs-j19-admin/update-user.html?user_id=${data[i].id}`)
            
            let viewSpan = document.createElement('span');
            let editSpan = document.createElement('span');
            let delSpan = document.createElement('span');
            
            viewSpan.setAttribute('class', 'bi bi-eye-fill');
            editSpan.setAttribute('class', 'bi bi-pencil-fill');
            delSpan.setAttribute('class', 'bi bi-trash-fill');
            
            let id = document.createTextNode(data[i].id);
            let username = document.createTextNode(data[i].username);
            let firstName = document.createTextNode(data[i].first_name);
            let lastName = document.createTextNode(data[i].last_name);
            let email = document.createTextNode(data[i].email);
            
            viewLink.appendChild(viewSpan);
            editLink.appendChild(editSpan);
            delLink.appendChild(delSpan);
            
            idTd.appendChild(id);
            usernameTd.appendChild(username);
            firstNameTd.appendChild(firstName);
            lastNameTd.appendChild(lastName);
            emailTd.appendChild(email);
            modifTd.appendChild(viewLink);
            modifTd.appendChild(editLink);
            modifTd.appendChild(delLink);
            
            tr.appendChild(idTd);
            tr.appendChild(usernameTd);
            tr.appendChild(firstNameTd);
            tr.appendChild(lastNameTd);
            tr.appendChild(emailTd);
            tr.appendChild(modifTd);
            
            tbody.appendChild(tr);
            
        }
    });
}

export { loadUsers };