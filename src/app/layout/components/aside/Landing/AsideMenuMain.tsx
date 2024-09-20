export function AsideMenuMain() {
  return (
    <>
      {" "}
      <>
          <div className="menu-item">
            <a href="/dashboard">
            <i className="fa fa-home fs-2x me-2" aria-hidden="true"></i>
              <span className="text-dark">Dashboard</span>
            </a>
          </div>
          <div className="menu-item mt-10">                    
            <a href="/loans">
            <i className="fa fa-suitcase fs-2x me-2" aria-hidden="true"></i>
              <span className="text-dark">My Loans</span>
            </a>
          </div>
          <div className="menu-item mt-10">                    
            <a href="/security-items">
            <i className="fa fa-lock fs-2x me-2" aria-hidden="true"></i>
              <span className="text-dark">Security Items</span>
            </a>
          </div>
          <div className="menu-item mt-10">                    
            <a href="/settings">
            <i className="fa fa-cog fs-2x me-2" aria-hidden="true"></i>
              <span className="text-dark">Settings</span>
            </a>
          </div>
          <div className="menu-item mt-10">                    
            <a href="/support">
            <i className="fa fa-headphones fs-2x me-2" aria-hidden="true"></i>
              <span className="text-dark">Support</span>
            </a>
          </div>
      </>
    </>
  );
}
