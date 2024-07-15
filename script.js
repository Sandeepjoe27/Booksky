document.addEventListener("DOMContentLoaded", function() {
    var popupoverlay = document.querySelector(".popup-overlay");
    var popupbox = document.querySelector(".popup-box");
    var addpopupbutton = document.getElementById("add-popup-button");
    var cancelpopup = document.querySelector(".cancel-popup");
    
    addpopupbutton.addEventListener("click", function() {
        popupoverlay.style.display = "block";
        popupbox.style.display = "block";
    });

    cancelpopup.addEventListener("click", function(event) {
        event.preventDefault();
        popupoverlay.style.display = "none";
        popupbox.style.display = "none";
    });

    var container = document.querySelector(".container");
    var addbook = document.querySelector(".add-book");
    var booktitleinput = document.getElementById("book-title-input");
    var bookauthorinput = document.getElementById("book-author-input");
    var bookdescriptioninput = document.getElementById("book-description-input");

    addbook.addEventListener("click", function(event) {
        event.preventDefault();
        var div = document.createElement("div");
        div.setAttribute("class", "book-container");
        div.innerHTML = `
            <h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button class="delete-book">Delete</button>`;
        container.append(div);
        popupoverlay.style.display = "none";
        popupbox.style.display = "none";
    });

    container.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-book")) {
            event.target.parentElement.remove();
        }
    });
});
