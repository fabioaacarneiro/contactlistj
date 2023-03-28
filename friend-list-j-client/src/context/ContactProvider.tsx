import { createContext, useState, useContext, useEffect } from "react";
import { findAll } from "../assets/ts/api";
import { Contact, IContextContact } from "../assets/ts/types";

interface Props {
    children: React.ReactNode
}

export const ContactContext = createContext<IContextContact>({} as IContextContact)

export const useContactContext = () => {
    const context = useContext(ContactContext)
    return context
}

export function ContactProvider({children}: Props ) {

    const [contacts, setContacts] = useState<Contact[]>([]);

    const getContacts = async () => {
        const response = await findAll()
        setContacts(response?.data)
    }

    useEffect(() => {
        getContacts()
    }, [])

    let editingContact

    const setEditingContact = (contact: Contact) => {
        editingContact = contact
    }

    const refreshContacts = () => {
        getContacts()
    }

    return (
        <ContactContext.Provider value={{contacts, editingContact, setEditingContact, refreshContacts}}>
            {children}
        </ContactContext.Provider>
    )
}