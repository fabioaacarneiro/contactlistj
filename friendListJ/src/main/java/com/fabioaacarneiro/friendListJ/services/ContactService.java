package com.fabioaacarneiro.friendListJ.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fabioaacarneiro.friendListJ.entities.Contact;
import com.fabioaacarneiro.friendListJ.exceptions.contactsExceptions.ContactCannotDeletedException;
import com.fabioaacarneiro.friendListJ.exceptions.contactsExceptions.ContactCannotInsertedException;
import com.fabioaacarneiro.friendListJ.exceptions.contactsExceptions.ContactCannotUpdatedException;
import com.fabioaacarneiro.friendListJ.exceptions.contactsExceptions.ContactNotFoundException;
import com.fabioaacarneiro.friendListJ.repositories.ContactRepository;

@Service
public class ContactService {
    
    @Autowired
    private ContactRepository repository;

    public Iterable<Contact> findAll() {
        Iterable<Contact> peoples = repository.findAll();
        return peoples;
    }

    public Contact findByName(String name) {
        Optional<Contact> contact = repository.findByName(name);
        return contact.orElseThrow(() -> new ContactNotFoundException());
    }

    public Contact findById(Long id) {
        Optional<Contact> people = repository.findById(id);
        return people.orElseThrow(() -> new ContactNotFoundException());
    }
    
    public Contact update(Long id, Contact people) {
        Contact obj = findById(id);
        
        try {
            updatePeople(obj, people);
            return repository.save(obj);
        } catch (ContactCannotUpdatedException e) {
            throw new ContactCannotUpdatedException();
        }
    }
    
    public Contact insert(Contact contact) {
        try {
            return repository.save(contact);
        } catch (ContactCannotInsertedException e) {
            throw new ContactCannotInsertedException();
        }
    }
    
    public void delete(Long id) {
        try {
            repository.deleteById(id);
        } catch (RuntimeException e) {
            throw new ContactCannotDeletedException();
        }
    }

    public void updatePeople(Contact people, Contact updatedPeople) {
       people.setName(updatedPeople.getName());
       people.setPhone(updatedPeople.getPhone());
       people.setAddress(updatedPeople.getAddress());
    }
}
