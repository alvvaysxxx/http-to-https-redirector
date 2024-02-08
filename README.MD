# HTTPS-HTTP Redirector by urionzzz

This project aims to provide a solution for individuals encountering Google's mixed-content() restrictions. By utilizing this Express application, users can deploy an HTTPS server capable of redirecting HTTPS requests to an HTTP server and returning HTTPS responses.

## How to Run the Server

To successfully run the server, follow these steps:

1. **Install Node.js:** Ensure that you have Node.js installed on your system. You can download it from the official website: [Node.js](https://nodejs.org/).

2. **Install npm:** npm, which stands for Node Package Manager, is bundled with Node.js. Once you have Node.js installed, npm will also be available.

3. **Install git:** Git is required to clone the project repository onto your local machine. You can download Git from the official website: [Git](https://git-scm.com/).

4. **Clone the Project:** Use Git to clone this project repository to your local machine. You can do this by running the following command in your terminal or command prompt:

   ```
   git clone <repository_url>
   ```

   Replace `<repository_url>` with the URL of the project repository.

5. **Install Dependencies:** Navigate to the project directory in your terminal or command prompt and run the following command to install all necessary packages:

   ```
   npm install
   ```

   This will install dependencies such as Express, Axios, and Nodemon.

6. **Run the Server:**
   - **Development Mode:** To run the server in development mode, execute the following command:
     ```
     npm run dev
     ```
     This command utilizes Nodemon, which automatically restarts the server whenever changes are detected in the source code.
   - **Production Mode:** If you prefer to run the server in production mode, use the following command:
     ```
     node index
     ```
     This command starts the server without any automatic restart functionality.

## How to Redirect

The server currently supports two HTTP methods: GET and POST. To initiate a redirection, follow these instructions:

- **Make a Request:** Send a GET or POST request to the server endpoint in the following format: http://localhost:8080/<endpoint_domain.com>/<endpoint_route>

Replace `<endpoint_domain.com>` with the desired domain and `<endpoint_route>` with the specific route.

- **Include Headers or JSON Body Data:** You can specify headers or JSON body data in your request, and they will be included in the server's request for processing.

Feel free to explore and customize this project according to your requirements! If you have any questions or feedback, don't hesitate to reach out to the project maintainers.
