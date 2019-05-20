var templateOutput = `
    <div class="card">
         <div class="card-header">
            <div class="card-title">
                <h4> <a href="#/welcome" class="btn btn-secondary btn-sm"> Back </a> Industry Specific</h4>
            </div>
         </div>
         <div class="card-body row">
            <div class="col-md-4">
                <h5>Business Sector</h5>
                <select data-role="dropdownlist" class="m-3" placeholder="choose managers"
                    data-bind="source: timesheets.departments"
                ></select>
                <button data-role="button" class="m-3" data-bind="click: timesheets.continue">Continue</button>
            </div>
            <div class="col-md-4" style="padding-left:2em; color:gray; font-weight:100;">
                "There are so many business sectors, if yours is not listed 
                kindly choose other, I will make a plan to add it later after we had a conversation
                not that I am aware of all the sectors" - Goodwish Matyila
            </div>
         </div>
         <div class="card-footer">
         </div>
    </div>
`;