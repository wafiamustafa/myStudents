// JavaScript Document

var list1output = document.getElementById('step1');

list1output.onkeyup = function () {
	"use strict";
    document.getElementById('step1preview').innerHTML = list1output.value;
};



var list2output = document.getElementById('step2');

list2output.onkeyup = function () {
	"use strict";
    document.getElementById('step2preview').innerHTML = list2output.value;
};



var list3output = document.getElementById('step3');

list3output.onkeyup = function () {
	"use strict";
    document.getElementById('step3preview').innerHTML = list3output.value;
};