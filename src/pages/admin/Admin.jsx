import React from "react";
import AdminMenu from "./components/AdminMenu";
import Plans from "./components/Plans";

export default function Admin() {

    return <div className="admin-panel">
        <div className="container-fluid">
            <div className="row">
                <AdminMenu/>
                <Plans />
            </div>
        </div>
    </div>


}