package org.factoriaf5.appf5.CursosFCC;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LessonController {
    private LessonRepository lessonRepository;
    @Autowired
    public LessonController(LessonRepository lessonRepository) {
        this.lessonRepository = lessonRepository;
    }
    @GetMapping("/lessons")
    public List<Lesson> allLessons() {return lessonRepository.findAll();}

    @PostMapping("/lessons")
    public ResponseEntity<String> addLesson(@RequestBody Lesson lesson){
        lessonRepository.save(lesson);
        return new ResponseEntity<>("Created", HttpStatus.OK);
    }
}
