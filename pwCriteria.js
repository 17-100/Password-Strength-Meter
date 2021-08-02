function PwCriteria(props) {
    const atLeast8 = props.atLeast8;
    const containsNumber = props.containsNumber;
    const containsSpecialChars = props.containsSpecialChars;
    const hasLowerCase = props.hasLowerCase;
    const hasCapitalCase = props.hasCapitalCase;
 
        /* if (atLeast8) { */
           /*  return 
                (
                <div className='validation'>
                    <p>✅ and it must be at least 8 characters long</p>
                </div> 
                ); */
        /* }    */
        /* else {
            return  
                (
                <div className='validation'>
                    <p>❗ and it must be at least 8 characters long</p>
                 </div> 
                );     
        }; */
       if(atLeast8 && containsNumber && containsSpecialChars && hasLowerCase && hasCapitalCase) {
        return (
            <div className='validation'>
                    <ins style={{fontSize:'12px'}}>Make sure your password contains at least</ins>
                    <p>❗ a capital letter</p>
                    <p>❗ a lowercase letter</p>
                    <p>❗ a special character</p>
                    <p>❗ contain a number</p>
                    <p>❗ and it must be at least 8 characters long</p>
            </div> 
            )
       }
       else {
           return (
                <div>GÖÖÖöY</div>
           )
       }
        
  
    
}