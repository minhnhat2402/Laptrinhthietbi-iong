import React, { useState } from 'react';

export default function VerifyCode() {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [phoneNumber, setPhoneNumber] = useState("+849092605798");

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input field
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Entered OTP is: ${otp.join("")}`);
    };

    return ( <
        div style = { styles.container } >
        <
        h1 style = { styles.title } > CODE < /h1> <
        h3 style = { styles.subtitle } > VERIFICATION < /h3> <
        p > Enter ontime password sent on { phoneNumber } < /p> <
        form onSubmit = { handleSubmit }
        style = { styles.form } > {
            otp.map((data, index) => ( <
                input key = { index }
                type = "text"
                maxLength = "1"
                value = { data }
                onChange = {
                    (e) => handleChange(e.target, index) }
                onFocus = {
                    (e) => e.target.select() }
                style = { styles.otpInput }
                />
            ))
        } <
        button type = "submit"
        style = { styles.button } >
        VERIFY CODE <
        /button> <
        /form> <
        /div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#d0e8f8',
    },
    title: {
        fontSize: '36px',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: '18px',
        marginBottom: '10px',
    },
    form: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '300px',
        marginTop: '20px',
    },
    otpInput: {
        width: '40px',
        height: '40px',
        textAlign: 'center',
        fontSize: '24px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginRight: '10px',
    },
    button: {
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#ffcc00',
        border: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
};