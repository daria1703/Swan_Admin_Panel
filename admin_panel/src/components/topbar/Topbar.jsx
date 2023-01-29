import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
        <div className="topLeft">
            <h1 className='logo'>The Swan House</h1>
        </div>
        <div className="topRight">
        <Badge badgeContent={4} color="primary">
            <NotificationsIcon color="action" />
        </Badge>
        </div>
        </div>
    </div>
  )
}
