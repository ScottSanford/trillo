import React from 'react'
import './search-input.css'

export default function SearchInput() {
	return (
		<form action="#" className="search">
          <input type="text" className="search__input" placeholder="Search hotels" />
          <button className="search__button">
              <svg className="search__icon">
                  <use xlinkHref="img/sprite.svg#icon-magnifying-glass" />
              </svg>
          </button>
          
          {/* Search Results */}
           <div className="search__latest-searches">
              <div className="search__title">
                  <span>Recent Searches</span>
                  <button className="btn-inline">View all</button>
              </div>
              <ul className="search__list">
                  <li className="search__query">
                      <svg className="search__icon">
                          <use xlinkHref="img/sprite2.svg#icon-back-in-time" />
                      </svg>
                      <span>Hotels near Albufeira</span>
                  </li>
                  <li className="search__query u--margin-bottom-small">
                      <svg className="search__icon">
                          <use xlinkHref="img/sprite2.svg#icon-back-in-time" />
                      </svg>
                      <span>Hotels in Barcelona</span>
                  </li>
              </ul>
              <div className="search__title">
                  <span>What's Trending</span>
              </div>
              <ul className="search__list">
                  <li className="search__query">
                      <svg className="search__icon">
                          <use xlinkHref="img/sprite2.svg#icon-trending-up" />
                      </svg>
                      <span>Hotels near the Roman Colosseum</span>
                  </li>
                  <li className="search__query">
                      <svg className="search__icon">
                          <use xlinkHref="img/sprite2.svg#icon-trending-up" />
                      </svg>
                      <span>Cheap hotels in Europe</span>
                  </li>
              </ul>
          </div>
      </form>
	)
}