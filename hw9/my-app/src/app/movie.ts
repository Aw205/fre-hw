export interface Movie {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface MovieImages {
    backdrops: Backdrop[]
    id: number
    logos: Logo[]
    posters: Poster[]
  }
  
  export interface Backdrop {
    aspect_ratio: number
    height: number
    iso_639_1?: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
  }
  
  export interface Logo {
    aspect_ratio: number
    height: number
    iso_639_1: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
  }
  
  export interface Poster {
    aspect_ratio: number
    height: number
    iso_639_1?: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
  }
  
