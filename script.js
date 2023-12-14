const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    },0); 
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 8000);

    textLoad();
    setInterval(textLoad, 12000);
}