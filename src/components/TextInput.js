// import { useState } from "react"
import { useForm} from "react-hook-form"
import PropTypes from 'prop-types'

function TextInput({onSubmit}) {

// const [value, setValue] = useState();

const {register, handleSubmit} = useForm();

const onFormSubmit = data => {
    onSubmit({name:data.name, text:data.text});
};

// const handleSubmit = (event) => {
//     // event.preventDefault();
//     onSubmit(value);
//     setValue('');
// };

    return (
        <form onSubmit = {handleSubmit(onFormSubmit)}>
        <div>
        <div>
         <input
           {...register('name')}
         />
        </div>
        <textarea 
            cols='30' 
            row='25'  
            {...register('text')}>
        </textarea>
            <button disabled = {''}>Отправить</button>
        </div>
        </form>
    )

}

TextInput.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default TextInput