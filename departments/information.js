var templateOutput = `
    <div class="card">
         <div class="card-header">
            <div class="card-title">
                <h4> <a href="#/timesheets" class="btn btn-secondary btn-sm"> Back </a> Solution Activity </h4>
            </div>
         </div>
         <div class="card-body row">
            <div class="col-md-4">
           
            <h5>Full Names</h5>
            <input type="text" data-role="autocomplete" />
            <br/><br/>
                <h5>Choose </h5>
                <select data-role="dropdownlist"   placeholder="choose managers"
                    data-bind="source: information.activity.schedules"
                ></select>

                <br/><br/>
                <h5>Contact Phone</h5>
                <input type="number" data-role="autocomplete" />


                <br/><br/>
                <h5>Booking Time</h5>
                <input data-role="timepicker"  />
    

               
               <br/><br/>
                <button data-role="button"   data-bind="click: information.activity.continue">Continue</button>
              

            </div> 
            <div class="col-md-4">
            <h5>Availability</h5>
            <div  data-role="calendar" type="date" ></div>

            </div>

            <div class="col-md-4 " style="padding-left:2em; color:gray; font-weight:100;">
                    <p class="m-3">
                        Goodwish Matyila - Specialises in building client facing applications for the business that 
                        is looking to expand online to facilitate business automation within small or large companies. As an enabler my mission depends on what your company the 'client' is willing to share as problem areas.
                        for solutions already exist for any business just waiting to be implemented.

                        <br/>  <br/>
                        I am available to for a quick chat on <br><b>082 632-5761</b> as a developer and solution developer our conversation will be business owner to developer directly which makes it easier for the business owner to get hold of me when a certain idea is available for both of us to work on.
                        </p>
            </div>
           
         </div>
         <div class="card-footer">
         </div>
    </div>
`;