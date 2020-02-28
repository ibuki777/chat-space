$(function() {
  function buildHTML(message){
    if (message.image) {
        var html =
          `<div class="main-list__chat">
            <div class="main-list__chat__name">
              ${message.user_name}
            </div>
            <div class="main-list__chat__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main-list__text">
            ${message.content}
          <img class="main-list__text__image" src=${message.image}>
          </div>`
      return html;
    } else {
        var html =
          `<div class="main-list__chat">
            <div class="main-list__chat__name">
              ${message.user_name}
            </div>
            <div class="main-list__chat__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main-list__text">
            ${message.content}
          </div>`
      return html;
    };
  }
$('#new_message').on('submit',function(e) {
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-list').append(html);
      $('.main-list').animate({ scrollTop: $('.main-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.main__form__btn').prop("disabled", false)
    })
    .fail(function(){
      alert("メッセージの送信に失敗しました")
      $('.main__form__btn').prop("disabled", false)
    })
    
});
});