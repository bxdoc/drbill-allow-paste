// ==UserScript==
// @name         DrBill Allow Paste
// @version      1.0
// @description  Allow pasting on DrBill
// @author       Me
// @downloadURL  https://www.dropbox.com/s/7up9kec9maqqnsp/drbill.user.js?dl=1
// @match        https://app.dr-bill.ca/billing_records/new
// @require 	 https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //document.getElementsByName('GIXENLINK')[0].submit();
    setTimeout(init2, 500);
    // Your code here...
})();

function init2(){
    console.log('Starting script');
	$("#abbcl-cmgp-start__1").attr("readonly", false);
	$("#abbcl-cmgp-end__1").attr("readonly", false);
}
