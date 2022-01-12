import React from 'react'
import { Tooltip } from '@material-ui/core'

const Ruler = ({ wo_app }) => {
	const generateScales = () => {
		let count = 0
		let hours = 0
		let scales = []

		while (hours < 24) {
			if (count === 6) {
				hours++
				scales.push({
					id: hours * 100,
					active: false,
				})
				count = 1
			} else {
				scales.push({
					id: count * 10 + hours * 100,
					active: false,
				})
				count++
			}
		}
		return scales
	}

	let scales = generateScales()

	const inRange = (n, start, end) => {
		return n <= end && n >= start
	}

	const filterScale = (current_scales, color, from, to, title) => {
		let temp = current_scales.map((e) => {
			if (inRange(e.id, from, to)) {
				return {
					...e,
					active: true,
					color,
					title,
					time: {
						from: from,
						to: to,
					},
				}
			}
			return e
		})
		return temp
	}

	const getMultiFilteredScales = (ranges) => {
		let temp = scales

		ranges.forEach(({ from, to, color, title }) => {
			temp = filterScale(temp, color, from, to, title)
		})
		return temp
	}

	return (
		<>
			<div>
				<div>Wo_App ID = {wo_app.woo_app_id}</div>
				<div>Employee Name = {wo_app.data[0].first_name}</div>

				<div style={{ display: 'flex' }}>
					{getMultiFilteredScales([
						{
							from: wo_app.data[0].go_from,
							to: wo_app.data[0].go_to,
							color: 'red',
							title: 'Go',
						},
						{
							from: wo_app.data[0].working_from,
							to: wo_app.data[0].working_to,
							color: 'blue',
							title: 'Work',
						},
						{
							from: wo_app.data[0].break_from,
							to: wo_app.data[0].break_to,
							color: 'green',
							title: 'Break',
						},
						{
							from: wo_app.data[0].return_from,
							to: wo_app.data[0].return_to,
							color: 'black',
							title: 'Return',
						},
					]).map((x) => {
						return (
							<>
								<div style={{ display: 'flex', flexDirection: 'column' }}>
									<div>{x.id % 100 === 0 ? (x.id / 100).toString() : '-'}</div>
									<div key={x.id}>
										{x.active ? (
											<Tooltip
												title={
													<div>
														<div>{x.title}</div>
														<div>From : {x.time.from}</div>
														<div>To : {x.time.to}</div>
													</div>
												}
											>
												<span
													style={{
														color: x.color,
														fontWeight: 'bold',
														cursor: 'pointer',
													}}
												>
													{'<'}
												</span>
											</Tooltip>
										) : (
											<span>|</span>
										)}
									</div>
								</div>
							</>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default Ruler
