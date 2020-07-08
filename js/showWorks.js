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
                const p = document.createElement('p');
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        img.src = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`;
                        p.innerHTML = `#${data.id}`;
                    });
                const p2 = document.createElement('p');
                p2.innerHTML = `${result.name}`;
                divTemp.appendChild(img);
                divTemp.appendChild(p);
                divTemp.appendChild(p2);
                aboutShowcase.appendChild(divTemp);
            }
        ));
}

render(currentPageUrl);