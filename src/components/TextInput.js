// import { useState } from "react"
import { useForm} from "react-hook-form"
import PropTypes from 'prop-types'

function TextInput({onSubmit}) {

const {register, handleSubmit} = useForm();

const onFormSubmit = data => {
    onSubmit({name:data.name, text:data.text});
};

    return (
        <form onSubmit = {handleSubmit(onFormSubmit)}>
        <div className="MessageInfo">
        <div className="MessageInfoName">
         <input
           {...register('name')}
         />
        </div>
        <div className="MessageInfoText">
            <textarea
                {...register('text')}>
            </textarea>
            <button className ="BtnSubmitMessage">Отправить</button>
        </div>
        </div>
        </form>
    )
}

TextInput.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default TextInput