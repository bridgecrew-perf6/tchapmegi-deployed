import React from 'react'
import './dashboard.css'
import AuthenticatedNavbar from '../authenticatedNavbar/AuthenticatedNavbar'
import metroCalender from '../../assets/img/Icon_metro-calendar.svg'
import userTie from '../../assets/img/Icon_awesome-user-tie.svg'
import peopleSVG from '../../assets/img/Icon ionic-ios-people.svg'
import analyticsSVG from '../../assets/img/Icon ionic-md-analytics.svg'
import mobileSVG from '../../assets/img/Icon awesome-mobile-alt.svg'
import DashboardButton from '../dashboardButton/DashboardButton'
import workIcon from '../../assets/img/work.svg'
import complainIcon from '../../assets/img/complain.svg'
import customerIcon from '../../assets/img/hand-shake.svg'
import resourcesIcon from '../../assets/img/resources.svg'
import orderIcon from '../../assets/img/order.svg'
import Footer from '../footer/Footer'

export default function Dashboard() {
	return (
		<div>
			<AuthenticatedNavbar />
			<div style={{ paddingLeft: 30 }}>
				<h1 className='dashboard_heading'>Reporting</h1>
				<div className='row' style={{ display: 'flex' }}>
					<div className='col-md-2'>
						<DashboardButton
							href='/app/daily-work'
							title='Daily Work'
							description=''
							image={workIcon}
						/>
					</div>
					<div className='col-md-2'>
						<DashboardButton
							href='/app/login_status'
							title='Login Status'
							description=''
							image={mobileSVG}
						/>
					</div>
					<div className='col-md-2'>
						<DashboardButton
							href='/app/complains'
							title='Complains'
							description=''
							image={complainIcon}
						/>
					</div>
				</div>

				<h1 className='dashboard_heading'>Operational</h1>
				<div className='row' style={{ display: 'flex' }}>
					<div className='col-md-2'>
						<DashboardButton
							href='/app/projects'
							title='Projects'
							description='TiM mit Kalender starten'
							image={metroCalender}
						/>
					</div>
					<div className='col-md-2'>
						<DashboardButton
							href='/app/employees'
							title='Employees'
							description=''
							image={peopleSVG}
						/>
					</div>
					<div className='col-md-2'>
						<DashboardButton
							href='/app/customer'
							title='Customer'
							description=''
							image={customerIcon}
						/>
					</div>
					<div className='col-md-2'>
						<DashboardButton
							href='/app/working-orders'
							title='Working Orders'
							description=''
							image={orderIcon}
						/>
					</div>
					<div className='col-md-2'>
						<DashboardButton
							href='/app/resources'
							title='Resources'
							description=''
							image={resourcesIcon}
						/>
					</div>
				</div>

				<h1 className='dashboard_heading'>Configuration</h1>
				<div className='row' style={{ display: 'flex' }}>
					<div className='col-md-2'>
						<DashboardButton
							href='/app/tasks'
							title='Tasks'
							description='TiM mit Urlaubskalender starten'
							image={analyticsSVG}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
