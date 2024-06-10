let bt=$('.tab-button'); let ct=$('.tab-content');
$('.list').click(function(s){ one(s.target.dataset.ni) });
function one(p){ bt.removeClass('orange');ct.removeClass('show');
bt.eq(p).addClass('orange');ct.eq(p).toggleClass('show')};
  var car2 = { name : 'vehicle', price : 70000, color:['White','red','blue'] }; 
  $('.duc').html(car2.name);   $('.cl').html(car2.color[2]);
$('.cl_1').html(car2['color'][0]);
document.getElementById('pr').innerHTML=car2['price'];
var pants = [28, 30, 32,34]; var shirts = [95, 100, 105];
$('.form-select').eq(0).on('input',() => { 
    let al=$('select').eq(0).val(); let la=$('.form-select').eq(1);
if(al=='셔츠'){ la.removeClass('hd');la.html(''); 
shirts.forEach((c)=>{la.append(`<option>${c}</option>`)})
}else if(al=='바지'){la.removeClass('hd');la.html(''); 
pants.forEach(c=>{la.append(`<option>${c}</option>`)})
}else{la.addClass('hd')}})

let a=document.createElement('p'); a.innerHTML='hello';a.classList.add('ms-5','as');
document.querySelector('#mo').appendChild(a);

let temp='<p class="ms-5">Joa</p>';
$('#mo').html(temp)
