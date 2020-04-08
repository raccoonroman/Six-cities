import * as React from 'react';
import cn from 'classnames';
import * as leaflet from 'leaflet';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import {Offer} from '../../types';
import {MapType} from '../../const';


const TitleLayer = {
  PATH: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
};

const bluePin = new leaflet.Icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30],
});

const orangePin = new leaflet.Icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [30, 30],
});

interface Props {
  mapType: string;
  offers: Offer[];
  currentOfferId: number;
}


const LeafletMap: React.FC<Props> = (props: Props) => {
  const {mapType, offers, currentOfferId} = props;
  const isStaticActiveOffer = mapType === MapType.STATIC_ACTIVE_OFFER;
  const isHoveredActiveOffer = mapType === MapType.HOVERED_ACTIVE_OFFER;

  const {location: cityLocation} = offers[0].city;
  const {latitude, longitude, zoom} = cityLocation;

  const mapSectionClass = cn({
    'cities__map': isHoveredActiveOffer,
    'property__map': isStaticActiveOffer,
    'map': true,
  });

  const renderMarkers = () => {
    return offers.map(({id, title, location}) => {
      const {latitude: offerLatitude, longitude: offerLongitude} = location;
      const pinType = id === currentOfferId ? orangePin : bluePin;
      return (
        <Marker
          key={isStaticActiveOffer ? Math.random() : id}
          position={[offerLatitude, offerLongitude]}
          icon={pinType}
        >
          <Popup>{title}</Popup>
        </Marker>
      );
    });
  };

  return (
    <section className={mapSectionClass}>
      <Map center={[latitude, longitude]} zoom={zoom} scrollWheelZoom={!isStaticActiveOffer}>
        <TileLayer
          url={TitleLayer.PATH}
          attribution={TitleLayer.ATTRIBUTION}
        />
        {renderMarkers()}
      </Map>
    </section>
  );
};

export default LeafletMap;
