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
    events: {        
        'click a': 'deleteWord'        
        },
    initialize: function () {
        this.collection = new Words();        
        this.collection.on("sync", this.render, this);
        this.collection.fetch();
        console.log(this.collection);                
    },

    render: function () {        
        var that = this;
        this.$el.html('');
        _.each(this.collection.models, function (item) {
            var wordItemView = new WordItemView({ model: item });
            this.$el.append(wordItemView.render().el);
        }, this);
    },

    add: function(item) {
        this.collection.remove(item);    
        var wordItemView = new WordItemView({ model: item });
        this.$el.append(wordItemView.render().el);
    },

    deleteWord: function(e) {        
        var word = $(e.srcElement).attr('data');
        var that = this;
        $.get('word?text=' + word, function(response) {        
            if(response.result) {
                that.collection.remove(that.collection.where({text: word}));                
                that.render();
            }            
        });        
    }
});

var words = new Words();
var object = {};
_.extend(object, Backbone.Events);
var wordsView = new WordsView();