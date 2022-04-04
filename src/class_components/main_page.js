
import React from 'react';
import Main_Container from '../function_components/main_container';
import './main_page.css'
import Search_result from '../function_components/search_result';
class Main_Page extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user_info:props.user_info,
            Search:"",
            Search_Clicked:false,
            d:[]
        }
        this.search_changed=this.search_changed.bind(this);
        this.search_clicked=this.search_clicked.bind(this);

    }
    render(){
       
       const image=this.state.user_info.image.toString()
       console.log(image)
       const path="uploads/dps/"+image
       console.log(path)
       const name=this.state.user_info.name
       const bio=this.state.user_info.bio
       let a;
       if(this.state.Search_Clicked){
        a=<Search_result response={this.state.d}/>
            
       }
       else{
           
            a=<Main_Container user={this.props.user_info.email}/>
       }
       
        return (

            <div>
         <div className='contents_main_page_header'>
           <div>
            <img src={path} id="dp"/>
            </div>
            <div>
            <h1>{name}</h1>

            <h2>{bio}</h2>
            
            </div>

         </div>
         <div className='search'>
         <input type="text" placeholder='Search' id="search_input" onChange={this.search_changed}/>
         <button onClick={this.search_clicked}>Search</button>
         </div>
         <br/>
         <div className='contents_main_page_container'>
            
         
         {a}
         </div>
         </div>

        )
    }
    search_changed(event){
        this.setState({Search:event.target.value})
    }
    search_clicked(event){
        const data={name:this.state.Search}
        fetch("http://localhost:3232/search",{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body:JSON.stringify(data)
        }).then(response=>response.json()).then(data=>{console.log(data)
        this.setState({Search_Clicked:true})
            this.setState({d:data})
            
        })

    }
}
export default Main_Page;