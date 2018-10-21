FROM nginx

COPY ./bin/start-server /usr/local/bin/

RUN chmod 777 /usr/local/bin/start-server

COPY ./dist/ /srv/www/bitforgers/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["start-server"]
