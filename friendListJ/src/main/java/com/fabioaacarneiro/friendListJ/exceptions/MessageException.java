package com.fabioaacarneiro.friendListJ.exceptions;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MessageException {
    
    private String error;
    private String message;
}
