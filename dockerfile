# Step 1: Build stage
FROM node:18 AS builder

WORKDIR /app
COPY . .

# 安裝依賴並打包
RUN npm ci && npm run build

# Step 2: Production image
FROM node:18-alpine AS production

WORKDIR /app

# 安裝 http-server 做靜態服務器（你也可以改成 nginx）
RUN npm install -g http-server

# 從 build 階段複製打包好的靜態檔案
COPY --from=builder /app/dist .

# 預設開啟 8080 port
EXPOSE 8080

CMD ["http-server", "-p", "8080"]
