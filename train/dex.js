
$('.navbar-toggler').on('click',
    function(){$('.list-group').toggleClass('show');
        $('.po').toggleClass('po_1') });
   let kj=0;    
   $('#swer').on('click',function(){ if($('#ans').val()=='1335'){
       alert('SUCCESS');$('#ans').val('')}else if(kj>=2){
           alert('3회 실패'); kj=0;$('#ans').val('')}else{
               kj++;$('#ans').val('')} });
$('#na').on('change', function(){  console.log('안녕')});     
$('form').on('submit', function(w){ let tp=$('#na').val()
 if(tp==''){alert('ID must be filled out');w.preventDefault()
} else if(/\S@\S+\.\S/.test(tp)){} else{alert('이메일형식아님');w.preventDefault() }  });
 $('form').on('submit', function(w){ let ve=$('#do').val()
if(ve==''){alert('PW must be filled out');w.preventDefault()}; 
if(ve.length<6){alert('PW must be beyond six text');w.preventDefault()}; 
if(/[A-Z]/.test(ve)==false){alert('최소 영문대문자를 한 자 포함 하십시오.');
w.preventDefault() }}); let ke=$('#ss').html();
let io=setInterval(op,1000);
function op(){ke--;if(ke>=0){ $('#ss').html(ke)
}else{$('.alert-danger').hide();clearInterval(io)};console.log(ke)}

let st=0; let clic=false; let sb=$('.sb'); let sl=$('.sl'); 
for(let i=0;i<sb.length;i++){sb.eq(i).on('mousedown',e=>{st=e.clientX; clic=true;}); let hen=-100;                        
sb.eq(i).on('mouseup',e=>{clic=false; console.log('hen',hen,'끝-시작',e.clientX-st); if((e.clientX-st)<-150 && i==2){
    sl.css('transform','translateX(0)').css('transition', 'all 0.5s')
}else if((e.clientX-st)<-150){ 
sl.css('transform',`translateX(calc(${i*hen}vw - 100vw))`).css('transition', 'all 0.5s')}else if((e.clientX-st)>180 && i==0){console.log('left',e.clientX-st); 
sl.css('transform','translateX(-200vw)')} else if((e.clientX-st)>180 && i>0){
    sl.css('transform',`translateX(calc(${i*hen}vw + 100vw))`).css('transition', 'all 0.5s')} else{sl.css('transform',`translateX(calc(${i} * (-100vw)))`)};
setTimeout(()=>{$('.sl').css('transition','none')},1000)});
sb.eq(i).on('mousemove',e=>{if(clic){
sl.css('transform', `translateX(calc(${e.clientX-st}px - ${i}00vw))`)}});                            };
    let 사진=1;
 $('.de-2').on('click',()=>{sl.css('transform','translateX(-100vw)'); 사진=2});
 $('.de-3').on('click',()=>{sl.css('transform','translateX(-200vw)'); 사진=3});    
 $('.de-1').on('click',()=>{$('.sl').css('transform','translateX(0)');; 사진=1});
 $('.next').on('click',()=>{ if(사진==3){사진=0};
sl.css('transform',`translateX(-${사진}00vw)`);사진++});    
 $('.pre').on('click',()=>{
if(사진==1){$('.sl').css('transform','translateX(-200vw)');사진=3;
} else if(사진==2){sl.css('transform','translateX(0vw)');사진--
} else if(사진==3){sl.css('transform','translateX(-100vw)');사진-- 
 }});
    let ct=0;
   $('.blur').on('click',function(){ ct++; if(ct%2==1){$('.blur').html('Light 🔄'); $('body').toggleClass('gl');$('nav').addClass('bg-dark navbar-dark')} else{$('.blur').html('Dark 🔄'); $('body').removeClass('gl'); $('nav').removeClass('bg-dark navbar-dark'); } });
 
    $('#girl6').on('click',function(){$('.black').addClass('dot')});
$('#close').on('click',function(){$('.black').removeClass('dot')});
document.querySelector('.black').addEventListener('click',function(j){
    
    console.log(j.target,$(j.target),$('.black'));

if($(j.target).is($('.black'))){
    document.querySelector('.black').classList.remove('dot')}
});
    $('#girl5').on('click',function(){$('h1').slideUp()});
    $('#girl4').on('click',function(){$('h1').fadeToggle()});
$('h1').html('chldudtjr');
document.getElementById('hello').style.color='orange';   
document.getElementById('op').innerHTML='JS 고수에요.';
 $('#hello').css('color','Lime');  
document.querySelectorAll('h1').forEach(d=>d.style.fontSize='16px')    
    document.getElementsByClassName('girl')[0].addEventListener('click',
function(){document.getElementsByClassName('aer')[0].innerHTML='ID 입력'}); 
document.getElementsByClassName('girl1')[0].addEventListener('mouseover',
function(){document.getElementsByClassName('aer')[0].innerHTML='PW 입력'});
document.getElementById('girl2').addEventListener('click',
function(){document.getElementsByClassName('aer')[0].style.display='none'}); 
    document.getElementById('girl3').addEventListener('mouseover',
function(){document.getElementsByClassName('aer')[0].style.display='block',
          document.getElementsByClassName('aer')[0].innerHTML='알림창임'}); 
 
   $(window).on('scroll', function(){  if($(window).scrollTop()>200){$('.navbar-brand').css('font-size','18px')}else{$('.navbar-brand').css('font-size','24px')}
}); 
let hasScrolled = false;
    $('.lorem').on('scroll', function(){  var 스크롤양 = $('.lorem').scrollTop();
  var 실제높이 = document.querySelector('.lorem').scrollHeight;
  var 높이 = document.querySelector('.lorem').clientHeight;
  if (!hasScrolled && 스크롤양 + 높이 > 실제높이 - 10){   alert('약관을 숙지 하셨습니까?'); hasScrolled=true };
       let ale=스크롤양/(실제높이-높이)*100; let ale_1=(ale/300)*100
    $('.nu_1').css('width',ale_1+'%') });
 
let hasScrolled_1 = false;
    $(window).on('scroll', function(){  var 스크롤양 = $('html').scrollTop();
  var 실제높이 = document.documentElement.scrollHeight;
  var 높이 = document.querySelector('html').clientHeight;
  if (!hasScrolled_1 && 스크롤양 + 높이 > 실제높이 - 50){   alert('site 방문에 감사합니다.'); hasScrolled_1=true}; let ale=스크롤양/(실제높이-높이)*100; $('.nu').css('width',ale+'%')})



