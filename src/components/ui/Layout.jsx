import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <>
      <header>
        <div className="logo">Css Resources</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All resources</Link>
            </li>
            <li>
              <Link to="/add">New Resource</Link>
            </li>
            <li>
              <Link to="favourites">Favourites</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{props.children}</main>
    </>
  );
}

export default Layout;
