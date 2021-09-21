package org.factoriaf5.appf5.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "trainings")
public class Training {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String city;
    private String promoName;
    private Integer duration;

    @OneToMany (
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @JoinColumn(name = "training_id")
    private List<Candidate> candidates;

    public Training (Long id, String city, String promoName, Integer duration, List<Candidate> candidates) {

        this.city = city;
        this.promoName = promoName;
        this.duration = duration;
        this.candidates = candidates;
    }

    public Training(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPromoName() {
        return promoName;
    }

    public void setPromoName(String promoName) {
        this.promoName = promoName;
    }

    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public void setCandidates(List<Candidate> candidates) {
        this.candidates = candidates;
    }
}
