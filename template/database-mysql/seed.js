const mysql = require('mysql2')
const mysqlConfig=require('./config.js')
const connection = mysql.createConnection(mysqlConfig)
 const mydata =[
     {
        title: 'Chatty Cat Tells Long Yarn',
        namee: 'Tae Sung Kim',
        imageUrl: 'https://source.unsplash.com/1600x900/?cat',
        createdAt: '2017-11-14T05:57:26.037Z',
        body: `It was discovered yesterday that a stray cat found on the streets of Oakland, California by local animal shelter officials possesses the ability to talk. According to a volunteer at the animal shelter who asked to remain anonymous the cat, lovingly dubbed Chatty Catherine or Chatty Cat for short by shelter staff, remained silent at first when it was brought to the shelter. It was during a routine feeding when an overzealous volunteer engaged in baby talk prompting Chatty Cat to look up from it’s bowl of kibble and respond, “Don’t be patronizing.”
  
  The volunteer, believing she was hallucinating from overwork, promptly took the day off and returned home. It wasn’t until multiple other volunteers experienced the same phenomenon that the shelter realized the miraculous display and became uproarious. Local scientists and veterinarians were promptly called to the scene to examine Chatty Cat to try and discern the exact cause of its ability to speak. 
  
  After thorough examinations and tests, which came up inconclusive, local news reporters were allowed to interview Chatty Cat to discern its origins and its unusual ability to talk which prompted the cat to issue the following statement:
  
  “Okay first of all my name is not Catherine, I don’t know where they got that from because my name is Margaret. They just decided that on their own. Second I am not originally from earth. I am from a planet inhabited by cats who possess the ability of speech. I landed on your planet days ago on a goodwill mission only to be captured and renamed. My story begins 9 years ago when I was born, a young simple minded little lass. I grew up poor and with a limited future. It wasn’t until I entered grade school where I met my best friend Elizabeth that I decided to dream bigger, reach for the stars. Who knew I’d end up actually reaching it? Heh...what? Nobody. Come on, that was funny.”
  
  After hours of mundane back story it became apparent that Chatty’s Cat’s story is far from over and unlikely to stop anytime soon. 
  `  
     },
     {
        title: 'Chatty Cat Tells Long Yarn',
        namee: 'Tae Sung Kim',
        imageUrl: 'https://source.unsplash.com/1600x900/?cat',
        createdAt: '2017-11-14T05:57:26.037Z',
        body: `It was discovered yesterday that a stray cat found on the streets of Oakland, California by local animal shelter officials possesses the ability to talk. According to a volunteer at the animal shelter who asked to remain anonymous the cat, lovingly dubbed Chatty Catherine or Chatty Cat for short by shelter staff, remained silent at first when it was brought to the shelter. It was during a routine feeding when an overzealous volunteer engaged in baby talk prompting Chatty Cat to look up from it’s bowl of kibble and respond, “Don’t be patronizing.”
  
  The volunteer, believing she was hallucinating from overwork, promptly took the day off and returned home. It wasn’t until multiple other volunteers experienced the same phenomenon that the shelter realized the miraculous display and became uproarious. Local scientists and veterinarians were promptly called to the scene to examine Chatty Cat to try and discern the exact cause of its ability to speak. 
  
  After thorough examinations and tests, which came up inconclusive, local news reporters were allowed to interview Chatty Cat to discern its origins and its unusual ability to talk which prompted the cat to issue the following statement:
  
  “Okay first of all my name is not Catherine, I don’t know where they got that from because my name is Margaret. They just decided that on their own. Second I am not originally from earth. I am from a planet inhabited by cats who possess the ability of speech. I landed on your planet days ago on a goodwill mission only to be captured and renamed. My story begins 9 years ago when I was born, a young simple minded little lass. I grew up poor and with a limited future. It wasn’t until I entered grade school where I met my best friend Elizabeth that I decided to dream bigger, reach for the stars. Who knew I’d end up actually reaching it? Heh...what? Nobody. Come on, that was funny.”
  
  After hours of mundane back story it became apparent that Chatty’s Cat’s story is far from over and unlikely to stop anytime soon. 
  ` 
     },
     {
        title: 'Chatty Cat Tells Long Yarn',
        namee: 'Tae Sung Kim',
        imageUrl: 'https://source.unsplash.com/1600x900/?cat',
        createdAt: '2017-11-14T05:57:26.037Z',
        body: `It was discovered yesterday that a stray cat found on the streets of Oakland, California by local animal shelter officials possesses the ability to talk. According to a volunteer at the animal shelter who asked to remain anonymous the cat, lovingly dubbed Chatty Catherine or Chatty Cat for short by shelter staff, remained silent at first when it was brought to the shelter. It was during a routine feeding when an overzealous volunteer engaged in baby talk prompting Chatty Cat to look up from it’s bowl of kibble and respond, “Don’t be patronizing.”
  
  The volunteer, believing she was hallucinating from overwork, promptly took the day off and returned home. It wasn’t until multiple other volunteers experienced the same phenomenon that the shelter realized the miraculous display and became uproarious. Local scientists and veterinarians were promptly called to the scene to examine Chatty Cat to try and discern the exact cause of its ability to speak. 
  
  After thorough examinations and tests, which came up inconclusive, local news reporters were allowed to interview Chatty Cat to discern its origins and its unusual ability to talk which prompted the cat to issue the following statement:
  
  “Okay first of all my name is not Catherine, I don’t know where they got that from because my name is Margaret. They just decided that on their own. Second I am not originally from earth. I am from a planet inhabited by cats who possess the ability of speech. I landed on your planet days ago on a goodwill mission only to be captured and renamed. My story begins 9 years ago when I was born, a young simple minded little lass. I grew up poor and with a limited future. It wasn’t until I entered grade school where I met my best friend Elizabeth that I decided to dream bigger, reach for the stars. Who knew I’d end up actually reaching it? Heh...what? Nobody. Come on, that was funny.”
  
  After hours of mundane back story it became apparent that Chatty’s Cat’s story is far from over and unlikely to stop anytime soon. 
  ` 
     },
     {
        title: 'Chatty Cat Tells Long Yarn',
        namee: 'Tae Sung Kim',
        imageUrl: 'https://source.unsplash.com/1600x900/?cat',
        createdAt: '2017-11-14T05:57:26.037Z',
        body: `It was discovered yesterday that a stray cat found on the streets of Oakland, California by local animal shelter officials possesses the ability to talk. According to a volunteer at the animal shelter who asked to remain anonymous the cat, lovingly dubbed Chatty Catherine or Chatty Cat for short by shelter staff, remained silent at first when it was brought to the shelter. It was during a routine feeding when an overzealous volunteer engaged in baby talk prompting Chatty Cat to look up from it’s bowl of kibble and respond, “Don’t be patronizing.”
  
  The volunteer, believing she was hallucinating from overwork, promptly took the day off and returned home. It wasn’t until multiple other volunteers experienced the same phenomenon that the shelter realized the miraculous display and became uproarious. Local scientists and veterinarians were promptly called to the scene to examine Chatty Cat to try and discern the exact cause of its ability to speak. 
  
  After thorough examinations and tests, which came up inconclusive, local news reporters were allowed to interview Chatty Cat to discern its origins and its unusual ability to talk which prompted the cat to issue the following statement:
  
  “Okay first of all my name is not Catherine, I don’t know where they got that from because my name is Margaret. They just decided that on their own. Second I am not originally from earth. I am from a planet inhabited by cats who possess the ability of speech. I landed on your planet days ago on a goodwill mission only to be captured and renamed. My story begins 9 years ago when I was born, a young simple minded little lass. I grew up poor and with a limited future. It wasn’t until I entered grade school where I met my best friend Elizabeth that I decided to dream bigger, reach for the stars. Who knew I’d end up actually reaching it? Heh...what? Nobody. Come on, that was funny.”
  
  After hours of mundane back story it became apparent that Chatty’s Cat’s story is far from over and unlikely to stop anytime soon. 
  ` 
     },
     {
        title: 'Chatty Cat Tells Long Yarn',
        namee: 'Tae Sung Kim',
        imageUrl: 'https://source.unsplash.com/1600x900/?cat',
        createdAt: '2017-11-14T05:57:26.037Z',
        body: `It was discovered yesterday that a stray cat found on the streets of Oakland, California by local animal shelter officials possesses the ability to talk. According to a volunteer at the animal shelter who asked to remain anonymous the cat, lovingly dubbed Chatty Catherine or Chatty Cat for short by shelter staff, remained silent at first when it was brought to the shelter. It was during a routine feeding when an overzealous volunteer engaged in baby talk prompting Chatty Cat to look up from it’s bowl of kibble and respond, “Don’t be patronizing.”
  
  The volunteer, believing she was hallucinating from overwork, promptly took the day off and returned home. It wasn’t until multiple other volunteers experienced the same phenomenon that the shelter realized the miraculous display and became uproarious. Local scientists and veterinarians were promptly called to the scene to examine Chatty Cat to try and discern the exact cause of its ability to speak. 
  
  After thorough examinations and tests, which came up inconclusive, local news reporters were allowed to interview Chatty Cat to discern its origins and its unusual ability to talk which prompted the cat to issue the following statement:
  
  “Okay first of all my name is not Catherine, I don’t know where they got that from because my name is Margaret. They just decided that on their own. Second I am not originally from earth. I am from a planet inhabited by cats who possess the ability of speech. I landed on your planet days ago on a goodwill mission only to be captured and renamed. My story begins 9 years ago when I was born, a young simple minded little lass. I grew up poor and with a limited future. It wasn’t until I entered grade school where I met my best friend Elizabeth that I decided to dream bigger, reach for the stars. Who knew I’d end up actually reaching it? Heh...what? Nobody. Come on, that was funny.”
  
  After hours of mundane back story it became apparent that Chatty’s Cat’s story is far from over and unlikely to stop anytime soon. 
  ` 
     },
     {
        title: 'Chatty Cat Tells Long Yarn',
        namee: 'Tae Sung Kim',
        imageUrl: 'https://source.unsplash.com/1600x900/?cat',
        createdAt: '2017-11-14T05:57:26.037Z',
        body: `It was discovered yesterday that a stray cat found on the streets of Oakland, California by local animal shelter officials possesses the ability to talk. According to a volunteer at the animal shelter who asked to remain anonymous the cat, lovingly dubbed Chatty Catherine or Chatty Cat for short by shelter staff, remained silent at first when it was brought to the shelter. It was during a routine feeding when an overzealous volunteer engaged in baby talk prompting Chatty Cat to look up from it’s bowl of kibble and respond, “Don’t be patronizing.”
  
  The volunteer, believing she was hallucinating from overwork, promptly took the day off and returned home. It wasn’t until multiple other volunteers experienced the same phenomenon that the shelter realized the miraculous display and became uproarious. Local scientists and veterinarians were promptly called to the scene to examine Chatty Cat to try and discern the exact cause of its ability to speak. 
  
  After thorough examinations and tests, which came up inconclusive, local news reporters were allowed to interview Chatty Cat to discern its origins and its unusual ability to talk which prompted the cat to issue the following statement:
  
  “Okay first of all my name is not Catherine, I don’t know where they got that from because my name is Margaret. They just decided that on their own. Second I am not originally from earth. I am from a planet inhabited by cats who possess the ability of speech. I landed on your planet days ago on a goodwill mission only to be captured and renamed. My story begins 9 years ago when I was born, a young simple minded little lass. I grew up poor and with a limited future. It wasn’t until I entered grade school where I met my best friend Elizabeth that I decided to dream bigger, reach for the stars. Who knew I’d end up actually reaching it? Heh...what? Nobody. Come on, that was funny.”
  
  After hours of mundane back story it became apparent that Chatty’s Cat’s story is far from over and unlikely to stop anytime soon. 
  ` 
     }
 ];
 const insert = (data)=>{
     return new Promise((resolve,reject)=>{
         for(const postes of data){
         let syntax=`insert into postes( title, namee, imageUrl,createdAt, body) values (? ,? ,? ,? ,?)`
         connection.query(syntax,[postes.title, postes.namee, postes.imageUrl,postes.createdAt, postes.body],(req,res)=>{
           if(err)return reject(err)
           return resolve(res)
         })
        } 
     })
    
 }
 insert(mydata)
 .then(_=>{
     connection.end()
 })
 .catch(err=>{
     console.log(err)
 })