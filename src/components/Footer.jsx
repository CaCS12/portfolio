import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="social">
            <ul>
                {/* LinkedIN */}
                <li>
                    <a
                        href="https://www.linkedin.com/in/carloscabrerasemidey/"
                        target="_blank"
                    >
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                        <span> - LinkedIn</span>
                    </a>
                </li>
                {/* GitHub */}
                <li>
                    <a href="https://github.com/CaleCabrera07" target="_blank">
                        <i class="fa fa-github" aria-hidden="true"></i>
                        <span> - GitHub</span>
                    </a>
                </li>
                {/* Twitter */}
                <li>
                    <a href="https://twitter.com/CaleCabrera07" target="_blank">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <span> - Twitter</span>
                    </a>
                </li>
                {/* Instagram */}
                <li>
                    <a
                        href="https://www.instagram.com/calecabrera07"
                        target="_blank"
                    >
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                        <span> - Instagram</span>
                    </a>
                </li>
            </ul>
        </footer>
        </>
    )
}

export default Footer