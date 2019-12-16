FROM node:carbon

WORKDIR '/app'

COPY ./entrypoint /usr/local/bin/

RUN chmod +x /usr/local/bin/entrypoint

ENTRYPOINT ["entrypoint"]
