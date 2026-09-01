import React, { useState } from 'react'

const blankForm = {
    'name': '',
    'age': 18,
    'email': '',
    'mobile': '+91'
};

const MyForm = () => {
    const [formState, setFormState] = useState(blankForm);
    const handleName = (event) => {
        console.log('--------------------');
        console.log(event);

    setFormState({
        ...formState,
        name: event.target.value
    });
    }
    const handleAge = (event) => {
        setFormState({ ...formState, age: event.target.value })
    }
    const handleMobile = (event) => {
        setFormState({ ...formState, mobile: event.target.value })
    }
    const handleEmail = (event) => {
        setFormState({ ...formState, email: event.target.value })
    }

    return (
        <div>
            <div><label>Name</label><input id='name' value={formState.name} onChange={handleName} /></div>
            <div><label>Age</label><input id='age' value={formState.age} onChange={handleAge} /></div>
            <div><label>Mobile</label><input id='mobile' value={formState.mobile} onChange={handleMobile} /></div>
            <div><label>Email</label><input id='email' value={formState.email} onChange={handleEmail} /></div>
        </div>
    )
}

export default MyForm
