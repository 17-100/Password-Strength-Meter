function Card(props) {
    return (
        <div className='myDiv'>
            <div className="card-body">
                {props.title && (<h5 className="card-title" style={{color:'black', fontSize:'30px'}}>{props.title}</h5>)}
                {props.text && (<h5 className="card-text" style={{color:'grey', fontSize:'20px'}}>{props.text}</h5>)}
                {props.body}
                {props.status && (<div id="createStatus">{props.body}</div>)}
                
            </div>
        </div>
    );
    
}