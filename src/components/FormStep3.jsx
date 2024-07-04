import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles.css";

const FormStep3 = ({ onBack, formData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const finalData = { ...formData, ...data };
    delete finalData.acceptTermsAndCondition;

    axios.post("https://codebuddy.review/submit", finalData).then((response) => {
      console.log(response.data);
      navigate("/posts");
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Country Code</label>
        <select {...register("countryCode", { required: "Country code is required" })}>
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </select>
        {errors.countryCode && <p>{errors.countryCode.message}</p>}
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          {...register("phoneNumber", {
            required: "Phone number is required",
            pattern: {
              value: /^\d{10}$/,
              message: "Phone number must be 10 digits",
            },
          })}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            {...register("acceptTermsAndCondition", {
              required: "You must accept the terms and conditions",
            })}
          />
          Accept Terms and Conditions
        </label>
        {errors.acceptTermsAndCondition && <p>{errors.acceptTermsAndCondition.message}</p>}
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

export default FormStep3;
