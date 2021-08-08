import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <div>
        <div class="content">
          <div class="content_top">
            <div class="heading">
              <h3>New Products</h3>
            </div>
            <div class="see">
              <p>
                <Link>See all Products</Link>
              </p>
            </div>
            <div class="clear"></div>
          </div>
          <div class="section group">
            {props.products.map((product, index) => (
              <div>
                <div class="grid_1_of_4 images_1_of_4">
                  <Link to={`detail/${product.id}`}>
                    <img
                      src={product.img}
                      alt="new"
                      style={{ width: 250, height: 200 }}
                    />
                  </Link>
                  <div className="card-body">
                    <Link to={`detail/${product.id}`} className="card-title">{product.name}</Link>
                  </div>
                  <div class="price-details">
                    <div class="price-number">
                      <p>
                        <span class="rupees">{product.price} đ</span>
                      </p>
                    </div>
                    <div class="add-cart">
                      <h4>
                        <Link to="/">Add to Cart</Link>
                      </h4>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>

                {/* <div className="row text-center">
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="card h-100">
                    <a>
                    <img
                      src={product.img}
                      alt="new"
                      style={{ width: 250, height: 200 }}
                    />
                    </a>
                    <div className="card-body">
                      <h3 className="card-title">{product.name}</h3>
                    </div>
                    <div className="card-footer">
                      <a className="btn btn-primary">Chi tiết</a>
                    </div>
                  </div>
                </div>
              </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
