version: '3'
services:
  db:
    image: postgres:14.3
    restart: always
    expose:
    - "5433"
    ports:
      - "5433:5433"
    environment:
      POSTGRES_PASSWORD: lukhack1234
      POSTGRES_DB: postgres
    container_name: italliance
    volumes:
      - ./postgres:/var/lib/postgressql/data
    command: -p 5433
