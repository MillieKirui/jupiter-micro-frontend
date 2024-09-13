export function AsideMenuMain() {
  return (
    <>
      {" "}
      <>

          <div className="menu-item">
            <a>
            <i className="fa fa-home fs-2x me-2" aria-hidden="true"></i>
              <span>Dashboard</span>
            </a>
          </div>
          <div className="menu-item mt-10">                    
            <a>
            <i className="fa fa-suitcase fs-2x me-2" aria-hidden="true"></i>
              <span>My Loans</span>
            </a>
          </div>
          <div className="menu-item mt-10">                    
            <a>
            <i className="fa fa-lock fs-2x me-2" aria-hidden="true"></i>
              <span>Security Items</span>
            </a>
          </div>
          <div className="menu-item mt-10">                    
            <a>
            <i className="fa fa-cog fs-2x me-2" aria-hidden="true"></i>
              <span>Settings</span>
            </a>
          </div>
          <div className="menu-item mt-10">                    
            <a>
            <i className="fa fa-headphones fs-2x me-2" aria-hidden="true"></i>
              <span>Support</span>
            </a>
          </div>
      </>
    </>
  );
}
