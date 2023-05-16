// https://en.wikipedia.org/wiki/List_of_programming_languages
var programmingLanguages = ["ActionScript","AppleScript","Asp","B","Bash","C","C++","C#","D","Dart","Erlang","F","Go","Haskell","IBM HAScript","JavaScript","Java","Kotlin","Lisp","Perl","PHP","Python"];

$(function () {
    $("#programmingLanguage").autocomplete({source: programmingLanguages});

    $("#birthday").datepicker();
});