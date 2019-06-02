import React from "react";
import ProductRow from "./ProductRow";
import Table from 'react-bootstrap/Table';


class ProductTable extends React.Component {
  render(props) {
   


    const filterText = this.props.filterText;

    const rows = [];
//Make the data element and the input both lowercase
    this.props.data.forEach(row => {
      if (row.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      rows.push(<ProductRow row={row} key={row.name} />);
    });

    return (
      <Table striped bordered hover >
        <thead>
          <tr>
          <th> 
           ID
         </th>
          <th>
            NAME
          </th>
            <th>COUNTRY</th>
            <th>CITY</th>
            <th>START</th>

            <th>END</th>
            <th>SERIES </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
}

export default ProductTable;
