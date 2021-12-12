import React,  { useState } from "react";
///import 'react-phone-number-input/style.css'
import 'react-phone-number-input/style.css';
//import PhoneInput from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input';


function Example() {
    const [value, setValue] = useState()
    return (
        <PhoneInput
            international
            defaultCountry="US"
            value={value}
            onChange={setValue}
        />
    )
}

export default Example;
