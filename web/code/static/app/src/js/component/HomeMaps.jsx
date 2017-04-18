import React, {
    Component,
    PropTypes,
} from 'react';
import GettingStartedGoogleMap from './MapsComponent';
import Helmet from "react-helmet";

class HomeMaps extends Component {
    constructor(props){
        super(props)
        this.state = {
            markers: [{
                position: {
                    lat: 25.0112183,
                    lng: 121.52067570000001,
                },
                key: `Taiwan`,
                defaultAnimation: 2,
            }],
        };
    }

    // var handleMapLoad = this.handleMapLoad.bind(this);
    // var handleMapClick = this.handleMapClick.bind(this);
    // var handleMarkerRightClick = this.handleMarkerRightClick.bind(this);

    handleMapLoad(map) {
        this._mapComponent = map;
        if (map) {
            console.log(map.getZoom());
        }
    }

    /*
     * This is called when you click on the map.
     * Go and try click now.
     */
    handleMapClick(event) {
        const nextMarkers = [
            ...this.state.markers,
            {
                position: event.latLng,
                defaultAnimation: 2,
                key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
            },
        ];
        this.setState({
            markers: nextMarkers,
        });

        if (nextMarkers.length === 3) {
            this.props.toast(
                `Right click on the marker to remove it`,
                `Also check the code!`
            );
        }
    }

    handleMarkerRightClick(targetMarker) {
        /*
         * All you modify is data, and the view is driven by data.
         * This is so called data-driven-development. (And yes, it's now in
         * web front end and even with google maps API.)
         */
        const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
        this.setState({
            markers: nextMarkers,
        });
    }

    render() {
        return (
            <div style={{height: `100%`}}>
                <Helmet
                    title="Getting Started"
                />
                <GettingStartedGoogleMap
                    containerElement={
                        <div style={{ height: `100%` }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                    onMapLoad={this.handleMapLoad.bind(this)}
                    onMapClick={this.handleMapClick.bind(this)}
                    markers={this.state.markers}
                    onMarkerRightClick={this.handleMarkerRightClick.bind(this)}
                />
            </div>
        );
    }
}

HomeMaps.propTypes = {};
HomeMaps.defaultProps = {};

export default HomeMaps;
