import { useContext, useEffect } from "react"
import { ContactContext } from "../../../context/ContactProvider"
import { ContactItem } from "../../Molecules/ContactItem"

import "./style.scss"

export function ContactList() {

    const { contacts, refreshContacts } = useContext(ContactContext)

    useEffect(() => {
        refreshContacts()
    }, [])

    return (
        <ul className="contact-list"> 
            {contacts?.map((contact) => {
                return <ContactItem key={contact.id} contact={contact} />
            })}
        </ul>
    )
}