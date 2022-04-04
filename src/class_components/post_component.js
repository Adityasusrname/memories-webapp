import React from 'react';
import './post_component.css'
class Post extends React.Component{
    constructor(props){
      super(props)
    
      this.file_changed=this.file_changed.bind(this)
    }
    render(){
    return(

<div className='post'>
<form action='http://localhost:3232/post' method="post" enctype="multipart/form-data">
    <img src="logo192.png" id="img_container"/>
    <br/>
    <br/>
    <input type="hidden" value={this.props.user} name="author"/>
    <br/>
    <br/>
    <input type="file" name="image" onChange={this.file_changed}/>
    <br/>
    <br/>
    <input type="text" name="description" placeholder="Say something about your image" id="description_id" />
    <br/>
    <br/>
    <input type="submit" value="Post"/>
</form>

</div>




    )
    
    }
    file_changed(event){
        console.log(event.target.files[0]);
        const file=event.target.files[0];
        
        if(file){
            const reader=new FileReader();
           const img=document.getElementById("img_container")
            reader.addEventListener("load",function(){
                img.setAttribute("src",this.result)

            });
            reader.readAsDataURL(file);
        }
    }
 
}
export default Post;