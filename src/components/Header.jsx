import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {

    const [isMobile, setIsMobile] = useState(false)
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                setSticky(true);
            }
            else {
                setSticky(false)
            }
        });
    }, [])

    return (
        <div className={`header ${sticky ? 'sticky' : ''}`}>
            <Container>
                <div className="header__wrapper">
                    <Link to='/' className="header__logo">
                        Movie
                    </Link>
                    <div className={`header__menu ${isMobile ? 'show' : ''}`}>
                        <NavLink to='/' className="header__menu-item">Home</NavLink>
                        <NavLink to='/popular' className="header__menu-item">Popular</NavLink>
                        <NavLink to='/top-rated' className="header__menu-item">Top Rated</NavLink>
                        <NavLink to='/upcoming' className="header__menu-item">Upcoming</NavLink>
                    </div>
                    <div className="header__hamburger" onClick={() => setIsMobile(!isMobile)}>
                        {
                            isMobile ?
                                <FaTimes className='header__hamburger-icon' />
                                :
                                <FaBars className='header__hamburger-icon' />
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header