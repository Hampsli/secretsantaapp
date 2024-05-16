## Getting Started

This Next.js project is bootstrapped with `create-next-app` and integrates an API built with Java SpringBoot.

## Running the Java SpringBoot API

**Prerequisites:**

* Java Development Kit (JDK) version 17 or higher
* Node version 20 or higher
* apache-maven version 3.9 or higher



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

For run test on Front-end App you need to run:
  ```bash
   npm run test
   ```
For run test on Java-Api App you need to open project in Intellij and go to resources folder, rigth click and select 'More/Debug' > 'Run Test in resources with Coverage'

### Testing coverage for Front-end App

Edge cases: I didn't have time to finish, I'll continue working on it.

unit Test with Jest:

- Test final screen with showlist.test.jsx 
- Test principal form with principalForm.test.jsx

### Testing coverage for Api App

unit Test with Mockito - JUnit Integration for microservice secretsanta:

- Secret Santa with members and relationships.
- Secret santa without relationships.


