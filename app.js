
// ANIMATED MENU BUTTON

// holds a reference to the html elelment with id mobile menu
const menu = document.querySelector('#mobile-menu')
// holds a reference to the html element with class navbar menu
const menuLinks = document.querySelector('.navbar__menu')

//  Used to create a responsive menu that changes when clicked
// deactivates thenavbar when mobile menu is opened
// deactivates mobile menu when the X is clicked
// Activates one, deactivates the other
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Fetch Navigation Text

fetch('Text Files/navigation.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navigation').textContent = data;
            })

// Fetch CV Text

fetch('Text Files/CV.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById('CV').textContent = data;
            })

// Fetch Publications Text

fetch('Text Files/Publications.txt')
            .then(response => response.text())
            .then(data => {
                document.getElementById('Publications').textContent = data;
            })
