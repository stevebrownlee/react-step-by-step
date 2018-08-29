import settings from "../settings"
import AbstractManager from "./AbstractManager"


/*
    Whoa! This code is actually using the power of prototypal
    inheritance. In the AbstractManager object, there is a
    method named `getSingle()` that simply returns the resource.
    In this object, when client code requests an animal, I
    don't want to return just the animal, but also add a
    property named `caretaker`.
*/
export default Object.create(AbstractManager, {
    get: {
        value: function (id) {
            return this.getSingle("animals", id)
        }
    },
    all: {
        value: function () {
            return this.getAll("animals")
        }
    },
    getWithCaretaker: {
        value: function (id) {
            return fetch(`${settings.remoteURL}/animals/${id}/?_expand=employee`).then(e => e.json())
        }
    },
    listWithCaretaker: {
        value: function (id) {
            return fetch(`${settings.remoteURL}/animals?_expand=employee`).then(e => e.json())
        }
    },
    add: {
        value: function (resource) {
            return this.post("animals", resource)
        }
    },
    addAndList: {
        value: function (resource) {
            return this.post("animals", resource).then(() => this.all())
        }
    },
    removeAndList: {
        value: function (id) {
            return this.delete("animals", id).then(() => this.all())
        }
    },
    editAndList: {
        value: function (animal) {
            return this.edit("animals", animal).then(() => this.all())
        }
    }
})
