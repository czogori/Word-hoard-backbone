var WordItemView = Backbone.View.extend({
    template: $("#wordTemplate").html(),

    render: function () {
        var tmpl = _.template(this.template);
        
        $(this.el).html(tmpl(this.model.toJSON()));
        return this;
    }
});

var WordsView = Backbone.View.extend({
    el: $("#words"),

    initialize: function () {
        this.collection = new Words();        
        this.collection.on("sync", this.render, this);
        this.collection.fetch();
        console.log(this.collection);        
        this.render();
    },

    render: function () {
        var that = this;
        _.each(this.collection.models, function (item) {
            var wordItemView = new WordItemView({ model: item });
            this.$el.append(wordItemView.render().el);
        }, this);
    }
});

var object = {};
_.extend(object, Backbone.Events);
var wordsView = new WordsView();