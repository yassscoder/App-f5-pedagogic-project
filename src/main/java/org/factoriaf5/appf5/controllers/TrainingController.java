package org.factoriaf5.appf5.controllers;

import org.factoriaf5.appf5.domain.Training;
import org.factoriaf5.appf5.repositories.TrainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TrainingController {
    private TrainingRepository trainingRepository;

    @Autowired
    public TrainingController (TrainingRepository trainingRepository) {this.trainingRepository = trainingRepository;
    }

    @GetMapping ("/trainings")
    public List<Training> allTrainings() { return trainingRepository.findAll(); }
    @PostMapping("/trainings")
    public ResponseEntity<String> addTraining(@RequestBody Training training){
        trainingRepository.save(training);
        return new ResponseEntity<>("Created", HttpStatus.OK);
    }
}
