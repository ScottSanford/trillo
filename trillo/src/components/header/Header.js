import React from 'react'
import './Header.css'

export default function Header() {
	return (
		<div className="header">
			<img src="../../img/logo.png"alt="Trillo Logo" className="logo" />

      {/* Search Input */}
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

      <nav className="user-nav">
            <div className="user-nav__icon-box user-nav__notify">
                <svg className="user-nav__icon">
                    <use xlinkHref="img/sprite.svg#icon-bookmark" />
                </svg>
                <span className="user-nav__notification">7</span>
            </div>

            {/* Notifications Dropdown */}
            <div className="user-nav__notifications">
                <ul className="user-nav__notifications-list">
                    <li className="user-nav__notification-item">
                        <a href="#" className="user-nav__notification-link">
                            <svg className="user-nav__notification-icon">
                                <use xlinkHref="img/sprite.svg#icon-aircraft-take-off" />
                            </svg>
                            <span className="user-nav__notification-message">Check into your flight <span className="user-nav--is-bold">#1619</span>.</span>
                            <span className="user-nav__notification-date">Jun 20th</span>
                        </a>
                    </li>
                    <li className="user-nav__notification-item">
                        <a href="#" className="user-nav__notification-link">
                            <svg className="user-nav__notification-icon">
                                <use xlinkHref="img/sprite.svg#icon-map" />
                            </svg>
                            <span className="user-nav__notification-message">Your <span className="user-nav--is-bold">AlgarExperience, Enjoy the Sea</span> reservation has been confirmed.</span>
                            <span className="user-nav__notification-date">Jun 18th</span>
                        </a>
                    </li>
                    <li className="user-nav__notification-item">
                        <a href="#" className="user-nav__notification-link">
                            <svg className="user-nav__notification-icon">
                                <use xlinkHref="img/sprite.svg#icon-key" />
                            </svg>
                            <span className="user-nav__notification-message">Your <span className="user-nav--is-bold">Fiat 500</span> car reservation has been confirmed.</span>
                            <span className="user-nav__notification-date">Jun 18th</span>
                        </a>
                    </li>
                    <li className="user-nav__notification-item">
                        <a href="#" className="user-nav__notification-link">
                            <svg className="user-nav__notification-icon">
                                <use xlinkHref="img/sprite.svg#icon-home" />
                            </svg>
                            <span className="user-nav__notification-message">Your hotel reservation at <span className="user-nav--is-bold">Hotel Las Palmas</span> have been confirmed.</span>
                            <span className="user-nav__notification-date">Jun 16th</span>
                        </a>
                    </li>
                </ul>
                <div className="user-nav__see-all">
                    <button className="btn-inline">See all</button>
                </div>
            </div>

                    <div className="user-nav__icon-box user-nav__chat">
                        <svg className="user-nav__icon">
                            <use xlinkHref="img/sprite.svg#icon-chat" />
                        </svg>
                        <span className="user-nav__notification">13</span>
                    </div>

                    {/* Messages Dropdown */}
                    <div className="user-nav__messages">
                        <ul className="user-nav__message-list">
                            <li className="user-nav__message-item">
                                <a href="#" className="user-nav__message-link">
                                    <img src="img/paige.jpeg" className="user-nav__message-photo" />
                                    <div className="user-nav__message-content">
                                        <span className="user-nav__message-name">Paige Spychalski</span>
                                        <span className="user-nav__message-date">Jun 15th</span>
                                        <span className="user-nav__message">Lorem ipsum dolor alem sit amet...</span>
                                    </div>
                                </a>
                            </li>
                            <li className="user-nav__message-item">
                                <a href="#" className="user-nav__message-link">
                                    <img src="img/user-1.jpg" className="user-nav__message-photo" />
                                    <div className="user-nav__message-content">
                                        <span className="user-nav__message-name">Nick Smith</span>
                                        <span className="user-nav__message-date">Jun 8th</span>
                                        <span className="user-nav__message">Lorem ipsum dolor alem sit amet...</span>
                                    </div>
                                </a>
                            </li>
                            <li className="user-nav__message-item">
                                <a href="#" className="user-nav__message-link">
                                    <img src="img/user-2.jpg" className="user-nav__message-photo" />
                                    <div className="user-nav__message-content">
                                        <span className="user-nav__message-name">Mary Thomas</span>
                                        <span className="user-nav__message-date">May 21st</span>
                                        <span className="user-nav__message">Lorem ipsum dolor alem sit amet...</span>
                                    </div>
                                </a>
                            </li>
                            <li className="user-nav__message-item">
                                <a href="#" className="user-nav__message-link">
                                    <img src="img/user-3.jpg" className="user-nav__message-photo" />
                                    <div className="user-nav__message-content">
                                        <span className="user-nav__message-name">Luke Walker</span>
                                        <span className="user-nav__message-date">Jan 15th</span>
                                        <span className="user-nav__message">Lorem ipsum dolor alem sit amet...</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="user-nav__view-more">
                            <button className="btn-inline">New message</button>
                            <button className="btn-inline">View all messages</button>
                        </div>
                    </div>

                    <div className="user-nav__user">
                        <img src="img/scott.jpeg" alt="User photo" className="user-nav__user-photo" />
                        <span className="user-nav__user-name">Scott</span>
                    </div>

                    {/* User Dropdown */}
                    <div className="user-nav__dropdown">
                        <ul className="user-nav__dropdown-list">
                            <li className="user-nav__dropdown-item">
                                <a href="#" className="user-nav__dropdown-link">
                                    <svg className="user-nav__dropdown-icon">
                                        <use xlinkHref="img/sprite.svg#icon-user" />
                                    </svg>
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li className="user-nav__dropdown-item">
                                <a href="#" className="user-nav__dropdown-link">
                                    <svg className="user-nav__dropdown-icon">
                                        <use xlinkHref="img/sprite.svg#icon-suitcase" />
                                    </svg>
                                    <span>Reservations</span>
                                </a>
                            </li>
                            <li className="user-nav__dropdown-item">
                                <a href="#" className="user-nav__dropdown-link">
                                    <svg className="user-nav__dropdown-icon">
                                        <use xlinkHref="img/sprite.svg#icon-cog" />
                                    </svg>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li className="user-nav__dropdown-item">
                                <a href="#" className="user-nav__dropdown-link">
                                    <svg className="user-nav__dropdown-icon">
                                        <use xlinkHref="img/sprite.svg#icon-log-out" />
                                    </svg>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
		</div>
	)
}