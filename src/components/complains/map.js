import React from 'react';
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

export class CMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: 'No City Selected',
            zoom: 6
        };
    }

    zoomIn() {
        this.setState({
            zoom: Math.min(this.state.zoom + 1, 6)
        })
    }

    zoomOut() {
        this.setState({
            zoom: Math.max(this.state.zoom - 1, 1)
        })
    }

    render() {
        let state = this.props.state;
        return (
            <center>
            <h3>City: {this.state.city}</h3>
            <br/>
            <Map center={[4.051056, 9.767869]} zoom={this.state.zoom} width={600} height={400} metaWheelZoom={true} maxZoom={6}>
                {state.map((m) => {
                    var loc = m.city+", "+m.country;
                    var lat = Number(m.lat);
                    var lon = Number(m.long);
                    return (
                        <Marker anchor={[lat, lon]} payload={1} onClick={({ event, anchor, payload }) => this.setState({city: loc})} key={m.id} />
                    );
                })}
            </Map>
            <br/>
            <button onClick={e=>this.zoomIn()}>Zoom In</button>
            <button onClick={e=>this.zoomOut()}>Zoom Out</button>
            </center>
        )
    }
};
