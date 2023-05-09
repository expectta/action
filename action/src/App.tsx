import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import getTime from "./utils/getDate";
/* eslint-disable */

function App() {
  const [comments, setComments] = useState<any>([]);
  const [content, setContent] = useState<String>("");

  const firebaseConfig = {
    apiKey: "AIzaSyAbomLIYFK_Pd6-A0on2u-weB0CinrHo3w",
    authDomain: "devchat-3af5b.firebaseapp.com",
    projectId: "devchat-3af5b",
    storageBucket: "devchat-3af5b.appspot.com",
    messagingSenderId: "212380416736",
    appId: "1:212380416736:web:a04569141a1acccf7eee85",
    measurementId: "G-W5PX2TZY35",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const port = process.env.REACT_APP_PORT;
  async function addComment(contetns: String) {
    const updateDate = getTime();
    try {
      const docRef = await addDoc(collection(db, "comments"), {
        contents: contetns,
        date: updateDate,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  async function addUserAgent(condition: boolean) {
    const userAgent = navigator.userAgent;
    let answer = false;
    const updateDate = getTime();
    if (condition) {
      answer = true;
    }
    alert("저와 상담이 필요하겠네요!!");

    try {
      const docRef = await addDoc(collection(db, "comments"), {
        agent: userAgent,
        answer: answer,
        date: updateDate,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  function updateContent(e: any) {
    setContent(e.target.value);
  }

  useEffect(() => {
    // const fetchComments = async () => {
    //   const querySnapshot = await getDocs(collection(db, "comments"));
    //   const commentsData = querySnapshot.docs.map((doc) => doc.data());
    //   setComments(commentsData);
    // };
    // fetchComments();
    // addUserAgent();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={() => addComment(content)}>내용 추가 버튼</button> */}
        {/* <input onChange={(e) => updateContent(e)}></input> */}
        <div className="chat-list">
          <div className="imo">
            <div>😭</div>
          </div>
          <div>리아는 남자를 보는 눈이 없어~</div>
          <div>リアは男を見る目がない~</div>
          {/* {comments.map((chat: any, index: number) => (
            <div className="chat-item" key={index}>
              <div className="chat-item-contents">{chat.contents}</div>
              <div>{chat.date}</div>
              <div>{chat.iborn}</div>
            </div>
          ))} */}
        </div>
        <div>
          <button className="left-button" onClick={() => addUserAgent(true)}>
            そうだよ
          </button>
          <button className="right-button" onClick={() => addUserAgent(false)}>
            違うよ
          </button>
        </div>
        <p>{port}</p>
      </header>
    </div>
  );
}

export default App;
