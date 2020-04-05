import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Content from './components/content/Content'

/**
 * Thought Process:
 * 1. The 1st goal was to take the static page and get it working in some high level React Components.
 * 2. Break up the UI into a Component Hierarchy
 * 3. Remove lists of elements by mocking fake data with object arrays. Map through objects
 * 4. Pass object arrays up to parent to control state. React is all about one-way data flow,
 * so naturally data should be controlled in a parent component. Data is owned in the Content component
 */

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  )
}

export default App
