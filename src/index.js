import {initializeApp} from 'firebase/app';
import {
    getFirestore,
     collection ,
     getDocs, 
     addDoc,
     deleteDoc,
     doc,
     onSnapshot


} from 'firebase/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0TxcWlMVQE8qacXcpKjGMssTPff2Ia-M",
    authDomain: "learning-app-4c09d.firebaseapp.com",
    projectId: "learning-app-4c09d",
    storageBucket: "learning-app-4c09d.appspot.com",
    messagingSenderId: "859015428049",
    appId: "1:859015428049:web:6f7d533c23737c2e8392f0",
    measurementId: "G-4E77TBVB28"
  };

//   initialize firbase
  initializeApp(firebaseConfig);

  // init services
  const db=getFirestore();
//   collection ref
const colRef=collection(db,'books');

// get collection data

getDocs(colRef)
.then((snapshot)=>{

    let books=[];
snapshot.forEach((doc)=>


{
    books.push({...doc.data(), id:doc.id});



}

)


console.log(books);
    
}




)
.catch(err=>
    
    {console.log(err.message);}
    )

    // on snap shot
    onSnapshot(colRef,(snapshot)=>
    
    {


        let books=[];
        snapshot.forEach((doc)=>
        
        
        {
            books.push({...doc.data(), id:doc.id});
        
        
        
        })

        console.log(books);

    });


 








    // get the form


    let addform=document.querySelector(".addForm");
    let deleteform=document.querySelector(".deleteForm");


    addform.addEventListener("submit",(e)=>{
        
        e.preventDefault();
        
    addDoc(colRef,{
        title:addform.name.value,
        author:addform.author.value,
        author2:addform.author.value,

        
    })
    .then(()=>
    {


        addform.reset();


    }



    )
    .catch(err=>{

        console.log(err.message);


    })




    });

    deleteform.addEventListener("submit",(e)=>
    {
        e.preventDefault();

        const docRef= doc(db,'books',deleteform.id.value)
        deleteDoc(docRef)
        .then(()=>{


            deleteform.reset();
        })




    }
    );