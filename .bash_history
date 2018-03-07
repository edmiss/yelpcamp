cd Databases/
node cats.js
cd ..
cd YelpCamp/
node app.js
npm install mongoose --save
c9 package.json
node app.js
app.js
node app.js
mongo
node app.js
mongo
touch views/show.ejs
c9 views/show.ejs
node app.js
mkdir models
touch models/campground.js
c9 models/campground.js
node app.js
touch seeds.js
c9 seeds.js
node app.js
touch models/comment.js
c9 models/comment.js
node app.js
mongo
node app.js
npm uninstall mongoose
npm i -S mongoose@5.0.6
killall mongod
cd
killall mongod
sudo apt-get purge -y mongodb-org*
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
sudo apt-get update
sudo apt-get install -y mongodb-org
mongo --version
cd
rm -rf mongod
echo "mongod --dbpath=data --nojournal" > mongod
chmod a+x mongod
./mongod
rm -rf mongod ; echo "mongod --dbpath=data --nojournal" > mongod ; chmod a+x mongod
./mongod
rm -rf mongod
echo "mongod --dbpath=data --nojournal" > mongod
chmod a+x mongod
./mongod
rm -rf mongod ; echo "mongod --dbpath=data --nojournal" > mongod ; chmod a+x mongod
./mongod
rm -rf data/
mkdir data
./mongod
