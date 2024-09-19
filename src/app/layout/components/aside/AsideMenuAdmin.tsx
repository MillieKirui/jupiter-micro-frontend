export function AsideMenuAdmin() {
    return (
      <>
        {" "}
        <>
            <div className="menu-item">
              <a href="/admin">
              <i className="fa fa-home fs-2x me-2" aria-hidden="true"></i>
                <span className="text-dark">Dashboard</span>
              </a>
            </div>
            <div className="menu-item mt-10">                    
              <a href="/admin/applications">
              <i className="fa fa-suitcase fs-2x me-2" aria-hidden="true"></i>
                <span className="text-dark">Loan Applications</span>
              </a>
            </div>
            <div className="menu-item mt-10">                    
              <a href="/admin/users">
              <i className="fa fa-users fs-2x me-2" aria-hidden="true"></i>
                <span className="text-dark">Users</span>
              </a>
            </div>
            <div className="menu-item mt-10">                    
              <a href="/settings">
              <i className="fa fa-cog fs-2x me-2" aria-hidden="true"></i>
                <span className="text-dark">Settings</span>
              </a>
            </div>
        </>
      </>
    );
  }
  