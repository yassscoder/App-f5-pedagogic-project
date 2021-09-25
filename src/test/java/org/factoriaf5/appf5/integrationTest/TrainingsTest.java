
package org.factoriaf5.appf5.integrationTest;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.factoriaf5.appf5.domain.Candidate;
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

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
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
    void tearDown() {
        trainingRepository.deleteAll();
    }

    private List<Candidate> candidate = new ArrayList<>();

    @Test
    void returnsAvailableTrainings() throws Exception {
        List<Training> trainings = List.of(
                new Training(1L, "Barcelona", "Femtech P1", 850, candidate),
                new Training(2L, "Madrid", "Front P3", 300, candidate)
        );

        trainingRepository.saveAll(trainings);

        mockMvc.perform(get("/trainings"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].city", equalTo("Barcelona")))
                .andExpect(jsonPath("$[0].promoName", equalTo("Femtech P1")))
                .andExpect(jsonPath("$[0].duration", equalTo(850)))

                .andExpect(jsonPath("$[1].city", equalTo("Madrid")))
                .andExpect(jsonPath("$[1].promoName", equalTo("Front P3")))
                .andExpect(jsonPath("$[1].duration", equalTo(300)));
    }

    @Test
    void createsNewTrainings() throws Exception {


        Training training = new Training(1L, "Barcelona", "Femtech P1", 850, candidate );
        mockMvc.perform(post("/trainings")
                .contentType("application/json")
                .content(objectMapper.writeValueAsString(training)))
                .andExpect(status().isOk());

        var trainings = trainingRepository.findAll();

        assertThat(trainings, contains(allOf(
                hasProperty("id", is(1L)),
                hasProperty("city", is("Barcelona")),
                hasProperty("promoName", is("Femtech P1")),
                hasProperty("duration", is(850)))

        ));

    }


    @Test
    void returnsTrainingById() throws Exception {
        Training training = trainingRepository.save(
                new Training(1L, "Barcelona", "Femtech P1", 850, candidate)
        );


        mockMvc.perform(get("/trainings/" + training.getId()))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.city", equalTo("Barcelona")))
                .andExpect(jsonPath("$.promoName", equalTo("Femtech P1")))
                .andExpect(jsonPath("$.duration", equalTo(850)));
    }

    @Test
    void deleteTrainingById() throws Exception {
        Training training = trainingRepository.save(
                new Training(1L, "Barcelona", "Femtech P1", 850, candidate)
        );


        mockMvc.perform(delete("/trainings/" + training.getId())).andExpect(status().is(200));

        var trainings = trainingRepository.findAll();

        assertThat(trainings, hasSize(0));
    }

    @Test
    void editAnExistingTraining() throws Exception {
        Training training = trainingRepository.save(
                new Training(1L, "Barcelona", "Femtech P1", 850, candidate));
        mockMvc.perform(put("/trainings")
                .contentType("application/json")
                .content("{\"id\":\"" + training.getId() + "\", \"city\": \"Gijón\", \"promoName\": \"Full stack\", \"duration\": \"850\"}")
        ).andExpect(status().is(200));

        var editedTraining = trainingRepository.findAll();
        assertThat(editedTraining, contains(allOf(
                hasProperty("city", is("Gijón")),
                hasProperty("promoName", is("Full stack")),
                hasProperty("duration", is(850))
        )));
    }
}
