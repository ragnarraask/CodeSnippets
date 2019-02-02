import React, { Component } from "react";


class Snipper extends Component {
    constructor() {
        super();
        this.state = {
            snippetName: "",
            code: ""
        };
        this.snippet = {
            snippetName: "",
            code: ""
        }
    }

    addSnippetHandler() {
        console.log(this.snippet)
        fetch('http://192.168.1.124:8080/api/collections/get/snippets?token=84588594ba67fc351bd6d464bb6b3a', {
            method: 'POST',
            headers: new Headers(),
            body: JSON.stringify({ name: this.state.snippetName, snippet: this.state.code })
        }).then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }


    render() {
        //const { snippets, isLoading } = this.state;

        return (
            <div>
                <p>Add your own Super snippet</p>
                <p>Add your snippet name:</p>
                <input ></input>
                <p>Add your snippet code:</p>
                <input ></input>
                <button onClick={() => this.addSnippetHandler()}>Add snippet</button>
            </div>
        )
    }
}

export default Snipper