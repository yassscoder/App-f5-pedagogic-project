package org.factoriaf5.appf5.controllers;

import org.factoriaf5.appf5.JsonFreecodecampHttp;
import org.factoriaf5.appf5.domain.Candidate;
import org.factoriaf5.appf5.repositories.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CandidateController {
    private CandidateRepository candidateRepository;

    @Autowired
    public CandidateController(CandidateRepository candidateRepository){
        this.candidateRepository = candidateRepository;
    }

    @GetMapping("/candidates")
    public List<Candidate> allCandidates(){
        return candidateRepository.findAll();
    }

    @GetMapping("/candidate")
    public static void main(String[]args){
        JsonFreecodecampHttp jsonFreecodecampHttp= new JsonFreecodecampHttp();
        jsonFreecodecampHttp.main();
    }


    @PostMapping("/candidates")
    public ResponseEntity<String> addCandidate(@RequestBody Candidate candidate){
        candidateRepository.save(candidate);
        return new ResponseEntity<>("Created", HttpStatus.OK);
    }
}
