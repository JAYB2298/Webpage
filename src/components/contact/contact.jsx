import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



let Card=()=>{

    const[user,setUser]=useState({email:'', naame:'', phone:'',message:''});

    let submitHandler=(event)=>{
        console.log(user)
        event.preventDefault();
    }

    let eventHandler=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    return <>
    <div className='container mt-4'>
        <div className="row mb-4">
            <div className="col-md-5">
                <h4>CONNECTING IDEAS &</h4>
                <h4><strong>CONNECT US NOW</strong></h4>
            </div>
            <div className="col-md-7">
                <p>We are digital agency focus on creative & result driven solutions. </p>
            </div>
        </div>
        <div className='row'>
            <div className="col-md-7">              
                <form onSubmit={submitHandler} className="form">
                    <div className="form-group mr-auto">
                        <input name="naame" type="text" onChange={eventHandler} placeholder="Enter Name Here" className="form-control" required></input>
                        <input name="email" type="email" onChange={eventHandler} placeholder="Enter Email Here" className="form-control mt-2" required></input>
                        <input name="phone" type="number" onChange={eventHandler} placeholder="Enter contact Number" className="form-control mt-2" required></input>
                    </div>
                        <button type="submit"  className="btn btn-transparent text-primary mt-2">[GET STARTED]</button>
                </form>
            </div>  
            <div className="col-md-5">
                <form  onSubmit={submitHandler} className="form">
                    <div className="form-group">
                        <textarea rows="5"
                                  cols="60"
                                  placeholder="message"
                                  name="message" type="text" 
                                  onChange={eventHandler}>    
                        </textarea>  
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
}

export default Card;



