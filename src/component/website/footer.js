import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="wrap">
          <div className="section group">
          <div className="col_1_of_4 span_1_of_4">
              <h4>Contact</h4>
              <ul>
                <li>
                  <span>
                    Hotline: 0236.7777.999 | 0915.819.967 (Zalo, Hotline)
                  </span>
                </li>
                <li>
                  <span>Địa chỉ: 246A Phạm Cự Lượng, Sơn Trà, Đà Nẵng</span>
                </li>
              </ul>
            </div>
            <div className="col_1_of_4 span_1_of_4">
              <h4>Information</h4>
              <ul>
                <li>
                  <span>
                    <a href="">
                      Email: leminhstore.vn@gmail.com
                    </a>
                  </span>
                </li>
                <li>
                  <a href="#">Website: leminhstore.vn</a>
                </li>
              </ul>
            </div>
            <div className="col_1_of_4 span_1_of_4">
              <h4>Why buy from us</h4>
              <ul>
                <li>
                  <a href="#">
                    GPĐKKD số 32C8009190 cấp 11/01/2018, nơi cấp: UBND Quận Sơn
                    Trà, Đà Nẵng
                  </a>
                </li>
                <li>
                  <a href="#">
                    Laptop tại Đà Nẵng, Sửa Laptop, Linh Kiện Laptop, Bàn phím
                    Laptop, Ổ cứng HDD Laptop, Màn hình Laptop
                  </a>
                </li>
              </ul>
            </div>
            <div className="col_1_of_4 span_1_of_4">
              <h4>My account</h4>
              <ul>
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
                <li>
                  <Link to="">View Cart</Link>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
