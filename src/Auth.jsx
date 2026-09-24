
function Authic(){
    return(

        <>
         <form className="login-form" onSubmit={(e) => e.preventDefault()}>
     <div className="form-group">
    <label htmlFor="email">Email</label>
    <input placeholder=" example@gmail.com" id="email" type="email" />
    </div>

  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input placeholder=" ***********" id="password" type="password" />
  </div>

  <button className="singinbtn" type="submit">Log In</button>
     </form>
        </>

    )

}

export default Authic;

