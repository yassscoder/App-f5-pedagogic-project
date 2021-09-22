const Administrator = 'admin'
const Password = 'p4ssw0rd'



export class LoginService {
    getTrainings() {
        return fetch("/trainings")
            .then(response => response.json()),
        { headers: { authorization: 'Basic ' + window.btoa(Administrator + ":" + Password) } }
    }
}

