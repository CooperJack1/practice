const express = require('express');
const axios = require('axios');
// 创建服务器
const app = express();
app.get('/hero', async (req, res) => {
    res.header('access-control-allow-origin', '*');
    const result = await axios.get('https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js');
    // res.send('你好 我是你忠实的代理')
    // res.json(result.data);
    res.json(JSON.parse(JSON.stringify({name:'cooper'})) );
});
app.listen(9527, () => {
    console.log('服务器已启动');
});
