function Spa() {
    return (
        <HashRouter>
            <UserContext.Provider value={{users: [{email:'sebisteri@outlook.com', password:'secret'}]}}>
            {/* the 'exact'-attribute means 'default' */}
                <Route path="/" exact component={CreateAccount}/>
            </UserContext.Provider>
            <Card/>
        </HashRouter>
);
}

ReactDOM.render(
    <Spa/>, 
    document.getElementById('root')
);