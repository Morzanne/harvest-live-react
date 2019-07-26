import React, { Component } from 'react';
import { connect } from 'react-redux';
import ObservationCreationModal from './index';
import {
  isObservationCreationModalOpen,
  getCurrentStep,
} from '../../../selectors/ui/observationCreationModal';
import { closeObservationCreationModalAction } from '../../../actions/ui/observationCreationModal';

class ObservationCreationModalContainer extends Component {
  handleClose = () => {
    const { dispatch } = this.props;
    dispatch(closeObservationCreationModalAction());
  };

  render() {
    const { isOpen, currentStep } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <ObservationCreationModal
        handleClose={this.handleClose}
        currentStep={currentStep}
      />
    );
  }
}

export default connect(state => ({
  isOpen: isObservationCreationModalOpen(state),
  currentStep: getCurrentStep(state),
}))(ObservationCreationModalContainer);
