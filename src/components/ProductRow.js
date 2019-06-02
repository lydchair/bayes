import React from "react";

import ViewModal from './ViewModal';

class ProductRow extends React.Component {
  render() {
    const row = this.props.row;

    return (
      <tr>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.country}</td>
        <td>{row.city}</td>
        <td>{row.date_start}</td>
        <td>{row.date_end}</td>
        <td>{row.series.name} <ViewModal row={row}  /></td>
      </tr>
    );
  }
}

export default ProductRow;
