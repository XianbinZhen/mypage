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
const modalImgClose = document.querySelector("#modal-img-close");
const modalImg = document.querySelector("#modal-img");
const project1Img = document.querySelectorAll(".project-img");
const modalImgContent = document.querySelector("#modal-img-content");
const modalImgCaption = document.querySelector("#modal-img-caption");


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

project1Img.forEach((item, index) => item.addEventListener("click", e => showModalImg(e, index)));
modalImgClose.addEventListener("click", closeModalImg);
modalImg.addEventListener("click", closeModalImg)

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
            modalBottomContent.innerHTML = "I learned HTML at BHCC. After I got my BS degree in computer science, I continue to lean HTML by myself. This is one the web site I created with HTML, CSS and JS.";

            break;
        case 1:
            modalIcon.classList.add("fa-css3-alt");
            modalH5.innerHTML = "CSS";
            modalBottomContent.innerHTML = "I learned CSS along site with HTML and getting better day after day as I create more project with HTML, CSS and JS.";

            break;
        case 2: modalIcon.classList.add("fa-js");
            modalH5.innerHTML = "JS";
            modalBottomContent.innerHTML = "I learned Javascript along site with HTML and getting better day after day as I create more project with HTML, CSS and JS.";


            break;
        case 3: modalIcon.classList.add("fa-sass");
            modalH5.innerHTML = "Sass";
            modalBottomContent.innerHTML = "Sass is my helping tool to improve my CSS skill and speed.";

            break;
        case 4: modalIcon.classList.add("fa-bootstrap");
            modalH5.innerHTML = "Bootstrap";
            modalBottomContent.innerHTML = "Bootstrap is another tool to enhance my front end skills.";

            break;
        case 5: modalIcon.classList.add("fa-react");
            modalH5.innerHTML = "React";
            modalBottomContent.innerHTML = "I am learning React by myself. The Routable AI visualization tool was built by React and I learnt a lot during the process.";

            break;
        default: break;

    }

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


function closeModalImg(e) {
    if (e.target === modalImg || e.target === modalImgClose) {
        modalImg.classList = "";
    }
}

function showModalImg(e, index) {
    if (index === 0) {
        modalImgCaption.innerHTML = "RoutableAI Visualization tool";
        modalImgContent.src = "imgs/routableai.png";
    } else if (index === 1) {
        modalImgCaption.innerHTML = "Pharmacy Technology learning tool";
        modalImgContent.src = "imgs/android.jpg";
    }
    modalImg.classList.add("show-modal-img");

}