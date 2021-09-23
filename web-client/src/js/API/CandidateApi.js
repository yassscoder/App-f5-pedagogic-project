export class CandidateApi {
    getCandidates() {
        return fetch("/candidates")
            .then(response => response.json())
    }


    saveCandidate(Candidate) {
        return fetch("/candidates?training_id=" + Candidate.training,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(Candidate)
            }
        )
    }
}