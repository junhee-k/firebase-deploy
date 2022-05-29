import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp, query, orderBy, where } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2D8pmuo_y8DVuh9hqNFmA8kZGsfuQiE4",
  authDomain: "outta-sexy-web.firebaseapp.com",
  projectId: "outta-sexy-web",
  storageBucket: "outta-sexy-web.appspot.com",
  messagingSenderId: "442716455224",
  appId: "1:442716455224:web:42483957a4f0d1f2e601cd",
  measurementId: "G-7NV2JY54JT"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

$(document).on('mouseenter', '.onetex' ,function(e) {
    $('.one, .oneone, .oneonetwo, .onetwo').css('display', 'block');
    $('.two, .twoone, .twotwo, .twothree').css('display', 'none');
    $('.thi, .thione').css('display', 'none');
})

$(document).on('mouseenter', '.twotex' ,function(e) {
    $('.one, .oneone, .oneonetwo, .onetwo').css('display', 'none');
    $('.two, .twoone, .twotwo, .twothree').css('display', 'block');
    $('.thi, .thione').css('display', 'none');
})

$(document).on('mouseenter', '.thitex' ,function(e) {
    $('.one, .oneone, .oneonetwo, .onetwo').css('display', 'none');
    $('.two, .twoone, .twotwo, .twothree').css('display', 'none');
    $('.thi, .thione').css('display', 'block');
})

function WeightChange(a){
    $(document).ready(function(){ 
        $(a).hover(function(){  
            $(a).css('font-weight', '700');
        }, function(){  
            $(a).css('font-weight', '500');
        })}) 
    }
  
  WeightChange('.oneone');
  WeightChange('.oneonetwo');
  WeightChange('.onetwo');
  WeightChange('.twoone');
  WeightChange('.twotwo');
  WeightChange('.twothree');
  WeightChange('.thione');

  const db = getFirestore();
  const colRef = collection(db, 'datasets');

  const q = query(colRef, orderBy("작성일", "desc"));

   var postid = localStorage.getItem("postid1");

   onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      var id = doc.id;
      var title = doc.data().제목;
      var body = doc.data().내용;
      var date = new Date(doc.data().작성일.seconds*1000).toISOString().split('T')[0];
      var filename = doc.data().파일명;
      var download = doc.data().파일;
      if(postid == id){ 
        LoadPage(title,date,body,filename,download);
     }
    });
  });
  function LoadPage(title,date,body,filename,download){
      var titlediv = document.getElementById('title');
      var datediv = document.getElementById('date');
      var bodydiv = document.getElementById('body');
      var filediv = document.getElementById('file');

      titlediv.innerHTML = title;
      datediv.innerHTML = "작성일: "+date;
      bodydiv.innerHTML = body;
      filediv.innerHTML = `<div>첨부파일:</div><a id="filelink" href="${download}">${filename}</a>`;
  }

  $(document).on("click","#doclist",async function(){
    location.href="document.html";
  });