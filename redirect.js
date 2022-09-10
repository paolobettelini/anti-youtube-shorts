const value = 'shorts/';
const replacement = 'watch?v='

let url = window.location.href.replace(value, replacement);
window.location.href = url;