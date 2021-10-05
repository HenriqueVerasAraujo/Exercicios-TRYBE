import React from 'react';

class MyName extends React.Component {
    render() {
        const myNameIs = "Henrique Veras"
        return(
            <p>My name is { myNameIs }</p>
        )
    }
}

export default MyName;