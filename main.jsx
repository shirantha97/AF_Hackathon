'use strict';
import React from 'react';
import {render} from 'react-dom';
import AppContainer from './HeaderContainer.jsx';
import Mainbanner from './MainBanner.jsx';
import Form from './Form.jsx';
import Reviews from './Reviews.jsx';


render(<AppContainer/>, document.getElementById('app'));
render(<Mainbanner/>,document.getElementById('banner'));
render(<Form/>, document.getElementById('forms'));
render(<Reviews/> , document.getElementById('reviews'));
