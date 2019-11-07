// for the first part we need to grab the usernames using XHR

//step 1: create the XHR 
let xhr = new XMLHttpRequest(); 

//step 2: initilalize the request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

//not part of the basic steps, but set the response type
xhr.responseType = 'json';

//step 3: send it out
xhr.send(); 

xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP status of the response
      alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
      alert(`Done, got ${xhr.response.length} bytes`); // responseText is the server
    }
  };


  //with fetch
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
}).catch(err => console.error(err));