
import React from 'react';
import './enter_card.css'
import Main_Page from './main_page';
import './signup_card.css'


class Enter_Card extends React.Component {
    constructor(props){
        super(props)
        this.state={
            user_email:"",
            user_password:"",
            sign_up:false,
            name:"",
            bio:"",
            isLoggedin:props.isLoggedin,
            user_info:{}


    
    }
    this.email_change=this.email_change.bind(this);
    this.password_change=this.password_change.bind(this);
    this.enter_clicked=this.enter_clicked.bind(this);
    this.name_change=this.name_change.bind(this);
    this.bio_change=this.bio_change.bind(this);
    this.handle_submit=this.handle_submit.bind(this);
    
   
    }
    render(){
        if(this.state.sign_up === false && this.state.isLoggedin==false){
    return(
        
        <div className="div_enter_card">
        <div className="div_enter_card_contents">
            <h2>Enter</h2>
            <hr/>
            <br/>
            Email:
            <br/>
            <br/>
            <input type="email" placeholder="Email" name="e_email" onChange={this.email_change}/>
            <br/>
            <br/>
            Password:
            <br/>
            <br/>
            <input type="password" placeholder="Password" name="e_password" onChange={this.password_change}/>
        
            <br/>
            <br/>
            <input type="button"  name="e_button" value="Enter" onClick={this.enter_clicked}/>

        </div>
</div>



    );
        }
        else if (this.state.sign_up==true && this.state.isLoggedin==false){
         
            const loc="https://wallpaperaccess.com/full/323408.jpg"
            return(
                <div className='scc'>
            <div className='signup_card_container'>
    <h1>Let's setup your account</h1>
    <hr/>
    
   <div className='info_container'>
     <form action='http://localhost:3232/signup' method="post" enctype="multipart/form-data" >
   <div className='img_container'>
    <img className="dp_container" src={loc}  id="dp_container"/>
    </div>
     <br/>
     
     <input type="file" name="image" onChange={this.file_changed}/>
     
     
     <br/>
     <br/>
   Name:<br/>
    <input type="text" name="user_name" onChange={this.name_change}/>
    <br/>
    <br/>
    Email:<br/>
    <input type="email" name="user_email" value={this.state.user_email}/>
    <br/>
    <br/>
    Password:<br/>
    <input type="password" name="password" value={this.state.user_password} />
    <br/>
    <br/>
    Bio:<br/>
    <input type="text" name="user_bio" onChange={this.bio_change}/>
    <br/>
    <br/>
    <input type="submit" name="signup" value="Sign up" />
    </form>
    </div>
</div>
             </div>
            );



        }
        else if (this.state.isLoggedin==true){
            return(
              <Main_Page user_info={this.state.user_info}/>
            );
        }

    }
    enter_clicked(){
        const data={user_email:this.state.user_email,user_password:this.state.user_password}
     // const data={user_email:"example@gmail.com",user_password:"Hello@123"}

        fetch("http://localhost:3232/enter",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify(data)

        })
        // Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json =>{ 
    console.log(json.Response)
    if(json.Response === "Registered!"){
        
        this.setState({sign_up:true})
        console.log("Hello")
    }
    else if(json.Response=="Exists!"){
        const data={user_email:this.state.user_email}
        fetch("http://localhost:3232/user",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify(data)

        }).then(response=>response.json())
        .then(json=>{
            this.setState({user_info:json})
            this.setState({isLoggedin:true})
        }

        )
        
    }

});
    }
    email_change(event){
       this.setState({user_email:event.target.value})
       // console.log(event.target.value)
    }
    password_change(event){
        this.setState({user_password:event.target.value})
    }
    name_change(event){
        this.setState({
            name:event.target.value
        })
       // console.log(this.state.name)
        
        }
        
        bio_change(event){
            this.setState({
                bio:event.target.value
            })
        }
     
        
       file_changed(event){
           console.log(event.target.files[0]);
           const file=event.target.files[0];
           
           if(file){
               const reader=new FileReader();
              const img=document.getElementById("dp_container")
               reader.addEventListener("load",function(){
                   img.setAttribute("src",this.result)

               });
               reader.readAsDataURL(file);
           }
       }
       handle_submit(event){
           this.setState({isLoggedin:true})
       }

}

export default Enter_Card;