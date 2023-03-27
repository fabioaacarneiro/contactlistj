
export interface Contact {
    id: string
    name: string
    phone: string
    address: string
}

export interface IContextContact {
    contacts: Contact[]
    refreshContacts: () => void
}