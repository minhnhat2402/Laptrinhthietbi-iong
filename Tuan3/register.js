import React, { useState } from 'react';

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        birthday: '',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Registered Successfully!');
    };

    return ( <
        div style = { styles.container } >
        <
        h1 style = { styles.title } > REGISTER < /h1> <
        form onSubmit = { handleSubmit }
        style = { styles.form } >
        <
        input type = "text"
        name = "name"
        placeholder = "Name"
        value = { formData.name }
        onChange = { handleChange }
        style = { styles.input }
        /> <
        input type = "text"
        name = "phone"
        placeholder = "Phone"
        value = { formData.phone }
        onChange = { handleChange }
        style = { styles.input }
        /> <
        input type = "email"
        name = "email"
        placeholder = "Email"
        value = { formData.email }
        onChange = { handleChange }
        style = { styles.input }
        /> <
        div style = { styles.passwordContainer } >
        <
        input type = "password"
        name = "password"
        placeholder = "Password"
        value = { formData.password }
        onChange = { handleChange }
        style = { styles.input }
        /> <
        span role = "img"
        aria - label = "eye"
        style = { styles.eyeIcon } > 👁️
        <
        /span> <
        /div> <
        input type = "date"
        name = "birthday"
        placeholder = "Birthday"
        value = { formData.birthday }
        onChange = { handleChange }
        style = { styles.input }
        /> <
        div style = { styles.genderContainer } >
        <
        label >
        <
        input type = "radio"
        name = "gender"
        value = "male"
        checked = { formData.gender === 'male' }
        onChange = { handleChange }
        />
        Male <
        /label> <
        label >
        <
        input type = "radio"
        name = "gender"
        value = "female"
        checked = { formData.gender === 'female' }
        onChange = { handleChange }
        />
        Female <
        /label> <
        /div> <
        button type = "submit"
        style = { styles.button } >
        REGISTER <
        /button> <
        p style = { styles.footerText } > When you agree to terms and conditions < /p> <
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
        backgroundColor: '#d0e8d8',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        maxWidth: '400px',
    },
    input: {
        padding: '10px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
    },
    passwordContainer: {
        position: 'relative',
    },
    eyeIcon: {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
    },
    genderContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '20px',
    },
    button: {
        padding: '10px',
        backgroundColor: '#d2691e',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    footerText: {
        textAlign: 'center',
        fontSize: '12px',
        marginTop: '10px',
    },
};