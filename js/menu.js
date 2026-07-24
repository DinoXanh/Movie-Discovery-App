const movieContainer = document.getElementById("movieContainer");
const genreList = document.getElementById("genreList");
const searchInput = document.getElementById("searchInput");

const modal = document.getElementById("movieModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

const themeToggle = document.getElementById("themeToggle");


// Hiển thị phim

function showMovies(list){

    movieContainer.innerHTML="";


    list.forEach(movie=>{


        let card=document.createElement("div");

        card.className="movie-card";


        card.innerHTML=`

        <img src="${movie.poster}">

        <div class="movie-info">

        <h3>${movie.title}</h3>

        <p>${movie.year}</p>

        </div>

        `;


        card.onclick=()=>showDetail(movie);


        movieContainer.appendChild(card);


    });

}


showMovies(movies);




// Tạo thể loại

let genres=[];


movies.forEach(movie=>{

    movie.genres.forEach(g=>{

        if(!genres.includes(g)){

            genres.push(g);

        }

    });

});


genres.forEach(g=>{


    genreList.innerHTML+=`

    <label>

    <input type="checkbox" value="${g}">

    ${g}

    </label>

    `;


});





// Lọc + tìm kiếm

function filterMovie(){


    let text=
    searchInput.value.toLowerCase();



    let checked=
    [...document.querySelectorAll("#genreList input:checked")]
    .map(x=>x.value);



    let result=movies.filter(movie=>{


        let name=
        movie.title.toLowerCase()
        .includes(text);



        let type=
        checked.length==0 ||
        checked.some(g=>movie.genres.includes(g));


        return name && type;


    });



    showMovies(result);


}



searchInput.addEventListener(
"input",
filterMovie
);


genreList.addEventListener(
"change",
filterMovie
);





// Modal

function showDetail(movie){


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



closeModal.onclick=()=>{

modal.style.display="none";

};





// Dark Mode


if(localStorage.getItem("mode")=="dark"){

document.body.classList.add("dark-mode");

themeToggle.checked=true;

}



themeToggle.onchange=function(){


document.body.classList.toggle("dark-mode");


localStorage.setItem(
"mode",
document.body.classList.contains("dark-mode")
);


};
