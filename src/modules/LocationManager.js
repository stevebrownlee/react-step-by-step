import AbstractManager from "./AbstractManager"


export default Object.create(AbstractManager, {
    get: {
        value: function (id) {
            return this.getSingle("locations", id)
        }
    },
    all: {
        value: function () {
            return this.getAll("locations")
        }
    },
    add: {
        value: function (resource) {
            return this.post("locations", resource)
        }
    }
})
