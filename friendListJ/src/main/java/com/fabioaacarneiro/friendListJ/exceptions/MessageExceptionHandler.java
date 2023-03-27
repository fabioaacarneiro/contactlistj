package com.fabioaacarneiro.friendListJ.exceptions;

import java.util.Date;
import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MessageExceptionHandler {
    
    private Date timestamp;
    private Integer status;
    private List<MessageException> errors;
}
