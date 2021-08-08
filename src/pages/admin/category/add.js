import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddFormCategory = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    const newCategory = { ...data };
    props.onAddC(newCategory);
    history.push("/admin/category");
  };

  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
        <h2 className="h2">THÊM LOẠI</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-lg-10 ms-sm-auto  px-md-2">
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label lb-lg">
              Tên loại
            </label>
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
            Thêm loại
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddFormCategory;
