import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './components/layouts/mainlayout';
import HomePage from './components/pages/homepage';
import Kurumsal from './components/pages/kurumsal';

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
            content: (<HomePage />)
        })
    }
});

FlowRouter.route('/kurumsal', {
    action(){
        mount(MainLayout, {
            content: (<Kurumsal />)
        })
    }
});