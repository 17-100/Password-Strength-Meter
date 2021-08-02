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
    
    return (
        <Card
            bgcolor="transparent"
            header="Create Account"
            status={status}
            body={show ? (
            <>
            <h1 style={{color:'black', fontSize:'30px'}}>Register</h1>
            <h2 style={{color:'grey', fontSize:'20px'}}>Create your personal account</h2>
            <h3 style={{color:'black', fontSize: '16px'}}><br></br>Email address</h3>
            <input type="input" className="inputField" id="name" placeholder="   Enter email..."
                value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
            <h3 style={{color:'black', padding:'10px 0 0 0', fontSize: '16px'}}>Password</h3>
            <input type="password"  className="inputField" id="name" placeholder="   Enter password..."
                value={password} onChange={e => setPassword(e.currentTarget.value)} />
            <div className="validation">
                <ins style={{fontSize:'12px'}}>Make sure your password contains at least</ins>
                <p>❗ a capital letter</p>
                <p>❗ a lowercase letter</p>
                <p>❗ a special character</p>
                <p>❗ contain a number</p>
                <p>❗ and it must be at least 8 characters long</p>
            </div>
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