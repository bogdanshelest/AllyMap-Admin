import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import LayersIcon from '@mui/icons-material/Layers'
import { useNavigate } from 'react-router-dom'
import List from '@mui/material/List'
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined'
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'

export default function AdminSideNavigationBar() {

    // Setups
    const navigate = useNavigate()

    return (
        <div className='h-screen bg-neutral-800 w-64 static'>
            <List component="nav">
                <React.Fragment>
                    <ListItemButton onClick={() => { navigate('/') }}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                    <ListItemButton onClick={() => { navigate('/institution-control') }}>
                        <ListItemIcon>
                            <LocationCityOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Institutions" />
                    </ListItemButton>
                    <ListItemButton onClick={() => { navigate('/request-institution-control') }}>
                        <ListItemIcon>
                            <LocationCityOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Requests" />
                    </ListItemButton>
                    <ListItemButton onClick={() => { navigate('/reports') }} disabled>
                        <ListItemIcon>
                            <ReportGmailerrorredOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItemButton>
                    <ListItemButton onClick={() => { navigate('/user-control') }}>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary="User" />
                    </ListItemButton>
                    <ListItemButton onClick={() => { navigate('/comments') }}>
                        <ListItemIcon>
                            <MessageOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Comments" />
                    </ListItemButton>
                    <ListItemButton onClick={() => { navigate('/settings') }}>
                        <ListItemIcon>
                            <SettingsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                    <ListItemButton onClick={() => { navigate('/integrations') }} disabled>
                        <ListItemIcon>
                            <LayersIcon />
                        </ListItemIcon>
                        <ListItemText primary="Integrations" />
                    </ListItemButton>
                </React.Fragment>
            </List>
        </div>
    )
}
