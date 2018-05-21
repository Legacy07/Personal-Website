/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var match = false, dropdown = dropdowns[i];
        if (event.target.classList.contains('#dropbtn')) {
            for (var c of dropdown.classList.values()) {
                if (c.indexOf('menu-') == 0 && event.target.classList.contains(c)) {
                    match = true; break;
                }
            }
        }
        if (match) {dropdown.classList.add('show');
                   } else {dropdown.classList.remove('show');}
    }
};
