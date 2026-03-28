# Stage 1: Build Stage
FROM node:18 AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy application code
COPY app.js .

# Stage 2: Runtime Stage
FROM node:18-alpine

WORKDIR /app

# Copy node_modules and app from builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/app.js .
COPY --from=builder /app/package.json .

# Expose port 8080
EXPOSE 8080

# Run the application
CMD ["npm", "start"]
