import React from 'react';
import Header from '../partials/header';
import Footer from '../partials/footer';

export const MainLayout = ({content}) => (
    <div>
        <Header />
        <div className="content-area">
            {content}
        </div>
        <Footer />
    </div>
)

