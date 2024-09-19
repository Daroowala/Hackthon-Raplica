import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc, } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBQ_GoxBrikNk3UrwxITmEHFKpYRzYhp4E",
    authDomain: "hackathon-replica.firebaseapp.com",
    projectId: "hackathon-replica",
    storageBucket: "hackathon-replica.appspot.com",
    messagingSenderId: "1023361205440",
    appId: "1:1023361205440:web:279c2dc71db1f6472d5925",
    measurementId: "G-ZNBK5MKS25"
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