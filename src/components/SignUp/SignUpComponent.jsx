import React from 'react';
import DocHero from "../common/DocHero.jsx";
import Form from "./Form.jsx";

const SignUpComponent = () => {
  return (
      <div className="register-container my-[100px] mx-auto px-[150px]">
          <div className="flex justify-around gap-x-[100px]">
              <DocHero />
              <Form className="basis-[100%]" />
          </div>
      </div>

  );
};

export default SignUpComponent;