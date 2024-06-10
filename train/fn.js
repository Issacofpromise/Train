    let pl = $('.product-list');
    let products = [];
    let cart = [];
function render(t) {
  return `
    <div class="col-md-3">
      <div class="item" draggable="true" data-id="${t.id}">
        <img src="${t.photo}">
        <h4>${t.title}</h4>
        <h4>${t.brand}</h4>
        <p>가격 : ${t.price.toLocaleString()}</p>
        <button class="add" data-id="${t.id}">담기</button>
      </div>
    </div>`;}
$.get('store.json').then(data => {
  products = data.products;
  products.forEach(pr => { pl.append(render(pr));
  });    });//$.get().then() 끝 

$(document).on('click', '.add', e=>{
    let productId = e.target.dataset.id;
let 몇번째 = cart.findIndex(a=>{ return a.id == productId })
        if (몇번째 == -1) {
let 현재상품 = products.find(a=> { return a.id == productId });
          현재상품.count = 1; cart.push(현재상품);
        } else { cart[몇번째].count++}
updateBasket();   가격계산(); });

 $(document).on('input', '.item-count', e=> { 
    let d = e.target.dataset.id;
let 몇번째 = cart.findIndex(a=>{ return a.id == d })
    let 수동 =  $(`.item-count[data-id=${d}]`).val(); 
  cart[몇번째].count=수동;    
console.log('input', d,'몇번째',몇번째,'수동',수동);
  가격계산()});   
    
$(document).on('click', '.del', e=>{
    let productId = e.target.dataset.id;console.log(e.target);
 cart = cart.filter((a) => a.id != productId);
  updateBasket();
if (cart.length === 0){$('.final-price').html('총 합계  0')}
}); 
function updateBasket() { $('.basket').html('');
  cart.forEach(a => { $('.basket').append(`
      <div class="col-md-3 bg-white">
        <div class="item" draggable="true" data-id="${a.id}">
          <img src="${a.photo}">
          <h4>${a.title}</h4>
          <h4>${a.brand}</h4>
          <p>${a.price.toLocaleString()}</p>
 <input type="number" value="${a.count}" class="item-count w-100" 
data-id="${a.id}">
          <button class="del mt-3" data-id="${a.id}">삭제</button>
        </div> </div>`); 
 가격계산(); });}
function update(fil) { pl.html('');
  fil.forEach(p => {pl.append(render(p));
  });};
    
 $('#search').on('input', ()=>{ let 검색어 = $('#search').val();    
let newP = products.filter(a=>{ 
 return a.title.includes(검색어) || a.brand.includes(검색어);
      });  update(newP);
      //jQuery로 여러개 찾은건 each반복문 붙여야 잘됨 
      $('.product-list h4').each((i, html요소)=>{
        let title = html요소.innerHTML;     
        title_1 = title.replace(검색어, `<span style="background : violet">${검색어}</span>`);
        console.log('sec',title_1,'i',i);
        html요소.innerHTML = title_1;
      }) });    
$(document).on('dragstart', '.item', e =>{
e.originalEvent.dataTransfer.setData('id', e.target.dataset.id)});
$('.basket').on('dragover', e=> { e.preventDefault()});
$('.basket').on('drop', e=>{
let productId = e.originalEvent.dataTransfer.getData('id');
    $(`.add[data-id=${productId}]`).click();
      });
$('.container').on('dragover', e=> { e.preventDefault()});
$('.container').on('drop', e=>{
let productId = e.originalEvent.dataTransfer.getData('id');
console.log('drop_del',productId);    
    $(`.del[data-id=${productId}]`).click();
});
    function 가격계산(){ let finalPrice = 0;
      for (let i = 0; i < $('.item-count').length; i++){
        var count  = $('.item-count').eq(i).val();
        var priceT = $('.item-count').eq(i).siblings('p').text();
 var price = priceT.replace(/\D/g, '');
finalPrice += price * count };  
$('.final-price').html('총 합계 ' + finalPrice.toLocaleString())
  };
        
    $('.buy').click(function(){
      $('.modal1').css('display', 'block');
    });
    //모달창1에 뭐 입력하면 전역변수에 저장해둠
    let 성함 = '';
    let 연락처 = '';
    $('#name').on('input', ()=>{ 성함 = $('#name').val();
    });
    $('#phone').on('input', ()=>{ 연락처 = $('#phone').val();
    });
    $('.show-receipt').click(()=>{
      $('.modal1').css('display', 'none');
      $('.modal2').css('display', 'block');

      var canvas = document.getElementById('canvas');
      var c = canvas.getContext('2d');
 let mo=new Date();
let no=mo.toLocaleString();
    c.font = '13px dotum';
      c.fillText(no, 5, 10);
  c.font = '16px dotum';
      c.fillText('구매자 : ' + 성함, 20, 40);
      c.fillText('연락처 : ' + 연락처, 20, 70); 
var xset = 20; var yset = 110;
cart.forEach((a, i) => {
  c.fillText(a.title, xset + i * 150, yset); 
  c.fillText(a.brand, xset + i * 150, yset + 30);
  c.fillText('가격: ' + a.price.toLocaleString(), xset + i * 150, yset + 60);
  c.fillText('수량: ' + a.count, xset + i * 150, yset + 90);
  c.fillText('합계: ' + (a.price * a.count).toLocaleString(), xset + i * 150, yset+120);
});  c.fillText($('.final-price').html(), 20, 300);    
    })  

$('.close').click(e => $(e.target).parents('.modal1, .modal2')
                  .css('display', 'none'));




