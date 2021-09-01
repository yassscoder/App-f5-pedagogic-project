package org.factoriaf5.appf5.domain;

import javax.persistence.*;

@Entity
@Table(name = "candidates")

public class Candidate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastName;
    private Integer age;
    private String mail;

    public Candidate(Long id, String name, String lastName, Integer age, String mail){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
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

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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
