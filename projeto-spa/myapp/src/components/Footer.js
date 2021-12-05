import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import '../styles/Footer.css'

const Footer = () => {
    return (
        <div id="wrapper">
            <footer>
                <div className="container container-flex">
                    <div className="icons">
                        <TwitterIcon className="icon" />
                        <GitHubIcon className="icon" />
                        <LinkedInIcon className="icon" />
                    </div>
                    <div className="line">
                        <hr />
                        <hr />
                    </div>
                    <div className="copyright">
                        <p>All rights reserverd &copy;</p>
                        <p>Made by Vinícius Arashiro</p>
                    </div>
                </div>
            </footer>
        </div >
    )
}

export default Footer;