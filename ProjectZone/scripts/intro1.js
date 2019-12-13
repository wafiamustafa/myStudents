// JavaScript Document

var final = document.getElementById('Boardname');

final.onkeyup = function () {
	"use strict";
    document.getElementById('boardtitle').innerHTML = final.value;
};


