package org.factoriaf5.appf5.controllers;
import org.factoriaf5.appf5.domain.Candidate;
import org.factoriaf5.appf5.domain.Training;
import org.factoriaf5.appf5.repositories.CandidateRepository;
import org.factoriaf5.appf5.repositories.TrainingRepository;
import org.factoriaf5.appf5.service.CheckLessonsDone;
import org.factoriaf5.appf5.service.ResponseFreeCodeCampApi;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
public class CandidateController {
    private CandidateRepository candidateRepository;
    private ResponseFreeCodeCampApi responseFreeCodeCampApi;
    private CheckLessonsDone checkLessonsDone;
    private TrainingRepository trainingRepository;

    @Autowired
    public CandidateController(CandidateRepository candidateRepository, ResponseFreeCodeCampApi responseFreeCodeCampApi, CheckLessonsDone checkLessonsDone, TrainingRepository trainingRepository) {
        this.candidateRepository = candidateRepository;
        this.responseFreeCodeCampApi = responseFreeCodeCampApi;
        this.checkLessonsDone = checkLessonsDone;
        this.trainingRepository = trainingRepository;
    }

//    @GetMapping("/candidates")
//    public List<Candidate> allCandidates() throws IOException, InterruptedException {
//        List<Candidate> candidates = candidateRepository.findAll();
//        for (int i = 0; i < candidates.size(); i++) {
//            try {
//                var completedChallenges = responseFreeCodeCampApi.getCompletedChallenge(candidates.get(i).getUserFree()); //user05
//                var numeroEjs = checkLessonsDone.getLessonsDone(completedChallenges);
//
//                var htmlExercises = numeroEjs.get(0);
//                var jsExercises = numeroEjs.get(1);
//                var cssExercises = numeroEjs.get(2);
//
//                candidates.get(i).setCompletedHtml(String.valueOf(htmlExercises));
//                candidates.get(i).setCompletedJS(String.valueOf(jsExercises));
//                candidates.get(i).setCompletedCss(String.valueOf(cssExercises));
//            } catch (JSONException exception) {
//                System.out.println(" Error al acceder al usuario de Free code camp:" + (candidates.get(i).getUserFree()));
//            }
//        }
//
//        return candidates;
//    }
    @GetMapping("/candidates/list_candidates")

    public List<Candidate> getCandidatesFromTraining(@RequestParam Long training_id)  throws IOException, InterruptedException {

        List<Candidate> candidates= trainingRepository.findById(training_id).get().getCandidates();

        for (int i = 0; i < candidates.size(); i++) {
            try {
                var completedChallenges = responseFreeCodeCampApi.getCompletedChallenge(candidates.get(i).getUserFree());
                var numeroEjs = checkLessonsDone.getLessonsDone(completedChallenges);

                var htmlExercises = numeroEjs.get(0);
                var jsExercises = numeroEjs.get(1);
                var cssExercises = numeroEjs.get(2);

                candidates.get(i).setCompletedHtml(String.valueOf(htmlExercises));
                candidates.get(i).setCompletedJS(String.valueOf(jsExercises));
                candidates.get(i).setCompletedCss(String.valueOf(cssExercises));

            } catch (JSONException exception) {
                candidates.get(i).setCompletedHtml(String.valueOf(0));
                candidates.get(i).setCompletedJS(String.valueOf(0));
                candidates.get(i).setCompletedCss(String.valueOf(0));

                System.out.println(" Error al acceder al usuario de Free code camp:" + (candidates.get(i).getUserFree()));
            }
        }

        return candidates;
    }


    @PostMapping("/candidates")
    public ResponseEntity<String> addCandidate(@RequestBody Candidate candidate, @RequestParam Long training_id) {
        Optional<Training> maybeTraining =  trainingRepository.findById(training_id);

        if (maybeTraining.isPresent()) {
            Training training = maybeTraining.get();
            training.add(candidate);
            trainingRepository.save(training);
        }

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

    @DeleteMapping("/candidates/{id}")
    public void deleteById(@PathVariable Long id) {
        candidateRepository.deleteById(id);
    }
}
