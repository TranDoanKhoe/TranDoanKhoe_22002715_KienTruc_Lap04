# Stage 1: Build Stage
FROM golang:1.21-alpine AS builder

WORKDIR /app

# Copy go mod files
COPY go.mod go.sum* ./

# Copy source code
COPY app.go .

# Build the application
RUN go build -o app app.go

# Stage 2: Runtime Stage
FROM alpine:latest

WORKDIR /app

# Copy the binary from builder stage
COPY --from=builder /app/app .

# Expose port 8080
EXPOSE 8080

# Run the application
CMD ["./app"]
