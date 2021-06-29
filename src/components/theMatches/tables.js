import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { positionsCollection } from '../../firebase';

const LeagueTable = () => {
	const [positions, setPositions] = useState(null);

	useEffect(
		() => {
			if (!positions) {
				positionsCollection.get().then((snapshot) => {
					const positions = snapshot.docs.map((doc) => ({
						id : doc.id,
						...doc.data()
					}));
					setPositions(positions);
				});
			}
		},
		[positions]
	);

	const showTeamPositions = () =>
		positions
			? positions.map((pos, i) => (
					<TableRow key={i}>
						<TableCell>{i + 1}</TableCell>
						<TableCell>{pos.team}</TableCell>
						<TableCell>{pos.w}</TableCell>
						<TableCell>{pos.d}</TableCell>
						<TableCell>{pos.l}</TableCell>
						<TableCell>{pos.pts}</TableCell>
					</TableRow>
				))
			: null;

	return (
		<div className='league_table_wrapper'>
			<div className='title'>League Table</div>
			<div className='title'>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Pos</TableCell>
							<TableCell>Team</TableCell>
							<TableCell>W</TableCell>
							<TableCell>L</TableCell>
							<TableCell>D</TableCell>
							<TableCell>Pts</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>{showTeamPositions()}</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default LeagueTable;
