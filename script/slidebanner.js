 $(function(){
 var swiper = new Swiper('.slide ', {
    speed: 3000,//버튼을 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.slide .swiper-button-next',
        prevEl: '.slide .swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '.slide .swiper-pagination',
        clickable: true,
      },
    });

    var swiper = new Swiper('.slide2 ', {
      speed: 2000,//버튼을 슬라이드가 넘어가는 시간
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
          nextEl: '.slide2 .swiper-button-next',
          prevEl: '.slide2 .swiper-button-prev',

        },
        pagination: {//블릿 버튼
          el: '.slide2 .swiper-pagination',
          clickable: true,
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },

        effect: "fade",
      });

      var swiper = new Swiper('.slide3 ', {
        speed: 2000,//버튼을 슬라이드가 넘어가는 시간
          loop: true,//슬라이드 무한반복
          navigation: {//화살표 버튼
            nextEl: '.slide2 .swiper-button-next',
            prevEl: '.slide2 .swiper-button-prev',
          },
          thumbs: {
            swiper: swiper,
          },
        });

        var swiper = new Swiper('.slide4 ', {
          speed: 2000,//버튼을 슬라이드가 넘어가는 시간
            loop: true,//슬라이드 무한반복
            navigation: {//화살표 버튼
              nextEl: '.slide4 .swiper-button-next',
              prevEl: '.slide4 .swiper-button-prev',
            },
            pagination: {//블릿 버튼
              el: '.slide4 .swiper-pagination',
              clickable: true,
            },
            scrollbar: {
              el: ".swiper-scrollbar",
            },

            effect: "fade",
          });

          var swiper = new Swiper('.slide5 ', {
            speed: 2000,//버튼을 슬라이드가 넘어가는 시간
              loop: true,//슬라이드 무한반복
              navigation: {//화살표 버튼
                nextEl: '.slide4 .swiper-button-next',
                prevEl: '.slide4 .swiper-button-prev',
              },
              thumbs: {
                swiper: swiper,
              },

            });
});