import * as React from 'react';
import * as leaflet from 'leaflet';
import {Offer} from '../../types';


interface Pin {
  PATH: {
    BLUE: string;
    ORANGE: string;
  };
  SIZES: [number, number];
}

const Pin: Pin = {
  PATH: {
    BLUE: `/img/pin.svg`,
    ORANGE: `/img/pin-active.svg`,
  },
  SIZES: [30, 30],
};

const TitleLayer = {
  PATH: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
};


const renderMap = (container, location) => {
  if (!container) {
    return null;
  }

  const {latitude, longitude, zoom} = location;

  const map = leaflet.map(container, {
    center: [latitude, longitude],
    zoom,
    zoomControl: false,
    scrollWheelZoom: false,
    // marker: true,
  });

  leaflet
    .tileLayer(TitleLayer.PATH, {attribution: TitleLayer.ATTRIBUTION})
    .addTo(map);

  leaflet.control
    .zoom({position: `topright`})
    .addTo(map);

  return map;
};

const renderMarkers = (offers, currentOfferId, map) => {
  if (!map) {
    return null;
  }
  const markers = leaflet.layerGroup().addTo(map);

  const createIcon = (pinType) => {
    return leaflet.icon({
      iconUrl: pinType,
      iconSize: Pin.SIZES,
    });
  };

  offers.forEach(({id, title, location}) => {
    const {latitude: x, longitude: y} = location;
    const pinType = id === currentOfferId ? Pin.PATH.ORANGE : Pin.PATH.BLUE;
    const icon = createIcon(pinType);
    leaflet
      .marker([x, y], {icon})
      .addTo(markers)
      .bindPopup(title);
  });

  return markers;
};


interface Props {
  className: string;
  offers: Offer[];
  currentOfferId: number;
}

const withLeaflet = (Component) => {
  class WithLeaflet extends React.PureComponent<Props, null> {
    constructor(props) {
      super(props);
      this.mapRef = React.createRef();
      this.map = null;
      this.markers = null;
    }

    componentDidMount() {
      this._renderMap();
      this._renderMarkers();
    }

    componentDidUpdate({offers: prevOffers}) {
      const {offers, currentOfferId} = this.props;
      const {location: cityLocation} = offers[0].city;
      const {zoom} = cityLocation;

      if (prevOffers[0].city.name !== offers[0].city.name) {
        const {latitude, longitude} = cityLocation;
        this.map.setView([latitude, longitude], zoom);
      }

      if (currentOfferId) {
        const offer = offers.find(({id}) => id === currentOfferId);
        const {latitude, longitude} = offer.location;
        this.map.setView([latitude, longitude], zoom);
      }

      this._renderMarkers();
    }

    componentWillUnmount() {
      this._removeMap();
      this._removeMarkers();
    }

    private mapRef: React.RefObject<HTMLDivElement>;
    private map: null | leaflet.Map;
    private markers: null | leaflet.LayerGroup;

    _renderMap() {
      const {offers} = this.props;
      const {location} = offers[0].city;
      const mapElement = this.mapRef.current;
      this.map = renderMap(mapElement, location);
    }

    _renderMarkers() {
      const {offers, currentOfferId} = this.props;
      if (this.markers) {
        this._removeMarkers();
      }
      this.markers = renderMarkers(offers, currentOfferId, this.map);
    }

    _removeMap() {
      if (this.map) {
        this.map.remove();
        this.map = null;
      }
    }

    _removeMarkers() {
      if (this.markers) {
        this.markers.clearLayers();
        this.markers = null;
      }
    }

    render() {
      const {className} = this.props;

      return (
        <Component className={className}>
          <div ref={this.mapRef} id="map"></div>
        </Component>
      );
    }
  }

  return WithLeaflet;
};


export default withLeaflet;
