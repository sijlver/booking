import React from 'react';
import PropTypes from 'prop-types';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

import { hotelsConstants } from '../../constants';
 
function MapContainer (props) {
	const { lat, lng, locationName } = props;

	return (
		<Map
			google={props.google}
			center={{ lat, lng }}
			zoom={14}
		>
			<Marker title={locationName} position={{ lat, lng }} />
		</Map>
	);
}

MapContainer.propTypes = {
	google: PropTypes.object,
	lat: PropTypes.number,
	lng: PropTypes.number,
	locationName: PropTypes.string,
};
 
export default GoogleApiWrapper({
	apiKey: (hotelsConstants.GOOGLE_API_KEY)
})(MapContainer);
