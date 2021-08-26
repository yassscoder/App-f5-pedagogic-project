package org.factoriaf5.appf5.domain;

import javax.persistence.*;

@Entity
@Table(name = "candidates")

public class Candidate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastname;
    private Integer age;
    private String mail;

    public Candidate(Long id, String name, String lastname, Integer age, String mail){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.mail = mail;
    }

    public Candidate(){

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public Integer getAge(){
        return age;
    }
    public void setAge(Integer age){
        this.age = age;
    }


    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }
}
