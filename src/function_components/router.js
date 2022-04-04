import Enter_Card from "../class_components/enter_card";
import Main_Page from "../class_components/main_page";
function Router(props){
    if(props.isLoggedin==true){
        return(
            <Main_Page user_info={{}}/>
        );
    }
    else{

        return(
             <Enter_Card isLoggedin={props.isLoggedin}/>   
        );
    }
}
export default Router;