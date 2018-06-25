## Клиентский роутер + Material design
1. Создание папки с текуцщей датой и временем и клонирование основного проекта (ветка Heroku)
cd && mkdir $(date +%Y%m%d_%H%M%S) && cd $_ && git clone -b heroku
https://github.com/GossJS/reactDemo2018.git . && yarn
2. Установили зависимость yarn add react-router-dom
3. Вынесли звёзды и счётчик в отдельный файл Counter.jsx
4. По аналогии создали файлы Map.jsx, Gallery.jsx, datapickerz.jsx
5. Включили опцию Чтобы в режиме WDS можно было вводить маршруты прямо в адресной строке типа
http://localhost:1234/gallery :

devServer: {
port: WDS_PORT,
host: '0.0.0.0',
historyApiFallback: true,
}

6.Прописываем импорты в index.jsx:
import React from 'react';
import { render as r } from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'reactrouter-dom';
import Counter from './Counter';
import Map from './Map';
import Gallery from './Gallery';

7. В командной строке ввели: npm run build, ввели в браузере 127.0.0.1:1234 и получили:
![alt text](https://github.com/stuklovao/router/blob/master/галерея.JPG)
![alt text](https://github.com/stuklovao/router/blob/master/датапик.JPG)
![alt text](https://github.com/stuklovao/router/blob/master/карта.JPG)
![alt text](https://github.com/stuklovao/router/blob/master/отзывы.JPG)
