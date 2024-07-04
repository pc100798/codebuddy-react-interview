// FormStep2.jsx
import { useForm } from "react-hook-form";
import "../Styles.css";

const FormStep2 = ({ onNext, onBack, formData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    onNext(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          {...register("firstName", {
            required: "First name is required",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "First name can only contain alphabets",
            },
            minLength: {
              value: 2,
              message: "First name must be at least 2 characters",
            },
            maxLength: {
              value: 50,
              message: "First name must be less than 50 characters",
            },
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Last name can only contain alphabets",
            },
          })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          {...register("address", {
            required: "Address is required",
            minLength: {
              value: 10,
              message: "Address must be at least 10 characters",
            },
          })}
        />
        {errors.address && <p>{errors.address.message}</p>}
      </div>
      <div className="button-container">
        <button className="back-btn" type="button" onClick={onBack}>
          Back
        </button>
        <button className="submit-btn" type="submit">
          Save and Next
        </button>
      </div>
    </form>
  );
};

export default FormStep2;
