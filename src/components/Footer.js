import React from 'react';
import linkedin from '../images/linkedin-icon.png'
import youtube from '../images/youtube-icon.png'
import insta from '../images/insta.png'

const style = {
    maxWidth: '50px'
}

export default function Footer() {
    return (
        <footer className="footer bg-dark mt-auto py-4">
            <div className="d-flex justify-content-center py-2">
                <a className = "mx-2" href="https://www.instagram.com/gabgardeart">
                    <img src={insta} alt="instagram" style={style} />
                </a>
                <a className = "mx-2" href="https://www.linkedin.com/in/gabriel-garde-87a22a191/">
                    <img src={linkedin} alt="linkedin" style={style} />
                </a>
                <a className = "mx-2" href="https://www.youtube.com/user/vivere00">
                    <img src={youtube} alt="youtube" style={style} />
                </a>
            </div>
            <div className="container d-flex justify-content-center">
                <span className="text-muted">
                    &copy; Gab Garde, 2022 | Designed by <a href = "https://paologarde.com" style={{ color: 'inherit', textDecoration: 'inherit'}}>Paolo Garde</a>
                </span>
            </div>
        </footer>
    )
}