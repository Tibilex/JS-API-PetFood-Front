document.addEventListener('DOMContentLoaded', ()=>{
   
   document.addEventListener('click', (event) => {
      const type = event.target.dataset.type;

      if (type === 'cats'){
         GetCats()
      }
      if (type === 'dogs'){
         GetDogs()
      }
      if (type === 'parrots'){
         GetParrots()
      }
      if (type === 'fishes'){
         GetFishes()
      }
   })

   //#region Get Requests
   function GetCats(){
      deleteItems();
        
      $.get("http://bipihok184-001-site1.itempurl.com/Products/CatsFeed")
       .done((data) =>{
         Construct(data);
                      
      })
       .fail(() =>{
           console.warn("CATS REQUEST ERROR");
      });
   };


   function GetDogs(){
      deleteItems();
    
      $.get("http://bipihok184-001-site1.itempurl.com/Products/DogFeed")
       .done((data) =>{
         Construct(data);
                      
      })
       .fail(() =>{
           console.warn('DOGS REQUEST ERROR');
      }); 
   };


   function GetParrots(){
      deleteItems();
      
      $.get("http://bipihok184-001-site1.itempurl.com/Products/ParrotFeed")
       .done((data) =>{
         Construct(data);                   
      })
       .fail(() =>{
           console.warn('PARROTS REQUEST ERROR');
      }); 
   };


   function GetFishes(){
      deleteItems();
      
      $.get("http://bipihok184-001-site1.itempurl.com/Products/FishFeed")
       .done((data) =>{
         Construct(data);                   
      })
       .fail(() =>{
           console.warn('FISHES REQUEST ERROR');
      }); 
   };

   //#endregion

   //#region Page Methods
   function deleteItems() {
  
      const deleteElement = document.querySelector('#prod');
    
      deleteElement.innerHTML = '';
      
   }

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
   
   //#endregion

});