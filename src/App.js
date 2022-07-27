import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Components/Form";
import Member from "./Components/Member"


const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {
  const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formError, setFormError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.name || !newMember.email) {
      setFormError("ERROR Enter Name");
    } else {
      axios.post("https://reqres.in/api/users", newMember)
        .then(res => {
          setMembers([ ...members, res.data ]);
          setFormValues(initialFormValues);
          setFormError("");
        }).catch(err => console.error(err));
    }
  }

  return (
    <div className="app">
      <div className='container'>
        <h1>Let's Build Your Team!</h1>
        <Form
          values={formValues}
          update={updateForm}
          submit={submitForm}
        />

        {
          members.map(member => {
            return (
              <Member key={member.id} details={member} />
            )
          })
        }
      </div>
    </div>
  )
}

