import { withGoogleMap,
    GoogleMap,
    Marker } from "react-google-maps";
import React, {
    Component,
    PropTypes,
} from 'react';

const GettingStartedGoogleMap = withGoogleMap(props => {
    // console.log('>><><>>', props);
    return (
        <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={3}
            defaultCenter={props.defaultCenter}
            onClick={props.onMapClick}
        >
            {props.markers.map(marker => (
                <Marker
                    {...marker}
                    onRightClick={() => props.onMarkerRightClick(marker)}
                />
            ))}
        </GoogleMap>
    )
});
export default GettingStartedGoogleMap;
