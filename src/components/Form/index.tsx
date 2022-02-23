import { useState } from 'react'
import './style.css'

const Form = () => {
    const emptyForm = {
        dateApplied: "",
        company: "",
        position: "",
        statusLog: [],
        notes: ""
    }
    const [formData, setFormData] = useState(emptyForm)

    //! CHANGE THIS TS ANY TYPE AFTER RESEARCH
    const handleSubmit = (event:any) => {
        event.preventDefault()
        // props.handleSubmit(formData)
        // props.history.push("/")
    }

    //! CHANGE THIS TS ANY TYPE AFTER RESEARCH
    const handleChange = (event:any) => {
        const t = event.target
        setFormData({...formData, [t.name]: t.value})
    }

    return(
        <form className="logNewApp" onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="dateApplied">Date Applied: </label>
            <input name="dateApplied" id="dateApplied" type="date" value={formData.dateApplied} onChange={handleChange}/>

            <label htmlFor="company">Company Name: </label>
            <input name="company" id="company" type="text" value={formData.company} onChange={handleChange}/>
            
            <label htmlFor="position">Position Title: </label>
            <input name="position" id="position" type="text" value={formData.position} onChange={handleChange}/>

            <label htmlFor="notes">Notes about application: </label>
            <textarea name="notes" id="notes" value={formData.notes} onChange={handleChange}/>

            <input className="submit" type="submit" value="Log New Application"/>
        </form>
    )
}

export default Form