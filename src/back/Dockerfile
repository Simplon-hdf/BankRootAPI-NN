FROM node:latest
COPY . .
RUN npm install
RUN npx prisma genderate
EXPOSE 3000
CMD ["/bin/bash", "-c","npx prisma db push && npm run start"]