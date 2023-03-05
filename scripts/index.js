//ниче не работает, хз почему
import select2 from '../node_modules/select2/dist/js/select2';
select2();

$(document).ready(function() {
    var id_select = $('.js-example-basic-single').select2().val
    console.log(id_select);
});

if ( ! DataTable.isDataTable( '#example' ) ) {
    new DataTable('#example');
  }
