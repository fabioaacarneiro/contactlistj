import { useContext, useEffect, useState } from "react"
import { findAll } from "../../../assets/ts/api"
import { Contact } from "../../../assets/ts/types"
import { ContactContext } from "../../../context/ContactProvider"
import { ContactItem } from "../../Molecules/ContactItem"

import "./style.scss"

export function ContactList() {

    const { contacts, setAllContacts } = useContext(ContactContext)

    const getContacts = async () => {
        const response = await findAll()
        setAllContacts(response?.data)
    }

    useEffect(() => {
        getContacts()
    }, [])

    return (
        <ul className="contact-list">
        {contacts?.map((contact) => {
            return (
                <ContactItem key={contact.id}
                    contact={contact} 
                />
            )
        })}
    </ul>
    )
}