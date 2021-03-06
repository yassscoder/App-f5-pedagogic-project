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
    private String userFree;
    private String completedHtml;
    private String completedJS;
    private String completedCss;

    public Candidate( String name, String lastName, Integer age, String mail, String userFree, String completedHtml, String completedJS, String completedCss){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.mail = mail;
        this.userFree = userFree;
        this.completedHtml = completedHtml;
        this.completedJS = completedJS;
        this.completedCss = completedCss;
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

    public String getUserFree() {
        return userFree;
    }

    public void setUserFree(String userFree) {
        this.userFree = userFree;
    }

    public String getCompletedHtml() {
        return completedHtml;
    }

    public void setCompletedHtml(String completedHtml) {
        this.completedHtml = completedHtml;
    }

    public String getCompletedJS() {
        return completedJS;
    }

    public void setCompletedJS(String completedJS) {
        this.completedJS = completedJS;
    }

    public String getCompletedCss() {
        return completedCss;
    }

    public void setCompletedCss(String completedCss) {
        this.completedCss = completedCss;
    }
}
