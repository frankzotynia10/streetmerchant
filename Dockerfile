FROM node:16.18.0-alpine3.16 AS builder

LABEL org.opencontainers.image.source="https://github.com/frankzotynia10/streetmerchant"
LABEL org.opencontainers.image.description="The world's easiest, most powerful stock checker"
LABEL org.opencontainers.image.licenses="MIT"

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
RUN npm ci

COPY src/ src/
COPY test/ test/
RUN npm run compile
RUN npm prune --production

FROM node:16.18.0-alpine3.16

RUN apk add --no-cache chromium

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser \
  DOCKER=true

RUN addgroup -S appuser && adduser -S -g appuser appuser \
  && mkdir -p /home/appuser/Downloads /app \
  && chown -R appuser:appuser /home/appuser \
  && chown -R appuser:appuser /app

USER appuser

WORKDIR /app

COPY --from=builder /build/node_modules/ node_modules/
COPY --from=builder /build/build/ build/
COPY web/ web/
COPY package.json package.json
COPY server.js server.js

ENTRYPOINT ["node"]
CMD ["server.js"]

