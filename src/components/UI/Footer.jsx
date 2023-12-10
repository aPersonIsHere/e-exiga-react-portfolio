export default function Footer({ links }) {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 col text-center">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  