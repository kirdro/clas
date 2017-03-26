
### API

http://0.0.0.0:8003/api/content/list/AboutCompany/

  [
      {
          "title": "Заголовок информации о компании", 
          "subtitle": "Подзаголовок информации о компании", 
          "phone": "Телефон компании", 
          "address": "Адрес компании", 
          "description": "О компании...", 
          "email": "Почта компании", 
          "home_title": "Заголовок на главной странице", 
          "home_description": "Описание на главной странице", 
          "url_vkontakte": "ссылка на вк", 
          "url_facebook": "ссылка на фб", 
          "url_instagram": "ссылка инстаграм", 
          "url_telegram": "ссылка телеграм", 
          "url_youtube": "ссылка ютюб", 
          "media": [
              {
                  "item_type": "description", 
                  "is_favorite": false, 
                  "value": "Текст медиавставки 2"
              }, 
              {
                  "item_type": "video", 
                  "is_favorite": false, 
                  "youtube_id": "a4n58MctSFs"
              }
          ], 
          "files": [
              {
                  "item_type": "file", 
                  "name": "file", 
                  "value": "/media/project_files/pic1.PNG"
              }
          ]
      }
  ]


http://0.0.0.0:8003/api/content/list/News/

  [
      {
          "title": "Название новости", 
          "autor": "Автор новости", 
          "description": "Описание новости", 
          "dt": "2017-03-25T22:22:22Z", 
          "media": [
              {
                  "url": "/media/news/1490505821_scr3.png", 
                  "item_type": "image", 
                  "is_favorite": true
              }
          ]
      }
  ]


http://0.0.0.0:8003/api/content/list/WorkItem/

  [
      {
          "title": "Название проекта", 
          "description": "описание проекта", 
          "sort_index": 0, 
          "project_type": "simple", 
          "media": [
              {
                  "item_type": "subtitle", 
                  "is_favorite": true, 
                  "value": "Видео на Ютюб!!!"
              }, 
              {
                  "item_type": "video", 
                  "is_favorite": true, 
                  "youtube_id": "kEU9q1LOcI0"
              }
          ], 
          "files": []
      }
  ]


http://0.0.0.0:8003/api/content/list/Event/

  [
      {
          "title": "название события", 
          "autor": "автор события", 
          "description": "описание обытия", 
          "dt_start": "2017-03-25T23:39:14Z", 
          "dt_end": "2017-03-25T23:39:31Z", 
          "media": [
              {
                  "item_type": "subtitle", 
                  "is_favorite": true, 
                  "value": "Медиавставка события"
              }, 
              {
                  "url": "/media/events/1490510398_screen_concept.png", 
                  "item_type": "image", 
                  "is_favorite": true
              }
          ]
      }
  ]


http://0.0.0.0:8003/api/content/list/GaleryItem/

  [
      {
          "title": "Название элемента галереи", 
          "autor": "Автори элемента галереи", 
          "dt": "2017-03-25T23:40:18Z", 
          "description": "", 
          "media": [
              {
                  "url": "/media/galery/1490510456_scr3.png", 
                  "item_type": "image", 
                  "is_favorite": true
              }
          ]
      }
  ]


http://0.0.0.0:8003/api/content/list/Partner/

  [
      {
          "name": "Имя первого партнера", 
          "url": "Ссылка на сайт партнера", 
          "media": [
              {
                  "item_type": "subtitle", 
                  "is_favorite": false, 
                  "value": "Медиавставка партнера 1"
              }, 
              {
                  "url": "/media/partners/1490505916_screen_concept.png", 
                  "item_type": "image", 
                  "is_favorite": false
              }
          ]
      }
  ]