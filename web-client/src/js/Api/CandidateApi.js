export class CandidateApi {
    getCandidates() {
        return fetch("/candidates")
            .then(response => response.json())
    }



   static saveCandidate(candidate) {
        return fetch("/candidates",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: candidate
            }
        )
    }


}