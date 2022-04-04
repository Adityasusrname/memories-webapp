import './main_container.css'
import Post from '../class_components/post_component'
function Main_Container(props){
    return(

    <div className="container">
      

      <div className="header">

        <button>Post</button>
         <button>Feed</button>
         <button>Following</button>
         <button>Followers</button>



      </div>
      <br/>
      <br/>
      <div className="current_option">

<Post user={props.user}/>


</div>

    </div>




    )

}
export default Main_Container;