import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">EV-olution</div>
      <ul className="nav-menu">
        <li className='list-pop'>Home</li>
        <li className='list-pop'>Explore</li>
        <li className='list-pop'>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  )
}

export default Navbar