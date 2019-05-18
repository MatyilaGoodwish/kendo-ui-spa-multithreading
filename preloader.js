self.addEventListener('message', function(req){
   var postback = `<div style="justify-content: center;text-align: center;padding:10em;">
                <img src="loading.jpg"/>
                <br/>
                <h3>Please Wait...</h3>
    </div>`
    this.postMessage(postback);
})