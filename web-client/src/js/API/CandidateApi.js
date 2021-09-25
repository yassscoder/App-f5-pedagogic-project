export class CandidateApi {
            //DEBERÍA HACER FETCH A + ID para mostrar el listado de candidatos según la formación
    getCandidates() {
        return fetch("http://localhost:8080/trainings/list_candidates?training_id=1")
            .then(response => response.json())

    }


    saveCandidate(Candidate) {
        return fetch("http://localhost:8080/candidates?training_id=" + Candidate.training,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(Candidate)
            }
        )
    }
}