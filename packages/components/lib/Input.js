import React from 'react';

class Input extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    return (
      <input className={...props} />
    );
  }
}

export default Input;
