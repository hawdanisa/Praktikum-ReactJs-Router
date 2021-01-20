import React from "react";
import {Switch, Route} from "react-router-dom";

import Beranda from './beranda';
import Gallery from './gallery';
import HariBesar from './haribesar';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/haribesar" component={HariBesar}/>
    </Switch>
)

export default Utama;