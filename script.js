document.addEventListener('DOMContentLoaded', function(event) {
    var html = document.querySelectorAll('html')[0];
    var themeToggle = document.querySelector('#bg-theme');
    var savedTheme = localStorage.getItem('theme');
    var currentTheme = savedTheme ? savedTheme : 'light';
    html.setAttribute('data-bs-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.classList.add("fa-moon");
    } else {
        themeToggle.classList.remove("fa-moon");
    }
    if (themeToggle) {
        themeToggle.addEventListener('click', function(event) {
            event.preventDefault();
            if (html.getAttribute('data-bs-theme') === 'dark') {
                html.setAttribute('data-bs-theme', 'light');
                localStorage.setItem('theme', 'light');
            } else {
                html.setAttribute('data-bs-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            themeToggle.classList.toggle("fa-moon");
        });
    }
    document.getElementById('facebook-share').addEventListener('click', function() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');
    });
    document.getElementById('twitter-share').addEventListener('click', function() {
        window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('Check this: ') + window.location.href, '_blank');
    });
    document.getElementById('linkedin-share').addEventListener('click', function() {
        window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(window.location.href), '_blank');
    });
    document.getElementById('reddit-share').addEventListener('click', function() {
        window.open('https://reddit.com/submit?url=' + encodeURIComponent(window.location.href), '_blank');
    });
    document.getElementById('whatsapp-share').addEventListener('click', function() {
        window.open('https://wa.me/?text=' + encodeURIComponent('Check this: ') + window.location.href, '_blank');
    });
    document.getElementById('telegram-share').addEventListener('click', function() {
        window.open('https://t.me/share/url?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent('Check this'), '_blank');
    });
    document.getElementById('email-share').addEventListener('click', function() {
        window.location.href = 'mailto:?subject=Check this!&body=' + encodeURIComponent('I wanted to share this with you: ' + window.location.href);
    });
    document.getElementById('copyUrlBtn').addEventListener('click', function() {
        navigator.clipboard.writeText(window.location.href).then(function() {
            console.log('Page URL copied to clipboard!');
        }).catch(function(err) {
            console.error('Unable to copy', err);
        });
    });
});