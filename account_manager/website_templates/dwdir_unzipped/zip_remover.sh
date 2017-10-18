#!/bin/bash


for f in *
do
   cd $f && rm -f $f.zip && cd ..
done
