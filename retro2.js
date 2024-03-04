
    
  const allPost = async () => {

     const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');

     const postData = await res.json();
     
     const api = postData.posts;
      
    //  console.log(api);

     displayAPI(api);


  }


  const displayAPI = api => {
    
    //  console.log(api);
     

    const apiContainer = document.getElementById('apiContainer')

    api.forEach(apiData => {
        
       console.log(apiData)

       const apiCard = document.createElement('div')
      
       apiCard.classList = `flex gap-3 bg-blue-200 w-[700px] p-4 rounded-xl border-[1px] border-blue-800 mt-4`

       apiCard.innerHTML = `
       
       <div><img class="h-[100px] w-[100px]" src="${apiData.image
       }" alt=""></div>

       <div>

       <div class="flex gap-4">
       <h1>#${apiData.category}</h1>  

       <h1>author: ${apiData.author.name}</h1>
       </div>

                     
       <p class="mt-2 text-xl font-bold">${apiData.title
       }</p>

       <p class="mt-2 text-xl text-slate-400">${apiData.
        description
        }</p>
             
       <div class="mt-5 flex gap-10">

        <h1 class="flex gap-4"><img class="h-[40px] " src="images/chat.png" alt=""> <span>${apiData.
            comment_count
            }</span></h1>

        <h1 class="flex gap-4"><img class="h-[40px] " src="images/view (1).png" alt=""> <span>${apiData.view_count}</span></h1>

        <h1 class="flex gap-4"><img class="h-[40px] " src="images/clock.png" alt=""> <span>${apiData.posted_time
        }</span></h1>

        <img class="h-[40px]" src="images/email.png" alt="">
      </div>
       </div>
       
       
       `

       apiContainer.appendChild(apiCard);
  
    });



  }


  //search button

   const search = () => {
      spinner();        
  
       const searchF = document.getElementById('searchfield')

       const searchText = searchF.value;

       allPost(searchText);


   }


  const spinner = () => {

    const loadSpinner = document.getElementById('spinner')

    loadSpinner.classList.remove('hidden')




  }
   



  allPost();






    