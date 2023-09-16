const api_key= 'beb982c31d1de30a909498c4100dc1e6';

var movieName = "";
var trailers = "numm";
var imges = "null";
const options={
    method: "GET",
    headers: {
        accept: "application/json", 
        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWI5ODJjMzFkMWRlMzBhOTA5NDk4YzQxMDBkYzFlNiIsInN1YiI6IjY0ZTU4MTk4MWZlYWMxMDBjNDZjYjg5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TY4vwOIBLHANVZtaTyB4sdYdZwUO0nToQUVqrsCA7_M",
    },
};

getMovie();
function getMovie(){
    
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then((response) => response.json())
    .then((json)=>{
        let data='';
        //Array walkthrough 
        json.results.forEach(details => {
            data+=` <a href="tmdb1.html?${details.id}">
            <div class="cards">
     <img src="https://image.tmdb.org/t/p/original/${details.poster_path}">
    <h3>${details.original_title}</h3>
    <p>${details.release_date}</p>
           </div></a>`;
        });
    
      document.getElementById("moviedetails").innerHTML = data;
    })
    .catch((err) => console.log(err));
}




