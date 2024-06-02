# Waitlist Application

This application is a waitlist application that allows individuals interested in learning a particular tech skill to register their intent by submitting their name, email, phone number, and the tech skills they intend to learn.

## Getting Started

To start the project, follow these steps:

1. **Ensure Docker is Running:**
   Make sure you have Docker installed and running on your computer.

2. **Start the MongoDB Database:**
   By default, the MongoDB database will run locally. Start the database and the nestjs application using Docker by running:
   ```bash
   docker-compose up -d
   ```
   This will start both the application and the database.

3. **Open the application in the web browser**
  ```bash
  http://localhost:4000/
  ```

## Accessing the Application

- **Swagger Documentation:**
  The default URL for accessing Swagger is:
  ```bash
  http://localhost:4000/api
  ```

- **Application Port:**
  Note that the application port has been changed from the default 3000 to 4000.
  Navigate to this url to test the endpoint that will soon change

  ```bash
  http://localhost:4000/waitlist
  ```

## When you install a new package while the application is already running in Docker, you often need to restart the container to make sure the new dependencies are properly loaded. This is because the container's environment does not automatically reflect changes made to the dependencies.

Here's what you need to do:

1. **Rebuild the Docker Image:**
   Rebuilding ensures that any changes in your dependencies are included in the Docker image.
   ```bash
   docker-compose build
   ```

2. **Restart the Docker Containers:**
   This step will stop and then start the containers again, applying the latest changes.
   ```bash
   docker-compose up -d
   ```

### Steps to Install a New Package and Restart the Container

1. **Install the new package:**
   ```bash
   npm install <package-name>
   ```

2. **Rebuild and restart the Docker containers:**
   ```bash
   docker-compose build
   docker-compose up -d
   ```




