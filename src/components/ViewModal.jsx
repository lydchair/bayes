import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';





class ViewModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      const row = this.props.row;
     
      return (
        <>
          <Button variant="outline-primary" size="sm" onClick={this.handleShow}>
            View
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Tournament Detail </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Table striped bordered hover >
        <thead>
          <tr>
          <th> ID</th>
            <th>NAME </th>
            <th>START</th>

            <th>END</th>
          </tr>
        </thead>
        <tbody><td>{row.series.id}</td>
        <td>{row.series.name}</td>
        <td>{row.series.date_start}</td>
        <td>{row.series.date_end}</td></tbody>
      </Table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
             
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
  


  export default ViewModal;

