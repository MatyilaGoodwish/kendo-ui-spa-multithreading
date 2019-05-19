var templateOutput = `
    <div class="card">
         <div class="card-header">
            <div class="card-title">
                <h4> <a href="#/timesheets" class="btn btn-secondary btn-sm"> Back </a> Activity </h4>
            </div>
         </div>
         <div class="card-body">
            <div class="col-md-3">
                <select data-role="dropdownlist" class="m1" placeholder="choose managers"
                    data-bind="source: information.activity.schedules"
                ></select>

                <input class="m1" data-role="datepicker" type="date" />

                <input data-role="timepicker" class="m1" />

                <button data-role="button" class="m1" data-bind="click: information.activity.continue">Continue</button>
              

            </div>
           
         </div>
         <div class="card-footer">
         </div>
    </div>
`;