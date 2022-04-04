function Search_element(props){
    const image=props.image
    const path="uploads/dps/"+image

    return(

        
        <div className='contents_main_page_header'>
          <div>
           <img src={path} id="dp"/>
           </div>
           <div>
           <h1>{props.name}</h1>

           <h2>{props.bio}</h2>
           <button>Follow</button>
           
           </div>

        </div>


    )
}
export default Search_element