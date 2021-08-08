import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import { useForm } from "react-hook-form";
import { getC } from "../../../api/categoryAPI";

const EditFormCategory = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams(); // lay id tu tren param
  const history = useHistory();

  const edit = () => {
    if (id == undefined) {
      console.log("khong the lay id");
    } else {
      console.log(id);
    }
  };

  //call api
  useEffect(() => {
    const getProduct = async () => {
      try {
        edit(id);
        const { data } = await getC(id);
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

    props.onEditC(fakeValue);
    history.push("/admin/category");
  };
  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
        <h2 className="h2">CẬP NHẬT LOẠI</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-lg-10 ms-sm-auto  px-md-2">
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label lb-lg">Tên loại</label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                placeholder="Tên loại"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-danger mt-3">
                  Tên loại không được để trống !
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="button-midle">
          <button type="submit" className="btn btn-primary  ">
            Cập nhật loại
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditFormCategory;
