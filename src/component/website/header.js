import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { signOut, isAuthenticate } from "../../auth/admin";
import { useLocation } from "react-router-dom";

const Header = () => {
  const history = useHistory(); // sau khi logout thì quay về trang nào đó
  const { pathname } = useLocation(); // pathname: Để lấy cái đường dẫn sau domain ví dụ: dantri.com/[pathname]
  const [isLogged, setIsLogged] = useState(false); // set state để sau này check trạng thái đã đăng nhập hay chưa
  const { email, sub } = isAuthenticate(); // lấy thông tin từ localStorage: email, id để hiển thị ra ngoài và check quyền
  useEffect(() => {
    // render sau khi return chạy
    isAuthenticate() && setIsLogged(true); // nếu mà thằng user đăng nhập (có thông tin localStorage) thì set state là true
  }, [pathname, isLogged]);

  const checkLogin = () => {
    if (pathname !== "/login" && isLogged) {
      // nếu pathname thay đổi (!= signin) và đã đăng nhập
      if (sub == 1) {
        return (
          <>
            <li>
              <Link
                exact
                className="py-2 d-none d-md-inline-block"
                aria-current="page"
                to={sub == 1 ? "/admin" : "/"}
              >
                Manager
              </Link>
            </li>

            <li>
              <Link
                className="py-2 d-none d-md-inline-block"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  signOut(() => {
                    setIsLogged(false);
                    history.push("/");
                  })
                }
              >
                Sign Out
              </Link>
            </li>
          </>
        );
      } else {
        return (
          <>
            <li>
              <Link
                className="py-2 d-none d-md-inline-block"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  signOut(() => {
                    setIsLogged(false);
                    history.push("/");
                  })
                }
              >
                Sign Out
              </Link>
            </li>
          </>
        );
      }
    } else if (pathname === "/login" && isLogged) {
      // neu đã login và truy cập vào đường dẫn /signin
      return <Redirect to="/" />;
    } else {
      // ngược lại khi signout
      return (
        <>
          <li>
            <Link to="/login" class="py-2 d-none d-md-inline-block">
              Log In
            </Link>
          </li>
          <li>
            <Link class="py-2 d-none d-md-inline-block" to="/signup">
              Sign Up
            </Link>
          </li>
        </>
      );
    }
  };

  return (
    <div className="wrap">
      <div className="header">
        <div className="headertop_desc">
          <div className="call">
            <p>
              <span>Need help?</span> call us{" "}
              <span className="number">1-22-3456789</span>
            </p>
          </div>
          <div className="account_desc">
            <ul>
              <li>{email}</li>
              {checkLogin()}
            </ul>
          </div>
          <div className="clear" />
        </div>
        <div className="header_top">
          <div className="logo">
            <Link to="/">
              <img
                src="https://driver.gianhangvn.com/image/leminhstore-logo-x128-1403927j17102.jpg"
                alt=""
                style={{ width: 500, height: 100 }}
              />
            </Link>
          </div>
          <div className="cart">
            <p>
              Welcome to our Online Store! <span>Cart:</span>
            </p>
            <div id="dd" className="wrapper-dropdown-2">
              {" "}
              0 item(s) - $0.00
              <ul className="dropdown">
                <li>you have no items in your Shopping cart</li>
              </ul>
            </div>
            <p />
          </div>
          <div className="clear" />
        </div>
        <div className="header_bottom">
          <div className="menu">
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/category/1">Điện thoại</Link>
              </li>
              <li>
                <Link to="/category/2">Laptop</Link>
              </li>
              <div className="clear" />
            </ul>
          </div>
          <div className="search_box">
            <form>
              <input
                type="text"
                defaultValue="Search"
                onfocus="this.value = '';"
                onblur="if (this.value == '') {this.value = 'Search';}"
              />
              <input type="submit" defaultValue />
            </form>
          </div>
          <div className="clear" />
        </div>
      </div>
    </div>
  );
};

export default Header;
