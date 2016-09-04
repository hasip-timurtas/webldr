import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './components/layouts/mainlayout';
import HomePage from './components/pages/homepage';
import MyPage from './components/pages/mypage';
import Lottery from './components/pages/lottery';
import AboutUs from './components/pages/aboutus';
import Faq from './components/pages/faq';

import Register from './components/partials/register';

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
            content: (<HomePage />)
        })
    }
});

FlowRouter.route('/my-page', {
    action(){
        mount(MainLayout, {
            content: (<MyPage />)
        })
    }
});

FlowRouter.route('/lottery', {
    action(){
        mount(MainLayout, {
            content: (<Lottery />)
        })
    }
});

FlowRouter.route('/about-us', {
    action(){
        mount(MainLayout, {
            content: (<AboutUs />)
        })
    }
});


FlowRouter.route('/faq', {
    action(){
        mount(MainLayout, {
            content: (<Faq />)
        })
    }
});


FlowRouter.route('/register', {
    action(){
        mount(MainLayout, {
            content: (<Register />)
        })
    }
});