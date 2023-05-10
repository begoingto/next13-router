import React from 'react';
import SideBar from "@/components/SideBar";

function LayoutDashboard({children}) {
    return (
        <>
            <SideBar content={children} />
        </>
    );
}

export default LayoutDashboard;