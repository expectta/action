import "./App.css";
import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import getTime from "./utils/getDate";
import axios from "axios";
/* eslint-disable */

function App() {
  const [comments, setComments] = useState<any>([]);
  const [content, setContent] = useState<String>("");

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTO_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
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
    alert("test 감사합니다");
    let ip = await addIP();

    try {
      const docRef = await addDoc(collection(db, "comments"), {
        agent: userAgent,
        answer: answer,
        date: updateDate,
        ip: ip,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  async function addUserIp(ip: string) {
    try {
      const docRef = await addDoc(collection(db, "comments"), {
        ip: ip,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  function updateContent(e: any) {
    setContent(e.target.value);
  }
  const addIP = async () => {
    try {
      const response = await axios.get(
        "https://ya025z1amg.execute-api.ap-northeast-2.amazonaws.com/dev/"
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // const fetchComments = async () => {
    //   const querySnapshot = await getDocs(collection(db, "comments"));
    //   const commentsData = querySnapshot.docs.map((doc) => doc.data());
    //   setComments(commentsData);
    // };
    // fetchComments();
    // addUserAgent();
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(
    //       "https://ya025z1amg.execute-api.ap-northeast-2.amazonaws.com/dev/"
    //     );
    //     addUserIp(response.data);
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // };
    // fetchData();
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
          <div>사랑스러운 리코</div>
          <div>버튼을 눌러주세요</div>
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
            yes
          </button>
          <button className="right-button" onClick={() => addUserAgent(false)}>
            no
          </button>
        </div>
        <p>{port}</p>
      </header>
    </div>
  );
}

export default App;
