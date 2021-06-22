import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://www3.buildingoperations.ubc.ca/wp-content/uploads/2019/01/67501351-stock-vector-beautiful-blonde-girl-with-straight-hair-portrait-isolated-on-white-background.jpg",
      type: "",
      msg: "Hiruni, Assignment eka karada?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgGAG3f5uEDHn54ZFgE8jwY34QB840BWlEjaHjp-GsHXHU96_vewhJPok-cz6sCsUfD8&usqp=CAU",
      type: "other",
      msg: "Na ane, tawama karanawa. me Assignment eka hena digai neh",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgGAG3f5uEDHn54ZFgE8jwY34QB840BWlEjaHjp-GsHXHU96_vewhJPok-cz6sCsUfD8&usqp=CAU",
      type: "other",
      msg: "oya iwarada?",
    },
    {
      key: 4,
      image:
        "https://www3.buildingoperations.ubc.ca/wp-content/uploads/2019/01/67501351-stock-vector-beautiful-blonde-girl-with-straight-hair-portrait-isolated-on-white-background.jpg",
      type: "",
      msg: "ane ow..mata godak wela yanawa karanna...pissuda yaku..iawara na..",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgGAG3f5uEDHn54ZFgE8jwY34QB840BWlEjaHjp-GsHXHU96_vewhJPok-cz6sCsUfD8&usqp=CAU",
      type: "other",
      msg: "Kamak na himin himin karanna",
    },
    {
      key: 6,
      image:
        "https://www3.buildingoperations.ubc.ca/wp-content/uploads/2019/01/67501351-stock-vector-beautiful-blonde-girl-with-straight-hair-portrait-isolated-on-white-background.jpg",
      type: "",
      msg: "ok..",
    },
    {
      key: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgGAG3f5uEDHn54ZFgE8jwY34QB840BWlEjaHjp-GsHXHU96_vewhJPok-cz6sCsUfD8&usqp=CAU",
      type: "other",
      msg: "lms wada na neda?",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgGAG3f5uEDHn54ZFgE8jwY34QB840BWlEjaHjp-GsHXHU96_vewhJPok-cz6sCsUfD8&usqp=CAU",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgGAG3f5uEDHn54ZFgE8jwY34QB840BWlEjaHjp-GsHXHU96_vewhJPok-cz6sCsUfD8&usqp=CAU"
              />
              <p>Hiruni Senevirathne</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}