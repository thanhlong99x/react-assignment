import { Link } from "react-router-dom";

const ListProducts = (props) => {
  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý sản phẩm</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Link
              type="button"
              className="btn btn-sm btn-outline-secondary"
              to="/admin/product/add"
            >
              Thêm sản phẩm
            </Link>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Giá sản phẩm</th>
              <th scope="col">Hình ảnh</th>
              <th scope="col">Loại</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}đ</td>
                <td>
                  <img
                    src={product.img}
                    alt="new"
                    style={{ width: 100, height: 100 }}
                  />
                </td>
                <td>
                  {props.categories.map((category) =>
                    category.id == product.type ? category.name : ""
                  )}
                </td>
                <td>
                  {product.status ? (
                    <span className="text-primary">Còn hàng</span>
                  ) : (
                    <span className="text-danger">Hết hàng</span>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Bạn có chắc chắn muốn xóa sản phẩm này?"
                        )
                      )
                        props.onRemove(product.id);
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-primary "
                    to={`product/${product.id}/edit`}
                    // onClick={()=>{console.log(product.id)}}
                  >
                    {" "}
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListProducts;
