export class CandidateApi {
    getCandidates() {
        return fetch("/candidates")
            .then(response => response.json())
    }



    saveCandidate(Candidate) {
        return fetch("/candidates",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: Candidate
            }
        )
    }
}