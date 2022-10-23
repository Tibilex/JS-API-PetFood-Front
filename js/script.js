document.addEventListener('DOMContentLoaded', ()=>{

   let cat = document.querySelector('#cat');
   let dog = document.querySelector('#dog');
   let parrot = document.querySelector('#parrot');
   let fish = document.querySelector('#fish');
   
   cat.addEventListener("click", GetCats);
   dog.addEventListener("click", GetDogs);
   parrot.addEventListener("click", GetParrots);
   fish.addEventListener("click", GetFishes);
   
   
   function GetCats(){

      let getCats = 'http://bipihok184-001-site1.itempurl.com/Products/CatsFeed';
      
      fetch(getCats)
      .then((res) =>{
         return res.json();
      })
      .then((data) =>{
         Construct(data);              
      })
      .catch((error) =>{
         console.error('GET_CATS ERROR');
      });
   };
   function GetDogs(){

      let getDogs = 'http://bipihok184-001-site1.itempurl.com/Products/DogFeed';
      
      fetch(getDogs)
      .then((res) =>{
         return res.json();
      })
      .then((data) =>{
         Construct(data);              
      })
      .catch((error) =>{
         console.error('GET_DOGS ERROR');
      });
   };
   function GetParrots(){

      let getParrotss = 'http://bipihok184-001-site1.itempurl.com/Products/ParrotFeed';
      
      fetch(getParrotss)
      .then((res) =>{
         return res.json();
      })
      .then((data) =>{
         Construct(data);              
      })
      .catch((error) =>{
         console.error('GET_PARROTS ERROR');
      });
   };
   function GetFishes(){

      let getFishes = 'http://bipihok184-001-site1.itempurl.com/Products/FishFeed';
      
      fetch(getFishes)
      .then((res) =>{
         return res.json();
      })
      .then((data) =>{
         Construct(data);              
      })
      .catch((error) =>{
         console.error('GET_FISHES ERROR');
      });
   };

   function Construct(data){
      // select container
      let container = document.querySelector('#prod');
      for (const iterator of data) {
         
         // create BEM block "products__block"
         let prodBlock = document.createElement('idv');
         prodBlock.setAttribute('class', 'products__block');
         
         // create BEM element "product__item"
         let prodItem = document.createElement('div');
         prodItem.setAttribute('class', 'product__item');
         
         // create BEM element "item__img"
         let prodImage = document.createElement('img');
         prodImage.setAttribute('class', 'item__img');
         prodImage.src = `../img/${iterator.image}`;
         // create BEM element "item__name"
         let itemName = document.createElement('div');
         itemName.setAttribute('class', 'item__name');
         itemName.innerText = `${iterator.productName}`;
         // create BEM element "item__transcript"
         let itemTranscript = document.createElement('div');
         itemTranscript.setAttribute('class', 'item__transcript')
         itemTranscript.innerText = `${iterator.transcrypt}`;
         // create BEM element "item__weght"
         let itemWeight = document.createElement('div');
         itemWeight.setAttribute('class', 'item__weght')
         itemWeight.innerText = `${iterator.weight}`;
         // create BEM element "item__price"
         let itemPrice = document.createElement('div');
         itemPrice.setAttribute('class', 'item__price')
         itemPrice.innerText = `${iterator.price}`;
         // create BEM element "item__code"
         let itemCode = document.createElement('div');
         itemCode.setAttribute('class', 'item__code')
         itemCode.innerText = `${iterator.code}`;
         // create BEM block "item__fullprice"
         let itemFullPrice = document.createElement('div');
         itemFullPrice.setAttribute('class', 'item__fullprice')
         // create BEM block "item__fullweight"
         let itemFullWeight = document.createElement('div');
         itemFullWeight.setAttribute('class', 'item__fullprice')
         // create BEM element "item__fullcode"
         let itemFullcode = document.createElement('div');
         itemFullcode.setAttribute('class', 'item__fullcode')         
         // create BEM element "item__currency"
         let itemCurrency = document.createElement('div');
         itemCurrency.setAttribute('class', 'item__currency')
         itemCurrency.innerText = 'грн;';
         // create BEM element "item__weght"
         let itemCost = document.createElement('div');
         itemCost.setAttribute('class', 'item__weght')
         itemCost.innerText = 'Стоимость:';
         // create BEM element "item__weght"
         let itemWeight2 = document.createElement('div');
         itemWeight2.setAttribute('class', 'item__weght')
         itemWeight2.innerText = 'Вес:';
         // create BEM element "item__count"
         let itemCount = document.createElement('div');
         itemCount.setAttribute('class', 'item__count')
         itemCount.innerText = 'кг';
         // create BEM element "item__count"
         let itemProdCode = document.createElement('div');
         itemProdCode.setAttribute('class', 'item__count')
         itemProdCode.innerText = 'Код товару:';
     
         itemFullWeight.append(itemWeight2);
         itemFullWeight.append(itemWeight);
         itemFullWeight.append(itemCount);
         
         itemFullPrice.append(itemCost);
         itemFullPrice.append(itemPrice);
         itemFullPrice.append(itemCurrency);
         itemFullPrice.append(itemFullWeight);
         
         itemFullcode.append(itemProdCode);
         itemFullcode.append(itemCode);
         
         prodItem.append(prodImage);
         prodItem.append(itemName);
         prodItem.append(itemTranscript);
         prodItem.append(itemFullPrice);
         prodItem.append(itemFullcode);
         
         prodBlock.append(prodItem);
         container.append(prodBlock);
         }
   }             
});