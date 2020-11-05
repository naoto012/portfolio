$(function() {
    // drawer.js
    $('.drawer').drawer()

    // smooth scroll
    // #から始まるURLがクリックされた時
    $('a[href^="#"]').click(function() {
        // 移動速度を指定（ミリ秒）
        let speed = 600;
        // hrefで指定されたidを取得
        let id = $(this).attr("href");
        // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
        let target = $("#" == id ? "html" : id);
        // ページのトップを基準にターゲットの位置を取得
        let position = $(target).offset().top;
        // ターゲットの位置までspeedの速度で移動
        $("html, body").animate(
            {
                scrollTop: position - $('#js-header').outerHeight()
            },
            speed
        );
        return false;
    });

    // wow.js
    new WOW().init()

    // google form
    let $form = $('#js-form')
    $form.submit(function (e) { 
        $.ajax({ 
          url: $form.attr('action'), 
          data: $form.serialize(), 
          type: "POST", 
          dataType: "xml", 
          statusCode: { 
            0: function () { 
                //送信に成功したときの処理 
                $form.slideUp()
                $('#js-success').slideDown()
            }, 
            200: function () { 
                //送信に失敗したときの処理 
                $form.slideUp()
                $('#js-error').slideDown()
            } 
          } 
        }); 
        return false; 
    });

    // formの入力
    let $submit = $('#js-submit')
    $('#js-form input, #js-form textarea').on('change', function() {
        if(
            $('#js-form input[type="text"]').val() !== "" &&    
            $('#js-form input[type="email"]').val() !== "" &&
            $('#js-form input[name="entry.2051205718"]').prop('checked') === true
        ) {
            // 全て入力された時
            $submit.prop('disabled', false)
            $submit.addClass('-active')
        } else {
            // 全て入力されていない時
            $submit.prop('disabled', true)
            $submit.removeClass('-active')
        }
    });

    // up arrow
    $(window).on("scroll", function() {
        const $btn = $('.to-top');
        const fadeMsec = 1500;
        if (1500 < $(this).scrollTop()) {
            $($btn).addClass('is-show');
            // fade speed
            $btn.fadeIn(fadeMsec).css("display", "block");
        } else {
            $($btn).removeClass('is-show');
            // fade speed
            $btn.fadeOut(fadeMsec);
        }
    });

    // open.modal(privacy-policy)
    $('.js-modal-open').click(function(e) {
        e.preventDefault();
        let target = $(this).data("target");
        $('.' + target).addClass('is-show');

        return false
    })

    // close.modal(privacy-policy)
    $('.js-modal-close').click(function(e) {
        e.preventDefault();
        let target = $(this).data("target");
        $('.' + target).removeClass('is-show');

        return false
    });

    // open.modal(law)
    $('.js-modal-law-open').click(function(e) {
        e.preventDefault();
        let target = $(this).data("target");
        $('.' + target).addClass('is-show');

        return false
    })

    // close.modal(law)
    $('.js-modal-law-close').click(function(e) {
        e.preventDefault();
        let target = $(this).data("target");
        $('.' + target).removeClass('is-show');

        return false
    });
});