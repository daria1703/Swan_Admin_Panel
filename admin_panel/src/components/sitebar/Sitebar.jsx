import React from 'react'
import "./sitebar.css"
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export default function Sitebar() {
  return (
    <div className="sitebar">
        <div className="sitebarWrapper">
            <div className="sitebarMenu">
            <h3 className="sitebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sitebarListItem" >
                        <HomeIcon style={{marginRight:5, fontSize:20}}/>
                            Home
                    </li>
                    <li className="sitebarListItem">
                        <BarChartIcon style={{marginRight:5, fontSize:20}}/>
                            Analytics
                    </li>
                    <li className="sitebarListItem">
                        <ShowChartIcon style={{marginRight:5, fontSize:20}}/>
                            Sales
                    </li>
                    <li className="sitebarListItem">
                        <BarChartIcon style={{marginRight:5, fontSize:20}}/>
                            Income
                    </li>
                </ul>
                <h3 className="sitebarTitle">Quick Menu</h3>
                
                <ul className="sidebarList">
                    <li className="sitebarListItem" >
                        <PeopleAltIcon style={{marginRight:5, fontSize:20}}/>
                            Users
                    </li>
                    <li className="sitebarListItem">
                        <InventoryIcon style={{marginRight:5, fontSize:20}}/>
                            Products
                    </li>
                    <li className="sitebarListItem">
                        <BorderColorIcon style={{marginRight:5, fontSize:20}}/>
                            Orders
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
