package com.fabioaacarneiro.friendListJ.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.fabioaacarneiro.friendListJ.entities.Contact;

public interface ContactRepository extends CrudRepository<Contact, Long> {

    Optional<Contact> findByName(String name);
}
