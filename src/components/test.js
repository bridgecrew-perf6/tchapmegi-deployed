import React, { useEffect, useState } from 'react'
import { TextField } from '@material-ui/core'
import format from 'date-fns/format'
import axios from 'axios'
import { getAPIRoot } from '../config'
import Ruler from './Ruler'
import AuthenticatedNavbar from './authenticatedNavbar/AuthenticatedNavbar'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react'
// import axios from 'axios'
import { useRef } from 'react'

const Test = (props) => {
	const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))
	const [data, setData] = useState()
	const [isLoading, setIsLoading] = useState(false)
	const [mapData, setMapData] = useState(null)
	const [infoState, setInfoState] = useState({
		activeMarker: {},
		showingInfoWindow: false,
	})

	const getData = async (date) => {
		setIsLoading(true)
		let API_ROOT = getAPIRoot('timings', 'v1')
		let data = await await axios.post(API_ROOT + '/dailywh/getall', {
			date: date,
		})
		data = data.data.data
		let x = data.filter((d) => d.data.length !== 0)
		setData(x)
		console.log(x)
		setIsLoading(false)
	}

	useEffect(() => {
		let newDate = format(new Date(date), 'yyyy-MM-dd')
		getData(newDate)
	}, [])

	const getSameHourDiff = (from, to) => {
		let minsCal = 0
		for (let i = from; i <= to; i++) {
			minsCal += 1
			if (i % 100 > 58) {
				i += 41
			}
		}
		return minsCal
	}

	const getTimeString = (mins) => {
		if (mins <= 59) {
			return `${mins} Minutes`
		} else {
			let hours = parseInt(mins / 60)
			let minutes = mins % 60
			return `${hours} hours, ${minutes} mins`
		}
	}

	const onMarkerClicked = (props, marker) => {
		setInfoState({
			activeMarker: marker,
			showingInfoWindow: true,
		})
	}

	return (
		<>
			<AuthenticatedNavbar />
			<div className='container'>
				<div
					style={{
						padding: '0px 90px',
					}}
				>
					<TextField
						type='date'
						value={date}
						onChange={(e) => {
							let newDate = format(new Date(e.target.value), 'yyyy-MM-dd')
							getData(newDate)
							setDate(newDate)
						}}
					/>

					{mapData && (
						<>
							<div>
								<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
									<button
										className='edit-btn close-btn'
										onClick={() => {
											setMapData(null)
										}}
									>
										Close
									</button>
								</div>
								<div
									style={{
										position: 'absolute',
										width: '88%',
										height: '400px',
										background: '#fff',
									}}
								>
									<Map
										initialCenter={{
											lat: mapData.lat,
											lng: mapData.lng,
										}}
										google={props.google}
										zoom={8}
									>
										<Marker
											title='Location'
											label={{
												text: `Click for Info`,
												color: '#333',
												fontSize: '16px',
												fontWeight: 'bold',
											}}
											position={{
												lat: mapData.lat,
												lng: mapData.lng,
											}}
											onClick={onMarkerClicked}
										/>

										<InfoWindow
											marker={infoState.activeMarker}
											visible={infoState.showingInfoWindow}
										>
											<div>
												<div>Name: {mapData.name}</div>
												<div>Work order: {mapData.woNum}</div>
												<div>Customer Name: {mapData.cusName}</div>
											</div>
										</InfoWindow>
									</Map>
								</div>
							</div>
						</>
					)}

					{isLoading ? (
						<LinearProgress />
					) : (
						<>
							{data?.map((wo_app) => {
								return (
									<>
										<div style={{ marginTop: 30, marginBottom: 20 }}>
											<div>
												Work Time:{' '}
												{getTimeString(
													getSameHourDiff(
														wo_app.data[0].working_from,
														wo_app.data[0].working_to
													)
												)}
											</div>
											<div
												style={{
													display: 'flex',
													alignItems: 'flex-end',
												}}
											>
												<div>
													<Ruler wo_app={wo_app} />
												</div>
												<div style={{ marginLeft: 25 }}>
													<button
														className='edit-btn view-btn'
														onClick={async () => {
															setMapData({
																lat: wo_app.data[0].latitude,
																lng: wo_app.data[0].longitude,
																name: wo_app.data[0].first_name,
																woNum: wo_app.data[0].wo_app,
																cusName: wo_app.data[0].name,
															})
														}}
													>
														View on Map
													</button>
												</div>
											</div>
											<hr
												style={{
													marginTop: 30,
													border: '1px solid #e3e3e3',
												}}
											></hr>
										</div>
									</>
								)
							})}
						</>
					)}
				</div>
			</div>
		</>
	)
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDkKCHsqBYTsP49Czl_NvOZb46bZ7SWZZY',
})(Test)
