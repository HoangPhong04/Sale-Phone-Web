
let sp ={id:"SP001", title:"Samsung Galaxy S21 FE 5 Ram 6G 128GB", image:"iphone-15-pro-max-512gb.webp", price:"14000000" };
const arrProduct = [
    {id:"SP001", title:"Samsung Galaxy S21 FE 5 Ram 6G 128GB", image:"iphone-15-pro-max-512gb.webp", price:"14000000"},
    {id:"SP002", title:"Iphone 15", image:"find-n3-flip-vang_1-list.webp", price:"7000000"},
    {id:"SP003", title:"Samsung Galaxy M34 5G 8GB 128GB", image:"xiaomi-redmi-note-12_1-list.webp", price:"2000000"},
    {id:"SP001", title:"Xiaomi Redmi Note 11 Pro Plus 5G", image:"sp1", price:"14000000"},
    {id:"SP002", title:"Apple MacBook Air M1 256GB 2020 I Chính hãng Apple Việt Nam", image:"find-n3-flip-vang_1-list.webp", price:"7000000"},

];
var str ="";
for(let i = 0; i< arrProduct.length; i++){
    var obj = JSON.stringify(arrProduct[i]);
    str+=`<div class="product-gallery-one-content-list-item">
    <img src="image/${arrProduct[i].image}" alt="">
            <div class="product-gallery-one-content-list-item-text">
                <li>${arrProduct[i].title}</li>   
                <li>Online giá rẻ</li>
                <li><a href="">${arrProduct[i].price}<sup>đ</sup></a> <span>-2%</span></li>
                <li>${arrProduct[i].price}<sup>đ</sup></li>
                <li>Giá lên đời: </li><li>37.990.000<sup>đ</sup></li>
            </div>
            <div class="detaile-subcard-item">
                <button class="bnt-detaile" onlick=\>Chi tiết sản phẩm</button>
                <button class="bnt-subcart">Thêm vào giỏ</button>
            </div>
        </div>`;
}
document.querySelector(".product-gallery-one-content-list").innerHTML=str;

// -----------------------------hiển thị chi tiết sản phẩm-----------------------
const baohanh = document.querySelector('#baohanh')
const chitiet = document.querySelector('#chitiet')
if(baohanh){
    baohanh.addEventListener("click", function(){
        document.querySelector('.product-content-right-infor-chitiet').style.display = "none"
        document.querySelector('.product-content-right-infor-baohanh').style.display = "block"
    })
}
if(chitiet){
    chitiet.addEventListener("click", function(){
        document.querySelector('.product-content-right-infor-chitiet').style.display = "block"
        document.querySelector('.product-content-right-infor-baohanh').style.display = "none"
    })
}