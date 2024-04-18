document.addEventListener("DOMContentLoaded", function() {
    var questionMark = document.querySelector(".question-mark");
    var popup = document.querySelector(".popup");
    var closeButton = document.querySelector(".close");

    questionMark.addEventListener("click", function() {
        popup.classList.add("show");
    });

    closeButton.addEventListener("click", function() {
        popup.classList.remove("show");
    });
});