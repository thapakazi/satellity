FROM golang:1.13.1-stretch as builder

ENV GO111MODULE=on
ENV PROJECT_NAME=satellity
ENV APP_DIR=/api

ARG app_env
ENV GO_ENV $app_env


WORKDIR /api
COPY go.mod go.sum /api/
RUN go mod download

# COPY . /api/
# RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 \
#     go build -ldflags="-s -w" \
#     -o $PROJECT_NAME ./cmd/satellity/main.go

CMD ["go" ,"run", "cmd/satellity/main.go","-c","internal/configs/config.yaml"]
	

# FROM alpine
# COPY --from=builder /api/satellity .
# COPY internal/configs/config.yaml config.yaml
# ENTRYPOINT ["/satellity","-c", "config.yaml"]
