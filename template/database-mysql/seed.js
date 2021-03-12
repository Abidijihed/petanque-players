const mysql = require('mysql2')
const mysqlConfig=require('./config.js')
const connection = mysql.createConnection(mysqlConfig)
 const mydata =[
     {
        title: 'Carhartt boules',
        namee: 'Jihed',
        imageUrl: 'https://petanque.files.wordpress.com/2020/12/carhartt_boules.jpg',
        createdAt: '2017-11-14T05:57:26.037Z',
        body: `It turns out there isn’t a lot to say. The name “OBUT X CARHARTT WIP” means simply that Obut agreed to manufacture a line of boules for Carhartt WIP. Around March 2020, Obut agreed to take a batch of their regular stainless-steel leisure boules, stamp a Carhartt logo on them, and try to sell them for more than twice their normal price. They don’t seem to be available in the USA, but you can find them on various European shopping sites for €116-€139.
        Le jeu de 3 de boules de pétanque Carhartt WIP x OBUT est un set pour pétanquer tout au long de l'année avec style.

En effet, ces boules gravées du logo de la marque Carhartt et de son but siglé sauront vous suivre dans vos parties endiablées ! Avec leur diamètre de 73 mm et leur poids de 650g chacune, ces boules sauront vous offrir précision et justesse que ce soit pour tirer ou pointer. Le rebond est adapté à tous les styles de jeu et de terrain.

Ce set s'adresse à des joueurs et joueuses exigeants !

Pour rappel, la marque Française OBUT situé à Saint Bonnet-le-chateau (Loire) est une entreprise de fabrication d'articles de sport, spécialisée dans les boules de pétanque. Ces boules sont fabriquées dans une optique de développement durable, d'éco-conception et de protection l'environnement.

Caractéristiques:
- Série limitée Carhartt WIP x OBUT
- Jeu de 3 boules gravées du logo la marque Carhartt
- But siglé de la marque Carhartt
- Diamètre de la boule : 73mm
- Poids de la boule : 650g
- Sac de transport logoté de la marque Carhartt
- Chifonnette

        I don’t see a bright future for them. They definitely fall in the category of What were they thinking??!!
  `  
     },
     {
        title: 'Playing with a larger jack',
        namee: 'Ahmed',
        imageUrl: 'https://petanque.files.wordpress.com/2020/05/petanque_jack-normal_and_larger.jpg?w=584&h=423',
        createdAt: '2017-11-14T05:57:26.037Z',
        body: `Last week I tried to watch a petanque video on Youtube, but it was hopeless. You just couldn’t see the jack. It was a low-resolution video, the terrain was light-colored, and the black-colored jack was completely lost among shadows caused by irregularities in the terrain. Eventually I gave up.

        Later I wondered what could have been done to make the jack more visible. Perhaps a different color. Or… perhaps… a larger jack!
        
        There is no reason why the jack has to be the size that it is— 30mm ±1mm, as currently specified by the FIPJP rules. The size isn’t written in stone. Before 2008, the official size of the jack was 25mm to 35mm in diameter, which allowed for quite a lot of variability.
        
        What if we played with a larger jack? For one thing, it would make televised matches easier to follow. And there would be another benefit— it would make the game easier for vision-impaired players. Last year one of our senior players began to experience the effects of age-related macular degeneration. Fortunately she was able to continue to play if we used our brightest-colored jack. But it occurs to me that we could help her even more by playing with a larger jack. Why not?
        
        If you make your own jacks, it is easy to make a larger jack. Normally you would start with a wooden ball 1-1/4″ (30mm) in diameter. Instead, start with a wooden ball 1-3/4″ in diameter. The 1-3/4″ wooden balls that I ordered from amazon.com arrived in a package marked 1.7in | 44mm. The size seems good to me: bigger, but not too big. Here is a picture of the two sizes of wooden balls along with a 75mm boule 
  ` 
     },
     {
        title: 'Shoot the 30 –precision shooting competition',
        namee: 'Ayoub',
        imageUrl: 'https://petanque.files.wordpress.com/2020/04/shoot_the_30.jpg?w=500',
        createdAt: '2017-11-14T05:57:26.037Z',
        body: `1. Draw a target circle, 1 meter in diameter, on the ground.
        2. Place a target boule in the center of the target circle.
        3. There are three shooting distances: 7/8/9 meters.
        4. Throw 10 boules from each distance: 30 boules in all. Shoot the 30.
        5. Each throw scores from zero to five points.
        6. A perfect score is 150 points (30 boules x 5 points).
        
        A thrown boule is a hit if the first thing that it hits is the target boule, or if it hits the ground inside the target circle and then hits the target boule.
        A thrown boule is a miss if it doesn’t hit the target boule or the first thing that it hits is the ground outside the target circle or the edge of the target circle.
        
        Points are earned in the following ways.
        
        carreau – 5 points
        The target boule is knocked completely out of the circle and the thrown boule stays inside the circle.
        réussi (success) – 3 points
        The target boule is knocked out of the circle, but then the thrown boule also goes out of the circle.
        touché (touch) – 1 point
        The target boule is hit (touché) but is not knocked completely out of the circle.
        miss – 0 points
        The easiest way to do this is with two people. One person throws and the other stands near the target circle, keeps score, resets the target area between throws, and tosses the thrown boules back to the thrower.
  ` 
     },
     {
        title: 'Throw like a girl',
        namee: 'Sirin',
        imageUrl: 'https://petanque.files.wordpress.com/2019/04/celia_crittenden_petanque_player.jpg?w=584&h=883',
        createdAt: '2017-11-14T05:57:26.037Z',
        body: `Good form is the key to gettting distance on a thrown boule.
         And in this photo Celia, one of the top U.S. women players, shows how to do it.
          Aside from the fact that she is squat pointing, note the full backswing of the throwing arm, which supports a strong throw. Note also the full backswing of the non-throwing arm, which keeps her balanced as she throws
          If you are trying to improve your throwing, start from the basic premise that there are two fundamental and different aspects to throwing well— form and consistency. They are different, and you need to do different things to improve them.

Bad form is form that prevents you from throwing effectively. The crouch is bad form because a player who plays from a crouch will never be able to shoot or even lob effectively. Acquiring good form— le beau geste, form that allows you to throw effectively— is of course a matter of practice, but what’s important about good form is that it is something that you can consciously think about and work on.
 
Consistency means being able to do something in the same way, over and over again. Consistency in throwing a boule is primarily a matter of muscle memory. This is something that you can’t acquire by thinking about it. It is unconscious, and can be acquired only through repetition. That’s the way muscles learn.
We’ve already talked a little bit about effective ways to practice. Now we will look at how you can work on your form. Here are a few ideas that you can try.

The first step in improving your form is to become consciously aware that there is such a thing as form, and that great players are great (at least in part) because they have good form. Watch Youtube videos of great players in action. Study their form. Look for the way they move their bodies as they throw. Develop your own conscious theory about what good form looks like, and about how you want your body to move when you throw.
 
Human beings learn by imitation. If you watch someone do something, you will find yourself unconsciously imitating what he does. So a useful technique is simply to watch other players doing what you want to be able to do. For example, when I was trying to improve my high lob I found it helpful to watch Claudy Weibel during this marvellous singles competition
  ` 
     },
     {
        title: 'How to Play Petanque',
        namee: 'Omda',
        imageUrl: 'https://frenchyourway.com.au/wp_fyw/wp-content/uploads/2015/04/Play_petanque_with_Jessica_post.jpg',
        createdAt: '2017-11-14T05:57:26.037Z',
        body: `Pétanque (French boules) is the 10th most popular sport in France and is also played by millions of French people for pleasure, especially during summer holidays where tournaments organised in the camping / holiday resorts are very common (I remember enrolling in some “tournois de pétanque” myself as a teenager).

        Last July, my husband and I spent a few weeks in France and playing pétanque again revived fond childhood memories. I eventually had a set delivered to Australia – the “boules” are so heavy it would have been a shame to take them back in our luggage as we would have lost some precious weight allowance, much needed for my new French books and the many packets of all my favourite French biscuits!
        
        On our annual picnic in the park last February, I introduced the game of pétanque to my students. The rules of petanque are quick and easy to learn and it was great to see them get so into it, cheering, competing, debating over the score and having a good time!
  ` 
     },
 ];
 const insert = (data)=>{
     return new Promise((resolve,reject)=>{
         for(const postes of data){
         let syntax=`insert into postes( title, namee, imageUrl,createdAt, body) values (? ,? ,? ,? ,?)`
         connection.query(syntax,[postes.title, postes.namee, postes.imageUrl,postes.createdAt, postes.body],(err,res)=>{
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