import React, { Component } from "react";


class Snipper extends Component {
    constructor() {
        super();

        this.state = {
            snippet: {}
        };
    }

    addSnippetHandler() {
        //fetch('http://192.168.1.124:8080/api/collections/get/snippets?token=84588594ba67fc351bd6d464bb6b3a')
           // .then(response => response.json())
            //.then(data => this.setState({ snippets: data.entries, isLoading: false }));
    }

    render() {
        //const { snippets, isLoading } = this.state;

        return (
            <div>
                <h1>Add your own Super snippet</h1>
               
                <input></input>
                <button onClick ={this.addSnippetHandler}>Add snippet</button>
            </div>
        )
    }
}

export default Snipper