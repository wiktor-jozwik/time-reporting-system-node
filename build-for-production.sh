#!/bin/bash

cd trs-react-front
npm i
npm run build

cp -r build/* ../trs-react/app/views
