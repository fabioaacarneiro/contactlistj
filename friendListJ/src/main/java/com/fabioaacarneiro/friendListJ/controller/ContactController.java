package com.fabioaacarneiro.friendListJ.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fabioaacarneiro.friendListJ.entities.Contact;
import com.fabioaacarneiro.friendListJ.services.ContactService;

@RestController
@RequestMapping(value = "/contacts")
public class ContactController {
    
    @Autowired
    private ContactService service;

    @GetMapping
    public ResponseEntity<Iterable<Contact>> findAll() {
       Iterable<Contact> contacts = service.findAll();
       return ResponseEntity.ok().body(contacts);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Contact> findById(@PathVariable Long id) {
        Contact contact = service.findById(id);
        return ResponseEntity.ok().body(contact);
    }

    @PostMapping
    public ResponseEntity<Contact> insert(@RequestBody Contact contact) {
        contact = service.insert(contact);
        URI uri = ServletUriComponentsBuilder
            .fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(contact.getId())
            .toUri();

        return ResponseEntity.created(uri).body(contact);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Contact> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Contact> update(@PathVariable Long id, @RequestBody Contact contact) {
        Contact obj = service.update(id, contact);
        return ResponseEntity.ok().body(obj);
    }
}