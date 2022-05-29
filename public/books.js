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


$(function(){
    var sliderImage = $('.imagebox').bxSlider({
        auto: false, //자동넘어가기
        autoControls: false, //play, stop
        pager: false,  //페이지
        nextSelector: '#slider-next',  //다음으로 넘길 객체
        prevSelector: '#slider-prev',  //이전으로 넘길 객체
        nextText:'',  //객체 텍스트
        prevText:'',   //객체 텍스트
        touchEnabled:false
        
       });

 
//기타옵션
// mode : 'fade',   //슬라이드 방식 default : 'horizontal', options: 'horizontal', 'vertical', 'fade' 
// autoHover: true //마우스 오버시 정지 여부
// controls: false    // 이전 다음 버튼 노출 여부
//아래는 이미지버튼을 클릭했을 때 이미지를 넘어가게 하기 위한 이벤트다.

var num = 0;

$('#slider-next').click(function(){  //다음이미지 클릭 시
    sliderImage.goToNextSlide();
    num = num + 1;
    if(num % 3 == 0){
        $('#bright, #faded1, #faded2').css('display', 'block');
        $('#bright1, #faded11, #faded21').css('display', 'none');
        $('#bright2, #faded12, #faded22').css('display', 'none');
    } else if(num % 3 == 1 || num % 3 == -2){
        $('#bright, #faded1, #faded2').css('display', 'none');
        $('#bright1, #faded11, #faded21').css('display', 'block');
        $('#bright2, #faded12, #faded22').css('display', 'none');
    } else {
        $('#bright, #faded1, #faded2').css('display', 'none');
        $('#bright1, #faded11, #faded21').css('display', 'none');
        $('#bright2, #faded12, #faded22').css('display', 'block');
    }
    return false;
  });

$('#slider-prev').click(function(){ //이전 이미지 클릭 시
    sliderImage.goToPrevSlide();
    num = num - 1;
    if(num % 3 == 0){
        $('#bright, #faded1, #faded2').css('display', 'block');
        $('#bright1, #faded11, #faded21').css('display', 'none');
        $('#bright2, #faded12, #faded22').css('display', 'none');
    } else if(num % 3 == 1 || num % 3 == -2){
        $('#bright, #faded1, #faded2').css('display', 'none');
        $('#bright1, #faded11, #faded21').css('display', 'block');
        $('#bright2, #faded12, #faded22').css('display', 'none');
    } else {
        $('#bright, #faded1, #faded2').css('display', 'none');
        $('#bright1, #faded11, #faded21').css('display', 'none');
        $('#bright2, #faded12, #faded22').css('display', 'block');
    }
    return false;
  });

$(document).on('click', '#bright, #bright1, #bright2' ,function(e) {
    sliderImage.goToSlide(0);
    num = 0;
    });

$(document).on('click', '#faded1, #faded11, #faded12' ,function(e) {
    sliderImage.goToSlide(1);
    num = 1;
    });

$(document).on('click', '#faded2, #faded21, #faded22' ,function(e) {
    sliderImage.goToSlide(2);
    num = 2;
    });

$(document).on('click', '#bright, #bright1, #bright2', function(e){
    $('#bright, #faded1, #faded2').css('display', 'block');
    $('#bright1, #faded11, #faded21').css('display', 'none');
    $('#bright2, #faded12, #faded22').css('display', 'none');
})

$(document).on('click', '#faded1, #faded11, #faded12', function(e){
    $('#bright, #faded1, #faded2').css('display', 'none');
    $('#bright1, #faded11, #faded21').css('display', 'block');
    $('#bright2, #faded12, #faded22').css('display', 'none');
})

$(document).on('click', '#faded2, #faded21, #faded22', function(e){
    $('#bright, #faded1, #faded2').css('display', 'none');
    $('#bright1, #faded11, #faded21').css('display', 'none');
    $('#bright2, #faded12, #faded22').css('display', 'block');
})

})
