import React from 'react';
import LayoutDashboard from "@/components/LayoutDashboard";

function DashboardLayout({children}) {
    return (
        <LayoutDashboard>
            {children}
        </LayoutDashboard>
    );
}

export default DashboardLayout;