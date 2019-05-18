/**
 * Goodwish Matyila
 * @year 2019
 * @phone 082 632-5761
 * @country South Africa
 * Application SPA application using Kendo UI as UI Framework Library
 * Uses threading with the implementation of Service Workers in the browser
 * Imports external javascripts @postMessage and @message Events fired by the Workers
 * handles the @asynchronous I/O through the worker.
 * 
 * Methodology:
 * 1.Configure SPA Application
 * 2.Setup Kendo UI routing(Similar to React.js)
 * 3.Configure @Layout which handles the rendering of Views/Templates
 * 4.Configure Initial @Views to render on Layout initialization
 * 5.Setup up @Routing for handling the UI Update and Service worker channel data exchange.
 * 
 * Conclusion:
 * Worker threads have more access to system memory this provides more power to your 
 * UI threads for heavy computational rendering of UI such as displaying of DataVis
 * other heavy Grids with loats of data. 
 * 
 * 
 * @year 2019
 * @copyright Free to use
 * @country South Africa
 * @software JavaScript
 */
(function(){

    var sw = new Worker('preloader.js');
    sw.postMessage('loader');
    sw.addEventListener('message', (res)=>{
        document.getElementById('root').innerHTML = res.data;
    });

    const myStyles = [
        'styles/kendo.common.min.css',
        'styles/kendo.black.min.css'
    ];

    const dependancies = [
        'js/jquery.min.js',
        'js/kendo.all.min.js',
        'js/jszip.min.js'
    ];

    for(let i = 0; i < myStyles.length; i++){
        var loadStyles = document.createElement('link');
        loadStyles.href = myStyles[i];
        loadStyles.rel = "stylesheet";
        document.querySelector('HEAD').appendChild(loadStyles);
    }
    for(let j = 0; j < dependancies.length; j++){
        var depths = document.createElement('script');
        depths.src = dependancies[j];
        document.querySelector('HEAD').appendChild(depths);
    }
}())

/**
 * Handle race conditions on the browser.
 * await 10s initial load
 */
setTimeout(middleware, 10000);
function middleware(){
    document.getElementById('root').innerHTML = '';
    $(document).ready(Init.bind(this));
}

/**
 * Init worker thread for the viewEngine
 * @worker
 */
const viewEngine = new Worker('engine.js');

/**
 * Main application 
 * @e #param {Event}
 */
function Init(e)
{
    /**
     * MainMenuNavigation
     * @templateMenu
     */
    const menuView = new kendo.View(`
        <ul data-role="menu">
            <li><a href="#/Welcome">Home</a></li>
            <li><a href="#/About">About</a></li>
            <li><a href="#/Calendar">Calendar</a></li>
        </ul>
    `);
    /**
     * Initial Template
     * @layoutMainTemplate
     */
    const AppLayout = new kendo.Layout(`
        <div><img src="loading.jpg"  alt="logo" width="130"/></div>
         <br/>
        <header id="navigation">
        </header>
            <section style="padding:5em;">
                <div id="content"></div>
            </section>
        <div id="footer"></div>
    `);
    /**
     * KendoUI-View Engine with Worker Thread
     * @param {TEMPLATE} viewComponent 
     * @serviceWorkerIO
     */
    function viewDigest(viewComponent){
        if(viewComponent){
            viewEngine.postMessage(viewComponent);
            viewEngine.addEventListener('message', function(template){
                AppLayout.showIn("#navigation", menuView);
                AppLayout.showIn("#content", new kendo.View(template.data));
            });
        }
    }
    /**
     * Router
     * @initRouterClass
     */
    const AppRouter = new kendo.Router({
        init: function(){
            AppLayout.render("#root");
        }
    });
    /**
     * Application
     * @routeMethodsRequests
     */
    AppRouter.route('/Welcome', function(){
       viewDigest('./company/welcome');
    });

    AppRouter.route('/About', function(){
        viewDigest('./company/about');
     });

     AppRouter.route('/Calendar', function(){
        viewDigest('./company/calendar');
     });

     AppRouter.route('/Support', function(){
        viewDigest('./company/support');
     });

    AppRouter.start();

    AppRouter.navigate("/About");    
}





