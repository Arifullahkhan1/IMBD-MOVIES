import { Link, Outlet } from "react-router-dom";
import "./../styles/Layout.css"
export function Layout(){
    return(<div className="layout">
    <header>
      <nav>
        <ul>
          <li  >
            <Link className="li" to="/">Home</Link>
          </li>
          <li>
            <Link className="li" to="/about">About</Link>
          </li>
          <li>
            <Link className="li" to="/Kontact">Contact</Link>
          </li>
          <li>
            <Link className="li" to="/Movies">Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
    <section>
      <aside> ASIDE </aside>
      <main>
        <Outlet />
      </main>
    </section>
    <footer> FOOTER </footer>
  </div>
);
}