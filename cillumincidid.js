   let start = 0;
   const duration = 10000; // 10 seconds in milliseconds

   const timer = setInterval(() => {
       start += 1000; // Increment by 1 second
       console.log(`Elapsed time: ${start}ms`);

       if (start >= duration) {
           clearInterval(timer);
           console.log("Timer completed");
       }
   }, 1000);
   