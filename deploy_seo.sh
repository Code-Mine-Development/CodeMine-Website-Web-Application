#!/bin/bash

# GO TO PROJECT DIRECTORY
cd $(dirname "$0")

# INCLUDE ROUTES
source "deploy_seo_routes.sh"

# Should be provided by build server
#AWS_KEY=...
#AWS_SECRET=...
#AWS_BUCKET=...

SERVICE="http://localhost:3000/"
DIST="http://localhost:9000"
DIR="/tmp/s3build"
DATADIR="$DIR/data"

php -S localhost:9000 -t dist/ &

git clone https://github.com/prerender/prerender.git $DIR
cd $DIR && npm install
PORT=3000 node server.js &
echo "Waiting 5s for prerender.io to start" && sleep 5
mkdir $DATADIR

function build_render {
    if [ ! -d "$DATADIR$2" ]; then
        mkdir -p $DATADIR$2
    fi

    curl $SERVICE$1 > $DATADIR$2$3
}

# RENDER ROUTES: start
for i in ${ROUTES[@]}; do
    build_render $DIST$i `dirname $i` "/`basename $i`.html"
done
# RENDER ROUTES: end

# MAKE HOME PAGES AS INDEX
mv "$DATADIR/pl/home.html" "$DATADIR/pl/index.html"
mv "$DATADIR/en/home.html" "$DATADIR/en/index.html"

# RECURSIVE UPLOAD FILES TO S3 BUCKET
AWS_ACCESS_KEY_ID=$AWS_KEY AWS_SECRET_ACCESS_KEY=$AWS_SECRET aws s3 cp $DATADIR s3://$AWS_BUCKET --recursive

killall php
rm -rf $DIR