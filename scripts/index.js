
//данные для таблицы
var data = [
  [
    "Tiger Nixon",
    "System Architect",
    "Edinburgh",
    "5421",
    "2011/04/25",
    "$3,120"
  ],
  [
    "Garrett Winters",
    "Director",
    "Edinburgh",
    "8422",
    "2011/07/25",
    "$5,300"
  ]
]

//вызов owl carousel
$(document).ready(function () {
  var owl = $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 3,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    autoplaySpeed:1000,
    onInitialize: function (event) {
      if ($('.owl-carousel .item').length <= 5) {
        this.settings.loop = false;
      }
      
    }
  })
});

/*naw owl carousel 
$('.play').on('click',function(){
  owl.trigger('autoplay.play.owl',[1000])
})
$('.stop').on('click',function(){
  owl.trigger('autoplay.stop.owl')
})
*/


//вызов select2
$(document).ready(function () {
  $('.js-example-basic-single').select2();

});

//вызов datatable
$('#example').DataTable({
  data: data
});

//select2 типо выбор языка
$('#mySelect2').on('select2:select', function (e) {
  console.log("id:" + e.params.data.id + "| text:" + e.params.data.text);
});