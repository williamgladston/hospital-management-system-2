🏥 Hospital Management System
Welcome to the Hospital Management System — a full-stack application designed to streamline hospital operations. This system allows admins, doctors, and receptionists to manage patients, appointments, billing, rooms, lab reports, and more through dedicated dashboards. 🚑

🌟 Features at a Glance
🔒 User Authentication: Role-based login for admin, doctors, and receptionists.
📝 Patient Management: Register and maintain patient records.
👨‍⚕️ Doctor Management: Assign doctors and view their details.
🏨 Room Allotment: Manage room availability and assignments.
📅 Appointment Scheduling: Book, view, and cancel appointments.
💳 Billing System: Generate and manage bills for patients.
🧪 Lab Reports: Create, view, and delete lab reports.
💬 Feedback System: Collect and manage feedback from users.
👥 Roles & Login Credentials
Role	Username	Password
Admin	admin	admin123
Receptionist	reception2	admin123
Doctor	doctor2	admin123
🛠 Tech Stack
Backend: Node.js, Express.js
Frontend: EJS templating engine, HTML, CSS
Database: MySQL
Others: Express-session, Body-parser, dotenv
📂 Folder Structure Overview
hospital-management-system/
├── config/         # MySQL DB configuration
├── controllers/    # Business logic for patients, doctors, billing, etc.
├── routes/         # Routes for different modules like auth, lab, billing, etc.
├── public/         # Static assets (CSS, JS, images)
├── views/          # EJS view templates
├── app.js          # Entry point for the app
├── .env            # Environment variables
└── README.md       # Project info
🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/yourusername/hospital-management-system.git
cd hospital-management-system
2️⃣ Install Dependencies
npm install
3️⃣ Set Up the Database
Create a MySQL database named hospital_management_system.
Use the following sample SQL to create tables:
CREATE TABLE lab_reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    report_details TEXT
);

CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    message TEXT
);
Add additional tables for patients, doctors, rooms, appointments, and billing as needed.
4️⃣ Run the Application
node app.js
5️⃣ Access the App
Open your browser and visit: http://localhost:3000

🧪 Modules Overview
Module	Description	Endpoint
Patients	Register and view patient records	/patients
Doctors	Manage doctor details	/doctors
Appointments	Schedule or cancel appointments	/appointments
Rooms	Manage room availability and allotment	/rooms
Billing	Generate and view bills	/billing
Lab Reports	Create, view, and delete lab reports	/lab-reports
Feedback	View and manage user feedback	/feedback
📸 Screenshots
Add screenshots of the application here to showcase the UI and features.

🤝 Contributing
Feel free to fork this repository and submit pull requests. Contributions are always welcome! 😊

📧 Contact
For any queries or support, reach out to: williamgladston4@gmail.com

Happy coding! 💻✨
