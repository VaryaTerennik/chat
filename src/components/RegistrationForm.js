import { useForm} from "react-hook-form"
import React, {useState,useEffect} from 'react'
import { Modal } from "react-bootstrap";
import PropTypes from 'prop-types'

function RegistrationForm({onSubmit}, props) {

    const [show, setShow] = useState(true);    
    const handleClose = () => setShow(false);
        useEffect(() => {
                setShow(!props.show);
        },[props.show]);

    const {register, handleSubmit} = useForm();
    
    const onFormSubmit = data => {
        onSubmit({
            name:data.name, 
            surname:data.surname, 
            age:data.age, 
            gender: data.gender, 
            interests: data.interests
        });
    };
    
        return (
            <Modal show={show} onHide={handleClose} className="RegistrationBlock">
                <form className="RegistrationForm" onSubmit = {handleSubmit(onFormSubmit)}>
                    <div className="UserInfo">
                        <label>Имя</label>
                        <input placeholder="Введите имя"
                        {...register('name')}
                        />
                    </div>
                    <div className="UserInfo">
                        <label>Фамилия</label>
                        <input placeholder="Введите фамилию"
                        {...register('surname')}
                        />
                    </div>
                    <div className="UserInfo">
                        <label>Возраст</label>
                        <input placeholder="Введите возраст"
                        {...register('age')}
                        />
                    </div>
                    <div className="UserInfo">
                        <label>Пол</label>
                            <select {...register('gender')}>
                                <option value='female'>Женский</option>
                                <option value='male'>Мужской</option>
                            </select>
                        {/* <input placeholder="Введите имя"
                        {...register('gender')}
                        /> */}
                    </div>
                    <div className="MessageInfoText">
                        <label>Интересы</label>
                        <textarea placeholder="Опишите свои интересы"
                        {...register('interests')}
                        ></textarea>
                    </div>
                        <button onClick={handleClose} className ="BtnRegistration">Регистрация</button>
                </form>
            </Modal>

        )
    }
    
    RegistrationForm.propTypes = {
        onSubmit: PropTypes.func.isRequired,
        props: PropTypes.bool
    }
    
    export default RegistrationForm