'use strict';
import React from 'react';
import {render} from 'react-dom';
import AppContainer from './HeaderContainer.jsx';
import Mainbanner from './MainBanner.jsx';


render(<AppContainer/>, document.getElementById('app'));
render(<Mainbanner/>,document.getElementById('banner'));
