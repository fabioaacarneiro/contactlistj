import { FormEvent, useContext, useEffect, useState } from "react"
import { updateContact } from "../../../assets/ts/api"
import type { Contact } from "../../../assets/ts/types"
import { ContactContext } from "../../../context/ContactProvider"

import "./style.scss"

type Props = {
    contact: Contact
}

export function UpdateContactForm({contact}: Props) {

    const {refreshContacts} = useContext(ContactContext)

    const [contactName, setContactName] = useState<string>("")
    const [contactPhone, setContactPhone] = useState<string>("")
    const [contactAddress, setContactAddress] = useState<string>("")

    useEffect(() => {

        setContactName(contact.name)
        setContactPhone(contact.phone)
        setContactAddress(contact.address)

    }, [])

    const editAContact = async (evt: FormEvent) => {
        evt.preventDefault()

        const newContact: Contact = {
            id: contact.id,
            name: contactName,
            phone: contactPhone,
            address: contactAddress
        }
        
        await updateContact(contact.id, newContact)

        refreshContacts()
    }
    
    return (
        <div className="update-contact-form">
            <form onSubmit={evt => editAContact(evt)}>
            <input type="text" value={contactName} onChange={evt => setContactName(evt.target.value)} placeholder="Qual o nome do Contato?" />
            <input type="text" value={contactPhone} onChange={evt => setContactPhone(evt.target.value)} placeholder="Qual o número de telefone do contato ?" />
            <input type="text" value={contactAddress} onChange={evt => setContactAddress(evt.target.value)} placeholder="Qual o endereço do contato ?" />
            <input className="sendButton" type="submit" value={"Atualizar"} />
            </form>
        </div>
    )
}