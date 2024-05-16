## Getting Started

This Next.js project is bootstrapped with `create-next-app` and integrates an API built with Java SpringBoot.

## Running the Java SpringBoot API

**Prerequisites:**

* Java Development Kit (JDK) version 17 or higher

**Steps:**

1. **Install the API locally:**
   Navigate to the `secretsantaapp/api/` directory and run the following command:

   ```bash
   mvn clean install
   ```

2. **Run the API:**
   Move to the `target` folder and execute:

   ```bash
   mvn java -jar ./api.jar
   ```

This will start the API. You can now test your Next.js front-end application.

## Running Next.js

**Steps:**

1. **Install dependencies:**
   Navigate to the `secretsantaapp/front/` directory and run:

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **View the application:**
   Open http://localhost:3000 in your web browser to see the Next.js app.

## Testing Coverage

# Testing coverage for front end
Edge cases: I didn't have time to finish, I'll continue working on it.

unit Test with Jest:

-Test final screen with showlist.test.jsx 
-Test principal form with principalForm.test.jsx

# Testing coverage for api

