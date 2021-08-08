import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductById = (props) => {
  const { id } = useParams();
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
            {props.products.map((product, index) =>
              id == product.type ? (
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
                      <Link to={`detail/${product.id}`} className="card-title">
                        {product.name}
                      </Link>
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
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductById;
