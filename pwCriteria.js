function PwCriteria(props) {
    const atLeast8 = props.atLeast8;
    const containsNumber = props.containsNumber;
    const containsSpecialChars = props.containsSpecialChars;
    const hasLowerCase = props.hasLowerCase;
    const hasCapitalCase = props.hasCapitalCase;
    var newReturnElement = [];

        if (hasCapitalCase) {
            newReturnElement.push(<p key='1' style={{color:'green'}}>✅ a capital letter</p>)
        } else {
            newReturnElement.push(<p key='1' style={{color:'red'}}>❗ a capital letter</p>)
        }

        if (hasLowerCase) {
            newReturnElement.push(<p key='2' style={{color:'green'}}>✅ a lowercase letter</p>)
        } else {
            newReturnElement.push(<p key='2' style={{color:'red'}}>❗ a lowercase letter</p>)
        }

        if (containsSpecialChars) {
            newReturnElement.push(<p key='3'>✅ <span style={{color:'green'}}>a special character</span> and</p>)
        } else {
            newReturnElement.push(<p key='3'>❗ <span style={{color:'red'}}>a special character</span> and</p>)
        }

        if (containsNumber) {
            newReturnElement.push(<p key='4'>✅ <span style={{color:'green'}}>contain a number</span> and</p>)
        } else {
            newReturnElement.push(<p key='4'>❗ <span style={{color:'red'}}>contain a number</span> and</p>)
        }
       
        if (atLeast8) {
            newReturnElement.push(<p key='5' style={{color:'green'}}>✅ and it must be at least 8 characters long</p>)
        } else {
            newReturnElement.push(<p key='5'>❗ and it <span style={{color:'red'}}>must be at least 8 characters long</span></p>)
        }

                

       return (
        newReturnElement
       );
  
    
}