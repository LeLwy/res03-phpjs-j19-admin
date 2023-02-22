import { loadUser } from './user.js';
import { loadUsers } from './users.js';
import { createUser } from './create-user.js';
import { updateUser } from './update-user.js';
import { deleteUser  } from './delete-user.js';


window.addEventListener("DOMContentLoaded", function(){
    
    loadUsers();
    
    let createBtn = document.getElementById('create-user-btn');
    
    createBtn.addEventListener('click', function(){
        
        createUser();
    })
    
});