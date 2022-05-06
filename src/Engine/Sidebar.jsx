import { useState } from "react";

const Sidebar = () => {

  const [message, setmessage] = useState([
    {userName : "Mohamed Salah", photoURL:require("../assets/fake-salah.jpg"), lastMessage:"Egyptian King is here 😎 "},
    {userName : "Kareem Benzema", photoURL:require("../assets/benzema.jpg"), lastMessage:"it's easy to hunt mo !!"},
    {userName : "Sadio Mané", photoURL:require("../assets/mane.jpg"), lastMessage:"am not jealous from salah"},
    {userName : "Köksal Baba", photoURL:require("../assets/koksal.jpg"), lastMessage:"bir fincan çay istiyorum"},
   ])

  return (
    <aside>
      <div className="user-info">
        <img
          className="user-avatar"
          src={require("../assets/deafult.png")}
          alt=""
        ></img>
        <div className="user-data">
          <div className="userName">Waled K. Fikrey</div>
          <div className="job-title">Frontend Developer </div>
        </div>
        <button className="sign-out-btn"> 
           <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </div>

      <div className="search-section">
         <input type="search" name="" id="" placeholder="Search ... " />
      </div>

      <div className="frindes-list">
      {message.map((l,i)=>(
         <a href="#" key={i} className="session">
         <div className="user-info">
           <img
             className="user-avatar"
             src={l.photoURL}
             alt=""
           ></img>
           <div className="user-data">
             <div className="userName">{l.userName}</div>
             <div className="last-msg">{l.lastMessage}</div>
           </div>
         </div>
         </a>
      ))}
      </div>
    </aside>
  );
};

export default Sidebar;
