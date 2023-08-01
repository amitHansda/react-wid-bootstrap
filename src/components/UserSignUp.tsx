import React from 'react'
interface Props {
    userInputs: {
        firstName: string;
        lastName: string;
        email: string;
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function UserSignUp({ userInputs, onChange }: Props) {
    return (
        <>
            <div className="form-grpup">
                <label htmlFor="firstName" className="control-label">First Name</label>
                <input type="text" onChange={onChange} className='form-control' value={userInputs.firstName} name='firstName' />
            </div>

            <div className="form-grpup">
                <label htmlFor="lastName" className="control-label">Last Name</label>
                <input type="text" onChange={onChange} className='form-control' name='lastName' value={userInputs.lastName} />
            </div>

            <div className="form-grpup">
                <label htmlFor="email" className="control-label">Email</label>
                <input type="text" onChange={onChange} className='form-control' value={userInputs.email} name='email' />
            </div>
        </>
    )
}

export default UserSignUp