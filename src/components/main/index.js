import React, { Fragment } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import { logout, checkToken } from '../../lib/api'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Projects from '../../containers/projects'
import Tasks from '../../containers/tasks'
import Resources from '../../containers/resources'
import LoginStatus from '../../containers/login_status'
import Customers from '../../containers/customers'
import Employees from '../../containers/employees'
import Complains from '../../containers/complains'
import Test from './../test'

import WO from '../../containers/wo'
import DWork from '../../containers/dwork'
import Dashboard from '../dashboard/Dashboard'
import Footer from '../footer/Footer'

export const MainRoute = ({}) => {
	return checkToken() ? <Main /> : <Redirect to='/login' />
}

export const RedirectToProjects = ({}) => {
	return <Redirect to='/app/projects' />
}

export const OpenMenu = ({}) => {
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			<Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
				Open Menu
			</Button>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose} className='menu-item'>
					<Link to='/app/projects'>Projects</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link to='/app/working-orders'>Working Orders</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link to='/app/daily-work'>Daily Work</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link to='/app/resources'>Resources</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link to='/app/tasks'>Tasks</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link to='/app/customer'>Customer</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link to='/app/employees'>Employees</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link to='/app/complains'>Complains</Link>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link to='/app/login_status'>Login Status</Link>
				</MenuItem>
				<MenuItem onClick={(e) => logout()}>Logout</MenuItem>
			</Menu>
		</div>
	)
}

export const NavBar = ({}) => {
	return (
		<div className='navbar'>
			<img
				src='https://hungry-hugle-70ea8a.netlify.com/public/images/logo-small.png'
				className='navbar-logo'
			/>
			<span className='float-right'>
				<OpenMenu />
			</span>
		</div>
	)
}

export const Main = ({}) => {
	return (
		<Fragment>
			{/* <NavBar /> */}
			<div className='main'>
				<Switch>
					<Route exact path='/app' component={Dashboard} />
					<Route path='/app/projects' component={Projects} />
					<Route path='/app/daily-work' component={Test} />
					<Route path='/app/resources' component={Resources} />
					<Route path='/app/working-orders' component={WO} />
					<Route path='/app/tasks' component={Tasks} />
					<Route path='/app/login_status' component={LoginStatus} />
					<Route path='/app/customer' component={Customers} />
					<Route path='/app/complains' component={Complains} />
					<Route path='/app/employees' component={Employees} />
				</Switch>
				{/* <Footer /> */}
			</div>
		</Fragment>
	)
}
