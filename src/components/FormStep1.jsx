import { useForm } from "react-hook-form";
import "../Styles.css";

const FormStep1 = ({ onNext, formData }) => {
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
        <label>Email</label>
        <input
          type="email"
          {...register("emailId", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.emailId && <p>{errors.emailId.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            validate: {
              capital: (value) =>
                /[A-Z].*[A-Z]/.test(value) || "Must contain at least 2 capital letters",
              small: (value) =>
                /[a-z].*[a-z]/.test(value) || "Must contain at least 2 small letters",
              number: (value) => /\d.*\d/.test(value) || "Must contain at least 2 numbers",
              special: (value) =>
                /[!@#$%^&*(),.?":{}|<>].*[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                "Must contain at least 2 special characters",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Save and Next</button>
    </form>
  );
};

export default FormStep1;
