// Script: Show tooltips on contact buttons
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

var exampleEl = document.getElementById('example')
var tooltip = new bootstrap.Tooltip(exampleEl, options)
var $copyBtns = $("#btnCopy");
var copyClient = new ZeroClipboard($copyBtns);
$copyBtns.tooltip({
    trigger: 'manual',
    container: 'body'
});
