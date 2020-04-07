import * as React from 'react';


interface Props {
  sortBy: string;
  onSortTypeChange: (sortType: string) => void;
}

interface State {
  sortListOpened: boolean;
}

const withListOpenState = (Component) => {
  class WithListOpenState extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);
      this._handleSortTypeClick = this._handleSortTypeClick.bind(this);
      this._handleSortItemClick = this._handleSortItemClick.bind(this);
      this.state = {
        sortListOpened: false,
      };
    }

    _handleSortTypeClick() {
      this.setState(({sortListOpened}) => ({
        sortListOpened: !sortListOpened,
      }));
    }

    _handleSortItemClick(sortType) {
      const {onSortTypeChange} = this.props;
      return () => {
        this.setState({sortListOpened: false});
        onSortTypeChange(sortType);
      };
    }

    render() {
      const {sortListOpened} = this.state;
      const {sortBy} = this.props;

      return (
        <Component
          sortBy={sortBy}
          sortListOpened={sortListOpened}
          onSortTypeClick={this._handleSortTypeClick}
          onSortItemClick={this._handleSortItemClick}
        />
      );
    }
  }

  return WithListOpenState;
};


export default withListOpenState;
