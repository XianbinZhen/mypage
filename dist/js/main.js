const leftBtn = document.querySelector("#left-btn");
const rightBtn = document.querySelector("#right-btn");
const intros = document.querySelectorAll(".introduction");
const skillBtn = document.querySelectorAll(".skill");
const skillModal = document.querySelector("#modal-skill");
const modalIcon = document.querySelector("#modal-icon");
const modalH5 = document.querySelector("#modal-h5");
const modalBottomContent = document.querySelector("#modal-bottom-p");
const closeBtnTop = document.querySelector("#close-btn-top");
const closeBtnBottom = document.querySelector("#close-btn-bottom");

// handle intro bg change
leftBtn.addEventListener("click", leftBtnClick);
rightBtn.addEventListener("click", rightBtnClick);


//handle skill button click
skillBtn.forEach((btn, index) =>
    btn.addEventListener("click", (e) =>
        skillBtnClick(e, index)));

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


function skillBtnClick(e, index) {
    modalIcon.classList = "";
    modalIcon.classList.add("fab");
    modalIcon.classList.add("fa-5x");

    switch (index) {
        case 0:
            modalIcon.classList.add("fa-html5");
            modalH5.innerHTML = "HTML";
            break;
        case 1:
            modalIcon.classList.add("fa-css3-alt");
            modalH5.innerHTML = "CSS";
            break;
        case 2: modalIcon.classList.add("fa-js");
            modalH5.innerHTML = "JS";
            break;
        case 3: modalIcon.classList.add("fa-sass");
            modalH5.innerHTML = "Sass";
            break;
        case 4: modalIcon.classList.add("fa-bootstrap");
            modalH5.innerHTML = "Bootstrap";
            break;
        case 5: modalIcon.classList.add("fa-react");
            modalH5.innerHTML = "React";
            break;
        default: break;

    }

    modalBottomContent.innerHTML = `content ${index}`;
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
