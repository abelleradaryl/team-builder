import React from "react";


export default function Form(props) {
    const { values, update, submit } = props

    const onChange = event => {
        const { name, value } = event.target;
        props.update(name, value);
      }
    
      const onSubmit = event => {
        event.preventDefault();
        props.submit();
      }


    return (
        <form className="form container" onSubmit={onSubmit}>
            <label>Name
            <input 
                placeholder="Enter Name"
                name="name"
                type="text"
                maxLength="20"
                value={values.name}
                onChange={onChange}>
            </input>
            </label>

            <label>Email
                <input 
                    placeholder="Enter Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}>
                </input>
            </label>
            <label>Role
                <select value={values.role} name="role" onChange={onChange}>
                    <option value="">-- Select a Role --</option>
                    <option value="Student">Student</option>
                    <option value="Instructor">Instructor</option>
                    <option value="Alumni">Alumni</option>
                </select>
            </label>
            
            <div className='submit'>
            <input type="submit" value="Build Team!" />
            </div>
        </form>
    )
}
