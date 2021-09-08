/*
package org.factoriaf5.appf5;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;


public class PruebaHttpRequest {
    public static void main(String[] args) throws IOException, InterruptedException {
        synchronousRequest();
    }

    private static void synchronousRequest() throws IOException, InterruptedException {
*/
/*
        // create a client
        var client = HttpClient.newHttpClient();

        // create a request
        var request = HttpRequest.newBuilder(
                URI.create("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        ).build();

        // use the client to send the request
        HttpResponse<Supplier<APOD>> response = client.send(request, new JsonBodyHandler<>(APOD.class));

        // the response:
        System.out.println(response.body().get().title);
    }
*//*

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://postman-echo.com/get"))
                .version(HttpClient.Version.HTTP_2)
                .GET()
                .build();
        HttpResponse<String> response = HttpClient.newHttpClient()
                .send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body().method().host);

*/

/*}


}*/
