import React, { Component } from "react";
import FormBg from "./FormBg.png";

const imgUrl =
  "https://www.etiqa.com.my/sites/Satellite?blobcol=urldata&blobkey=id&blobtable=MungoBlobs&blobwhere=1466369468682&ssbinary=true";

const formStyle = {
  padding: "5px"
};

const btnStyle = {
  marginLeft: "10px"
};

const formBackground = {
  padding: "5px"
};

const reviewBg = {
  backgroundColor : 'black'
}

export default class Form extends Component {
  render() {
    return (
      <div>
        <form style={formBackground}>
          <div id="field" style={formStyle}>
            <input
              autocomplete="off"
              class="input"
              id="field1"
              name="prof1"
              type="text"
              placeholder="Add your Starting location"
              data-items="8"
            />

            <button style={btnStyle} id="b1" class="btn add-more" type="button">
              +
            </button>
          </div>
          <div id="field" style={formStyle}>
            <input
              autocomplete="off"
              class="input"
              id="field1"
              name="prof1"
              type="text"
              placeholder="Add your Starting location"
              data-items="8"
            />
            <button style={btnStyle} id="b1" class="btn add-more" type="button">
              +
            </button>
          </div>
        </form>
      </div>
    );
  }
}
