FROM node:18-slim as base
COPY . .
FROM base
RUN apt-get update -qq && apt-get install -y openssl
RUN npm install
RUN npx prisma generate
EXPOSE 3000
CMD ["/bin/bash", "-c","npx prisma db push --accept-data-loss && npm run start"]
