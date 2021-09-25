
package org.factoriaf5.appf5.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;


@Component
public class CheckLessonsDone {

    LessonIdService lessonIdService = new LessonIdService();

    public List<Integer> getLessonsDone(JSONArray completedChallenges) {

        int jsCounter = 0;
        int htmlCounter = 0;
        int cssCounter = 0;

        for (int i = 0; i < completedChallenges.length(); i++) {

            JSONObject jsonObject = completedChallenges.getJSONObject(i);
            String idExercise = jsonObject.getString("id");

            if (lessonIdService.getJavaScriptExercises().contains(idExercise)) {
                jsCounter++;

            } else if (lessonIdService.getHtmlExercises().contains(idExercise)) {
                htmlCounter++;

            } else if (lessonIdService.getCssExercises().contains(idExercise)) {
                cssCounter++;
            }
        }

        List<Integer> listTotalExercises = new ArrayList<>();

        listTotalExercises.add(htmlCounter);
        listTotalExercises.add(jsCounter);
        listTotalExercises.add(cssCounter);
        return listTotalExercises; //posicion 0: cuentaHTML; posicion 1:cuentaJS; posicion 2:cuentaCSS
    }
    }

