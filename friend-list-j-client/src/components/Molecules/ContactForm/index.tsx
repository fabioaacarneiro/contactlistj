import { FormEvent, useContext, useState } from "react"
import { insertContact } from "../../../assets/ts/api"
import type { Contact } from "../../../assets/ts/types"
import { ContactContext } from "../../../context/ContactProvider"

import "./style.scss"

export function ContactForm() {

    const [contactName, setContactName] = useState<string>("")
    const [contactPhone, setContactPhone] = useState<string>("")
    const [contactAddress, setContactAddress] = useState<string>("")
    
    const {refreshContacts, } = useContext(ContactContext)
    
    const createContact = async (evt:FormEvent) => {
        evt.preventDefault()
        
        const newContact: Contact = {
            id: "",
            name: contactName,
            phone: contactPhone,
            address: contactAddress
        }

        await insertContact(newContact)
        refreshContacts()

        setContactName("")
        setContactPhone("")
        setContactAddress("")
    }
    
    return (
        <div className="contact-form">
            <form onSubmit={evt => createContact(evt)}>
                <input type="text" value={contactName} onChange={evt => setContactName(evt.target.value)} placeholder="Qual o nome do Contato?" />
                <input type="text" value={contactPhone} onChange={evt => setContactPhone(evt.target.value)} placeholder="Qual o número de telefone do contato ?" />
                <input type="text" value={contactAddress} onChange={evt => setContactAddress(evt.target.value)} placeholder="Qual o endereço do contato ?" />
                <input className="sendButton" type="submit" value="Enviar" />
            </form>
        </div>
    )
}