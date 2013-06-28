var Word = Backbone.Model.extend({
    defaults : {
        text : null,
        language : 'en',
        createdAt : null
    }
});

var Words = Backbone.Collection.extend({
    model : Word,        
    url: '/words',
});