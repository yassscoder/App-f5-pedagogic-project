package org.factoriaf5.appf5.service;
import java.util.List;
import org.springframework.stereotype.Component;


@Component
public class LessonIdService {

        private List <String> javaScriptExercises = List.of("56533eb9ac21ba0edf2244a8", "bd7123c9c441eddfaeb4bdef"); //lista ejercicios
        private List <String> htmlExercises = List.of("5664820f61c48e80c9fa476c", "56533eb9ac21ba0edf2244dc");
        private List <String> cssExercises = List.of("56533eb9ac21ba0edf2244ae", "bd7993c9ca9feddfaeb7bdef");

    public List<String> getJavaScriptExercises() {
        return javaScriptExercises;
    }

    public void setJavaScriptExercises(List<String> javaScriptExercises) {
        this.javaScriptExercises = javaScriptExercises;
    }

    public List<String> getHtmlExercises() {
        return htmlExercises;
    }

    public void setHtmlExercises(List<String> htmlExercises) {
        this.htmlExercises = htmlExercises;
    }

    public List<String> getCssExercises() {
        return cssExercises;
    }

    public void setCssExercises(List<String> cssExercises) {
        this.cssExercises = cssExercises;
    }


    }
