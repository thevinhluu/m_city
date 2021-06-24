import React, { useState } from 'react';
import { easePolyInOut } from 'd3-ease';
import { Animate } from 'react-move';

const Test = () => {
	const [show, setShow] = useState(true);
	const [bck, setBck] = useState('#ffffff');
	return (
		<React.Fragment>
			<button
				onClick={() => {
					setBck('#f44336');
				}}
			>
				Update
			</button>
			<button
				onClick={() => {
					setShow(false);
				}}
			>
				Remove
			</button>
			<button
				onClick={() => {
					setShow(true);
				}}
			>
				Show
			</button>
			<Animate
				show={show}
				start={{
					backgroundColor : bck,
					width           : 500,
					height          : 500,
					opacity         : 0
				}}
				enter={{
					backgroundColor : bck,
					width           : [100],
					height          : [100],
					opacity         : [1],
					timing          : {
						duration : 1000,
						delay    : 1000,
						ease     : easePolyInOut
					}
				}}
				update={{
					backgroundColor : bck,
					opacity         : [0.5],
					timing          : {
						duration : 2000,
						ease     : easePolyInOut
					},
					events          : {
						start     : () => {
							console.log('STARTED');
						},
						end       : () => {
							console.log('ENDED');
						},
						interrupt : () => {
							//
						}
					}
				}}
				leave={[
					{
						width  : [1000],
						timing : {
							duration : 500,
							ease     : easePolyInOut
						}
					},
					{
						opacity : [0],
						timing  : {
							delay    : 2000,
							duration : 3000,
							ease     : easePolyInOut
						}
					}
				]}
			>
				{({ width, height, opacity, backgroundColor }) => (
					<div
						style={{
							backgroundColor,
							width,
							height,
							opacity
						}}
					>
						hello
					</div>
				)}
			</Animate>;
		</React.Fragment>
	);
};

export default Test;
