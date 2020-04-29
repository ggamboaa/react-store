import React from "react";
import { connect } from "react-redux";
import * as deptoActions from "../../redux/actions/deptoActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import DeptoList from "./DeptoList";

class DeptosPage extends React.Component {
  componentDidMount() {
    const { deptos, actions } = this.props;

    if (deptos.length === 0) {
      actions.loadDeptos().catch((error) => {
        alert("Loading departments failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Departments</h2>
        <DeptoList deptos={this.props.deptos} />
      </>
    );
  }
}

DeptosPage.propTypes = {
  deptos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    deptos: state.deptos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadDeptos: bindActionCreators(deptoActions.loadDeptos, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeptosPage);
