# Quantity Measurement App

A **React Native** app for converting temperature, weight, and length units. The app allows users to select between various measurement systems for each category. It calculates the converted values and displays the results. Additionally, it includes a **user authentication system** with email and password using Firebase and provides a smooth navigation experience with a clean user interface.

## Features

- **Authentication:** Users can **sign up, log in, and reset passwords** via Firebase authentication.
- **Unit Conversion:** Convert between different units for:
  - Temperature (Celsius, Fahrenheit, Kelvin)
  - Weight (Kilograms, Grams, Milligrams)
  - Length (Kilometers, Meters, Centimeters)
- **User Interface:** Intuitive and user-friendly UI for easy navigation and smooth experience.
- **Navigation:** Well-organized screens with clear transitions using **React Navigation**.

## Project Structure

```
Quantity-Measurement-App/
│
├── src/                      # Main source code
│   ├── assets/               # Static assets (images, fonts, etc.)
│   │   └── images/           # Folder containing app images (icons, UI assets)
│   ├── authentication/       # Email and password authentication logic
│   ├── components/           # Reusable components (Temperature, Weight, Length converters)
│   ├── screens/              # Screens representing different views
│   │   ├── login/            # Login screen
│   │   ├── signup/           # Signup screen
│   │   ├── forgotPassword/   # Forgot password screen
│   │   ├── home/             # Home screen (Main screen after login)
│   │   ├── start/            # Welcome screen (Landing page)
│   │   └── navigation/       # React Navigation setup
│   └── App.js                # Main entry point of the application
│
├── .gitignore                # Git ignore file for excluding unnecessary files
├── README.md                 # Project documentation
└── package.json              # Project dependencies and scripts
```

## Setup Instructions

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/quantity-measurement-app.git
   cd quantity-measurement-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Install the necessary React Native dependencies (if not installed):**
   ```sh
   npx react-native init YourProjectName
   cd YourProjectName
   ```

4. **Link required assets and dependencies (if necessary):**
   ```sh
   npx react-native link
   ```

5. **Run the app on your device/emulator:**
   - For **iOS**:
     ```sh
     npx react-native run-ios
     ```
   - For **Android**:
     ```sh
     npx react-native run-android
     ```

## Technologies Used

- **React Native** - Framework used to build the mobile app for both Android and iOS.
- **React Navigation** - For handling screen navigation.
- **Firebase** - Used for user authentication.

## Conversion Logic

- **Length Conversion:** Converts between **kilometers (km), meters (m), and centimeters (cm)**.
- **Weight Conversion:** Converts between **kilograms (kg), grams (g), and milligrams (mg)**.
- **Temperature Conversion:** Converts between **Celsius (°C), Fahrenheit (°F), and Kelvin (K)**.

## Contributions

Contributions are welcome! Feel free to **fork** the repository and submit a **pull request** with your improvements.

## License

This project is licensed under the **MIT License**.
