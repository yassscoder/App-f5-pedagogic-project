package org.factoriaf5.appf5.service;

import org.json.JSONArray;
import org.json.JSONObject;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class ResponseFreeCodeCampApi {

    public static int getExercisesDone(String userName) throws IOException, InterruptedException {


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

    return completedChallenges.length();
    }

}
