  if ('serviceWorker' in navigator) {
        window.addEventListener('load',()=>{
      navigator.serviceWorker
         .register('offline-ghost.js')
        //  .then(reg=> 
        //   // console.log('serviceWorker')
        //   )
         .catch(err => console.log('Error:',err))
      });
    }