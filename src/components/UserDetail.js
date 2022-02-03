import React from 'react';
import '../styles/UserDetail.css';
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";

function UserDetail(props) {

const userslist = useSelector((state) => state.userslist.value)
const { userId } = useParams()
console.log(userId)
var UserData = '';

    if(userId) {
        UserData = [userslist[userId]]
    } else {
        UserData = []
    }

   return (
       <div className="UserDetail">
        <div className="TitleUserDetail">Информация о пользователе</div>
           {/* <div>{props.userInfo.map(el => ( */}
             <div>{UserData.map(el => (
               <div className="TotalInfoAboutUser">
                    <div className="ContentUserDetail">
                        <div className="infoAboutUser name"><small>Имя: </small>{el.name}</div>
                        <div className="infoAboutUser surname"><small>Фамилия: </small>{el.surname}</div>
                        <div className="infoAboutUser age"><small>Возраст: </small>{el.age}</div>
                        <div className="infoAboutUser gender"><small>Пол: </small>{el.gender}</div>
                        <div className="infoAboutUser interests"><small>Интересы: </small>{el.interests}</div>
                    </div>
               </div>
             ))}</div> 
       </div>
   );
};
export default UserDetail;