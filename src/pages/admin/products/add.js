import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddFormProduct = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const loai = { value: "loai" };

  const onSubmit = (data) => {
    const newProduct = { ...data };
    props.onAdd(newProduct);
    history.push("/admin/product");
  };

  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
        <h2 className="h2">THÊM SẢN PHẨM</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-lg-10 ms-sm-auto  px-md-2">
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label lb-lg">
              Tên sản phẩm
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Tên sản phẩm"
                {...register("name", { required: true })}
              />

              {errors.name && (
                <span className="text-danger mt-3">
                  Tên sản phẩm không được để trống !
                </span>
              )}
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label lb-lg">
              Giá sản phẩm
            </label>
            <div className="col-sm-9">
              <input
                type="number"
                className="form-control"
                placeholder="Giá sản phẩm"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-danger mt-3">
                  Giá sản phẩm không được để trống !
                </span>
              )}
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label lb-lg">Hình ảnh</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="link hình ảnh"
                {...register("img", { required: true })}
              />
              {errors.img && (
                <span className="text-danger mt-3">
                  Link ảnh không được để trống !
                </span>
              )}
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label lb-lg">Loại</label>
            <div className="col-sm-9">
              {/* lay du lieu loại đổ ra để chọn*/}
              <select className="form-control" {...register("type")}>
                {props.categories.map((category, index) => (
                  <option value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label lb-lg">Trạng thái</label>
            <div className="col-sm-9">
              <select className="form-control" {...register("status")}>
                <option value={false}>Hết hàng</option>
                <option value={true}>Còn hàng</option>
              </select>
            </div>
          </div>
        </div>
        <div className="button-midle">
          <button type="submit" className="btn btn-primary  ">
            Thêm sản phẩm
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddFormProduct;
