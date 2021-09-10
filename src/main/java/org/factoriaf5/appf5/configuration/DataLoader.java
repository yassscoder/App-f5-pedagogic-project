package org.factoriaf5.appf5.configuration;

import org.factoriaf5.appf5.domain.Candidate;
import org.factoriaf5.appf5.domain.Training;
import org.factoriaf5.appf5.repositories.CandidateRepository;
import org.factoriaf5.appf5.repositories.TrainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Profile("local")
@Component
public class DataLoader {
    private CandidateRepository candidateRepository;
    private TrainingRepository trainingRepository;

    @Autowired
    public DataLoader(CandidateRepository candidateRepository, TrainingRepository trainingRepository) {
        this.candidateRepository = candidateRepository;
        this.trainingRepository = trainingRepository;
    }

    @PostConstruct
    void cargarDatosDePrueba() {
        List<Candidate> candidates = List.of(
                new Candidate(1L, "Olga", "Caparros", 46, "olga@capa.com", "user05"),
                new Candidate(2L, "Alisa", "Maravillosa", 35, "alisa@malla.com", "user10")
        );

        List<Training> trainings = List.of(
                new Training(1L, "Barcelona", "Femtech P1", 850),
                new Training(2L, "Madrid", "Front P3", 300)
        );

        candidateRepository.saveAll(candidates);
        trainingRepository.saveAll(trainings);
    }


}



