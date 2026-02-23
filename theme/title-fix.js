document.addEventListener('DOMContentLoaded', function() {
    var title = document.querySelector('.menu-title');
    if (title) {
        title.innerHTML = title.textContent.replace('&', '<span class="faded-amp">&amp;</span>');
    }
});
