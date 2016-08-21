import React from 'react';
import Header from '../partials/header';
import Footer from '../partials/footer';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div  className="content-area">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}