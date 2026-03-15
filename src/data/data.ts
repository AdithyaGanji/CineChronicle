import lokiThumbnail from '../assets/trailer-thumbnails/loki.jpg'
import sinnersThumbnail from '../assets/trailer-thumbnails/sinners.jpg'
import pluribusThumbnail from '../assets/trailer-thumbnails/pluribus.jpeg'
import supermanThumbnail from '../assets/trailer-thumbnails/superman.jpeg'

// Interfaces (Types)
interface mediaObject {
  id: string,
  title: string,
  genre: string,
  releaseYear: number,
  imdbRating: string,
  posterPath: string
}

interface MovieObjectParams extends mediaObject {
  durationInMins: number
}

interface SeriesObjectParams extends mediaObject {
  seasonsCount: number
}

export interface OMDBResponse {
  Poster: string,
  
  Title: string,

  Language: string,
  Genre: string,
  Year: string,

  totalSeasons?: string,
  Runtime: string,

  Plot: string,

  imdbRating: string,

  Director: string,
  Writer: string,
  Actors: string,
  Awards: string

  Type: string
}

// Classes
export class MediaObject {
  public id: string
  public title: string
  public genre: string
  public releaseYear: number
  public imdbRating: string
  public posterPath: string

  constructor(mediaObj: mediaObject) {
    this.id = mediaObj.id
    this.title = mediaObj.title
    this.genre = mediaObj.genre
    this.releaseYear = mediaObj.releaseYear
    this.imdbRating = mediaObj.imdbRating
    this.posterPath = mediaObj.posterPath
  }
}

export class MovieObject extends MediaObject {
  public durationInMins: number

  constructor(mediaObj: MovieObjectParams) {
    super(mediaObj)
    this.durationInMins = mediaObj.durationInMins
  }
}

export class SeriesObject extends MediaObject {
  public seasonsCount: number

  constructor(mediaObj: SeriesObjectParams) {
    super(mediaObj)
    this.seasonsCount = mediaObj.seasonsCount
  }
}

// Data
export const newArrivals: Array<MovieObject> = [
  {
    id: 'tt1757678',
    title: 'Avatar: Fire and Ash',
    genre: 'Fantasy',
    releaseYear: 2025,
    durationInMins: 197,
    imdbRating: '7.4',
    posterPath: "https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 'tt5950044',
    title: 'Superman',
    genre: 'Action',
    releaseYear: 2025,
    durationInMins: 129,
    imdbRating: '7.0',
    posterPath: "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 'tt16311594',
    title: 'F1',
    genre: 'Sports',
    releaseYear: 2025,
    durationInMins: 155,
    imdbRating: '7.6',
    posterPath: "https://m.media-amazon.com/images/M/MV5BNGI0MDI4NjEtOWU3ZS00ODQyLWFhYTgtNGYxM2ZkM2Q2YjE3XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 'tt1312221',
    title: 'Frankenstein',
    genre: 'Sci-Fi',
    releaseYear: 2025,
    durationInMins: 149,
    imdbRating: '7.4',
    posterPath: "https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 'tt31036941',
    title: 'Jurassic World: Rebirth',
    genre: 'Adventure',
    releaseYear: 2025,
    durationInMins: 133,
    imdbRating: '5.8',
    posterPath: "https://m.media-amazon.com/images/M/MV5BNjg2NTcwYWQtYzk4NS00MTJhLWEzZjItMzIxNjk3YzlkYzU0XkEyXkFqcGc@._V1_SX300.jpg"
  }
].map((mediaObj) => new MovieObject(mediaObj));

