var templateOutput = `
    <div class="card">
         <div class="card-header">
            <div class="card-title">
                <h4> <a href="#/welcome" class="btn btn-secondary btn-sm"> Back </a> Departments</h4>
            </div>
         </div>
         <div class="card-body">
            <div class="col-md-3">
                <select data-role="dropdownlist" class="m-3" placeholder="choose managers"
                    data-bind="source: timesheets.departments"
                ></select>
                <button data-role="button" class="m-3" data-bind="click: timesheets.continue">Continue</button>
            </div>
         </div>
         <div class="card-footer">
         </div>
    </div>
`;