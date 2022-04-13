import React from 'react';
import { Outlet } from 'react-router-dom'

// Just an outlet to show inner pages 
function RouteView() {

    return (
        <div className="wrapper">
            <div id="content">
                <Outlet />
            </div>
        </div>
    );
}

export default RouteView;
