import Search_element from "./search_element"

function Search_result(props){
return(

<div>
      {
        props.response.map((u, i) => {
          return (
            <Search_element
              name={props.response[i].name}
              image={props.response[i].image}
              bio={props.response[i].bio}
              
              />
          );
        })
      }
    </div>





)
}
export default Search_result