# Установка зависимостей
FROM node:16-alpine AS dependencies
# Смотрите https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine чтобы понять, почему libc6-compat может понадобиться
RUN apk add --no-cache libc6-compat
WORKDIR /appartis

# Установите зависимости на основе предпочтительного диспетчера пакетов
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Сборка исходного кода
FROM node:16-alpine AS builder
WORKDIR /appartis
COPY . .
COPY --from=dependencies /appartis/node_modules ./node_modules
RUN yarn build

# Образ для прода, копирует все файлы и запускает фронт
FROM node:16-alpine AS runner
WORKDIR /appartis
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /appartis/next.config.js ./
COPY --from=builder /appartis/public ./public
COPY --from=builder /appartis/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /appartis/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /appartis/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]

