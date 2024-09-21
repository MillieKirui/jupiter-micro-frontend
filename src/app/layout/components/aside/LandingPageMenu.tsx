export function LandingPageMenu() {
    return (
      <>
        {" "}
        <>
            <div className="menu-item mt-lg-10">
              <a href="/">
                <span className="text-dark">Home</span>
              </a>
            </div>
            <div className="menu-item mt-10">                    
              <a href="/">
                <span className="text-dark">About Us</span>
              </a>
            </div>
            <div className="menu-item mt-10">                    
              <a href="/">           
                <span className="text-dark">Contact Us</span>
              </a>
            </div>
            <div className="menu-item mt-10">                    
              <a href="/auth">
                <span className="text-dark">Login/Register</span>
              </a>
            </div>
        </>
      </>
    );
  }
  