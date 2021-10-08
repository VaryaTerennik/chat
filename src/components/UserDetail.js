import React from 'react';
import '../styles/UserDetail.css';
function UserDetail(props) {
   return (
       <div className="UserDetail">
        <div className="TitleUserDetail">Информация о пользователе</div>
           <div>{props.userInfo.map(el => (
               <div className="TotalInfoAboutUser">
                    {/* <div className="TitleUserDetail">Информация о пользователе</div> */}
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