window.onload = () => {
getProduct();
getDrinks();
getEle();


}
let data = "";
let data2 = "";
let data3 = "";



const getProduct = () =>{
    fetch(api.showProduct).then((response) => response .json()).then((item)=>{
      for(let i=0 ; i<7 ; i++){
        data =data+ `<div id="food-disc-card" class="col-sm-3 meal">
<div id="ph-r"><img src="${item.items[0].variants[1].images[0].cachedPath}" /></div>
<img
  class="shape"
  style="height: 5px;     top: 190px;
  position: absolute;"
  src="images/shape-down-1.png"
  alt=""
/>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="22"
  height="22"
  viewBox="0 0 64 64"
>
  <path
    fill="#ffce31"
    d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
  />
</svg>
<div id="rate2" class="rate">  التقييم ${item.items[0].variants[0].axis[0]}</div>
<div class="like"><button><i class="fa-regular fa-heart fa-xl" style="color: #000000;"></i></button></div>
<h4>${item.items[0].variants[0].name}</h4>
<p>${item.items[0].variants[0].nameAxis.Z2}</p>
<button>
  إضافةالى السلة<svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 512 512"
  >
    <circle
      cx="176"
      cy="416"
      r="16"
      fill="none"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <circle
      cx="400"
      cy="416"
      r="16"
      fill="none"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
    <path
      fill="none"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M48 80h64l48 272h256"
    />
    <path
      fill="none"
      stroke="white"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
    />
  </svg>
</button>
<div id="price2" class="price">${item.items[0].variants[0].price.current}   ${item.items[0].variants[0].price.currency}</div>
</div>`
      }
      
      let fast = document.getElementById("fast-food");

      fast.addEventListener("click", function(event) {
        event.preventDefault();
        var   card2 = document.getElementById("card2");
        card2.innerHTML = data;
      });
        

      document.getElementById("card2").innerHTML=data;

      

    });
        };

       const getDrinks = () =>{
          fetch(api.showBrand).then((response) => response .json()).then((item)=>{
            for(let i=0 ; i<item.items.length ; i++){
              data2 =data2 + `<div id="food-disc-card" class="col-sm-3 meal">
      <div id="ph-r"><img src="${item.items[i].images[0].cachedPath}" /></div>
      <img
        class="shape"
        style="height: 5px;     top: 190px;
        position: absolute;"
        src="images/shape-down-1.png"
        alt=""
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 64 64"
      >
        <path
          fill="#ffce31"
          d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
        />
      </svg>
      <div id="rate2" class="rate">  التقييم </div>
      <h4>${item.items[i].name}</h4>
      <p>${item.items[i].name}</p>
      <button>
        إضافةالى السلة<svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 512 512"
        >
          <circle
            cx="176"
            cy="416"
            r="16"
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <circle
            cx="400"
            cy="416"
            r="16"
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M48 80h64l48 272h256"
          />
          <path
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
          />
        </svg>
      </button>
      <div id="price2" class="price"></div>
      </div>`
            }
            
            let grilled = document.getElementById("grilled");

            grilled.addEventListener("click", function(event) {
        event.preventDefault();
        var   card2 = document.getElementById("card2");
        card2.innerHTML = data2;
      
      
      });
              
      document.getElementById("card2").innerHTML=data;



           
          });
              };

              const getEle = () =>{
                fetch(api.showProduct).then((response) => response .json()).then((item)=>{
                  for(let i=2 ; i<7 ; i++){
                    data3 =data3+ `<div id="food-disc-card" class="col-sm-3 meal">
            <div id="ph-r"><img src="${item.items[0].associations.similar_products[0].images[0].cachedPath}" /></div>
            <img
              class="shape"
              style="height: 5px;     top: 190px;
              position: absolute;"
              src="images/shape-down-1.png"
              alt=""
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 64 64"
            >
              <path
                fill="#ffce31"
                d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2L62 25.2z"
              />
            </svg>
            <div id="rate2" class="rate">  التقييم ${item.items[0].associations.similar_products[0].averageRating}</div>
            <h4>${item.items[0].associations.similar_products[0].name}</h4>
            <p>${item.items[0].variants[0].nameAxis.Z2}</p>
            <button>
              إضافةالى السلة<svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 512 512"
              >
                <circle
                  cx="176"
                  cy="416"
                  r="16"
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <circle
                  cx="400"
                  cy="416"
                  r="16"
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
                <path
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M48 80h64l48 272h256"
                />
                <path
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128"
                />
              </svg>
            </button>
            <div id="price2" class="price">${item.items[0].variants[0].price.current}   ${item.items[0].variants[0].price.currency}</div>
            </div>`
                  }
                  
                  let pizza = document.getElementById("pizza");
            
                  pizza.addEventListener("click", function(event) {
                    event.preventDefault();
                    var   card2 = document.getElementById("card2");
                    card2.innerHTML = data3;
                  });
                    
            
                  
                });
                    };







         