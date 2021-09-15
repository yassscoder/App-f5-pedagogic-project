package org.factoriaf5.appf5;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class JsonFreecodecampHttp {
    public void main(String[] args) throws IOException, InterruptedException {

        String userName = "fcccc63c19d-3f28-486a-86c2-d614de411e74";

        String API_FREECODE_URL = "https://api.freecodecamp.org/api/users/get-public-profile?username="+userName;

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(API_FREECODE_URL))
                .GET()
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        //parse json into list? just take id?

        JSONObject respuesta = new JSONObject(response.body());


        JSONArray completedChallenges = respuesta
                .getJSONObject("entities")
                .getJSONObject("user")
                .getJSONObject(userName)
                .getJSONArray("completedChallenges");



        System.out.println("La candidata " + userName + " ha completado " + completedChallenges.length() + " ejercicios");

        //tengo que comparar el campo id del json, pero me van a venir en el json varios campos id
    }


}
