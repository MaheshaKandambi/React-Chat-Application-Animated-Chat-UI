import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://www3.buildingoperations.ubc.ca/wp-content/uploads/2019/01/67501351-stock-vector-beautiful-blonde-girl-with-straight-hair-portrait-isolated-on-white-background.jpg" />
          </div>
          <h4>Mahesha Kandambi</h4>
          <p>Student at Sabaragamuwa University of Sri Lanka</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Enjoy with others
          </div>
        </div>
      </div>
    );
  }
}