package org.factoriaf5.appf5.configuration;

import org.factoriaf5.appf5.domain.Candidate;
import org.factoriaf5.appf5.repositories.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Profile("local")
@Component
public class DataLoader {
    private CandidateRepository candidateRepository;

    @Autowired
    public DataLoader(CandidateRepository candidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    @PostConstruct
    void cargarDatosDePrueba() {
        List<Candidate> candidates = List.of(
                new Candidate(1L, "Olga", "Caparros", 46, "olga@capa.com"),
                new Candidate(2L, "Alisa", "Maravillosa", 35, "alisa@malla.com")
        );
        candidateRepository.saveAll(candidates);
    }
}



