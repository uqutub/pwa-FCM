					STEPS TO FOLLOW:

		SERVER SIDE:
			1) Create a cloud function and deploy it on firebase
	
		CLIENT SIDE:
			1)Ask for permission using requestPermission method
			2)Initialize two listeners in service worker 
		  	  i)push listener
		  	  ii)notificationClick (only if you want to implement click action)
	
			3) Use this fetch request to send notification 

			fetch("yourFunctionUrlHere", {
           			 method: 'POST',
          			  body: {
               			 token: 	"recieverTokenHere",
               			 title: 	"messageTitleHere",
               			 message:"messageHere",
				url:	"urlHere"(only if you want to implement click action)},
       				 })
				 .then((res) =>console.log(res))
