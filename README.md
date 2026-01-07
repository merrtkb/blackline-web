# Blackline – Vehicle Showcase & Request Platform

Blackline is a full-stack web application designed as a vehicle showcase and request platform.
The application follows an e-commerce–style structure, allowing users to explore vehicles in detail and submit requests efficiently.

Users can browse vehicle models, view detailed information about each vehicle, and submit a request for a selected vehicle.  
All vehicle data is fetched dynamically from a backend service, and user requests are stored persistently in a database.

---

## Technologies Used

### Frontend
- React
- Material UI

### Backend
- Java
- Spring Boot
- Maven

### Database
- PostgreSQL

---

## Project Features

- Dynamic vehicle listing retrieved from backend services
- Vehicle detail pages with real-time data
- Vehicle request submission system
- Persistent data storage using PostgreSQL
- REST API–based frontend-backend communication
- Clear separation of frontend, backend, and database layers

---

## Project Structure

SourceCode/
├── frontend
├── backend
└── database

---

## How to Run the Project

### Backend
1. Open the `backend` folder using IntelliJ IDEA
2. Configure PostgreSQL connection in `application.properties`
3. Run the Spring Boot application  
   Backend runs on: `http://localhost:8080`

### Frontend
1. Navigate to the `frontend` folder
2. Install dependencies:
   ```bash
   npm install
   npm run dev
