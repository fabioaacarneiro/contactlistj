import { createContext, useState, useContext } from "react";
import { Contact, IContextContact } from "../assets/ts/types";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ContactContext = createContext<IContextContact>({} as IContextContact)
export const useContactContext = () => {
    const context = useContext(ContactContext)
    return context
}

export function ContactProvider({children}: Props ) {

    const [contacts, setContacts] = useState<Contact[]>([]);

    const setAllContacts = (contacts: Contact[]) => {
        setContacts(contacts)
    }

    const addContactToList = (contact: Contact) => {
        setContacts((contacts) => [...contacts, contact])
    }
    
    return (
        <ContactContext.Provider value={{contacts, setAllContacts, addContactToList}}>
            {children}
        </ContactContext.Provider>
    )
}