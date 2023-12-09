export default function Nav({ links }) {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container-fluid">
          <h1 className="text-light col-8 px-lg-5">Emmanuel Exiga</h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  