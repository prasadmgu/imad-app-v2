            var express = require('express');
            var morgan = require('morgan');
            var path = require('path');
            
            var app = express();
            app.use(morgan('combined'));
            
            app.get('/', function (req, res) {
            res.sendFile(path.join(__dirname, 'ui', 'index.html'));
            });
            var articles ={
             'article-one' : {
            title:'Article one | Prasad K G',
            heading:'Article One',
            date: 'Feb 21, 2017',
            content:`
                  <p>
                     This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article.This is first article. This is first article.
                  </p>
                   <p>
                     This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article.This is first article. This is first article.
                  </p>
                   <p>
                     This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article.This is first article. This is first article.
                  </p>
            `
            },
             'article-two' : {
                  title:'Article two | Prasad K G',
            heading:'Article Two',
            date: 'Feb 22, 2017',
            content:`
                  <p>
                     This is Second article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article.This is first article. This is first article.
                  </p>
                   <p>
                     This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article.This is first article. This is first article.
                  </p>
                   <p>
                     This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article.This is first article. This is first article.
                  </p>
            `
            },
             'article-three' :{
                  title:'Article Three | Prasad K G',
            heading:'Article Three',
            date: 'Feb 23, 2017',
            content:`
                  <p>
                     This is third article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article.This is first article. This is first article.
                  </p>
                   <p>
                     This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article.This is first article. This is first article.
                  </p>
                   <p>
                     This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article. This is first article.This is first article. This is first article.
                  </p>
            `
            },
            'profile':{
                  title:'Profile | Prasad K G',
            heading:'Profile',
            date: 'Feb 23, 2017',
            content:`
                 <Image src="..\..\kgpnps.jpg" width=100px,height=150px />

 <hr>
 <body>
 <dev>
 <ol>
 <li><b> Name : Prasad K G</b></li>
 <li> Address</li>
 <ul><li> Gayathri</li>
 <li>Kumaranaloor P O</li>
 <li> Kottayam</li></ul>
 <li> e-mail: prasad_kg1@yahoo.co.in</li/>

</ol>
</dev>
            },
            };

function createTemplate(data){
    var title=data.title;
    var heading = data.heading;
    var date = data.date;
    var content=data.content;
    

 var htmlTemplate= `
            <html>
            <head>
            <title>
              ${title}
            </title>
            
            <link href="/ui/style.css" rel="stylesheet" />
            </head>
            
            
            <body>
            <div class="container"> 
              <div>
                  <a href="/">Home</a>
              </div>
              <hr/>
              <h3>
                ${heading}
              </h3>
              <div>
                  ${date}
              </div>
                
                  <div>
                 ${content}
                  </div>
             </div>
            </body>
            </html>
            
`
;   
return htmlTemplate;
}
app.get('/:articleName', function (req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
 
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
