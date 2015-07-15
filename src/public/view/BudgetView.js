var BudgetView = Backbone.View.extend({

    className: 'BudgetView',

    initialize: function(options) {
        if (!this.model) {
            this.model = new UsageMonitorModel();
        }
        this.data = {
            budgetName: null,
            batchName: null,
            batchType: null,
            startDate: null,
            endDate: null,
            amount: 0,
            option: 'true'
        };
        var collection;
        this.bindings();
        this.render();

    },
    render_collection: function(collection) {
        if (collection == 'Groups') {
            this.model.getGroups();
        } else {
            this.model.getUsers();
        }
    },

    bindings: function() {

        this.$el.on('focusout', '#budgetname', function(e) {
            console.log("budgetname clicked", $('#budgetname').val());
            this.data.budgetName = $('#budgetname').val();
        }.bind(this));

        this.$el.on("change", '.costfilter', function(e) {
            var selected = $('.costfilter').val();
            console.log(selected);
            $('#filter-details').removeClass('hidden');
            if (selected == 'group') {
                this.render_collection('Groups')
            } else {
                this.render_collection('Users')
            }
        }.bind(this));

        this.model.change('groupDataReady', function(model, val) {
            this.collection = GroupCollection.toJSON();
            this.rerender();
        }.bind(this));

        this.model.change('userDataReady', function(model, val) {
            this.collection = UserCollection.toJSON();
            this.rerender();
        }.bind(this));

        this.model.change('postDataReady', function(model, val) {
            //handle post data
        }.bind(this));

        this.$el.on("change", '.sub-costfilter', function(e) {
            var selected = $('.sub-costfilter').val();
            console.log(selected);
            this.data.batchName = selected;
        }.bind(this));

        this.$el.on("change", '.costfilter', function(e) {
            var selected = $('.costfilter').val();
            console.log(selected);
            this.data.batchType = selected;
        }.bind(this));

        this.$el.on('focusin', '#startdate', function(e) {
            var self = this;
            var datePicker = $("#startdate").datepicker({
                onSelect: function(dateText) {
                    console.log("Selected date: " + dateText + "; input's current value: " + this.value);
                    self.data.startDate = this.value;
                }
            });
            $("#myModal").scroll(function() {
                $("#startdate").datepicker("hide");
                $("#startdate").blur();
            });
        }.bind(this));

        this.$el.on('focusin', '#enddate', function(e) {
            var self = this;
            var datePicker = $("#enddate").datepicker({
                onSelect: function(dateText) {
                    console.log("Selected date: " + dateText + "; input's current value: " + this.value);
                    self.data.endDate = this.value;
                }
            });
            $("#myModal").scroll(function() {
                $("#enddate").datepicker("hide");
                $("#enddate").blur();

            });
        }.bind(this));


        this.$el.on('focusout', '#amount', function(e) {
            console.log("amount clicked", $('#amount').val());
            this.data.amount = $('#amount').val();
        }.bind(this));

        this.$el.on('click', '#myonoffswitch', function(e) {
            if ($('#myonoffswitch').val() == 'null') {
                $('#myonoffswitch').val('true');
            } else if ($('#myonoffswitch').val() == 'true') {
                console.log("it was", $('#myonoffswitch').val());
                var value = $('#myonoffswitch').val();
                $('#myonoffswitch').val('false');
                console.log("it is now", $('#myonoffswitch').val());
                this.data.option = $('#myonoffswitch').val();
            } else {
                console.log("it was", $('#myonoffswitch').val());
                var value = $('#myonoffswitch').val();
                $('#myonoffswitch').val('true');
                console.log("it is now", $('#myonoffswitch').val());
                this.data.option = $('#myonoffswitch').val();
            }

        }.bind(this));

        this.$el.on('click', '#savebtn', function(e) {
            console.log("save button clicked");
            console.log(this.data);
            this.model.post_budget_result(this.data);
        }.bind(this));

    },

    render: function() {
        var html = Handlebars.templates.BudgetView({

        });
        this.$el.html(html);
    },
    rerender: function() {
        console.log("this is called", this.collection);
        var html = Handlebars.templates.BudgetView({
            col: this.collection
        });
        var selector = '.sub-costfilter';
        this.$el.find(selector).replaceWith($(selector, html));
    }
});