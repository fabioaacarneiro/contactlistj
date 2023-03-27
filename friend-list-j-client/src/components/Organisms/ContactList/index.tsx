import { useContext, useEffect, useState } from "react"
import { findAll } from "../../../assets/ts/api"
import { Contact } from "../../../assets/ts/types"
import { ContactContext } from "../../../context/ContactProvider"
import { DeleteContactButton } from "../../Atoms/DeleteContactButton"
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
            return (
                <div>
                    <ContactItem key={contact.id}
                        contact={contact} 
                    />
                </div>
            )
        })}
    </ul>
    )
}