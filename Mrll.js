let topRun = document.querySelector("#arrow"),
      topBack = document.querySelector("#mrllArrow"),
      reBtn = function mouseIn(element) {
        topRun.style.opacity = 1;
        topBack.style.opacity = 0
      };
      function mouseIn() {
        topRun.style.opacity = 0; topBack.style.opacity = 1;
      // (topRun.style.opacity == 1) ? (topRun.style.opacity = 0, topBack.style.opacity = 1) :"";
    }
    // 主區圖片拖曳效果
    $(document).ready(function () {
      $('.ba-slider').each(function () {
        var cur = $(this);
        var width = cur.width() + 'px';
        cur.find('.resize img').css('width', width);
        drags(cur.find('.handle'), cur.find('.resize'), cur);
      });
    });

    $(window).resize(function () {
      $('.ba-slider').each(function () {
        var cur = $(this);
        var width = cur.width() + 'px';
        cur.find('.resize img').css('width', width);
      });
    });

    function drags(dragElement, resizeElement, container) {

      dragElement.on('mousedown touchstart', function (e) {

        dragElement.addClass('draggable');
        resizeElement.addClass('resizable');

        var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;

        var dragWidth = dragElement.outerWidth(),
          posX = dragElement.offset().left + dragWidth - startX,
          containerOffset = container.offset().left,
          containerWidth = container.outerWidth();

        minLeft = containerOffset + 10;
        maxLeft = containerOffset + containerWidth - dragWidth - 10;

        dragElement.parents().on("mousemove touchmove", function (e) {


          var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches.pageX;

          leftValue = moveX + posX - dragWidth;

          if (leftValue < minLeft) {
            leftValue = minLeft;
          } else if (leftValue > maxLeft) {
            leftValue = maxLeft;
          }

          widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

          $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
            $(this).removeClass('draggable');
            resizeElement.removeClass('resizable');
          });
          $('.resizable').css('width', widthValue);
        }).on('mouseup touchend touchcancel', function () {
          dragElement.removeClass('draggable');
          resizeElement.removeClass('resizable');
        });
        e.preventDefault();
      }).on('mouseup touchend touchcancel', function (e) {
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
      });
    }

    //下雨特效
    // var makeItRain = function() {
    
    //   var increment = 0;
    //   var drops = "";
    //   var backDrops = "";
    
    //   while (increment < 100) {
    //     var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //     var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //     increment += randoFiver;
    //     drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    //     backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    //   }
    
    //   $('.rain.front-row').append(drops);
    //   $('.rain.back-row').append(backDrops);
    // }
    
    // $('.splat-toggle.toggle').on('click', function() {
    //   $('body').toggleClass('splat-toggle');
    //   $('.splat-toggle.toggle').toggleClass('active');
    //   makeItRain();
    // });
    
    // $('.back-row-toggle.toggle').on('click', function() {
    //   $('body').toggleClass('back-row-toggle');
    //   $('.back-row-toggle.toggle').toggleClass('active');
    //   makeItRain();
    // });
    
    // $('.single-toggle.toggle').on('click', function() {
    //   $('body').toggleClass('single-toggle');
    //   $('.single-toggle.toggle').toggleClass('active');
    //   makeItRain();
    // });

    // 轉址
    function to() {
      document.location.href="login/login.html";
    }

    