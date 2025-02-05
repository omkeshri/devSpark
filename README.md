# DevSpark - Find, Connect and Code Together

DevSpark is a platform that helps developers find and connect with other developers. Whether you're looking for collaborators, mentors, or networking opportunities, DevSpark makes it easy to build meaningful connections.

## Features/Backend API's

1. **Authentication**:
  - Provides a secure login page with user authentication managed by **MongoDB** and **JWT-based authentication**, ensuring that users can access their personalized health data safely.

2. **Profile Management**:
  - Users can create and update their developer profiles, showcasing their skills, experience, and interests.

3. **Connections**:
  - Developers can browse and connect with like-minded professionals. Users can send and accept connection requests to expand their network.

4. **Modern UI**:
  - Built with Tailwind CSS and DaisyUI for a sleek and responsive design.
  

## Technology Stack

### Frontend:
- **React**: A JavaScript library for building a dynamic and interactive UI.
- **Tailwind CSS**: Provides responsive design and enhances visual aesthetics.
- **Daisy UI**: Provides pre-styled UI components.

### Backend:
- **Node.js**: Handles server-side logic and request/response operations.
- **Express.js**: Framework for building the server-side API and managing routes.

### Database:
- **MongoDB**: Used to store user data, health information, and device transactions.


## Installation and Setup

1. Clone the repository:
    ```bash
    https://github.com/omkeshri/devSpark.git
    ```

2. Navigate to the project directory:
    ```bash
    cd devSpark
    ```

3. Install the dependencies:
    ```bash
    # Backend:
      cd server
      npm install
      npm run dev
    
    # Frontend
      cd client
      npm install
      npm run dev
    ```

## Environment Variables:

Create a `.env` file in the server directory (or respective directories) to store JWT password and MongoDB connection strings. Add the following keys:
`MONGODB_URL` `PORT` `JWT_PASSWORD`


## Contributing

Feel free to fork this repository and contribute by submitting a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
