export const initialMovies = [
  {
    title: 'The Shawshank Redemption',
    synopsis:
      'Two imprisoned men bond over years, finding solace and redemption through acts of common decency.',
    year: 1994,
    rating: 9.3,
  },
  {
    title: 'Transformers: Revenge of the Fallen',
    synopsis:
      'Sam Witwicky joins the Autobots in a global struggle against the Decepticons.',
    year: 2009,
    rating: 6.0,
  },
  {
    title: 'The Godfather',
    synopsis:
      'The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.',
    year: 1972,
    rating: 9.2,
  },
  {
    title: 'The Dark Knight',
    synopsis:
      'Batman faces the Joker, a criminal mastermind unleashing chaos on Gotham.',
    year: 2008,
    rating: 9.0,
  },
  {
    title: 'The Room',
    synopsis:
      "A successful banker's life unravels after his fiancée betrays him with his best friend.",
    year: 2003,
    rating: 3.7,
  },
  {
    title: "Schindler's List",
    synopsis:
      'Oskar Schindler becomes concerned for his Jewish workforce after witnessing their persecution.',
    year: 1993,
    rating: 9.0,
  },
  {
    title: 'Twilight',
    synopsis:
      'A teenage girl risks everything when she falls in love with a vampire.',
    year: 2008,
    rating: 5.3,
  },
  {
    title: 'Pulp Fiction',
    synopsis:
      'Interwoven stories of crime, redemption, and fate in Los Angeles.',
    year: 1994,
    rating: 8.9,
  },
  {
    title: 'Green Lantern',
    synopsis:
      'A test pilot becomes a galactic superhero after receiving a mystical ring.',
    year: 2011,
    rating: 5.5,
  },
  {
    title: 'Cats',
    synopsis:
      'A tribe of cats must decide which one will ascend to the Heaviside Layer.',
    year: 2019,
    rating: 2.7,
  },
  {
    title: 'Forrest Gump',
    synopsis:
      'A man with a low IQ witnesses and influences many historical events.',
    year: 1994,
    rating: 8.8,
  },
  {
    title: 'Inception',
    synopsis:
      "A skilled thief is given a chance to erase his past if he can implant an idea into a target's mind.",
    year: 2010,
    rating: 8.8,
  },
  {
    title: 'The Meg',
    synopsis: 'A deep-sea crew faces a prehistoric shark long thought extinct.',
    year: 2018,
    rating: 5.6,
  },
  {
    title: 'Justice League',
    synopsis:
      'Batman and Wonder Woman recruit a team of heroes to stop an apocalyptic threat.',
    year: 2017,
    rating: 6.1,
  },
  {
    title: 'The Matrix',
    synopsis:
      'A hacker discovers the reality he lives in is a simulation controlled by machines.',
    year: 1999,
    rating: 8.7,
  },
  {
    title: 'Morbius',
    synopsis:
      'A biochemist with a rare blood disorder becomes a vampire in his quest for a cure.',
    year: 2022,
    rating: 5.2,
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    synopsis:
      'A man fakes insanity and battles the tyranny of a mental institution.',
    year: 1975,
    rating: 8.7,
  },
  {
    title: 'Se7en',
    synopsis:
      'Two detectives pursue a killer who uses the seven deadly sins as his motive.',
    year: 1995,
    rating: 8.6,
  },
  {
    title: 'The Emoji Movie',
    synopsis:
      'An emoji embarks on a journey to become "normal" in a world of texting.',
    year: 2017,
    rating: 3.3,
  },
  {
    title: 'Fantastic Four',
    synopsis:
      'Four young scientists gain superpowers during a teleportation experiment.',
    year: 2015,
    rating: 4.3,
  },
  {
    title: 'The Silence of the Lambs',
    synopsis:
      'A young FBI trainee seeks help from a cannibalistic killer to catch another murderer.',
    year: 1991,
    rating: 8.6,
  },
  {
    title: 'The Happening',
    synopsis:
      'A science teacher and his family flee a mysterious natural disaster.',
    year: 2008,
    rating: 5.0,
  },
  {
    title: 'Saving Private Ryan',
    synopsis:
      'A WWII squad is sent to rescue a paratrooper whose brothers have died in action.',
    year: 1998,
    rating: 8.6,
  },
  {
    title: 'Interstellar',
    synopsis:
      'A team explores a wormhole in search of a new home for humanity.',
    year: 2014,
    rating: 8.6,
  },
  {
    title: 'Batman & Robin',
    synopsis:
      "Batman and Robin try to stop Mr. Freeze and Poison Ivy's evil plans.",
    year: 1997,
    rating: 3.8,
  },
  {
    title: 'Léon: The Professional',
    synopsis: 'An assassin mentors a young girl whose family has been killed.',
    year: 1994,
    rating: 8.5,
  },
  {
    title: 'The Core',
    synopsis:
      "A team journeys to the Earth's core to restart the planet's magnetic field.",
    year: 2003,
    rating: 5.5,
  },
  {
    title: 'Jupiter Ascending',
    synopsis: 'A young woman discovers her destiny as intergalactic royalty.',
    year: 2015,
    rating: 5.3,
  },
  {
    title: 'The Pianist',
    synopsis:
      'A Polish Jewish musician struggles to survive the Nazi occupation.',
    year: 2002,
    rating: 8.5,
  },
  {
    title: 'Gladiator',
    synopsis: 'A betrayed Roman general fights his way back for revenge.',
    year: 2000,
    rating: 8.5,
  },
].map((movie, index) => ({
  id: index + 1,
  ...movie,
}));
