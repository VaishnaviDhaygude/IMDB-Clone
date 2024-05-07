
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import MovieList from './components/MovieList/MovieList'
import DeatilPage from './Pages/DetailPage/DeatilPage'

function App() {


  return (
    <>
      <div className="App">
        <Router>
          <Header/>
           <Routes>
              <Route index element={<Home/>}/>
              <Route path='/movie/:id' element={<DeatilPage/>} />
              <Route path='/movies/:type' element={<MovieList/>}/>
              <Route path='/*' element={<h1>Error</h1>}/>
           </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
