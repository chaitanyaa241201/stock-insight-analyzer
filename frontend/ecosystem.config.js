module.exports = {
  apps: [
    {
      name: "next-frontend",
      script: "./start.sh",
      interpreter: "/bin/bash",
      watch: false,
      env: {
        NODE_ENV: "development",
        HOST: "0.0.0.0",
        PORT: "3000"
      }
    }
  ]
}

