const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/movie_db")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  director: String,
  rating: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

// const movie = new Movie({
//   title: "The Dark Knight",
//   year: 2008,
//   genre: "Action",
//   director: "Christopher Nolan",
//   rating: 9.0,
// });

// Movie.insertMany([
//   {
//     title: "The Dark Knight",
//     year: 2008,
//     genre: "Action",
//     director: "Christopher Nolan",
//     rating: 9.0,
//   },
//   {
//     title: "Inception",
//     year: 2010,
//     genre: "Action",
//     director: "Christopher Nolan",
//     rating: 8.8,
//   },
//   {
//     title: "Interstellar",
//     year: 2014,
//     genre: "Sci-Fi",
//     director: "Christopher Nolan",
//     rating: 8.6,
//   },
//   {
//     title: "The Shawshank Redemption",
//     year: 1994,
//     genre: "Drama",
//     director: "Frank Darabont",
//     rating: 9.3,
//   },
// ])
//   .then((result) => {
//     console.log("it works!");
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//find movie berdasarkan tahun
// const getMovie = Movie.find({ year: { $gte: 2010 }, genre: "Action" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//find movie berdasarkan id
// const findById = Movie.findOne({ _id: "65db028b30cabd2b231fa391" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//find by id mongoose
// const findById = Movie.findById("65db028b30cabd2b231fa391")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//update onemovie berdasarkan id
// Movie.updateOne({ title: "Interstellar" }, { rating: 8.2 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.updateMany({ director: "Christopher Nolan" }, { rating: 8.5 })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.updateMany(
//   { title: "The Shawshank Redemption 2" },
//   { title: "The Shawshank Redemption" }
// )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.findByIdAndUpdate(
//   "65db028b30cabd2b231fa393",
//   {
//     rating: 8.9,
//   },
//   { new: true }
// )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.deleteOne({ title: "The Shawshank Redemption" }).then((result) => {
//   console.log(result);
// }).catch((err) => {
//   console.log(err);
// })
