var templateOutput = `
    <div class="card">
         <div class="card-header">
            <div class="card-title">
                <h4> <a href="#/welcome" class="btn btn-secondary btn-sm"> Back </a> Ticket Support</h4>
            </div>
         </div>
         <div class="card-body">
            <div>
                <h5>Department</h5>
                <select data-role="dropdownlist"  placeholder="choose managers"
                    data-bind="source: support.departments"
                ></select>
                <br/><br/>
                <h5>Problem Areas</h5>
                <input type="text" data-role="autocomplete" placeholder="subject"   data-bind="value: support.subject"/>
                
                <br/><br/>
                <textarea class="m-3" data-role="editor" data-bind="value: support.message"></textarea>

                <br/>
                    <small style="font-weight:100; color: gray;padding-bottom:1em;">
                        "It's always better to meet or talk over the telephone directly if you have issues" - goodwish matyila.
                    </small>
                <br/><br/>
                <button data-role="button"   data-bind="click: support.continue">Submit Ticket</button>
            </div>
         </div>
         <div class="card-footer">
         </div>
    </div>
`;