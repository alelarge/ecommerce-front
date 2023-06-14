import '../scss/Navbar.scss';

export default function Navbar(){
    return(
        <body>
            <nav className="navbar">
                <div className="logo">Miel et gourmandises</div>
                <ul className="nav-links">
                    {/* <input type="checkbox"id="chexboc_toogle"/> */}
                    <label htmlFor="checkbox_toogle" className="hamburger"></label>
                    <div className="menu">
                        <a href="/">Accueil</a>
                        <a href="/">A propos</a>
                        <a href="/">Tous les produits</a>
                            <ul className="dropdown">
                                <li><a href="/">Miel de fleurs</a></li>
                                <li><a href="/">Miel forêt</a></li>
                                <li><a href="/">Miel tilleul</a></li>
                            </ul>
                        <a href="/">Panier</a>
                        <a href="/">Contact</a>
                    </div>
                </ul>
            </nav>    
        </body>
    )
}