const api_key= 'beb982c31d1de30a909498c4100dc1e6';

var movieName = "";
var movie_id = window.location.href.split('?').pop();
const options={
    method: "GET",
    headers: {
        accept: "application/json", 
        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWI5ODJjMzFkMWRlMzBhOTA5NDk4YzQxMDBkYzFlNiIsInN1YiI6IjY0ZTU4MTk4MWZlYWMxMDBjNDZjYjg5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TY4vwOIBLHANVZtaTyB4sdYdZwUO0nToQUVqrsCA7_M",
    },
};
console.log(movie_id);
// movie_id=1002185;
getMovieDetails();
function getMovieDetails(){
    
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
    .then((response) => response.json())
    .then((details)=>{
        let data='';
            data+=`<div class="backgroundimage d-flex" style="background-image: linear-gradient(rgba(134, 191, 238, 0.8),rgba(127, 188, 238, 0.8)), url('https://image.tmdb.org/t/p/original/${details.backdrop_path}');">
            <div class="image">
                <img src="https://image.tmdb.org/t/p/w500/${details.poster_path}" style="width: 300px; height: 500px; border-radius: 5px;">
            </div> 
            <div>
            <div class="whitetext col-" style="color: white; font-size: 15px;">
                <div class="barbie">
                  <h2>${details.original_title}</h2>
                </div>
                <div class="date">
                     <p>19/07/2023.Comedy,Adventure,Fantasy.${details.runtime}</p>
                </div>
                <div class="progress-bar">
                    <progress value="73" min="0" max="100" style="visibility:hidden;height:0;width:0;">73%</progress>
                </div>
              <p class="italic"><i>${details.tagline}</i></p>
              <h3 class="over">Overview</h3>
              <p class="para">${details.overview}</p>
            </div>
            <div class="whitelist d-flex flex-row col-12" style="color: white; font-size: 13px;" >
                <div class="whitelist1 col-4">
                    <h4>Noah Baumbach</h4>
                    <p>Production</p>
                    <h4>David Heyman</h4>
                    <p>Production</p>
                    <h4>Lucy Bevan</h4>
                    <p>Production</p>
                    <h4>Jacqueline Durran</h4>
                    <p>Production</p>
               </div>
            <div class="whitelist2 col-4">
                <h4>Noah Baumbach</h4>
                <p>Writing</p>
                <h4>Andy Malcolm</h4>
                <p>Sound</p>
                <h4>Roy Taylor</h4>
                <p>Crew</p>
                <h4>Sarah Greenwood</h4>
                <p>Art</p>
            </div>
            <div class="whitelist3 col-4">
                <h4>Carmel Jackson</h4>
                <p>Costume & Make-Up</p>
                <h4>Toby Emmerich</h4>
                <p>Production</p>
                <h4>Ryan Gosling</h4>
                <p>Sound</p>
                <h4>Katie Spencer</h4>
                <p>Art</p>
            </div>
        </div>
    </div>
        </div>`;
    
      document.getElementById("moviedetails").innerHTML = data;
    })
    .catch((err) => console.log(err));
}