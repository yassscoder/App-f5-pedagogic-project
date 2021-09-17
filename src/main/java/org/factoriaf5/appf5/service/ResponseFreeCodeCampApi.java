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
    private List <String> htmlExercises = List.of("5664820f61c48e80c9fa476c", "56533eb9ac21ba0edf2244dc"); //lista ejercicios

    public int getExercisesDone(String userName) throws IOException, InterruptedException {


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

        List<String> listDoneExercises= new ArrayList<String>();

        int cuenta = 0;
        int cuentaHtml = 0;


        for (int i = 0; i < completedChallenges.length(); i++) {
            JSONObject jsonObject = completedChallenges.getJSONObject(i);
            String idExercise = jsonObject.getString("id");
           if (javaScriptExercises.contains(idExercise)){
               cuenta++;
           }
           else if (htmlExercises.contains(idExercise)){
               cuentaHtml++;
           }
        }
        List<Integer> listTotalExercises = new ArrayList<>();
        listTotalExercises.add(cuenta);
        listTotalExercises.add(cuentaHtml);

        System.out.println(listTotalExercises);


        return cuenta;
    }

}
