import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { flipModal } from '../../actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    modalOpen: state.ui.modalOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(flipModal()),
  };
};

 const ModalContainer = ({ closeModal, children, modalOpen }) => {
   return (
     <Modal
       onClick={  closeModal }
       isOpen={ modalOpen }
       onRequestClose={ closeModal }
       contentLabel='loginModal'
       className={{
         base: 'content',
         afterOpen: 'content',
         beforeClose: 'content'
       }}
       overlayClassName={{
         base: 'overlay',
         afterOpen: 'overlay',
         beforeClose: 'overlay',
       }}
       >
       { children }
     </Modal>
   );
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
