import * as React from 'react';
import withLeaflet from '../../hocs/with-leaflet/with-leaflet';


interface Props {
  className: string;
  children: React.ReactNode;
}

const Map: React.FC<Props> = (props: Props) => {
  const {className, children} = props;
  return <section className={className}>{children}</section>;
};

export default withLeaflet(Map);
