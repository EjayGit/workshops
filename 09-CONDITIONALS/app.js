const age = 18;
const movieRating = "15";

if (age > 17) {
    console.log("You can watch any movie!");
} else if (age <= 17 && age >=15) {
    if (movieRating === "U") {
        console.log("You can watch the movie!");
    } else if (movieRating === "PG") {
        console.log("You can watch the movie!");
    } else if (movieRating === "12") {
        console.log("You can watch the movie!");
    } else if (movieRating === "15") {
        console.log("You can watch the movie!");
    } else 
        console.log("You cannot watch the movie!");
} else if (age <= 14 && age >=12) {
    if (movieRating === "U") {
        console.log("You can watch the movie!");
    } else if (movieRating === "PG") {
        console.log("You can watch the movie!");
    } else if (movieRating === "12") {
        console.log("You can watch the movie!");
    } else 
        console.log("You cannot watch the movie!");
} else if (age < 12){
    if (movieRating === "U") {
        console.log("You can watch the movie!");
    } else if (movieRating === "PG") {
        console.log("You can watch the movie with a responsible guardian!");
    }
}