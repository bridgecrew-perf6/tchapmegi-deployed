import React from 'react'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import LinearProgress from '@material-ui/core/LinearProgress'
import { ListError } from '../error'

export const LoginStatusTable = ({ state }) => {
	console.log(state)
	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: 'bold',
						}}
					>
						Date
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: 'bold',
						}}
					>
						Time
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: 'bold',
						}}
					>
						Name
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: 'bold',
						}}
					>
						Phone
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: 'bold',
						}}
					>
						Action
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{state.login_statuses.map((t) => {
					return (
						<TableRow key={t.id}>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.date}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.time}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.name}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.phone}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.action}
							</TableCell>
						</TableRow>
					)
				})}
			</TableBody>
		</Table>
	)
}

export const LoginStatusList = ({ state }) => {
	return state.loading ? (
		<LinearProgress />
	) : state.error !== null ? (
		<ListError error={state.error} />
	) : (
		<LoginStatusTable state={state} />
	)
}
