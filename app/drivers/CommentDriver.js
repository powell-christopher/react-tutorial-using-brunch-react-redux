/**
  CommentDriver
  Acts as a driver for the Comments API, encapsulating all related logic
**/

export function fetchComments(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => { console.log(data); resolve(data) })
      .catch(err => { reject(url, err.toString())})
  });
}

export function saveComment(url, comment) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
    .then(response => response.json())
    .then(data => resolve(comment))
    .catch(err => reject(url, err.toString()))
  });
}

