import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

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
const db = getFirestore(app);

async function displayStudentDetails() {
    const tableBody = document.getElementById('student-data');

    try {
        const querySnapshot = await getDocs(collection(db, 'students'));
        querySnapshot.forEach((doc) => {
            const student = doc.data();
            const result = student.result || {};
            const row = `
                <tr>
                    <td>${student.firstName}</td>
                    <td>${student.lastName}</td>
                    <td>${student.email}</td>
                    <td>${student.cnic}</td>
                    <td>${result.course || ''}</td>
                    <td>${result.studentId || ''}</td>
                    <td>${result.marks || ''}</td>
                    <td>${result.totalMarks || ''}</td>
                    <td>${result.grade || ''}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error('Error fetching student details:', error.message);
    }
}

// Call function to display student details
displayStudentDetails();
console.log('Student Data:', student);