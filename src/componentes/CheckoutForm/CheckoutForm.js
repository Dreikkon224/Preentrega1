import './CheckoutForm.css'
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
                    <input class="form-control me-2" placeholder="Nombre" aria-label="Search" type="text" value={nombre} onChange={({ target }) => setName(target.value)}/>
                </label>
                <label className="Label">
                    <input className="Input" class="form-control me-2" placeholder="Telefono" aria-label="Search" type="text" value={telefono} onChange={({ target }) => setPhone(target.value)}/>
                </label>
                <label className="Label">
                    <input className="Input" class="form-control me-2" placeholder="Email" aria-label="Search" type="text"  value={email} onChange={({ target }) => setEmail(target.value)}/>
                </label>
                <div className="Label">
                    <button type='submit' class="btn btn-success">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm