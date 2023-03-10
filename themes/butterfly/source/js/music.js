var anzhiyu = {
    // 音乐节目切换背景
    changeMusicBg: function (isChangeBg = true) {
      if (window.location.pathname != "/music/") {
        return;
      }
      const anMusicBg = document.querySelector(".layout,#content-inner")
      if (isChangeBg) {
        // player listswitch 会进入此处
        const musiccover = document.querySelector(".aplayer-pic");
      } else {
        // 第一次进入，绑定事件，改背景
        let timer = setInterval(()=>{
          const musiccover = document.querySelector(".aplayer-pic");
          // 确保player加载完成
          if (musiccover) {
            clearInterval(timer)
            // 绑定事件
            anzhiyu.addEventListenerChangeMusicBg();
            
            // 暂停nav的音乐
            if (document.querySelector("meting-js").aplayer && !document.querySelector("meting-js").aplayer.audio.paused){
              anzhiyu.musicToggle()
            }
          }
        }, 100)
      }
    },
    addEventListenerChangeMusicBg: function () {
      const anMusicPage = document.getElementById("anMusic-page");
      const aplayerIconMenu = anMusicPage.querySelector(".aplayer-info .aplayer-time .aplayer-icon-menu");
  
      anMusicPage.querySelector("meting-js").aplayer.on('loadeddata', function () {
        anzhiyu.changeMusicBg();
      });
  
      aplayerIconMenu.addEventListener("click", function () {
        document.getElementById('menu-mask').style.display = "block";
        document.getElementById('menu-mask').style.animation = "0.5s ease 0s 1 normal none running to_show";
      })
  
      document.getElementById('menu-mask').addEventListener("click", function () {
        if (window.location.pathname != "/music/") return;
        anMusicPage.querySelector('.aplayer-list').classList.remove("aplayer-list-hide");
      })
    },
  }
  
  // 调用
  anzhiyu.changeMusicBg(false);