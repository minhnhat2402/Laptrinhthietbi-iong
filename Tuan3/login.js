import React from 'react';

export default function WelcomeScreen() {
    return ( <
        div style = { styles.container } >
        <
        div style = { styles.logo } >
        <
        div style = { styles.circle } > < /div> <
        /div> <
        h1 style = { styles.title } > GROW YOUR BUSINESS < /h1> <
        p style = { styles.description } >
        We will help you to grow your business using online server <
        /p> <
        div style = { styles.buttonContainer } >
        <
        button style = { styles.loginButton } > LOGIN < /button> <
        button style = { styles.signupButton } > SIGN UP < /button> <
        /div> <
        p style = { styles.footerText } > HOW WE WORK ? < /p> <
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
        background: 'linear-gradient(to bottom, #e0f7fa, #03a9f4)', // Màu nền gradient
    },
    logo: {
        marginBottom: '20px',
    },
    circle: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: 'black',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '10px',
    },
    description: {
        fontSize: '16px',
        textAlign: 'center',
        marginBottom: '30px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        marginBottom: '20px',
    },
    loginButton: {
        padding: '10px 20px',
        backgroundColor: '#fdd835',
        border: 'none',
        borderRadius: '5px',
        color: 'black',
        fontSize: '16px',
        cursor: 'pointer',
        flex: 1,
        marginRight: '10px',
    },
    signupButton: {
        padding: '10px 20px',
        backgroundColor: '#fdd835',
        border: 'none',
        borderRadius: '5px',
        color: 'black',
        fontSize: '16px',
        cursor: 'pointer',
        flex: 1,
    },
    footerText: {
        fontSize: '14px',
        color: 'black',
        textDecoration: 'underline',
        cursor: 'pointer',
    },
};