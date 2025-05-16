import React from "react";
import './gps.css';

function RoleToggle  ({selected, onSelect})  {
    return(
<div className="role-toggle">
    <div className={`option ${selected === 'user' ?'active':''}`}
    onClick={()=>onSelect('user')}>
        User
    </div>
    <div className={`option ${selected === 'admin' ?'active':''}`}
    onClick={()=>onSelect('admin')}>
        Admin
    </div>
</div>
    );

};
export default RoleToggle;