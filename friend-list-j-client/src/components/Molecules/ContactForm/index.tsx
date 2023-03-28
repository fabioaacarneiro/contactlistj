import { FormEvent, useContext, useEffect, useState } from "react"
import { insertContact, updateContact } from "../../../assets/ts/api"
import type { Contact } from "../../../assets/ts/types"
import { ContactContext } from "../../../context/ContactProvider"

import "./style.scss"

export function ContactForm() {

    const [contactName, setContactName] = useState<string>("")
    const [contactPhone, setContactPhone] = useState<string>("")
    const [contactAddress, setContactAddress] = useState<string>("")
    
    const {editingContact, refreshContacts} = useContext(ContactContext)

    const editAContact = async (evt: FormEvent, contact: Contact) => {
        evt.preventDefault()

        const newContact: Contact = {
            id: contact.id,
            name: contact.name,
            phone: contact.phone,
            address: contact.address
        }
        
        await updateContact(contact.id, newContact)
    }

    const createContact = async (evt: FormEvent) => {
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
            <form onSubmit={editingContact == null ? evt => createContact(evt) : evt => editAContact(evt, editingContact)}>
                <input type="text" value={contactName} onChange={evt => setContactName(evt.target.value)} placeholder="Qual o nome do Contato?" />
                <input type="text" value={contactPhone} onChange={evt => setContactPhone(evt.target.value)} placeholder="Qual o número de telefone do contato ?" />
                <input type="text" value={contactAddress} onChange={evt => setContactAddress(evt.target.value)} placeholder="Qual o endereço do contato ?" />
                <input className="sendButton" type="submit" value="Salvar" />
            </form>
        </div>
    )
}