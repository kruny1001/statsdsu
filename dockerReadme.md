array-search
================

Building the base image
-----------------------    
docker build -t array-search .


Running your Apache+PHP docker image
------------------------------------
Start your image binding the external ports 80 in all interfaces to your container:

    docker run -d -p 80:80 array-search

    #docker run -d -p 80:80 -v Users/kruny1001/Desktop/array-search:app array-search

CREATE USER 'eulers_ghost'@'localhost' IDENTIFIED BY 'W2bAsAYzyYyy2bZJ' PASSWORD EXPIRE;


- Replacing `git` with any dependencies that your composer packages might need.
- Add your php application to `/app`
