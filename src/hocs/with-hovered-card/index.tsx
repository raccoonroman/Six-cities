import * as React from 'react';
import {Subtract} from 'utility-types';


interface State {
  hoveredCardId: number | null;
}

interface InjectingProps {
  hoveredCardId: number | null;
  onCardHover: (offerId: number | null) => Function;
}

const withHoveredCard = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithHoveredCard extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);
      this._handleOfferCardHover = this._handleOfferCardHover.bind(this);
      this.state = {
        hoveredCardId: null,
      };
    }

    _handleOfferCardHover(offerId) {
      return () => {
        this.setState({
          hoveredCardId: offerId,
        });
      };
    }

    render() {
      const {hoveredCardId} = this.state;

      return (
        <Component
          {...this.props}
          hoveredCardId={hoveredCardId}
          onCardHover={this._handleOfferCardHover}
        />
      );
    }
  }

  return WithHoveredCard;
};


export default withHoveredCard;
