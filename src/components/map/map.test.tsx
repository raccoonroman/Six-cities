import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {Offer} from '../../types';
import {MapType} from '../../const';
import Map from "./index";


configure({adapter: new Adapter()});

const offers: Offer[] = [
  {
    id: 100500,
    title: `Lorem ipsum`,
    previewImage: `https://i.picsum.photos/id/22/260/200.jpg`,
    price: 100,
    rating: 4.3,
    type: `apartment`,
    bedrooms: 10,
    maxAdults: 10,
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 16,
    },
    city: {
      name: `Vinnytsia`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12,
      },
    },
  },
  {
    id: 100501,
    title: `Ut enim ad minim veniam`,
    previewImage: `https://i.picsum.photos/id/23/260/200.jpg`,
    price: 9,
    rating: 4.0,
    type: `room`,
    bedrooms: 4,
    maxAdults: 5,
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.341667,
      longitude: 4.902452,
      zoom: 16,
    },
    city: {
      name: `Vinnytsia`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12,
      },
    },
  },
  {
    id: 100502,
    title: `Excepteur sint occaecat cupidatat non proident`,
    previewImage: `https://i.picsum.photos/id/24/260/200.jpg`,
    price: 13,
    rating: 4.9,
    type: `house`,
    bedrooms: 3,
    maxAdults: 3,
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.359160,
      longitude: 4.849366,
      zoom: 16,
    },
    city: {
      name: `Vinnytsia`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12,
      },
    },
  },
];

interface Global {
  document: Document;
  window: Window;
}

declare const global: Global;

it(`Should <Map /> render correctly`, () => {
  const div = global.document.createElement(`div`);
  global.document.body.appendChild(div);
  const tree = mount(
      <Map
        mapType={MapType.STATIC_ACTIVE_OFFER}
        offers={offers}
        currentOfferId={100501}
      />,
      {attachTo: div}
  );

  expect(tree.getDOMNode()).toMatchSnapshot();
});
