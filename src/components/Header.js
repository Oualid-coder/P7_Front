import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/profil">profil</Link>
        </nav>
    )
}

export default Header

