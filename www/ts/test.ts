/**
 * Created by Joshua on 15.01.2017.
 */
function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);