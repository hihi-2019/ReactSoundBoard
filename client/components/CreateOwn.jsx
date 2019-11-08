import React, { Component } from "react";

class CreateOwn extends Component {


  render() {
    return (
      <form action="/new" method="post">
        <label name="sound">Pick a sound</label>
        <select name="sound">
          <option value="cow">Cow</option>
        </select>
        <label for="image">Choose a picture</label>
        <input type="file" name="image" accept="image/*"></input>
      </form>      
    )
  }

}

export default CreateOwn