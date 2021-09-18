package org.factoriaf5.appf5.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;

@Component
public class ResponseFreeCodeCampApi {

    private List <String> javaScriptExercises = List.of("56533eb9ac21ba0edf2244a8", "bd7123c9c441eddfaeb4bdef"); //lista ejercicios
    private List <String> htmlExercises = List.of("5664820f61c48e80c9fa476c", "56533eb9ac21ba0edf2244dc");
    private List <String> cssExercises = List.of("56533eb9ac21ba0edf2244ae", "bd7993c9ca9feddfaeb7bdef");


    public List<Integer> getExercisesDone(String userName) throws IOException, InterruptedException {


        String API_FREECODE_URL = "https://api.freecodecamp.org/api/users/get-public-profile?username=" + userName;

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(API_FREECODE_URL))
                .GET()
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());


        JSONObject respuesta = new JSONObject(response.body());


        JSONArray completedChallenges = respuesta
                .getJSONObject("entities")
                .getJSONObject("user")
                .getJSONObject(userName)
                .getJSONArray("completedChallenges");


        int cuentaJS = 0;
        int cuentaHtml = 0;
        int cuentaCss = 0;


        for (int i = 0; i < completedChallenges.length(); i++) {

            JSONObject jsonObject = completedChallenges.getJSONObject(i);
            String idExercise = jsonObject.getString("id");

            if (javaScriptExercises.contains(idExercise)) {
                cuentaJS++;

            } else if (htmlExercises.contains(idExercise)) {
                cuentaHtml++;

            } else if (cssExercises.contains(idExercise)) {
                cuentaCss++;
            }
        }

            List<Integer> listTotalExercises = new ArrayList<>();

                listTotalExercises.add(cuentaHtml);
                listTotalExercises.add(cuentaJS);
                listTotalExercises.add(cuentaCss);

            return listTotalExercises; //posicion 0: cuentaHTML; posicion 1:cuentaJS; posicion 2:cuentaCSS



}}
