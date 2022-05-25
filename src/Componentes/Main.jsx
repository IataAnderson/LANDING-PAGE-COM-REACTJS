function Main(){
    return(
        <div className='main'>
        <div className='center'>
        <div className='menu'>
          <div className='logo'>
            <h3>Resilia Educação</h3>
          </div>
          <div className='item-menu'>
            <a href="#">Login</a>
          </div>
        </div>


        <div className='form'>
        <h2>Entre em contato!</h2>
          <form>            
            <div className='items-form'>
              <input placeholder='Nome' type="text" />
              <input placeholder='sobrenome' type="text" />
              <input placeholder='Email' type="text" />
              <input placeholder='CPF' type="text" />
              <input type="submit" />
            </div>
          </form>

        </div>

        </div>

      </div>
    )
}

export default Main;