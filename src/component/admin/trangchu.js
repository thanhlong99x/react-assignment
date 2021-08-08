import { isAuthenticate } from "../../auth/admin";

const Index = () => {
    const { email} = isAuthenticate(); 
    return(
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4" >
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Chào {email}</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
          </div>
        </div>
      </div>
      
    </div>
    )
}
export default Index;