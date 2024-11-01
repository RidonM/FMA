const router = require("express").Router();

router.get("/", (req, res) => {
  const genre = req.query.genre;

  switch (genre) {
    case "sci-fi":
      movies = {
        "Sci-fi": [
          {
            title: "Blade Runner 2049",
            year: 2017,
            director: "Denis Villeneuve",
          },
          { title: "Interstellar", year: 2014, director: "Christopher Nolan" },
          {
            title: "The Matrix",
            year: 1999,
            director: "Lana and Lilly Wachowski",
          },
          { title: "Inception", year: 2010, director: "Christopher Nolan" },
          { title: "The Terminator", year: 1984, director: "James Cameron" },
        ],
      };
      break;
    case "comedy":
      movies = {
        Comedy: [
          {
            title: "The Grand Budapest Hotel",
            year: 2014,
            director: "Wes Anderson",
          },
          { title: "Superbad", year: 2007, director: "Greg Mottola" },
          { title: "Step Brothers", year: 2008, director: "Adam McKay" },
          { title: "Groundhog Day", year: 1993, director: "Harold Ramis" },
          { title: "Anchorman", year: 2004, director: "Adam McKay" },
        ],
      };
      break;
    case "action":
      movies = {
        Action: [
          {
            title: "Mad Max: Fury Road",
            year: 2015,
            director: "George Miller",
          },
          { title: "Gladiator", year: 2000, director: "Ridley Scott" },
          { title: "Die Hard", year: 1988, director: "John McTiernan" },
          { title: "John Wick", year: 2014, director: "Chad Stahelski" },
          {
            title: "The Dark Knight",
            year: 2008,
            director: "Christopher Nolan",
          },
        ],
      };
      break;
    case "horror":
      movies = {
        Horror: [
          { title: "Get Out", year: 2017, director: "Jordan Peele" },
          {
            title: "A Nightmare on Elm Street",
            year: 1984,
            director: "Wes Craven",
          },
          { title: "The Shining", year: 1980, director: "Stanley Kubrick" },
          { title: "Hereditary", year: 2018, director: "Ari Aster" },
          { title: "The Exorcist", year: 1973, director: "William Friedkin" },
        ],
      };
      break;
    default:
      res.status(400).json({ error: "Invalid Genre" });
  }

  res.json({
    genre: movies,
  });
});

module.exports = router;
