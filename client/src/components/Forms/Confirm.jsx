import React, { Component } from 'react';
import confirmPhoto from '../../assets/images/icons/confirm.svg';
import { ImageLoader } from '../ImageLoader';

class Confirm extends Component{
	render(){
		return (
			<div class='confirm-tick'>
				<ImageLoader alt='Confirm photo' src={confirmPhoto}/>
				{this.props.confirmMessage.map((text) => (
					<p>{text}</p>
				))}
			</div>
		);
	}
}

export default Confirm;