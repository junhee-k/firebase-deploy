$(document).on('mouseenter', '.onetex' ,function(e) {
  $('.one, .oneone, .oneonetwo, .onetwo').css('display', 'block');
  $('.two, .twoone, .twotwo, .twothree').css('display', 'none');
  $('.thi, .thione').css('display', 'none');
})

$(document).on('mouseenter', '.twotex' ,function(e) {
  $('.one, .oneone, .oneonetwo, .onetwo').css('display', 'none');
  $('.two, .twoone, .twotwo, .twothree').css('display', 'block');
  $('.thi, .thione').css('display', 'none');
})

$(document).on('mouseenter', '.thitex' ,function(e) {
  $('.one, .oneone, .oneonetwo, .onetwo').css('display', 'none');
  $('.two, .twoone, .twotwo, .twothree').css('display', 'none');
  $('.thi, .thione').css('display', 'block');
})

function WeightChange(a){
  $(document).ready(function(){ 
      $(a).hover(function(){  
          $(a).css('font-weight', '700');
      }, function(){  
          $(a).css('font-weight', '500');
      })}) 
  }

WeightChange('.oneone');
WeightChange('.oneonetwo');
WeightChange('.onetwo');
WeightChange('.twoone');
WeightChange('.twotwo');
WeightChange('.twothree');
WeightChange('.thione');