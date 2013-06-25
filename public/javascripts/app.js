_.templateSettings = {
    interpolate: /\<\@\=(.+?)\@\>/gim,
    evaluate: /\<\@([\s\S]+?)\@\>/gim,
    escape: /\<\@\-(.+?)\@\>/gim
};



$('#add-new-word').click(function() {
    var word = new Word({
      text: $('#new-word').val(),
      language: 'en'
    });        

    $.post("word", word.toJSON());
    wordsView.render(word);
 
    toastr.success('Dodano nowe słowo.');
});
