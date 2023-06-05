const img_host = document.querySelector(".img-host");
const button = document.querySelector("button"); 
function validateForm() {
    let input = document.forms["form"]["email"].value;
    if (input === "" || !input.includes("@") || !input.includes(".com")) {
        return false
    }
    return true

}


button.addEventListener("click", (e) => {
    let errorMessage = document.querySelector(".validation")
    if(!validateForm()) {
        e.preventDefault();
        errorMessage.style.visibility = "visible";
    } else {
        errorMessage.style.visibility = "hidden";
    }
})
