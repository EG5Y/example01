FROM alpine:3.23.3 AS base

RUN apk add nodejs pnpm
USER 1000:1000
# RUN adduser -S nixuser
# USER nixuser
# ENV USER=nixuser
# WORKDIR /home/nixuser
# RUN curl -L https://github.com/DavHau/nix-portable/releases/latest/download/nix-portable-$(uname -m) > ./nix-portable
# RUN chmod +x ./nix-portable
# USER root
# RUN apk add bash
# USER nixuser
# RUN echo "[safe]" > /home/nixuser/.gitconfig
# RUN echo "directory = /app" >> /home/nixuser/.gitconfig
# USER root
# RUN apk add nodejs pnpm
# USER nixuser

