import { useState } from 'react';
function App(){
  const[movies, setMovies] = useState([]);
  return(
    <>
    <input type='text' className="searchbar" placeholder="Search"/>
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>Movies</li>
        <li>Series</li>
      </ul>
    </nav>
    <div className="moviebar">
      {movies.map((movie) =>(
        <div key={movie.id} className="movie-card">
          <img src={movie.Poster}/>
          <p>{movie.Title}</p>
          </div>
      ))}

    </div>
    </>
  )

}

export default App;



const [user, setUser] = useState(["name": "Erica", "age": 21, "city": "los ang"])

const handleChange = (e) =>{
  const{name, value} = e.target;

  setUser((prevUser) => ({...prevUser, [name]: value}))
}
const additem= () => {

}

const Counter = () =>{
  const 
  useEffect(() => {
    document.title = `the title is ${counter}`
  }, [counter])
}

return(
  <>
  <button onClick= {Counter}></button>
  </>
)