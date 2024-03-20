function deleteElementById(id) {
    var elementToDelete = document.getElementById(id);
    if (elementToDelete) {
        elementToDelete.remove();
    }
}

var selectElement = document.createElement('select');
selectElement.setAttribute('id', 'type');

var options = ['Tracks', 'Artist', 'Album'];

options.forEach(function (optionValue) {
    var optionElement = document.createElement('option');
    optionElement.setAttribute('value', optionValue);
    optionElement.textContent = optionValue;
    selectElement.appendChild(optionElement);
});
document.getElementById("form").appendChild(selectElement);

function newElement(Ele, Id, Class, Parent, Value, ...a) {
    var x = document.createElement(Ele)
    x.id = Id;
    x.setAttribute("class", Class)
    if (a) {
        x.setAttribute("src", a[0])
        x.setAttribute("href", a[1])
    }
    if (Value != '\0') x.innerHTML = Value;
    if (Parent == '\0') document.body.appendChild(x);
    else {
        var y = document.getElementById(Parent);
        y.appendChild(x);
    }
}

newElement("button", "btn", "btn", "form", "Search");

function createAudio(src) {
    var audio = new Audio();
    audio.src = src;
    audio.controls = true;
    audio.loop = true;
    return audio;
}

let album;
const getAlbum = async (str) => {
    let data = await fetch(`https://v1.nocodeapi.com/bharatidev07058/spotify/tHHXwbSkcvuErtpj/search?q=${str}&type=album`);
    let Cdata = await data.json();
    album = Cdata.albums.items;
    console.log(album[0]);
    let i = 0;
    deleteElementById("col");
    newElement("div", "col", "col", "container", '\0');
    album.forEach(element => {
        newElement("div", "cardo" + i, "card", "col", '\0');
        newElement("div", "imgho" + i, "imgh", "cardo" + i, '\0');
        newElement("img", "imgo" + i, "img", "imgho" + i, '\0', element.images[0].url);
        newElement("div", "container3" + i, "container1", "cardo" + i, '\0');
        newElement("p", "p0" + i, "p", "container3" + i, "Name : " + element.name);
        newElement("p", "p01" + i, "p", "container3" + i, "Release Date : " + element.release_date);
        newElement("p", "p02" + i, "p", "container3" + i, "Artists : ");
        let j = 0;
        element.artists.forEach(element => {
            newElement("p", "p3" + j, "p", "container3" + i, "Name : " + element.name);
            j += 1;
        });
        newElement("a", "a0" + i, "a", "container3" + i, "goto album", "", element.external_urls.spotify);
        i += 1;
    });
    
};

let artists;
const getArtist = async (str) => {
    let data = await fetch("https://v1.nocodeapi.com/bharatidev07058/spotify/tHHXwbSkcvuErtpj/search?q=" + str + "&type=artist");
    let Cdata = await data.json();
    artists = Cdata.artists.items;
    console.log(artists[0].images);
    let i = 0;
    deleteElementById("col");
    newElement("div", "col", "col", "container", '\0');
    artists.forEach(element => {
        newElement("div", "card0" + i, "card", "col", '\0');
        newElement("div", "imgh0" + i, "imgh", "card0" + i, '\0');
        newElement("img", "img0" + i, "img", "imgh0" + i, '\0', element.images[0].url);
        newElement("div", "container2" + i, "container1", "card0" + i, '\0');
        newElement("p", "p" + i, "p", "container2" + i, "Name : " + element.name);
        newElement("p", "p" + i, "p", "container2" + i, "Type : " + element.type);
        newElement("p", "p" + i, "p", "container2" + i, "Followers : " + element.followers.total);
        newElement("p", "p" + i, "p", "container2" + i, "Genres : " + element.genres[0]);
        newElement("p", "p" + i, "p", "container2" + i, "Popularity : " + element.popularity);
        newElement("a", "a0" + i, "a", "container2" + i, "check out", "", element.external_urls.spotify);
        i += 1;
    });
    
};

let track;
const getTracks = async (str) => {
    let data = await fetch("https://v1.nocodeapi.com/bharatidev07058/spotify/tHHXwbSkcvuErtpj/search?q=" + str + "&type=track");
    let Cdata = await data.json();
    track = Cdata.tracks.items;
    console.log(track[0]);
    let i = 0;
    deleteElementById("col");
    newElement("div", "col", "col", "container", '\0');
    track.forEach(element => {
        newElement("div", "card" + i, "card", "col", '\0');
        newElement("div", "imgh" + i, "imgh", "card" + i, '\0');
        newElement("img", element.id, "img", "imgh" + i, '\0', element.album.images[2].url);
        newElement("div", "container1" + i, "container1", "card" + i, '\0');
        newElement("p", "p" + i, "p", "container1" + i, "SongName : " + element.album.name);
        newElement("p", "p" + i, "p", "container1" + i, "artistName : " + element.album.artists[0].name);
        var audioSrc = element.preview_url;
        var audioElement = createAudio(audioSrc);
        document.getElementById("container1" + i).appendChild(audioElement);
        i += 1;
    });
    
};
function event(){
    var str = document.getElementById("search").value;
    if (str != "") {
        switch (document.getElementById("type").value) {
            case "Tracks":
                getTracks(str);
                break;
            case "Artist":
                getArtist(str);
                break;
            case "Album":
                getAlbum(str);
                break;
        }
    }
}
var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    event();
});

