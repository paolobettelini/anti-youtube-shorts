const value = 'shorts/';
const replacement = 'watch?v='

function redirectShort() {
    let url = window.location.href;
    if (url.includes(value)) {
        window.location.href = url.replace(value, replacement);
    }
}

redirectShort(); // before page load

// from https://stackoverflow.com/questions/3522090/event-when-window-location-href-changes
var oldHref = document.location.href;
window.onload = function() {
    var bodyList = document.querySelector("body")

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (oldHref != document.location.href) {
                oldHref = document.location.href;

                redirectShort();
            }
        });
    });
    
    var config = {
        childList: true,
        subtree: true
    };
    
    observer.observe(bodyList, config);
};