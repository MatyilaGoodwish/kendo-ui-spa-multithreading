var templateOutput = `
    <div class="card">
         <div class="card-header">
            <div class="card-title">
                <h4> <a href="#/welcome" class="btn btn-secondary btn-sm"> Back </a> Ticket Support</h4>
            </div>
         </div>
         <div class="card-body">
            <div>
                <select data-role="dropdownlist" class="m-3" placeholder="choose managers"
                    data-bind="source: support.departments"
                ></select>
                <input type="text" data-role="autocomplete" placeholder="subject"   data-bind="value: support.subject"/>

                <textarea class="m-3" data-role="editor" data-bind="value: support.message"></textarea>

                <button data-role="button" class="m-3" data-bind="click: support.continue">Submit Ticket</button>
            </div>
         </div>
         <div class="card-footer">
         </div>
    </div>
`;