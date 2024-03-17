import React, { useEffect } from "react";

const TypeformEmbed = ({ formId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">
          <span className="form-title">Software Company Registration Form</span>
        </h2>
      </div>
      <div data-tf-live={formId} className="mb-5 pb-5 text-center"></div>
    </>
  );
};

export default TypeformEmbed;
