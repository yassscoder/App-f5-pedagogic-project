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
                new Candidate("Olga", "Caparros", 46, "olga@capa.com", "yassscoder", "3", "1", "0"),
                new Candidate("Alisa", "Maravillosa", 35, "alisa@malla.com", "fcccc63c19d-3f28-486a-86c2-d614de411e74", "13", "2", "3")
//                new Candidate(3L, "Yas", "Caparros", 33, "yas@capa.com", "olgafemtech1", "3", "1", "2")
        );
        List<Candidate> candidates1 = List.of(
                new Candidate("Olga", "Caparros", 46, "olga@capa.com", "yassscoder", "3", "1", "0"),
                new Candidate("Alisa", "Maravillosa", 35, "alisa@malla.com", "fcccc63c19d-3f28-486a-86c2-d614de411e74", "13", "2", "3"),
                new Candidate( "Yas", "Caparros", 33, "yas@capa.com", "olgafemtech1", "3", "1", "2")
        );

        Training training = new Training(1L, "Barcelona", "Femtech P1", 850, candidates);
        Training training1 = new Training(2L, "Madrid", "Front P3", 300, candidates1);

        trainingRepository.save(training);
        trainingRepository.save(training1);
    }


}



