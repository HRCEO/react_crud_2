import BookTitle from "./compornets/bookTitle";
import {useEffect, useState} from "react";
import Modal from "./compornets/modal";

function App() {

    const [bookInfo, setBookInfo] = useState([]);
    const [modalOpen, setModalOpen ] = useState(false);
    const [newBookInfo, setNewBookInfo ] = useState({
        name : '',
        author : '',
        review : '',
    });
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    useEffect(()=>{
        setBookInfo([{name:'TEST',author:'ME',review:'NO REVIEW'},{name:'TEST',author:'ME',review:'NO REVIEW'},{name:'TEST',author:'ME',review:'NO REVIEW'}]);
    },[])

    const submitNewBook = ()=>{
        setBookInfo(bookInfo.concat(newBookInfo));
        closeModal();
        // setBookInfo([...bookInfo,newBookInfo]);
    }

    return (
        <div className="App">
            <div>
                <button onClick={openModal}>책 추가</button>
                <Modal open={ modalOpen } close={ closeModal } header="새로운 책 추가하기">
                    <label>Book Name : </label>
                    <input type="text" name="bookName" onChange={(e) => {
                        setNewBookInfo({...newBookInfo, name : e.target.value});
                    }}/>
                    <label>author : </label>
                    <input type="text" name="author" onChange={(e) => {
                        setNewBookInfo({...newBookInfo, author:e.target.value})
                    }}/>
                    <label>review : </label>
                    <input type="text" name="review" onChange={(e) => {
                        setNewBookInfo({...newBookInfo, review:e.target.value})
                    }}/>
                    <button onClick={submitNewBook}>Submit</button>
                </Modal>
                {bookInfo.map((result)=>{return (<BookTitle bookInfo={result}/>)})}
            </div>
        </div>
    );
}

export default App;
