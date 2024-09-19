import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore, doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmuRDTyrifBzRDtnTu2xhL9GLUPUPLsAc",
    authDomain: "hackathon-d6b24.firebaseapp.com",
    projectId: "hackathon-d6b24",
    storageBucket: "hackathon-d6b24.appspot.com",
    messagingSenderId: "663598035693",
    appId: "1:663598035693:web:8b831361a64f79867612e4",
    measurementId: "G-3FYQHGED81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

async function handleSubmit() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cnic = document.getElementById('cnic').value;
    const course = document.getElementById('course').value;
    const studentId = document.getElementById('student-id').value;
    const marks = document.getElementById('marks').value;
    const totalMarks = document.getElementById('total-marks').value;
    const grade = document.getElementById('grade').value;

    try {
        // Create student in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save student details to Firestore
        await setDoc(doc(db, 'students', cnic), {
            firstName,
            lastName,
            email,
            cnic,
            userType: 'Student',
            result: {
                course,
                studentId,
                marks,
                totalMarks,
                grade
            }
        });

        // Redirect to student details page
        window.location.href = "student-details.html";
    } catch (error) {
        console.error('Error:', error.message);
        alert('Error: ' + error.message);
    }
}
