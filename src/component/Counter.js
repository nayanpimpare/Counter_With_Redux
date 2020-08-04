import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/action";
import { bindActionCreators } from "redux";

class Counter extends React.Component {
  handleIncrement = () => {
    this.props.setIncrement(1);
  };

  handleDecrement = () => {
    this.props.setDecrement(1);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}>+</button>
        {this.props.count}
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { count: state.count };
};

const mapDispatchToProps = dispatch => ({
  setIncrement: bindActionCreators(increment, dispatch),
  setDecrement: bindActionCreators(decrement, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
