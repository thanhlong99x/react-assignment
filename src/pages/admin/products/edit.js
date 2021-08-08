import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { useForm } from "react-hook-form";
import { get } from "../../../api/productAPI";

const EditFormProduct = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams(); // lay id tu tren param
  console.log(id)
  const history = useHistory();
  //call api
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await get(id);
        setProduct(data);
        reset(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const fakeValue = {
      id: id,
      ...data,
    };

    props.onEdit(fakeValue);
    history.push("/admin/product");
  };
  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
        <h2 className="h2">CẬP NHẬT SẢN PHẨM</h2>
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
                  <option value={category.id} key={index}>{category.name}</option>
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
            Cập nhật sản phẩm
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditFormProduct;
