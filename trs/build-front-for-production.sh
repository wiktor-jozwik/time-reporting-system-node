#!/bin/bash

cd ../trs-react
npm i
npm run build

cp -r build/* ../trs/app/views
