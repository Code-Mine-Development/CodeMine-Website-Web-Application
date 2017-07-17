#!/bin/bash

# Should be provided by build server
#S3_KEY=...
#S3_SECRET=...
#BUCKET=code-mine-seo-test

SERVICE="http://localhost:3000/"
DIR="/tmp/s3build"

ng build --prod

php -S localhost:9000 -t dist/ &

mkdir $DIR
cd $DIR

git clone https://github.com/prerender/prerender.git .
npm install
PORT=3000 node server.js &
echo "Waiting 5s for prerender.io to start"
sleep 5

function build_render {
    curl $SERVICE$1 > $DIR$2
    AWS_ACCESS_KEY_ID=$S3_KEY AWS_SECRET_ACCESS_KEY=$S3_SECRET aws s3 cp $DIR$2 s3://$BUCKET$3
}

# URLs:start
# format: [url] [path without /] [s3 path]

build_render "http://localhost:9000/home" "/home" "/index.html"
build_render "http://localhost:9000/home" "/home" "/home"
build_render "http://localhost:9000/offer" "/offer" "/offer"

# URLs:end

killall node
killall php
rm -rf $DIR
