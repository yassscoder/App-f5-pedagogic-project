package org.factoriaf5.appf5.controllers;

import org.factoriaf5.appf5.domain.Training;
import org.factoriaf5.appf5.repositories.TrainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
//@RequestMapping(value="trainings")
public class TrainingController {
    private TrainingRepository trainingRepository;

    @Autowired
    public TrainingController (TrainingRepository trainingRepository) {this.trainingRepository = trainingRepository;
    }

  @GetMapping ("/trainings")
    public List<Training> allTrainings() {
        return trainingRepository.findAll();
    }

    @PostMapping("/trainings")
    public ResponseEntity<String> addTraining(@RequestBody Training training){
        trainingRepository.save(training);
        return new ResponseEntity<>("Created", HttpStatus.OK);
    }
  @GetMapping ("/trainings/{id}")
    public ResponseEntity<Training> getTrainingById(@PathVariable Long id){
        Optional<Training> training = trainingRepository.findById(id);

         return ResponseEntity.of(training);
    }
    // no hay lista, solo necesitamos path variable porque solo pediremos una parte del "objeto" que y será encontrado por id)

}
