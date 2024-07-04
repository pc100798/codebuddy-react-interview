import { useState } from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";

const FormWrapper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNextStep = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      {currentStep === 1 && <FormStep1 onNext={handleNextStep} formData={formData} />}
      {currentStep === 2 && (
        <FormStep2 onNext={handleNextStep} onBack={handlePrevStep} formData={formData} />
      )}
      {currentStep === 3 && <FormStep3 formData={formData} onBack={handlePrevStep} />}
    </div>
  );
};

export default FormWrapper;
