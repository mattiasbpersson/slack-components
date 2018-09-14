import Firebase from 'firebase'

export const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyD-K6VSW3y4wy609zg-CvaSKl99dXyFgH4',
  authDomain: 'slack-components-410aa.firebaseapp.com',
  databaseURL: 'https://slack-components-410aa.firebaseio.com',
  projectId: 'slack-components-410aa',
  storageBucket: 'slack-components-410aa.appspot.com',
  messagingSenderId: '320092778472'
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()

export const textMessages = db.ref('textMessages')
export const polls = db.ref('polls')
