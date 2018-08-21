import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

class Modal extends Component {
 render() {
   return (
    <Dialog onClose={() => console.log("oi")} aria-labelledby="simple-dialog-title">
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <div>
        oi
      </div>
    </Dialog> 
   );
 } 
}

export default Modal;