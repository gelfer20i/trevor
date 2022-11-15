FROM public.ecr.aws/bitnami/node:16
COPY dist/apps/superadmin/ .
COPY dist/libs/ .
RUN npm install --omit=dev
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express

COPY prisma ./prisma
RUN npx prisma generate

RUN chmod +x ./prod-start.sh

ENTRYPOINT [ "./prod-start.sh" ]

