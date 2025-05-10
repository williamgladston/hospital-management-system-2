🏥 Hospital Management System

A full-stack Hospital Management System built using Node.js, Express.js, MySQL, and EJS. This system enables admin, doctors, and receptionists to manage patients, appointments, billing, rooms, lab reports, and more through dedicated dashboards and interfaces.

⸻

🚀 Features
	•	User authentication (admin, doctor, receptionist) — with hardcoded login credentials
	•	Patient registration and records
	•	Doctor assignment and details
	•	Room allotment system
	•	Appointment scheduling
	•	Billing generation
	•	Lab reports creation and deletion
	•	Feedback form and submission
	•	Role-based dashboards

⸻

👨‍⚕️ Roles & Login Credentials
	•	Admin
Username: admin
Password: admin123
	•	Receptionist
Username: reception2
Password: admin123
	•	Doctor
Username: doctor2
Password: admin123

⸻

🛠 Tech Stack
	•	Backend: Node.js, Express.js
	•	Frontend: EJS templating engine, HTML, CSS
	•	Database: MySQL
	•	Others: Express-session, Body-parser, dotenv

⸻

📂 Folder Structure Overview
	•	config/ → MySQL DB configuration
	•	controllers/ → Business logic for patients, doctors, billing, etc.
	•	routes/ → Routes for different modules like auth, lab, billing, etc.
	•	public/ → Static assets
	•	views/ → EJS view templates
	•	app.js → Entry point for the app
	•	.env → Environment variables
	•	README.md → Project info

⸻

⚙️ How to Run the Project Locally
	1.	Clone the repo
git clone https://github.com/yourusername/hospital-management-system.git
	2.	Navigate into the folder
cd hospital-management-system
	3.	Install dependencies
npm install
	4.	Create a MySQL database
Name: hospital_management_system
You can create required tables using your own schema or refer to the sample SQL below.
	5.	Sample SQL Tables
	•	lab_reports
id INT AUTO_INCREMENT PRIMARY KEY, patient_id INT, report_details TEXT
	•	feedback
id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), message TEXT
	•	You may add additional tables like patients, doctors, rooms, appointments, and billing.

	7.	Run the app
npm start
	8.	Access in browser
Visit: http://localhost:3000

⸻

🧪 Modules Covered
	•	/patients → Register and view patients
	•	/doctors → Doctor management
	•	/appointments → Schedule or cancel appointments
	•	/rooms → Room availability and allotment
	•	/billing → Calculate and generate bills
	•	/lab-reports → Manage test reports
	•	/feedback → View and manage feedback
