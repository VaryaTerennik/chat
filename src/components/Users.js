import React from 'react';
import { connect } from 'react-redux';
import { useState } from "react"
import useToggle from '../hooks/useToggle'
import RegistrationForm from './RegistrationForm.js'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { addNewUsers } from '../redux/UsersListSlice'
import { NavLink, useParams } from "react-router-dom";

function Users(props) {

//     const [show, setShow] = useState(false);
//    const handleShow = () => setShow(false);
    const { userId } = useParams()
    console.log(userId)
    const userslist = useSelector((state) => state.userslist.value)
    // const [newUsers, setNewUsers] = useState([]);
    const [visible, toggle] = useToggle(false)
    // const [count, setCount] = useState(0);
    const dispatch = useDispatch()

    // const handleCount = (increment) => {
    //     setCount(count + increment);
    // }
    
    const handleAddUser = ({name, surname, age, gender, interests}) => {
        const newUser = {
            // id: count,
            name: name,
            surname: surname, 
            age: age, 
            gender: gender, 
            interests: interests
        }
        // setNewUsers([...newUsers, newUser]);
        // handleCount(1)
        dispatch(addNewUsers(newUser))
    };

    //  const handleShowUserDetail = (event) => {
    //     event.preventDefault()
    //     const SelectUser = event.currentTarget
    //     let sId = Number(SelectUser.getAttribute("id"))
    //     let InfoSelectUser = userslist.find(function(elem){
    //         return elem.id === sId;
    //     })
    //     props.updateData(InfoSelectUser);
    // }

   return (
       <div className="UsersList">
           {userslist.map(el => (
                <div>
                    <button id={el.id} className="BtnUserName">
                        <NavLink className = "App-link" 
                                    activeClassName = "App-link-active" 
                                    to={`/users/${el.id}`}>
                            {el.name} {el.surname}
                        </NavLink>
                    </button>
                </div>
            ))}
            
            <button onClick={toggle} className ="BtnAddUser">{visible ? 'Добавить пользователя':'Добавить пользователя'}</button>

            {visible && <RegistrationForm onSubmit = {handleAddUser}/>}
       </div>
   );
};

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

Users.propTypes = {
    props: PropTypes.func
}
export default connect(mapStateToProps)(Users);