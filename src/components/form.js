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
      <div className="container mt-5 pt-5">
        <h2 className="text-center mb-4">
          Your
          <br />
          <span className="form-title">PROJECT IDEA</span>
        </h2>
        <p className="text-center form-p mb-5">
          Fill the form and describe your project idea.{" "}
          <span>Software Supplier</span> will get back to you.
        </p>
      </div>
      <div data-tf-live={formId} className="mb-5 text-center"></div>
    </>
  );
};

export default TypeformEmbed;
