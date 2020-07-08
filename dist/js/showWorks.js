const aboutShowcase = document.querySelector('.about-showcase');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let currentPageUrl = 'https://pokeapi.co/api/v2/pokemon';
prevBtn.addEventListener('click', setPrevPageUrl);
nextBtn.addEventListener('click', setNextPageUrl);


function setPrevPageUrl() {
    fetch(currentPageUrl)
        .then(res => res.json())
        .then(data => {
            if (data.previous == null) {
                window.alert("No more previous pages")
                return
            }
            currentPageUrl = data.previous;
            render(currentPageUrl);
        });
}

function setNextPageUrl() {
    fetch(currentPageUrl)
        .then(res => res.json())
        .then(data => {
            if (data.next == null) {
                window.alert("No more next page!")

                return
            }
            currentPageUrl = data.next;
            render(currentPageUrl);
        });
}

function render(url) {
    console.log("current url:", url)
    aboutShowcase.innerHTML = "";
    fetch(url)
        .then(res => res.json())
        .then(data => data.results.forEach(
            (result) => {
                const divTemp = document.createElement('div');
                divTemp.classList = 'about-showcase-detail';
                const img = document.createElement('img');
                const url = result.url;
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        img.src = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`;
                        id = data.id
                    });
                const p = document.createElement('p');
                p.innerHTML = `${result.name}`;
                divTemp.appendChild(img);
                divTemp.appendChild(p);
                aboutShowcase.appendChild(divTemp);
            }
        ));
}

render(currentPageUrl);