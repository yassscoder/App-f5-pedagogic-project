package org.factoriaf5.appf5.controllers;

import org.factoriaf5.appf5.domain.Candidate;
import org.factoriaf5.appf5.repositories.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CandidateController {
    private CandidateRepository candidateRepository;

    @Autowired
    public CandidateController (CandidateRepository candidateRepository) {this.candidateRepository = candidateRepository;
    }

    @GetMapping ("/candidates")
    public List<Candidate> allCandidates() {
        return candidateRepository.findAll();
    }

    @PostMapping("/candidates")
    public ResponseEntity<String> addCandidate(@RequestBody Candidate candidate){
        candidateRepository.save(candidate);
        return new ResponseEntity<>("Created", HttpStatus.OK);
    }
    @GetMapping ("/candidates/{id}")
    public ResponseEntity<Candidate> getCandidateById(@PathVariable Long id){
        Optional<Candidate> candidate = candidateRepository.findById(id);

        return ResponseEntity.of(candidate);
    }


    @DeleteMapping("/candidates/{id}")
    public void deleteCandidatesById(@PathVariable Long id) {
        candidateRepository.deleteById(id);
    }

    @PutMapping("/candidates")
    public ResponseEntity<Candidate> editById(@RequestBody Candidate candidate){
        if (candidateRepository.findById(candidate.getId()).isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        candidateRepository.save(candidate);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
