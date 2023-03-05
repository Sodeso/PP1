import "./bootstrap";
import $ from "jquery";
import select2 from 'select2';
select2();

$(document).ready(function() {
    var id_select = $('.js-example-basic-single').select2().val
    console.log(id_select);
});
