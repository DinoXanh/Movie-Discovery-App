const movieContainer = document.getElementById("movieContainer");
const genreList = document.getElementById("genreList");
const searchInput = document.getElementById("searchInput");

const modal = document.getElementById("movieModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

const themeToggle = document.getElementById("themeToggle");


// Hiển thị phim

function displayMovies(list){

    movieContainer.innerHTML = "";

    list.forEach(movie => {

        movieContainer.innerHTML += `

        <div class="movie-card">

            <img src="${movie.poster}">

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <p>${movie.year}</p>

            </div>

        </div>

        `;

    });


    document.querySelectorAll(".movie-card")
    .forEach((card,index)=>{

        card.onclick=function(){

            showMovie(list[index]);

        }

    });

}


displayMovies(movies);



// Tạo thể loại

let allGenres=[];


movies.forEach(movie=>{

    movie.genres.forEach(g=>{

        if(!allGenres.includes(g)){

            allGenres.push(g);

        }

    });

});


allGenres.forEach(g=>{


    genreList.innerHTML += `

    <label>

    <input type="checkbox" value="${g}">

    ${g}

    </label>

    `;


});




// Lọc phim

function filterMovies(){


    let keyword=
    searchInput.value.toLowerCase();


    let checked=
    [...document.querySelectorAll("#genreList input:checked")]
    .map(e=>e.value);



    let result=movies.filter(movie=>{


        let name=
        movie.title.toLowerCase()
        .includes(keyword);



        let genre=
        checked.length===0 ||
        checked.some(g=>movie.genres.includes(g));



        return name && genre;


    });



    displayMovies(result);


}



searchInput.addEventListener(
"input",
filterMovies
);


genreList.addEventListener(
"change",
filterMovies
);




// MODAL

function showMovie(movie){


modal.style.display="flex";


modalBody.innerHTML=`

<div class="modal-body">


<img src="${movie.poster}">


<div>

<h2>${movie.title}</h2>

<p>Năm: ${movie.year}</p>

<p>Thể loại:
${movie.genres.join(", ")}</p>

<p>Đạo diễn:
${movie.director}</p>

<p>Diễn viên:
${movie.actors}</p>

<br>

<p>${movie.description}</p>


</div>


</div>


`;


}



closeModal.onclick=function(){

modal.style.display="none";

};




// DARK MODE


if(localStorage.getItem("dark")=="true"){

    document.body.classList.add("dark-mode");

    themeToggle.checked=true;

}



themeToggle.addEventListener("change",()=>{


document.body.classList.toggle("dark-mode");


localStorage.setItem(
"dark",
document.body.classList.contains("dark-mode")
);


});
