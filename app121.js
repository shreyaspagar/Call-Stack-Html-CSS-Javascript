function hello() {
    console.log("inside hello fnx");
    console.log("hello");
}

function demo() {
    console.log("Calling hello fnx");
    hello();
}


console.log("Calling demo fnx");
demo();
console.log("Done, Bye!");