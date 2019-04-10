import React, { Component } from "react";

const reviewHeader = {
  backgroundColor: "black",
  marginTop: "10px",
  color: "white"
};

export default class Reviews extends Component {
  render() {
    return (
      <div>
        <h3 class="text-center" style={reviewHeader}>
          REVIEWS
        </h3>
        <div class="container">
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 box-shadow">
              <div class="card-header ">
                <h4 class="my-0 font-weight-normal">Yohan Silva</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <h3>Superb estimate!</h3>
                  <h4 class="my-0 font-weight-normal">Rating 5 Starts</h4>
                </ul>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Yohan Silva</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <h3>Superb estimate!</h3>
                  <h4 class="my-0 font-weight-normal">Rating 5 Starts</h4>
                </ul>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Yohan Silva</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <h3>Superb estimate!</h3>
                  <h4 class="my-0 font-weight-normal">Rating 5 Starts</h4>
                </ul>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    );
  }
}
