const express = require('express');
const app = express();

app.use(express.static('./dist/admin-portal'));
app.get('/*',function(req, res){
    res.sendFile('index.html', {root: 'dist/admin-portal/'});
});
app.listen(process.env.PORT || 8080);
