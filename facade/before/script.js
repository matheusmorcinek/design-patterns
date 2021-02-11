const fetch = require('node-fetch');

function getUsers() {

    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res => res.json());
}

function getUserPosts(userId) {

    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(res => res.json());
}

getUsers().then(users => {

    users.forEach(user => {

        getUserPosts(user.id).then(posts => {

            console.log(user.name);
            console.log(posts.length);
        });
    });
});