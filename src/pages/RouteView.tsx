import React from 'react';
import { Outlet } from 'react-router-dom'

// Just an outlet to show inner pages 
function RouteView() {
    return <Outlet />
}

export default RouteView;
