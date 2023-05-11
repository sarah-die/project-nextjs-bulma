export const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://marvel-filme.fandom.com/de/wiki/Scarlet_Witch">
          <img
            src="/../public/Marvel-Comics-Logo.svg"
            // width="112" //411
            // height="28" //186
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href={"/"}>Home</a>

          <a className="navbar-item" href={"/story"}>Geschichte</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item" href={"superpower"}>Superkräfte</a>
              <a className="navbar-item" href={"trivia"}>Trivia</a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href={"pictures"}>Bilder</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
