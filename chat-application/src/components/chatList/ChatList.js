import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://townsquare.media/site/693/files/2020/05/facebookavatar2.jpg?w=980&q=75",
      id: 1,
      name: "Akki",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgGAG3f5uEDHn54ZFgE8jwY34QB840BWlEjaHjp-GsHXHU96_vewhJPok-cz6sCsUfD8&usqp=CAU",
      id: 2,
      name: "Hiruni Senevirathne",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXkWKykhFisvuTieMFcYYCd4iRFzoZMQ9ADLilEYg0hRglqU_cLrABywj74HM5RLoFUQ&usqp=CAU",
      id: 3,
      name: "Nipuni Dilukshika",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdEdOU3a6MFWy3aHGCdc4K0f3ANwroUyOqz25-5f-AYwxfotr-7qBkeJyZI3-pq0e3Gk&usqp=CAU",
      id: 4,
      name: "Mahinda Rajapaksha",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxjHJgHsqTGXupVOwzJViXXnpedAX2HINb8QfS-CNi0pFMQ60qDdYcN4x76QMCFt916E&usqp=CAU",
      id: 5,
      name: "Gotabhaya Rjapaksha",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTty5Z4hEeNEUICuhCAREChxEOhLSAL3KthnN9Cul7zs_gmb73Gcjz09LMFcC-R1q8d2Zc&usqp=CAU",
      id: 6,
      name: "Pushpika De Silva",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8Afsy0R1i_id5ae6HgZDkVNPGAJ5gPehNRFHwe7jG3YR7QJXwCVqEMJLqa18P229Jb0&usqp=CAU",
      id: 7,
      name: "Chula Padmendra",
      active: false,
      isOnline: true,
    },
    
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}