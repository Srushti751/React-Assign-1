import React, { Component } from 'react'

class ListDetails extends Component {
    // constructor(props) {
    //     super(props);
    
       
    // }
    
    render() {
        return (
            <>
                <h2 className="text-center m-3">Employee Data</h2>
                <table className="tbl-style" border="1">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Department</td>
                            <td>Salary</td>
                            <td>Address</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.empdata.map((emp)=>{
                            const {id,ename,dept,salary,address} = emp
                            return(
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{ename}</td>
                                    <td>{dept}</td>
                                    <td>{salary}</td>
                                    <td>{address}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default ListDetails
