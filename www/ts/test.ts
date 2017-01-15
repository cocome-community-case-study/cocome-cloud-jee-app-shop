/**
 * Created by Joshua on 15.01.2017.
 */
function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Jane User Test";

document.body.innerHTML = greeter(user);