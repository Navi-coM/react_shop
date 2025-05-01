function Footer() {
    return (
        <footer className="page-footer blue-grey darken-3">
            <div className="container  ">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">SPA Shop from Ivan</h5>
                        <p className="grey-text text-lighten-4">"Through hardship to the stars!"</p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright  grey darken-4">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Shop
                    <a className="grey-text text-lighten-4 right" href="#!">Git Repo</a>
                </div>
            </div>
        </footer>
    )
}

export { Footer };