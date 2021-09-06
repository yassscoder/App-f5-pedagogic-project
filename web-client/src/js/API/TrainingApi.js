export class TrainingApi {
    getTrainings() {
        return fetch("/trainings")
            .then(response => response.json())
    }

    saveTraining(newTraining) {
        return fetch("/trainings",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: newTraining
            }
        )
    }



}
