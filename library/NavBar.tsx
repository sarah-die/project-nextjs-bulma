import {useState} from "react";

// responsible navbar that changes appearance depending on the window size

export const NavBar = () => {
    // to open and close menu in mobile version
    const [isActive, setIsActive] = useState<boolean>(false);

  return (
      // set is-white to change appearance of links and texts
    <nav className="navbar has-shadow is-white" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://marvel-filme.fandom.com/de/wiki/Scarlet_Witch">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
            // override the bulma default
            style={{maxHeight: 50}}
            alt={"This is a picture"}
          />
        </a>

        <a
          role="button"
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          onClick={() => {setIsActive(!isActive)}}
          id="burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navBar-menu" className={`navbar-menu ${isActive ? "is-active" : ""}`} onClick={() => {setIsActive(!isActive)}}>
        <div className="navbar-end">
            <a className="navbar-item" href={"/"}>Home</a>
            <a className="navbar-item" href={"/story"}>Geschichte</a>
            <a className="navbar-item" href={"/superpower"}>Superkräfte</a>
            <a className="navbar-item" href={"/trivia"}>Trivia</a>
            <a className="navbar-item" href={"/pictures"}>Bilder</a>
        </div>
      </div>
    </nav>
  );
};
