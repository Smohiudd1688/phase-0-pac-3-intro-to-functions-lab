function shout(string) {
    return string.toUpperCase();
}
//function converts given string to all uppercase

function whisper(string) {
    return string.toLowerCase();
}
//function converts given string to all lowercase

function logShout(string) {
    console.log(shout(string));
}
//function logs a strings that is converted to uppercase

function logWhisper(string) {
    console.log(whisper(string));
}
//function logs a string that is converted to lowercase

function sayHiToHeadphonedRoommate(string) {
    if (string === "hello")
    {
        return "I can't hear you!";
    } else if (string === "HELLO"){
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}
//function returns correct response based on given string

