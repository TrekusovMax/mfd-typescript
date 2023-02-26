var COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
var getData = function (url) {
    return fetch(url).then(function (res) { return res.json(); });
};
getData(COMMENTS_URL).then(function (comment) {
    return comment.forEach(function (c) {
        return console.log('ID: ' + c.id.toString() + ', Email: ' + c.email);
    });
});
