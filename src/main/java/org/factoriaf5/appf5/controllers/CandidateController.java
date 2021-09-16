package org.factoriaf5.appf5.controllers;

import org.factoriaf5.appf5.domain.Candidate;
import org.factoriaf5.appf5.domain.Training;
import org.factoriaf5.appf5.repositories.CandidateRepository;
import org.factoriaf5.appf5.service.ResponseFreeCodeCampApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
public class CandidateController {
    private CandidateRepository candidateRepository;

    @Autowired
    public CandidateController(CandidateRepository candidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    @GetMapping("/candidates")
    public List<Candidate> allCandidates() throws IOException, InterruptedException {
        List<Candidate> candidates = candidateRepository.findAll();
        for (int i = 0; i < candidates.size(); i++) {
            var numeroEjs = ResponseFreeCodeCampApi.getExercisesDone(candidates.get(i).getUserFree());
            System.out.println(numeroEjs);
            candidates.get(i).setNumCompleted(String.valueOf(numeroEjs));
        }
        return candidates;
    }


    @PostMapping("/candidates")
    public ResponseEntity<String> addCandidate(@RequestBody Candidate candidate) {
        candidateRepository.save(candidate);
        return new ResponseEntity<>("Created", HttpStatus.OK);
    }

    @PutMapping("/candidates")
    public ResponseEntity<Training> editById(@RequestBody Candidate candidate) {
        if (candidateRepository.findById(candidate.getId()).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        candidateRepository.save(candidate);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
