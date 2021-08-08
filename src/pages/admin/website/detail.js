import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { get } from "../../../api/productAPI";

const Detail = (props) => {
  const [products, setProducts] = useState();
  const { id } = useParams();


  // call api
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProduct();
  }, []);

  const detail = () => {
    console.log(id);
  };

  return (
    <div>
      {/* {call()} */}
      {products && <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={products.img} alt="new" />
                  </div>
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{products.name}</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
                <p className="product-description">
                  Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                  cubilia sem sem! Repudiandae et! Massa senectus enim minim
                  sociosqu delectus posuere.
                </p>
                <h4 className="price">
                  Giá: <span>{products.price}đ</span>
                </h4>
                <h5 className="sizes">
                  Option:
                  <span className="size" data-toggle="tooltip" title="small">
                    13 inch
                  </span>
                  <span className="size" data-toggle="tooltip" title="medium">
                    15.6 inch
                  </span>
                </h5>
                <h5 className="colors">
                  colors:
                  <span
                    className="color dark not-available"
                    data-toggle="tooltip"
                    title="Not In store"
                  />
                  <span className="color silver" />
                  <span className="color black" />
                </h5>
                <div className="action">
                  <button className="like add-to-cart btn btn-default" type="button">
                    Thêm vào giỏ
                  </button>
                  <button className="like2 btn btn-danger" type="button">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
      
    </div>
  );
};
export default Detail;
