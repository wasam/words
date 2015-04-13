"use strict";

var nouns;
var verbs;
var adjectives;



function Init()
{
    document.getElementById("nouns").value = builtInWordLists["nouns_top1500"];
    InitAdjectives();
    InitNouns();
    InitVerbs();
    GenerateButton();
}

function InitNouns()
{
    nouns = FetchList("nouns");  
}

function InitVerbs()
{
    verbs = FetchList("verbs");
}

function InitAdjectives()
{
    adjectives = FetchList("adjectives");
}

function FetchList(elementName)
{
    var element = document.getElementById(elementName);
    return element.value.split(" ");
}

function GenerateButton() {
    document.getElementById("result").innerHTML = Generate(document.getElementById("pattern").value);
}

function Generate(pattern)
{
    var result = "";
    for (var i = 0; i < pattern.length; i++)
    {
        switch (pattern[i])
        {
            case 'n':
                result += Noun();
                break;
            case 'v':
                result += Verb();
                break;
            case 'a':
                result += Adjective();
                break;
            default:
                result += pattern[i];
                break;
        }
    }
    return result;
}

function Adjective() {
    return RandomListEntry(adjectives);
}

function Verb()
{
    return RandomListEntry(verbs);
}

function Noun()
{
    return RandomListEntry(nouns);
}

function RandomListEntry(list)
{
    return list[Random(0, list.length)];
}

function Random(min, max)
{
    var range = max - min;
    return Math.floor(Math.random() * range) + min;
}

