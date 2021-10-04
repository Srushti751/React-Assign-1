
import React, { Component } from 'react'
import ListDetails from './ListDetails'
class List extends Component {
    state={ Employeedata : [
        {
            id:1,
            ename:"Zoya Lani",
            dept:"HR",
            salary:15000,
            address:"Delhi"
        },
        {
            id:2,
            ename:"Sara Mali",
            dept:"IT",
            salary:15000,
            address:"Delhi"
        },
        {
            id:3,
            ename:"Rahul Shet",
            dept:"Finance",
            salary:15000,
            address:"Delhi"
        },
        {
            id:4,
            ename:"Bijoy Lani",
            dept:"HR",
            salary:15000,
            address:"Delhi"
        },
        {
            id:5,
            ename:"Sam Zen",
            dept:"HR",
            salary:15000,
            address:"Delhi"
        },
        {
            id:6,
            ename:"Ben Josh",
            dept:"Finance",
            salary:15000,
            address:"Delhi"
        },
        {
            id:7,
            ename:"Barbie Ben",
            dept:"IT",
            salary:15000,
            address:"Delhi"
        },
        {
            id:8,
            ename:"Natasha hype",
            dept:"IT",
            salary:15000,
            address:"Delhi"
        },
        {
            id:9,
            ename:"Nalina Raza",
            dept:"HR",
            salary:15000,
            address:"Delhi"
        },
        {
            id:10,
            ename:"Surya Pamiker",
            dept:"Finance",
            salary:15000,
            address:"Delhi"
        },
        {
            id:11,
            ename:"Zat Lani",
            dept:"HR",
            salary:15000,
            address:"Delhi"
        },
        {
            id:12,
            ename:"Abir Binoy",
            dept:"Finance",
            salary:15000,
            address:"Delhi"
        },
        {
            id:13,
            ename:"Rashmi Das",
            dept:"Finance",
            salary:15000,
            address:"Delhi"
        },
        {
            id:14,
            ename:"Shreya Kumari",
            dept:"HR",
            salary:15000,
            address:"Delhi"
        },
        {
            id:15,
            ename:"Farhan Khan",
            dept:"HR",
            salary:15000,
            address:"Delhi"
        },
        {
            id:16,
            ename:"Raju Shrivastav",
            dept:"IT",
            salary:15000,
            address:"Delhi"
        },
        {
            id:17,
            ename:"Shreya Kumari",
            dept:"IT",
            salary:15000,
            address:"Delhi"
        },
        {
            id:18,
            ename:"Zat Lani",
            dept:"IT",
            salary:15000,
            address:"Delhi"
        },
        {
            id:19,
            ename:"Roshni Das",
            dept:"HR",
            salary:15000,
            address:"Delhi"
        },
        {
            id:20,
            ename:"Zoya Lani",
            dept:"HR",
            salary:15000,
            address:"Delhi"
        },
    ]}
    render() {
        return (
            <div>
                <ListDetails empdata={this.state.Employeedata}/>
            </div>
        )
    }
}

export default List

