// Define the Movie class
class Movie {
  constructor(title, cast, description, rating) {
    this.title = title;
    this.cast = cast;
    this.description = description;
    this.rating = rating;
  }
  // Method to update the rating of the movie
  updateMovieRating(newRating) {
    this.rating = newRating;
  }
  // Method to display the movie's information
  displayInfo() {
    document.getElementById("movie-info").innerHTML = `
        <h2>${this.title}</h2>
        <p><strong>Cast:</strong> ${this.cast.join(", ")}</p>
        <p><strong>Description:</strong> ${this.description}</p>
        <p><strong>Rating:</strong> ${this.rating}</p>
        `;
    }
};
// Test your implementation
const movies = new Movie(
  "Kill Bill: Volume 1",
  ["Bill", "The Bride (Main Character)", "O-Ren Ishii", "Gogo Yubari","Budd", "Vernita Green", "Elle Driver"],
  "The Bride was almost killed at her wedding rehearsal, she took a bullet to the head but lived, she goes on to try to kill the person who did this to  her. She has to kill Bill.",
  9 + " out of 10"
);
// Display the initial movie info
movies.displayInfo();
// Update the rating
movies.updateMovieRating(10 + " out of 10");
// Display the updated movie info
movies.displayInfo();