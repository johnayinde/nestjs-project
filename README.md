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

## Raising Issues

If you encounter any issues, feel free to raise them on [GitHub](https://github.com/your-repo/issues).

---

By following the steps above, you will be able to set up and run the waitlist application, allowing users to register their interest in learning various tech skills.
