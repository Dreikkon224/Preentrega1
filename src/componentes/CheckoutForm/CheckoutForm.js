import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setName] = useState('')
    const [telefono, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userDate = {nombre, telefono, email}

        onConfirm(userDate)
    }

    return (
        <div className="container">
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    Nombre
                    <input className="Input" type="text" value={nombre} onChange={({ target }) => setName(target.value)}/>
                </label>
                <label className="Label">
                    Telefono
                    <input className="Input" type="text" value={telefono} onChange={({ target }) => setPhone(target.value)}/>
                </label>
                <label className="Label">
                    email
                    <input className="Input" type="text" value={email} onChange={({ target }) => setEmail(target.value)}/>
                </label>
                <div className="Label">
                    <button type='submit' className="Button">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm