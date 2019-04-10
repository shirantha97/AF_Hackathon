"use strict";
import React, { Component } from "react";
export default class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  addDestinations() {}
  //   $(document).ready(function(){
  //     var next = 1;
  //     $(".add-more").click(function(e){
  //         e.preventDefault();
  //         var addto = "#field" + next;
  //         var addRemove = "#field" + (next);
  //         next = next + 1;
  //         var newIn = '<input autocomplete="off" class="input form-control" id="field' + next + '" name="field' + next + '" type="text">';
  //         var newInput = $(newIn);
  //         var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div><div id="field">';
  //         var removeButton = $(removeBtn);
  //         $(addto).after(newInput);
  //         $(addRemove).after(removeButton);
  //         $("#field" + next).attr('data-source',$(addto).attr('data-source'));
  //         $("#count").val(next);

  //             $('.remove-me').click(function(e){
  //                 e.preventDefault();
  //                 var fieldNum = this.id.charAt(this.id.length-1);
  //                 var fieldID = "#field" + fieldNum;
  //                 $(this).remove();
  //                 $(fieldID).remove();
  //             });
  //     });

  // });

  render() {
    return (
      <div>
        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Travel Around</h1>
            <p class="lead text-muted">
              We can get you the best approximation of your cost an time for
              your custermized journey@
            </p>
            <p>
              <a href="#" class="btn btn-primary my-2">
                Hire a guide
              </a>
              <a href="#" class="btn btn-secondary my-2">
                Hire a ride
              </a>
            </p>
          </div>
        </section>

        {/* <div class="container">
          <div class="row text-center">
            <input type="hidden" name="count" value="1" class="form-control" />
            <div class="control-group" id="fields">
              <label class="control-label" for="field1">
                Add your destinantions
              </label>
              <div class="controls" id="profs">
                <form class="form-control">
                  <div id="field">
                    <input
                      autocomplete="off"
                      class="input"
                      id="field1"
                      name="prof1"
                      type="text"
                      placeholder="Add your Destinantion"
                      data-items="8"
                    />
                    <button
                      id="b1"
                      class="btn add-more"
                      type="button"
                      onClick={addDestinations}
                    >
                      +
                    </button>
                  </div>
                </form>
                <br />
              </div>
            </div>
          </div>
        </div> */}
        
      </div>
    );
  }
}
