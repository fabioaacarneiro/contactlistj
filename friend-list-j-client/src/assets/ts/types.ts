
export interface Contact {
    id?: string
    name: string
    phone: string
    address: string
}

export interface IContextContact {
    contacts: Contact[]
    setAllContacts: (contacts: Contact[]) => void
    addContactToList: (contacts: Contact) => void
}