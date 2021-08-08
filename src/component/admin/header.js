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
      return (
        <>
          <button
            className="btn btn-primary"
            onClick={() =>
              signOut(() => {
                setIsLogged(false);
                history.push("/");
              })
            }
          > Logout</button>
        </>
      );
    } else if (pathname === "/login" && isLogged) {
      // neu đã login và truy cập vào đường dẫn /signin
      return <Redirect to="/admin" />;
    } else {
      // ngược lại khi signout
      return (
        <> </>
      );
    }
  };

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <h2 className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" > </h2>
      
      <h2 className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        Admin LeminhStore.vn
      </h2>
      <div className="col-md-3 text-end">
        <button type="button" className="btn">
        {email}
        </button>
        {checkLogin()}
      </div>
    </header>
  );
};
export default Header;
