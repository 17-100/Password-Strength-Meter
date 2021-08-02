function CreateAccount() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    

    // Handler Functions
    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        } // else
        return true
    }

    function handleCreate() {
        console.log(email, password);
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        setShow(false);
    }

    function clearForm() {
        setEmail('');
        setPassword('');
        setShow(true);
    }

    function atLeast8CharactersLong(password) {
        var pw = password
        if (pw.length >= 8) {
            return true;
        }
        else {
            return false;
        }
    }

    function containsNumber(password) {
        return /\d/.test(password);
    }

    function containsSpecialChars(password){
        return /[~`!#$%\^&*+=\-\§[\]\\';,/{}|\\":<>\?]/g.test(password);
    }

    function hasLowerCase(password) {
        return (/[a-z]/.test(password));
    }

    function hasCapitalCase(password) {
        return (/[A-Z]/.test(password));
    }
    
    return (
        <Card bgcolor="transparent" header="Create Account" status={status} title="Register" text="Create your personal account"
            body={show ? (
            <>
            <h3 style={{color:'black', fontSize: '16px'}}><br></br>Email address</h3>
            <input type="input" className="inputField" id="name" placeholder="   Enter email..."
                value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
            <h3 style={{color:'black', padding:'10px 0 0 0', fontSize: '16px'}}>Password</h3>
            <input type="input"  className="inputField" id="name" placeholder="   Enter password..."
                value={password} onChange={e => setPassword(e.currentTarget.value)} />
            <PwCriteria 
                atLeast8={atLeast8CharactersLong(password)} 
                containsNumber={containsNumber(password)}
                containsSpecialChars={containsSpecialChars(password)}
                hasLowerCase={hasLowerCase(password)}
                hasCapitalCase={hasCapitalCase(password)}
                />
            <button type="button" className="mybtn" onClick={handleCreate}>REGISTER <br></br>NOW</button>
            </>
            ) : (
            <>
            <h5>Success</h5>
            <button type="submit" className="mybtn" onClick={clearForm}>Add another account</button>
            </>)}
        />
    );
}



ReactDOM.render(
    <CreateAccount/>, 
    document.getElementById('root')
);