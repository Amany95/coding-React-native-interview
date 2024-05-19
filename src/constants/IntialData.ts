import {IMovieDetails} from '../interfaces/MovieDetails';

export const initialMovieDetails: IMovieDetails = {
  adult: false,
  backdrop_path: '',
  belongs_to_collection: null,
  budget: 0,
  genres: [
    {
      id: 0,
      name: '',
    },
  ],
  homepage: '',
  id: 0,
  imdb_id: '',
  origin_country: [],
  original_language: '',
  original_title: '',
  overview: '',
  popularity: 0,
  poster_path: '',
  production_companies: [
    {
      id: 0,
      logo_path: '',
      name: '',
      origin_country: '',
    },
  ],
  production_countries: [
    {
      iso_3166_1: '',
      name: '',
    },
  ],
  release_date: '',
  revenue: 0,
  runtime: 0,
  spoken_languages: [
    {
      english_name: '',
      iso_639_1: '',
      name: '',
    },
  ],
  status: '',
  tagline: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0,
};
