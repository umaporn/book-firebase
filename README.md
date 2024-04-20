# Book Firebase

This project contains Firebase Cloud Functions for handling creating book information.

## Prerequisites

Before you can run the functions locally, make sure you have the following installed:

- Node.js (v18 or later)
- Firebase Tools (Run `npm install -g firebase-tools` to install)

## Setup

1. Clone this repository to your local machine.

2. Navigate to the `functions` directory:

```bash
cd functions
```

3. Setup your database configuration in .env file

4. Install the project dependencies:

```bash
npm install
```

5. Log in to your Firebase account:

```bash
firebase login
```

5. Initialize the Firebase project:

```bash
firebase init
```

## Running Locally with firebase emulators

To run the functions locally, use the following command:

```bash
firebase emulators:start --only functions
```

This will start the local Firebase FuncSure, here's an example README file for setting up Firebase Functions locally:

## Deployment

Before deploying your functions, make sure you have set up the required environment variables and service accounts. Refer to the Firebase documentation for more information.

To deploy your functions to Firebase, run:

```bash
firebase deploy --only functions
```

This will upload your functions to the Firebase Cloud Functions service.
