/// Modelo para Pontos Registrados
class Registry {
    constructor(id, userId, timeRegistered, dayRegistered) {
        this.id = id;
        this.userId = userId;
        this.timeRegistered = timeRegistered;
        this.dayRegistered = dayRegistered;
    }
}

export default Registry;
