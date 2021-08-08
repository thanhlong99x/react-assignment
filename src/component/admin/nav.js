import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <img
              src="https://driver.gianhangvn.com/image/leminhstore-logo-x128-1403927j17102.jpg"
              alt=""
              style={{ width: 300, height: 60 }}
            />
            <hr />
            <NavLink activeClassName="active" className="nav-link" to="/">
              <span data-feather="shopping-cart">Home</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link active"
              aria-current="page"
              to="/admin/product"
            >
              <span data-feather="home">Products</span>
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="nav-link active"
              aria-current="page"
              to="/admin/category"
            >
              <span data-feather="home">Category</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
