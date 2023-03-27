import { FormEvent, useContext, useState } from "react"
import { insertContact } from "../../../assets/ts/api"
import type { Contact } from "../../../assets/ts/types"
import { ContactContext } from "../../../context/ContactProvider"

import "./style.scss"

export function ContactForm() {

    const [contactName, setContactName] = useState<string>("")
    const [contactPhone, setContactPhone] = useState<string>("")
    const [contactAddress, setContactAddress] = useState<string>("")
    
    const {addContactToList} = useContext(ContactContext)
    
    const createContact = async (evt:FormEvent) => {
        evt.preventDefault()
        
        const newContact: Contact = {
            name: contactName,
            phone: contactPhone,
            address: contactAddress
        }

        const responseInsertData = await insertContact(newContact)
        addContactToList(responseInsertData?.data)
        console.log(responseInsertData?.data)
        console.log(newContact)
    }
    
    return (
        <div className="contact-form">
            <form onSubmit={evt => createContact(evt)}>
                <input type="text" value={contactName} onChange={evt => setContactName(evt.target.value)} />
                <input type="text" value={contactPhone} onChange={evt => setContactPhone(evt.target.value)} />
                <input type="text" value={contactAddress} onChange={evt => setContactAddress(evt.target.value)} />
                <input className="sendButton" type="submit" value="Enviar" />
            </form>
        </div>
    )
}