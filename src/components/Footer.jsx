import React from 'react'

const Footer = () => {
    return (
        <footer className='footer'>
            <p className="footer__copyright">
                &copy; {new Date().getFullYear()} ,  All Rights Reserved, Developer <span>Kadir Ula</span>
            </p>
        </footer>
    )
}

export default Footer