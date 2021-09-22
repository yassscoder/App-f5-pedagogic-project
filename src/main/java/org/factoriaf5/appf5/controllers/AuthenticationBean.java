package org.factoriaf5.appf5.controllers;

public class AuthenticationBean {
    private String message;

    public AuthenticationBean (String message) {

        this.message = message  ;
    }
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
