
function Header() {
    return (
        <nav className="indigo darken-4">
            <div className="nav-wrapper container">

                <a href="/" className="brand-logo">React Shop</a>
                {/* <Link to="/" className="brand-logo">React Shop</Link> */}

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://navi-com.github.io/react_shop/" target="_blank">Home</a>
                        {/* <NavLink to='/' className={setActive}>Home</NavLink> */}
                    </li>
                    <li>
                        <a href="/about">About Me</a>
                        {/* <NavLink to='/about' className={setActive}>About Me</NavLink> */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export { Header };