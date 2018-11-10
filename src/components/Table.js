import React from "react";

// import the Tables component
import ResponsiveTable from 'material-ui-next-responsive-table'

const columns = [
    {
      key: 'id',
      label: 'ID',
      primary: true,
    },
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'authors',
      label: 'Author(s)',
      render: (value) => value.join(', ')
    },
  ]
  
  const data = [
    {
      id: '1234',
      name: 'Foo',
      authors: ['Andy'],
    },
    {
      id: '4567',
      name: 'Bar',
      authors: ['Joe', 'Mike'],
    }
  ]
  

function Table(props) {
    const { classes } = props;
    return (
        <ResponsiveTable
        columns={columns}
        data={data}
      />
    ); 
  } 
  
  export default Table;

