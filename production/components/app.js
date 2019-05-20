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
    sw.postMessage('loader',[]);
    sw.addEventListener('message', (res)=>{
        document.getElementById('root').innerHTML = res.data;
    });


   

    const myStyles = [
        'styles/kendo.common.min.css', 
        'styles/kendo.moonlight.min.css',
        'css/bootstrap.css',
        'css/ui.css'
    ];

    const dependancies = [
        'js/jquery.min.js',
        'js/kendo.all.min.js',
        'js/bootstrap.bundle.min.js'
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
setTimeout(middleware, 5000);
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
function Init(){
   
    /**
     * Initial Template
     * @layoutMainTemplate
     */
 
    const AppLayout = new kendo.Layout(`
        <div>
            <section class="container">
                <div id="content"></div>
            </section>
            
        </div>
        <div id="footer" class="main-footer">
            Copyright &copy ${new Date().getFullYear()} BDSoft, South Africa - All rights reserved. <a href="#/about">The Project & the developer</a> 
        </div>
    `);

    

    const business = kendo.observable({
        timesheets: {
            departments: [
                'Human Resources',
                'Information Services',
                'Computer Services',
                'Support',
                'Contact Centre',
                'Communication',
                'Retail Services',
                'Other'
            ],
            continue: function(){
                location.replace('#/information');
            }
        },
        information:{
            activity:{
                schedules: [
                    'Development Project',
                    'Costing for Website',
                    'UI/UX Design',
                    'Mobile App Solutions',
                    'Game Development Costing',
                    'Other Technology Needs'
                ],
                continue: function(){
                   kendo.alert('Your message has been received I will get back to you the soonest - Goodwish Matyila');
                }
            }
        },
        support:{
            departments:[
                'Hosting',
                'Software ',
                'Billing',
                'Administration'
            ],
            subject: null,
            message: null,
            continue: function(){
                kendo.alert('Thank you I will get back to you, alternatively you can just call me directly 082 632-5761');
            }
        }        
    })


    /**
     * KendoUI-View Engine with Worker Thread
     * @param {TEMPLATE} viewComponent 
     * @serviceWorkerIO
     */
    function viewDigest(viewComponent){
        if(viewComponent){
            viewEngine.postMessage(viewComponent, []);
            viewEngine.addEventListener('message', function(template){
                AppLayout.showIn("#content", new kendo.View(template.data, { model: business}));
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
    AppRouter.route('/welcome', ()=>{
       viewDigest('./company/welcome');
    });

    AppRouter.route('/back', ()=>{
        viewDigest('./company/welcome');
    });

    AppRouter.route('/support', ()=>{
        viewDigest('./company/support');
    });

    
    AppRouter.route('/timesheets', ()=>{
        viewDigest('./company/timesheets');
    });

    AppRouter.route('/information', ()=>{
        viewDigest('./departments/information');
    });

    AppRouter.route('/spreadsheet', ()=>{
        viewDigest('./departments/spreadsheet');
    });
    
    AppRouter.route('/about', ()=>{
        viewDigest('./company/about');
    });
      
    AppRouter.start();

    AppRouter.navigate("/welcome");    
 
}





