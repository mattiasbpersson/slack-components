import Firebase from 'firebase'

export const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyBcXFGSRZBqEs9Q4V4CTDCcAdPSzdBuWO0',
  authDomain: 'slack-components.firebaseapp.com',
  databaseURL: 'https://slack-components.firebaseio.com',
  projectId: 'slack-components',
  storageBucket: '',
  messagingSenderId: '211824705413'
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()
