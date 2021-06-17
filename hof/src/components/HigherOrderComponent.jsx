import React, { Component } from 'react';
class HigherOrderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
         }
    }
    // display all items
    renderItems = ()=> {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    }
    renderType =()=>{
        const data = this.state.userData;
        const mapRows = data
        .filter(type=>{
            if(type.user_type == 'Designer')
            return type;
        })
        .map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    }
    renderChar =()=>{
        const data = this.state.userData;
        const mapRows = data
        .filter(type=>{
            if(type.name.includes('J'))
            return type;
        })
        .map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    }
    renderAge =()=>{
        const data = this.state.userData;
        const mapRows = data
        .filter(type=>{
            if(type.age > 28 && type.age <= 50)
            return type;
        })
        .map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    }
    renderExperience =()=>{
        const data = this.state.userData;
        const mapRows = data
        .filter(type=>{
            if(type.user_type == 'Designer')
            return type;
        })
        .map(item => {
            return item.years;
        }).reduce((initial,item)=>{
            initial += item;
            return initial;
        },0);
        return mapRows;
    }
    render() { 
        return ( 
            // instead of a parent div tag we can also use React.Fragment
          <React.Fragment>
          <h1>Display all items</h1>
          <div className="display-box">
          <ul>{this.renderItems()} </ul>
          </div>
          <h1>Display based on User Type</h1>
          <div className="display-box">
          <ul>{this.renderType()} </ul>
          </div>
          <h1>Display all Data starting with J</h1>
          <div className="display-box">
              <ul>{this.renderChar()}</ul>
          </div>
          <h1>DATA BASED ON AGE</h1>
          <div className="display-box">{this.renderAge()}</div>
          <h1>TOTAL EXPERIENCE OF THE DESIGNERS</h1>
          <div className="display-box">{this.renderExperience()}</div>
        </React.Fragment>
         );
    }
}
 
export default HigherOrderComponent;
