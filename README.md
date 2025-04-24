# Automate with AIoT

Welcome to the **Automate with AIoT** project! This repository is a showcase of innovation, combining AI and IoT to deliver seamless automation and advanced tools for pet well-being and user engagement. Dive into the future of technology with this cutting-edge solution!

---

## 🚀 Features

### 🌐 Frontend
- **Dynamic Content**: A visually stunning and interactive component to highlight user feedback.
- **Backend Dashboard**: A Dedicated dashboard to manage your IoT products. Everyting in one place.
- **Pet Tracking Dashboard**: Monitor pet profiles, wellness scores, and behavior logs with ease.
- **Responsive Design**: Built with Qwik and TailwindCSS for lightning-fast performance and adaptability.

### 🐾 Pet Well-Being AI
- **AI-Powered Insights**: Analyze pet behavior and provide actionable insights for better care.
- **Wellness Scoring**: Real-time tracking of pet health metrics.
- **Behavior Analysis**: Advanced AI models trained with NVIDIA TAO Toolkit.

### 🔥 Backend
- **Firebase Integration**: Secure authentication, database, and hosting.
- **Dynamic Static Generation**: Efficiently pre-render pages for optimal performance.

---

## 📂 Project Structure

```plaintext
AutomateWithAIoT/
├── src/
│   ├── components/
│   │   ├── [TestimonialCard.tsx](http://_vscodecontentref_/0)  # Interactive testimonial component
│   │   └── Other reusable UI components
│   ├── routes/
│   │   ├── (public)/
│   │   │   ├── blogs/
│   │   │   │   └── [id]/index.tsx  # Dynamic blog pages
│   │   │   └── home/               # Public-facing homepage
│   │   └── app/
│   │       ├── dashboard/
│   │       │   └── pet-tracking/   # Pet tracking dashboard
│   │       └── settings/           # User settings page
│   ├── firebase-config.tsx         # Firebase configuration
│   └── styles/                     # Global styles and TailwindCSS setup
├── Backend/
│   ├── AI-Model/
│   │   ├── training.py             # AI model training script
│   │   └── export.py               # Model export script
│   └── API/
│       └── endpoints/              # API endpoints for data fetching
├── public/
│   ├── assets/                     # Static assets (images, icons, etc.)
│   └── favicon.ico                 # Favicon for the project
├── .env                            # Environment variables
├── [package.json](http://_vscodecontentref_/1)                    # Project dependencies and scripts
├── [README.md](http://_vscodecontentref_/2)                       # Project documentation
└── [tsconfig.json](http://_vscodecontentref_/3)                   # TypeScript configuration
```

---
## 🛠️ Technologies Used
- Frontend: Qwik, TailwindCSS
- Backend: Firebase
- AI Models: NVIDIA TAO Toolkit
- Hosting: Firebase Hosting
## 📦 Installation
1. Clone the repository:
```sh
git clone https://github.com/your-repo/automatewithaiot.git
cd automatewithaiot
```
2. Install dependencies:
```sh
npm install
```
3. Set up environment variables:
    - Create a .env file in the root directory.
    - Add your Firebase configuration keys:
```
PUBLIC_FIREBASE_API_KEY=your_api_key
PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
PUBLIC_FIREBASE_PROJECT_ID=your_project_id
PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
PUBLIC_FIREBASE_APP_ID=your_app_id
PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. Start the development server:
```sh
npm start
```

## 📖 Usage
- **Testimonial Carousel**: Add testimonials dynamically to showcase user feedback.
- **Pet Tracking Dashboard**: Monitor pet profiles, wellness scores, and behavior logs.
- **AI Model Integration**: Train and export AI models for advanced pet behavior analysis.
## 🤝 Contributing
We welcome contributions! Please fork the repository, create a feature branch, and submit a pull request.


## 🌐 Contact
For any inquiries or support, please reach out to us at support@automatewithaiot.com.