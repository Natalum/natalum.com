document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const languageParam = urlParams.get('l');
    const languageToggle = document.getElementById('language-toggle');

    if (languageParam === 'sv') {
        languageToggle.checked = true; // Set toggle to Svenska
        document.getElementById('english').hidden = true;
        document.getElementById('svenska').hidden = false;
    } else {
        languageToggle.checked = false; // Set toggle to English
        document.getElementById('english').hidden = false;
        document.getElementById('svenska').hidden = true;
    }
});

document.getElementById('language-toggle').addEventListener('change', function() {
    if (!this.checked) {
        document.getElementById('english').hidden = false;
        document.getElementById('svenska').hidden = true;

		window.history.pushState({}, '', '?l=en');
    } else {
        document.getElementById('english').hidden = true;
        document.getElementById('svenska').hidden = false;

		window.history.pushState({}, '', '?l=sv');
    }
});