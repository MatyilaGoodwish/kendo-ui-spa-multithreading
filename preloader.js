addEventListener('message', ()=>{
    postMessage(`
        <div style="justify-content: center;text-align: center;padding:16em;">
                    <img src="logo.png" class="loader"/>
                    <br/>
                    <h3 style="text-shadow:1px 1px 1px black;color:white;">Please Wait...</h3>
        </div>
    `);
})