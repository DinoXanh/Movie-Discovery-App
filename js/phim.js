const movies = [
{
    title: "Interstellar",
    year: 2014,
    genres: ["Sci-Fi","Drama"],
    director: "Christopher Nolan",
    actors: "Matthew McConaughey, Anne Hathaway",
    description: "Một nhóm phi hành gia du hành qua hố sâu không gian để tìm nơi sinh sống mới cho nhân loại.",
    poster: "images/interstellar.jpg"
},
{
    title: "Inception",
    year: 2010,
    genres: ["Action","Sci-Fi"],
    director: "Christopher Nolan",
    actors: "Leonardo DiCaprio",
    description: "Một tên trộm xâm nhập vào giấc mơ của người khác để đánh cắp hoặc cấy ghép ý tưởng.",
    poster: "images/inception.jpg"
},
{
    title: "The Dark Knight",
    year: 2008,
    genres: ["Action","Crime"],
    director: "Christopher Nolan",
    actors: "Christian Bale, Heath Ledger",
    description: "Batman đối đầu với Joker trong cuộc chiến bảo vệ thành phố Gotham.",
    poster: "images/darkknight.jpg"
},
{
    title: "Avengers: Endgame",
    year: 2019,
    genres: ["Action","Adventure"],
    director: "Anthony Russo",
    actors: "Robert Downey Jr., Chris Evans",
    description: "Biệt đội Avengers tập hợp lần cuối để đảo ngược cú búng tay của Thanos.",
    poster: "images/endgame.jpg"
},
{
    title: "Parasite",
    year: 2019,
    genres: ["Drama","Thriller"],
    director: "Bong Joon-ho",
    actors: "Song Kang-ho",
    description: "Hai gia đình thuộc hai tầng lớp xã hội khác nhau bị cuốn vào một chuỗi bi kịch.",
    poster: "images/parasite.jpg"
},
{
    title: "Titanic",
    year: 1997,
    genres: ["Romance","Drama"],
    director: "James Cameron",
    actors: "Leonardo DiCaprio, Kate Winslet",
    description: "Câu chuyện tình yêu trên con tàu Titanic trước khi chìm xuống Đại Tây Dương.",
    poster: "images/titanic.jpg"
},
{
    title: "Spider-Man: No Way Home",
    year: 2021,
    genres: ["Action","Adventure"],
    director: "Jon Watts",
    actors: "Tom Holland",
    description: "Peter Parker đối mặt với đa vũ trụ sau khi danh tính bị tiết lộ.",
    poster: "images/spiderman.jpg"
}
];

const movieContainer = document.getElementById("movieContainer");

function displayMovies(list){

    movieContainer.innerHTML="";

    list.forEach(movie=>{

        movieContainer.innerHTML += `
        <div class="movie-card">

            <img src="${movie.poster}" alt="${movie.title}">

            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.year}</p>
            </div>

        </div>
        `;

    });

}

displayMovies(movies);
