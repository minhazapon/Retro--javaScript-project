


  const retro = async () => {

   const res = await fetch ('https://openapi.programming-hero.com/api/retro-forum/latest-posts');

   const retroData = await res.json();

//    console.log(retroData);

   retroApi(retroData);

    

  }


    const retroApi = retroData => {
        
        const retroContainer = document.getElementById('lastesContainer')

      
         
       retroData.forEach(retro =>{

          console.log(retro);

          const retroCard = document.createElement('div')

          retroCard.classList = ` card w-96 bg-base-100 shadow-xl  `

          retroCard.innerHTML = `
          <figure class="px-10 pt-10">
          <img src="${retro.cover_image}" alt="Shoes" class="rounded-xl" />
        </figure>
           <div class="flex gap-5 justify-center items-center mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            <h1>${retro.author.posted_date}</h1>
           </div>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${retro.title}</h2>
          <p>${retro.description}</p>
          <div class="flex gap-10">
            <img class="h-[80px]" src="${retro.profile_image
            }" alt="">
            <div>
            <h1 class="text-xl font-bold">${retro.author.name
            }</h1>
            <h1 class="text-xl font-bold">${retro.author.designation
            }</h1>
             </div>
          </div>
        </div>
            
          
          `

        retroContainer.appendChild(retroCard)

       })
        
     
    
    }



    




  retro();