import React from 'react';
import Form from "./Form.jsx";

function SignUpLeftSection() {
    return (
        <div className="bg-customTealBlue basis-[40%] min-h-full w-full rounded-tl-[10px] rounded-bl-[10px]">
            <h1 className="text-white text-[24px] font-bold logo flex items-center">
                Health<span className="text-customGreen">care</span>
            </h1>
            <img src="/images/logo.png" alt=""/>

            <img src="https://cdn.dribbble.com/userupload/27385089/file/original-7c46cde0fd728fccbe9c22541d462588.png?format=webp&resize=400x300&vertical=center" alt=""/>
        </div>
    )
}

const SignUpComponent = () => {
    return (
        <div className="register-container px-[150px] bg-[linear-gradient(to_right,_rgba(0,_126,_133,_0.6),_rgba(110,_171,_54,_0.6))] min-h-screen flex items-center justify-center ">
            <div className="flex justify-around gap-x-[50px] bg-white max-h-[80vh] w-4/5 rounded-[10px] shadow-[0_10px_25px_rgba(0,_0,_0,_0.1)] overflow-hidden ">
                <SignUpLeftSection/>
                <Form/>
            </div>
        </div>

    );
};

export default SignUpComponent;