const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");
const intros = document.querySelectorAll(".introduction")


leftBtn.addEventListener("click", leftBtnClick);
rightBtn.addEventListener("click", rightBtnClick);

function leftBtnClick(e) {
    let index = indexOfCurrent();
    intros[index].classList.remove("current");
    index = (index - 1 + intros.length) % intros.length;
    intros[index].classList.add("current");

}

function rightBtnClick(e) {
    let index = indexOfCurrent();
    intros[index].classList.remove("current");
    index = (index + 1) % intros.length;
    intros[index].classList.add("current");
}

function indexOfCurrent() {
    let i = -1;
    intros.forEach((intro, index) => {
        if (intro.classList.contains("current")) {
            i = index;
        }
    })
    return i;
}