export const movies: Array<MovieObject> = [
  {
    id: 'tt6751668',
    title: 'Parasite',
    genre: 'Thriller',
    releaseYear: 2019,
    durationInMins: 132,
    imdbRating: '8.5',
    posterPath: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 'tt0816692',
    title: 'Interstellar',
    genre: 'Sci-Fi',
    releaseYear: 2014,
    durationInMins: 169,
    imdbRating: '8.7',
    posterPath: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 'tt0241527',
    title: "Harry Potter and the Sorcerer's Stone",
    genre: 'Fantasy',
    releaseYear: 2001,
    durationInMins: 152,
    imdbRating: '7.7',
    posterPath: "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 'tt5074352',
    title: 'Dangal',
    genre: 'Sport',
    releaseYear: 2016,
    durationInMins: 161,
    imdbRating: '8.3',
    posterPath: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SX300.jpg"
  },
  {
    id: 'tt0848228',
    title: 'The Avengers',
    genre: 'Action',
    releaseYear: 2012,
    durationInMins: 143,
    imdbRating: '8.0',
    posterPath: "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg"
  },
].map((mediaObj) => new MovieObject(mediaObj))

export const otherTrailers: Record<string, {
  thumbnailLink: string, trailerLink: string
}> = {
  Loki: {
    thumbnailLink: lokiThumbnail,
    trailerLink: 'https://www.youtube.com/embed/nW948Va-l10?si=voMmkneBtQScIYkH'
  },
  Sinners: {
    thumbnailLink: sinnersThumbnail,
    trailerLink: 'https://www.youtube.com/embed/bKGxHflevuk?si=_CpjjE8POu8h4w8Y'
  },
  Pluribus: {
    thumbnailLink: pluribusThumbnail,
    trailerLink: 'https://www.youtube.com/embed/a6lzvWby9UE?si=B7XjIAF3eQSiPd1z'
  },
  Superman: {
    thumbnailLink: supermanThumbnail,
    trailerLink: 'https://www.youtube.com/embed/Ox8ZLF6cGM0?si=-8rXvhb46Pbj5ZlY'
  }
}

export const series: Array<SeriesObject> = [
  {
    id: 'tt5753856',
    title: 'Dark',
    genre: 'Thriller',
    releaseYear: 2017,
    seasonsCount: 3,
    imdbRating: '8.7',
    posterPath: "https://m.media-amazon.com/images/M/MV5BOWJjMGViY2UtNTAzNS00ZGFjLWFkNTMtMDBiMDMyZTM1NTY3XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 'tt6468322',
    title: 'Money Heist',
    genre: 'Crime',
    releaseYear: 2017,
    seasonsCount: 5,
    imdbRating: '8.2',
    posterPath: "https://m.media-amazon.com/images/M/MV5BZjkxZWJiNTUtYjQwYS00MTBlLTgwODQtM2FkNWMyMjMwOGZiXkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 'tt0903747',
    title: 'Breaking Bad',
    genre: 'Thriller',
    releaseYear: 2008,
    seasonsCount: 5,
    imdbRating: '9.5',
    posterPath: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 'tt4574334',
    title: 'Stranger Things',
    genre: 'Fantasy',
    releaseYear: 2016,
    seasonsCount: 5,
    imdbRating: '8.6',
    posterPath: "https://m.media-amazon.com/images/M/MV5BNjRiMTA4NWUtNmE0ZC00NGM0LWJhMDUtZWIzMDM5ZDIzNTg3XkEyXkFqcGc@._V1_SX300.jpg"
  },
  {
    id: 'tt1475582',
    title: 'Sherlock',
    genre: 'Mystery',
    releaseYear: 2010,
    seasonsCount: 4,
    imdbRating: '9.0',
    posterPath: "https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_SX300.jpg"
  },
].map((mediaObj) => new SeriesObject(mediaObj))

export const randomMedia = [
  // Movies
  "The Godfather",
  "Spirited Away",
  "City of God",
  "Everything Everywhere All at Once",
  "Seven Samurai",
  "The Dark Knight",
  "Spider-Man: Into the Spider-Verse",
  "Goodfellas",
  "The Matrix",
  "RRR",

  // Series
  "Succession",
  "Game of Thrones",
  "Squid Game",
  "The Wire",
  "The Sopranos",
  "Chernobyl",
  "Better Call Saul",
  "Shogun",

  // Sitcoms
  "The Office",
  "Friends",
  "Parks and Recreation",
  "It's Always Sunny in Philadelphia",
  "Arrested Development",
  "Modern Family",
  "Silicon Valley"
];
