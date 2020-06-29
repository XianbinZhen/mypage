const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");
const intros = document.querySelectorAll(".introduction");
const skillBtn = document.querySelectorAll(".skill");
const skillModal = document.querySelector("#modal-skill");
const modalContent = document.querySelector(".modal-skill");
const closeBtnTop = document.querySelector("#close-btn-top");
const closeBtnBottom = document.querySelector("#close-btn-bottom");

// handle intro bg change
leftBtn.addEventListener("click", leftBtnClick);
rightBtn.addEventListener("click", rightBtnClick);


//handle skill button click
skillBtn[0].addEventListener("click", skillBtnClick);
skillModal.addEventListener("click", outSideClick);
closeBtnBottom.addEventListener("click", closeSkillModal);
closeBtnTop.addEventListener("click", closeSkillModal);

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


function skillBtnClick(e) {
    skillModal.classList.add("show-modal");
}

function closeSkillModal(e) {
    skillModal.classList = "";
}

function outSideClick(e) {
    if (e.target == skillModal) {
        skillModal.classList = "";
    }
}