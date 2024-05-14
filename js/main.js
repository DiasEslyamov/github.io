function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.dropdown .dropbtn');
    dropdowns.forEach(function (dropbtn) {
        dropbtn.addEventListener('click', function (event) {
            event.preventDefault();
            var dropdownContent = dropbtn.nextElementSibling;
            dropdownContent.classList.toggle('show');
            
            // Закрыть все другие открытые подменю
            var otherDropdowns = document.querySelectorAll('.dropdown-content');
            otherDropdowns.forEach(function (content) {
                if (content !== dropdownContent) {
                    content.classList.remove('show');
                }
            });
        });
    });
});

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function (dropdownContent) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        });
    }
}
