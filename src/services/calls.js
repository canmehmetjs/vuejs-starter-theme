
import axios from 'axios'
import Ls from './ls'
import ls from './ls';



export default {
    // Get Merchant UUI from username
    get_merchant_uuid_from_name(merchant_username){ 
        axios.get('http://linkgoeshere' + merchant_username)
        .then(response =>  {
               var response = JSON.stringify(response.data); // get username
               return response.replace(/^"(.*)"$/, '$1'); // remove quotes 
             
        })
        .catch(error => {
             console.log(error);
        });
       
    },


}