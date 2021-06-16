import React from 'react'
import { render } from 'react-dom'
// import Post from '@models/Post'
// import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
// import start from './babel'
// import WebpackLogo from './assets/webpack.png'
import './styles/styles.css'
import './styles/style.scss'

// const post = new Post('Webpack Post Title', WebpackLogo)

const App = () => (
  <div className="container">
    <h1>Webpack course</h1>
    <hr />

    <div className="logo" />

    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
)

render(<App />, document.getElementById('app'))