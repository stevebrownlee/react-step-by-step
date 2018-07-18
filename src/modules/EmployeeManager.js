import AbstractManager from "./AbstractManager"


export default Object.create(AbstractManager, {
    get: {
        value: function (id) {
            return this.getSingle("employees", id)
        }
    },
    all: {
        value: function () {
            return this.getAll("employees")
        }
    },
    add: {
        value: function (resource) {
            return this.post("employees", resource)
        }
    },
    removeAndList: {
        value: function (id) {
            return this.delete("employees", id).then(() => this.all())
        }
    }
})
