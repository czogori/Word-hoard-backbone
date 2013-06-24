_.templateSettings = {
    interpolate: /\<\@\=(.+?)\@\>/gim,
    evaluate: /\<\@([\s\S]+?)\@\>/gim,
    escape: /\<\@\-(.+?)\@\>/gim
};



$('#add-new-word').click(function() {
    var item = { text: $('#new-word').val(), language: "en" };
    $.post("word", item );
    toastr.success('Dodano nowe słowo.');
    var w = new Word({
      text: $('#new-word').val(),
      language: 'en'
    });
    wordsView.renderContact(w);
});
