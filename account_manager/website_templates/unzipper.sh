#!/bin/bash


for f in *.zip
do
   dirname=$(echo $f | cut -d '.' -f 1)
   #echo $dirname
   mkdir $dirname
   cp $f $dirname; cd $dirname; unzip $f; cd ..
done
