package com.fabioaacarneiro.friendListJ.exceptions.contactsExceptions;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fabioaacarneiro.friendListJ.exceptions.MessageException;
import com.fabioaacarneiro.friendListJ.exceptions.MessageExceptionHandler;

@ControllerAdvice(basePackages = "com.fabioaacarneiro.friendListJ.controller")
public class ContactControllerAdvice {
    
    @ResponseBody
    @ExceptionHandler(ContactNotFoundException.class)
    public ResponseEntity<MessageExceptionHandler> contactNotFound() {
        
        MessageException eMessage = MessageException.builder()
            .error("Contact is not found")
            .message("One or more errors occurred looking for the contact.")
            .build();

        List<MessageException> eList = new ArrayList<>();
        eList.add(eMessage);

        MessageExceptionHandler error = MessageExceptionHandler.builder()
            .timestamp(new Date())
            .status(HttpStatus.NOT_FOUND.value())
            .errors(eList)
            .build();
        
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ResponseBody
    @ExceptionHandler(ContactCannotDeletedException.class)
    public ResponseEntity<MessageExceptionHandler> contactCannotDeleted() {

        MessageException eMessage = MessageException.builder()
            .error("Contact cannot be deleted")
            .message("One or more errors occurred on trying delete the contact.")
            .build();

        List<MessageException> eList = new ArrayList<>();
        eList.add(eMessage);

        MessageExceptionHandler error = MessageExceptionHandler.builder()
            .timestamp(new Date())
            .status(HttpStatus.NOT_FOUND.value())
            .errors(eList)
            .build();

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ResponseBody
    @ExceptionHandler(ContactCannotInsertedException.class)
    public ResponseEntity<MessageExceptionHandler> contactCannotInserted(MethodArgumentNotValidException e) {

        List<MessageException> eList = new ArrayList<>();

        List<FieldError> fErrors = e.getFieldErrors();

        for(FieldError fError : fErrors) {
            MessageException eMessage = MessageException.builder()
                .error(fError.getField())
                .message("One or more errors occurred on trying insert the contact.")
                .build();

            eList.add(eMessage);
        }

        MessageExceptionHandler error = MessageExceptionHandler.builder()
            .timestamp(new Date())
            .status(HttpStatus.BAD_REQUEST.value())
            .errors(eList)
            .build();

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
}
