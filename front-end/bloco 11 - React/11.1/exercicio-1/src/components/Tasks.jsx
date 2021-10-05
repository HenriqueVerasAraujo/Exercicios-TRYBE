import React from 'react';


function Tasks(value) {
    return(
    <li key={value}>{ value }</li>
    )
};

// class Task extends React.Component {
//     constructor(props) {
//         super(props);
//     }
    
//     render() {
//         return(
//             <li>{this.props.item}</li>
//         )
//     }
// }   

export default Tasks;
