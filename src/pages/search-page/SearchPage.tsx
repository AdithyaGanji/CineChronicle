import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router'

import Navbar from '../../components/navbar/Navbar';

import FallbackPoster from '../../assets/images/fallback-poster.png'

import SearchTitleAttributes from './SearchTitleAttributes';
import SearchTitleCredits from './SearchTitleCredits';

import type { OMDBResponse } from '../../data/data';

import './SearchPage.css'

const API_KEY:string = import.meta.env.VITE_API_KEY;

export default function SearchPage() {
  // const sampleResponse: object = {
  //   "Title": "The Avengers",
  //   "Year": "2012",
  //   "Rated": "PG-13",
  //   "Released": "04 May 2012",
  //   "Runtime": "143 min",
  //   "Genre": "Action, Sci-Fi",
  //   "Director": "Joss Whedon",
  //   "Writer": "Joss Whedon, Zak Penn",
  //   "Actors": "Robert Downey Jr., Chris Evans, Scarlett Johansson",
  //   "Plot": "Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a. the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner, a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and the alien invasion.",
  //   "Language": "English, Russian",
  //   "Country": "United States",
  //   "Awards": "Nominated for 1 Oscar. 40 wins & 81 nominations total",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg",
  //   "Ratings": [
  //       {
  //           "Source": "Internet Movie Database",
  //           "Value": "8.0/10"
  //       },
  //       {
  //           "Source": "Rotten Tomatoes",
  //           "Value": "91%"
  //       },
  //       {
  //           "Source": "Metacritic",
  //           "Value": "69/100"
  //       }
  //   ],
  //   "Metascore": "69",
  //   "imdbRating": "8.0",
  //   "imdbVotes": "1,547,278",
  //   "imdbID": "tt0848228",
  //   "Type": "movie",
  //   "DVD": "N/A",
  //   "BoxOffice": "$623,357,910",
  //   "Production": "N/A",
  //   "Website": "N/A",
  //   "Response": "True"
  // }

  const [searchParams] = useSearchParams()
  const [title, type] = [searchParams.get('title'), searchParams.get('type')]

  const [response, setResponse] = useState<OMDBResponse | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [isSearchValid, setIsSearchValid] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true)
      setIsSearchValid(true) // Initally assume search is valid

      const result = await axios.get(`https://www.omdbapi.com/?t=${title}&type=${type}&apikey=${API_KEY}`)
      setIsFetching(false)

      if (result.data.Response === "True") {
        setResponse(result.data)
        setIsSearchValid(true)
      } else {
        setIsSearchValid(false)
      }
    }

    fetchData()
  }, [title, type])

  return (
    <>
      <Navbar />
      {(isFetching) && (
        <div className="fallback-container container">
          <svg className="loading-animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="20" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="20" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="20" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
        </div>
      )}

      {(!isFetching && !isSearchValid) && (
        <div className="fallback-container container">
          <span className="refine-search-message">Please refine your search!</span>
        </div>
      )}

      {(response && !isFetching && isSearchValid) && (
        <div className="search-result-container container">
          <div className="search-title-container">
            <img
              className="title-poster"
              src={response.Poster}
              alt="Search result media poster"
              onError={(e) => e.currentTarget.src = FallbackPoster}
            />

            <div className="search-title-info">
              <div className="st-name-and-type">
                <span className="search-title-name">{response.Title}</span>
                <span className="search-title-type">{response.Type}</span>
              </div>

              <SearchTitleAttributes mediaObj={response} />

              {(response.Plot !== "N/A") && (
                <div className="st-plot">{response.Plot}</div>
              )}

              {(response.imdbRating !== "N/A") && (
                <div className="st-rating-wrapper">
                  <svg className="st-rating-icon" xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" color="#f5c518ff" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
                  <div className="st-rating-container">
                    <span className="st-rating">{response.imdbRating}</span> / <span className="st-rating-threshold">10</span>
                  </div>
                </div>
              )}

              <div className="divider"></div>

              <SearchTitleCredits mediaObj={response} />

              <div className="divider"></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
