var EC2View = Backbone.View.extend({

    className: 'EC2View',

    initialize: function(options) {
        this.ec2cost = new EC2CostView();

        this.bindings();
        this.render();

    },

    bindings: function() {
    },

    render: function() {
        this.$el.append(this.ec2cost.el);
    }
});