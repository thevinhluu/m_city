import React, { useEffect, useState } from 'react';
import PlayerCar from '../Utils/playerCard';
import { Slide } from 'react-awesome-reveal';
import { firebase, playersCollection } from '../../firebase';
import { showErrorToast } from '../Utils/tools';
import { Promise } from 'core-js';

const TheTeam = () => {
	const [loading, setLoading] = useState(true);
	const [players, setPlayers] = useState(null);

	useEffect(
		() => {
			if (!players) {
				playersCollection
					.get()
					.then((snapshot) => {
						const players = snapshot.docs.map((doc) => ({
							id : doc.id,
							...doc.data()
						}));

						let promises = [];

						players.forEach((player, index) => {
							promises.push(
								new Promise((resolve, reject) => {
									firebase
										.storage()
										.ref('players')
										.child(player.image)
										.getDownloadURL()
										.then((url) => {
											players[index].url = url;
											resolve();
										})
										.catch((error) => {
											reject();
										});
								})
							);
						});

						Promise.all(promises).then(() => {
							setPlayers(players);
						});
					})
					.catch((error) => {
						showErrorToast('Sorry try again later');
					})
					.finally(() => {
						setLoading(false);
					});
			}
		},
		[players]
	);

	console.log(players);

	return <div>the team</div>;
};

export default TheTeam;
