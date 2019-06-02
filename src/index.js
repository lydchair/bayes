


import React from "react";
import ReactDOM from "react-dom";

import data from "./data/tournaments.json";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";
import * as serviceWorker from './serviceWorker';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      filterText: '',
      //for sorting function
      direction: {
        id: "asc"
        
      }
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    //this.sortBy = this.sortBy.bind(this);

  }
  
  

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    })
  }

 
/*sortBy(key) {
  this.setState({
    data: data.sort((a, b) =>
      this.state.direction[key] === "asc"
        ? parseFloat(a[key]) - parseFloat(b[key])
        : parseFloat(b[key]) - parseFloat(a[key])
    ),
    direction: {
      [key]: this.state.direction[key] === "asc" ? "desc" : "asc"
    }
  });
}*/

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ProductTable
          data={this.props.data}
          filterText={this.state.filterText}
          //sortBy={this.sortBy}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <FilterableProductTable data={data} />,
  document.getElementById("root")
);
serviceWorker.unregister();