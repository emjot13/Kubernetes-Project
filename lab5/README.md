docker create network - tworzy nową sieć
docker network ls - wyświetla wszystkie sieci dostępne dla Engine daemon
docker network rm - usuwa podaną sieć
docker network inspect - zwraca informację na temat podanych sieci, domyślnie zwraca informacje w postaci JSON-a



Zadanie 1. network ID: 1a877221ed7eee28eedad2eae172df761f215b6b8c9cdff10b7f3a801af0e377

Zadanie 2. sudo docker run --network firstNetwork --name newNginx -p 80:80 -d nginx

Zadanie 3. sudo docker network connect firstNetwork first

Zadanie 4. sudo docker container stop $(sudo docker container ls -aq) && sudo docker system prune -af --volumes

Zadanie 5.  - docker run 
            - psql -h localhost -p 49153 -d docker -U docker --password
            - docker=# CREATE TABLE cities (
              docker(#     name            varchar(80),
              docker(#     location        point
              docker(# );
              CREATE TABLE
              - docker=# INSERT INTO cities VALUES ('San Francisco', '(-194.0, 53.0)');
                INSERT 0 1
              - docker=# select * from cities;