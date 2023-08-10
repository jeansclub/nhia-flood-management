
document.querySelector(".cancel-btn").addEventListener("click", removeForm);

function removeForm() {
    document.querySelector(".fb-body").style.display = "none";

    document.querySelector(".s-n-b").style.color = "#28989e";
}