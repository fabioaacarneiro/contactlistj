import axios from "axios"
import type { Contact } from "./types"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const findAll = async () => {
    try {
        return await api.get("")
    } catch (error) {
        if (error instanceof Error) {
            console.error(error)
        }
    }
}

export const findContactById = async (id: string) => {
    try {
        return await api.get(`${id}`)
    } catch (error) {
        if (error instanceof Error) {
            console.error(error)
        }
    }
}

export const deleteContact = async (id: string) => {
    try {
        return await api.delete(`/${id}`)
    } catch (error) {
        if (error instanceof Error) {
            console.error(error)
        }
    }
}

export const updateContact = async (id: string, contact: Contact) => {
    try {
        return await api.put(`/${id}`, contact)
    } catch (error) {
        if (error instanceof Error) {
            console.error(error)
        }
    }
}

export const insertContact = async (contact: Contact) => {
    try {
        return await api.post("", contact)
    } catch (error) {
        if (error instanceof Error) {
            console.error(error)
        }
    }
}