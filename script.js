function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(Response => Response.json())
        .then(data => {
            data.forEach(post => { console.log(post.body) })
        })
        .catch(error => console.error((error)));
}
fetchData();

function createPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: `new post`,
            body: `Lorem ipsum dorem`,
            userId: 1
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
createPost();

function deletePost() {
    fetch("https://jsonplaceholder.typicode.com/posts/2", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => console.log(`Post Deleted`))
        .catch(error => console.log(error));
}
deletePost();
