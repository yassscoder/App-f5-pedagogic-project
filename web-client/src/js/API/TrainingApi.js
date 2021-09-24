export class TrainingApi {
    getTrainings() {
        return fetch("http://localhost:8080/trainings")
            .then(response => response.json())
    }

    saveTraining(Training) {
        return fetch("http://localhost:8080/trainings",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: Training
            }
        )
    }
}
