import React from 'react';
import AccountsUI from '../../AccountsUI';


export default class Header extends React.Component {
    render() {
        return (<div>
                <nav className="navbar navbar-inverse navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar3">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/#/"><img
                                src="img/logo.jpg"
                                alt="Dispute Bills"/>
                            </a>
                        </div>
                        <div id="navbar3" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/">Home</a></li>
                                <li><a href="/my-page">My Page</a></li>
                                <li><a href="/lottery">Lottery</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/faq">FAQ</a></li>
                                <li><a href="#"> <AccountsUI /> </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}