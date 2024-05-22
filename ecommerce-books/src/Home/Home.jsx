import { Link } from 'react-router-dom'
import './home.css'


export const Home = () => {
  return (
    <div className='navbar-container'>
        <div className="navbar-title-container">

        <h1>E-Commerce Book Store</h1>
        </div>
        <nav className='navbar-home'>
            <img src="#" alt="book-logo" />
          <ul className='navbar-ul'>
            <li className='navbar-li'>Acerca de</li>    
            <Link to="/list"> <li className='navbar-li'>Libros</li>   </Link> 
            <li className='navbar-li'>Contacto</li> 
        </ul>  
        </nav>

    </div>
  )
}
