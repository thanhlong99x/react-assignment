import { Link } from "react-router-dom";

const ListCategories = (props) => {
  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4" >
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý loại</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <Link
              type="button"
              className="btn btn-sm btn-outline-secondary"
              to="/admin/category/add"
            >
              Thêm loại
            </Link>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Tên loại</th>
              <th scope="col">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {props.categories.map((category, index) => (
              <tr key={index}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  {/* <button
                    className="btn btn-danger"
                    onClick={() => { if (window.confirm('Bạn có chắc chắn muốn xóa loại này?')) props.onRemove(product.id) } }
                  >
                    Delete
                  </button> */}
                  <Link
                    className="btn btn-primary "
                    to={`category/${category.id}/edit`}
                    onClick={()=>{console.log(category.id)}}
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
export default ListCategories;
