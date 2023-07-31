import { useContext, useState } from "react";
import { db } from '../../configFirebase/firebase'
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection, getDocs, query, where, writeBatch, documentId } from "firebase/firestore";
import CheckoutForm from '../CheckoutForm/CheckoutForm'


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ nombre, telefono, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: { nombre, telefono, email },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'Productos')
            const productsAddedFromFirebasetore = await getDocs(query(productsRef, where(documentId() , 'in', ids)))
            const { docs } = productsAddedFromFirebasetore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('hay productos que están fuera de Stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se esta cargar la Orden...</h1>
    }
    
    if(orderId) {
        return <h1>El id de su orden es:</h1>
    }

    return (
        <div>
            <h1>Pagar</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout