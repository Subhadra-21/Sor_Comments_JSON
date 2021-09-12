import React, { useState, useEffect } from 'react';

let controller = null;
export default function CommentList(props){
    const [comments, setComments] = useState([]);
    const [inputVal, setInput] = useState('');
    const [filvalue, setFilter] = useState('');
    useEffect(()=>{
        getComments();
    },[props.triggerRender]);

    async function getComments(){
        const response = await fetch('/api/comments');
        const comm = await response.json();
        setComments(comm);
    }

    async function addComments(){
        await fetch('/api/comments', {method:'POST', 
            body:JSON.stringify({text: inputVal}), 
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setInput('');
        getComments();
    }

    async function deleteComment(e){
        const cid = e.target.dataset.cid;
        if(cid){
            await fetch(`/api/comments/${cid}`, {method: 'DELETE'}); 
            getComments();
        }
    }

    async function handleSearch(e){
        const searchVal = e.target.value;
        setFilter(searchVal);
        if(controller){
            console.log('aborted');
            controller.abort();
            controller = new AbortController();
        }else{
            controller = new AbortController();
        }
        const response = await fetch(`/api/comments?q=${searchVal}`, {signal: controller.signal}); 
        const data = await response.json();
        setComments(data);
    }
    return (
     <> 
       <div className='search-comment'>
            <label htmlFor='searchInput'>Search Comments:</label>
            <input type='text' value={filvalue} onChange={(e)=>handleSearch(e)} id='searchInput' />
        </div> 
        {
            !comments || comments.length ===0 ? <div>No Comments</div> :
            <ul>
                {
                    comments.map(comm => {
                        return (
                            <li key={comm.id}>
                                <Comment {...comm} handleDelete={deleteComment}/>
                            </li>
                        );
                    }
                    )
                }
            </ul>    
        }
      <div>
          <input type='text' placeholder='Add Comment' value={inputVal} onChange={(e)=>{setInput(e.target.value)}}/>
          <button onClick={addComments}>Reply</button>
      </div>
    </>  
    );
  }

function Comment(props){
    return (
        <div className='commentli'>
            <span>{props.text}</span>
            <button onClick={props.handleDelete} data-cid={props.id}>X</button>
        </div>
    );
}
