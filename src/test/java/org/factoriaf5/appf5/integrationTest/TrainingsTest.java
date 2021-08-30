package org.factoriaf5.appf5.integrationTest;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.factoriaf5.appf5.domain.Training;
import org.factoriaf5.appf5.repositories.TrainingRepository;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc

public class TrainingsTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private TrainingRepository trainingRepository;

    @AfterEach
    void tearDown() {trainingRepository.deleteAll();}

    @Test
    void createsNewTrainings() throws Exception {
        Training training = new Training(1L, "Barcelona", "Femtech P1", 850);
        mockMvc.perform(post("/trainings")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(training)))
                .andExpect(status().isOk());

        var trainings = trainingRepository.findAll();

        assertThat(trainings, contains(allOf(
                hasProperty("id", is (1L)),
                hasProperty("city", is("Barcelona")),
                hasProperty("promoName", is("Femtech P1")),
                hasProperty("duration", is(850)))

        ));

    }

}
