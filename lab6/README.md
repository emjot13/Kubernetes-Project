docker compose up -> buduje odtwarza albo tworzy, uruchamia i przyłącza kontenery do serwisu
docker compose up -d -> jak wyżej, ale w trybie detached
docker compose stop -> zatrzymuje kontenery bez usuwania ich
docker compose down --volumes -> zatrzymuje i usuwa kontenery, sieci, zawartości i obrazy stworzone za pomocą komendy docker compose up (falaga --volumes pozwala 
na usunięcie anonimowych i zadeklarowanych w pliku compose zawartości przyłączonych do kontenerów)