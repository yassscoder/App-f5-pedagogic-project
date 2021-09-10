package org.factoriaf5.appf5.integrationTest;

import org.factoriaf5.appf5.domain.Candidate;
import org.factoriaf5.appf5.repositories.CandidateRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc

public class CandidatesTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    private CandidateRepository candidateRepository;

    @AfterEach
    void tearDown() {
        candidateRepository.deleteAll();
    }

    @Test
    void returnsTheAvailableCandidates() throws Exception {
        List<Candidate> candidates = List.of(
                new Candidate(1L, "Olga", "Caparros", 46, "olga@capa.com", "user05"),
                new Candidate(2L, "Alisa", "Maravillosa", 35, "alisa@malla.com", "user10")
        );

        candidateRepository.saveAll(candidates);

        mockMvc.perform(get("/candidates"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].name", equalTo("Olga")))
                .andExpect(jsonPath("$[0].lastName", equalTo("Caparros")))
                .andExpect(jsonPath("$[0].age", equalTo(46)))
                .andExpect(jsonPath("$[0].mail", equalTo("olga@capa.com")))
                .andExpect(jsonPath("$[0].userFree", equalTo("user05")))

                .andExpect(jsonPath("$[1].name", equalTo("Alisa")))
                .andExpect(jsonPath("$[1].lastName", equalTo("Maravillosa")))
                .andExpect(jsonPath("$[1].age", equalTo(35)))
                .andExpect(jsonPath("$[1].mail", equalTo("alisa@malla.com")))
                .andExpect(jsonPath("$[1].userFree", equalTo("user10")));

    }

    @Test
    void createsNewCandidates() throws Exception {
        mockMvc.perform(post("/candidates")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\": \"Olga\", \"lastName\": \"Caparros\", \"age\": \"46\", \"mail\": \"olga@capa.com\"," +
                        " \"userFree\":\"user05\"}")
        ).andExpect(status().is(200));

        var candidates = candidateRepository.findAll();

        assertThat(candidates, contains(allOf(
                hasProperty("name", is("Olga")),
                hasProperty("lastName", is("Caparros")),
                hasProperty("age", is(46)),
                hasProperty("mail", is("olga@capa.com")),
                hasProperty("userFree", is("user05")))
        ));

    }
}