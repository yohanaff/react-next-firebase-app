import React from 'react';
import '../styles/globals.css';

interface MyAppProps {
    Component: React.ElementType;
    pageProps: any;
}

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <Component {...pageProps} />
        </div>
    );
};

export default MyApp;
