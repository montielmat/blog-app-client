import {useState} from 'react'

export const useForm = (initialState={}) => {

const [formValues, setFormValues] = useState(initialState)

const handleChange = ({target})=>{
    setFormValues({
        ...formValues,
        [target.name]:target.value
    })
}

const formReset = ()=>{
    setFormValues(initialState)
}

return [formValues,handleChange, formReset]

}
