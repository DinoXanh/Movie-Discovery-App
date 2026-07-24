const movieContainer = document.getElementById("movieContainer");
const genreList = document.getElementById("genreList");
const searchInput = document.getElementById("searchInput");

const modal = document.getElementById("movieModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

const themeToggle = document.getElementById("themeToggle");

// Hiển thị phim
function displayMovies(movieList) {

    movieContainer.innerHTML = "";

    if (movieList.length === 0) {
        movieContainer.innerHTML = "<h2>Không tìm thấy phim.</h2>";
        return;
    }

    movieList.forEach(movie => {

        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">

            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.year}</p>
            </div>
        `;

        card.addEventListener("click", () => {
            showMovie(movie);
        });

        movieContainer.appendChild(card);

    });

}

// ===== Modal =====

function showMovie(movie){

    modal.style.display = "flex";

    modalBody.innerHTML = `
        <div class="modal-body">

            <img src="${movie.poster}" alt="${movie.title}">

            <div>

                <h2>${movie.title}</h2>

                <p><strong>Năm:</strong> ${movie.year}</p>

                <p><strong>Thể loại:</strong> ${movie.genres.join(", ")}</p>

                <p><strong>Đạo diễn:</strong> ${movie.director}</p>

                <p><strong>Diễn viên:</strong> ${movie.actors}</p>

                <br>

                <p>${movie.description}</p>

            </div>

        </div>
    `;

}

closeModal.onclick = function(){

    modal.style.display="none";

}

window.onclick = function(e){

    if(e.target===modal){

        modal.style.display="none";

    }

}

// ===== Thể loại =====

const genres = [...new Set(movies.flatMap(movie=>movie.genres))];

genres.forEach(genre=>{

    const label=document.createElement("label");

    label.innerHTML=`
        <input type="checkbox" value="${genre}">
        ${genre}
    `;

    genreList.appendChild(label);

});

// ===== Lọc =====

function filterMovies(){

    const keyword=searchInput.value.toLowerCase();

    const checked=[...document.querySelectorAll("#genreList input:checked")]
        .map(item=>item.value);

    const result=movies.filter(movie=>{

        const matchName=
            movie.title.toLowerCase().includes(keyword);

        const matchGenre=
            checked.length===0 ||
            checked.some(g=>movie.genres.includes(g));

        return matchName && matchGenre;

    });

    displayMovies(result);

}

// ===== Debounce =====

let timer;

searchInput.addEventListener("keyup",function(){

    clearTimeout(timer);

    timer=setTimeout(filterMovies,400);

});

genreList.addEventListener("change",filterMovies);

// ===== Dark Mode =====

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark-mode");

    themeToggle.checked=true;

}

themeToggle.addEventListener("change",function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

    }else{

        localStorage.setItem("theme","light");

    }

});

// Khởi động
displayMovies(movies);
