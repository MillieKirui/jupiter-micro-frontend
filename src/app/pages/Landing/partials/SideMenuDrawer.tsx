import clsx from "clsx";
import { useTheme } from "../../../layout/core";
const SideMenuDrawer = () =>{
    const { config, classes } = useTheme();
    return(
        <div id="kt_app_sidebar"
        className={clsx("aside", "bg-white", classes.aside.join(" "))}
        data-kt-drawer="true"
        data-kt-drawer-name="aside"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width={
          config.aside.secondaryDisplay
            ? "{default:'200px', '300px': '250px'}"
            : "70px"
        }
        data-kt-drawer-direction="start" 
        data-kt-drawer-toggle="#kt_aside_toggler">
            <div className="d-flex flex-column justify-content-between h-100 hover-scroll-overlay-y my-2 d-flex flex-column" id="kt_app_sidebar_main" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_header" data-kt-scroll-wrappers="#kt_app_main" data-kt-scroll-offset="5px">
                {/*begin::Sidebar menu*/}
                <div id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false" className="flex-column-fluid menu menu-sub-indention menu-column menu-rounded menu-active-bg mb-7">
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                            <span className="menu-icon">
                                <i className="ki-duotone ki-element-11 fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                </i>
                            </span>
                            <span className="menu-title">Dashboards</span>
                            <span className="menu-arrow"></span>
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link active" href="../dist/index.html">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Default</span>
                                </a>
                                {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="#" data-kt-page="pro">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">eCommerce
                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                </a>
                                {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="#" data-kt-page="pro">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Projects
                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                </a>
                                {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="#" data-kt-page="pro">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Online Courses
                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                </a>
                                {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="#" data-kt-page="pro">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Marketing
                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                </a>
                                {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                            <span className="menu-icon">
                                <i className="ki-duotone ki-some-files fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </span>
                            <span className="menu-title">Pages</span>
                            <span className="menu-arrow"></span>
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion">
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">User Profile</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/user-profile/overview.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Overview</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Projects
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Campaigns
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Documents
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Followers
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Activity
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Account</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/account/overview.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Overview</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/account/settings.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Settings</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Security
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Activity
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Billing
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Statements
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Referrals
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">API Keys
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Logs
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Authentication</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                        {/*begin:Menu link*/}
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Sign In</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        {/*end:Menu link*/}
                                        {/*begin:Menu sub*/}
                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="../dist/authentication/sign-in/basic.html">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Basic</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="../dist/authentication/sign-in/password-reset.html">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Password Reset</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="../dist/authentication/sign-in/new-password.html">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">New Password</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Menu sub*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                        {/*begin:Menu link*/}
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Sign Up</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        {/*end:Menu link*/}
                                        {/*begin:Menu sub*/}
                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="../dist/authentication/sign-up/basic.html">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Basic</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Multi-steps
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Free Trial
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Coming Soon
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Menu sub*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Welcome Message
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Verify Email
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Password Confirmation
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Account Deactivation
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Error 404
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Error 500
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                        {/*begin:Menu link*/}
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Email Templates</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        {/*end:Menu link*/}
                                        {/*begin:Menu sub*/}
                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" target="_blank" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Verify Email
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" target="_blank" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Account Invitation
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" target="_blank" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Password Reset
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" target="_blank" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Password Changed
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Menu sub*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Corporate</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/about.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">About</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/team.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Our Team</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/contact.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Contact Us</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/licenses.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Licenses</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/sitemap.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Sitemap</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Social</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/social/feeds.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Feeds</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Activty
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Followers
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Settings
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Blog</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/blog/home.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Blog Home</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/blog/post.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Blog Post</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">FAQ</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/faq/classic.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">FAQ Classic</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/faq/extended.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">FAQ Extended</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Pricing</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion menu-active-bg">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/pricing/column.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Column Pricing</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/pricing/table.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Table Pricing</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Careers</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/careers/list.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Careers List</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/pages/careers/apply.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Careers Apply</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                            <span className="menu-icon">
                                <i className="ki-duotone ki-chart-line-star fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                </i>
                            </span>
                            <span className="menu-title">Apps</span>
                            <span className="menu-arrow"></span>
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion">
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Projects</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/apps/projects/list.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">My Projects</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">View Project
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Targets
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Budget
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Users
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Files
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Activity
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Settings
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">eCommerce</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                        {/*begin:Menu link*/}
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Catalog</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        {/*end:Menu link*/}
                                        {/*begin:Menu sub*/}
                                        <div className="menu-sub menu-sub-accordion">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="../dist/apps/ecommerce/catalog/products.html">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Products</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Categories
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Add Product
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Edit Product
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Add Category
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Edit Category
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Menu sub*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                        {/*begin:Menu link*/}
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Sales</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        {/*end:Menu link*/}
                                        {/*begin:Menu sub*/}
                                        <div className="menu-sub menu-sub-accordion">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Orders Listing
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Order Details
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Add Order
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Edit Order
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Menu sub*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                        {/*begin:Menu link*/}
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Customers</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        {/*end:Menu link*/}
                                        {/*begin:Menu sub*/}
                                        <div className="menu-sub menu-sub-accordion">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="../dist/apps/ecommerce/customers/listing.html">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Customer Listing</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Customer Details
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Menu sub*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                        {/*begin:Menu link*/}
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Reports</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        {/*end:Menu link*/}
                                        {/*begin:Menu sub*/}
                                        <div className="menu-sub menu-sub-accordion">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Products Viewed
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Sales
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Returns
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Customer Orders
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Shipping
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Menu sub*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Settings
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Contacts</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/apps/contacts/getting-started.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Getting Started</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Add Contact
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Edit Contact
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">View Contact
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Support Center</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/apps/support-center/overview.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Overview</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                                        {/*begin:Menu link*/}
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Tickets</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        {/*end:Menu link*/}
                                        {/*begin:Menu sub*/}
                                        <div className="menu-sub menu-sub-accordion">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="../dist/apps/support-center/tickets/list.html">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Tickets List</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">View Ticket
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Menu sub*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                                        {/*begin:Menu link*/}
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Tutorials</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        {/*end:Menu link*/}
                                        {/*begin:Menu sub*/}
                                        <div className="menu-sub menu-sub-accordion">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Tutorials List
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Tutorial Post
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Menu sub*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">FAQ
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Licenses
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Contact Us
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">User Management</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
                                        {/*begin:Menu link*/}
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Users</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        {/*end:Menu link*/}
                                        {/*begin:Menu sub*/}
                                        <div className="menu-sub menu-sub-accordion">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="../dist/apps/user-management/users/list.html">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Users List</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">View User
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Menu sub*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                        {/*begin:Menu link*/}
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Roles</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        {/*end:Menu link*/}
                                        {/*begin:Menu sub*/}
                                        <div className="menu-sub menu-sub-accordion">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Roles List
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">View Role
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Menu sub*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Permissions
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Customers</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/apps/customers/getting-started.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Getting Started</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/apps/customers/list.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Customer Listing</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Customer Details
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Subscription</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/apps/subscriptions/getting-started.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Getting Started</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="../dist/apps/subscriptions/list.html">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Subscription List</span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Add Subscription
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">View Subscription
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Invoice Manager</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                        {/*begin:Menu link*/}
                                        <span className="menu-link">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">View Invoices</span>
                                            <span className="menu-arrow"></span>
                                        </span>
                                        {/*end:Menu link*/}
                                        {/*begin:Menu sub*/}
                                        <div className="menu-sub menu-sub-accordion menu-active-bg">
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="../dist/apps/invoices/view/invoice-1.html">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Invoice 1</span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Invoice 2
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                            {/*begin:Menu item*/}
                                            <div className="menu-item">
                                                {/*begin:Menu link*/}
                                                <a className="menu-link" href="#" data-kt-page="pro">
                                                    <span className="menu-bullet">
                                                        <span className="bullet bullet-dot"></span>
                                                    </span>
                                                    <span className="menu-title">Invoice 3
                                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                                </a>
                                                {/*end:Menu link*/}
                                            </div>
                                            {/*end:Menu item*/}
                                        </div>
                                        {/*end:Menu sub*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Create Invoice
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">File Manager</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Folders
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Files
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Blank Directory
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Settings
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Inbox</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Messages
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                            <span className="menu-badge">
                                                <span className="badge badge-success">3</span>
                                            </span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Compose
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">View & Reply
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                {/*begin:Menu link*/}
                                <span className="menu-link">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Chat</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                {/*end:Menu link*/}
                                {/*begin:Menu sub*/}
                                <div className="menu-sub menu-sub-accordion">
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Private Chat
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Group Chat
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item">
                                        {/*begin:Menu link*/}
                                        <a className="menu-link" href="#" data-kt-page="pro">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Drawer Chat
                                            <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                        </a>
                                        {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                </div>
                                {/*end:Menu sub*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="#" data-kt-page="pro">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Calendar
                                    <span className="badge badge-pro badge-light-danger fw-semibold fs-8 px-2 py-1 ms-1" data-bs-toggle="tooltip" title="Upgrade to Pro to get this">Pro</span></span>
                                </a>
                                {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                        {/*begin:Menu link*/}
                        <span className="menu-link">
                            <span className="menu-icon">
                                <i className="ki-duotone ki-rescue fs-1">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                </i>
                            </span>
                            <span className="menu-title">Help</span>
                            <span className="menu-arrow"></span>
                        </span>
                        {/*end:Menu link*/}
                        {/*begin:Menu sub*/}
                        <div className="menu-sub menu-sub-accordion">
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="https://preview.keenthemes.com/html/saul-html-pro/docs/base/utilities" target="_blank" title="Check out over 200 in-house components" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Components</span>
                                </a>
                                {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="https://preview.keenthemes.com/html/saul-html-pro/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Documentation</span>
                                </a>
                                {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="https://preview.keenthemes.com/saul-html-free/layout-builder.html" title="Build your layout and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Layout Builder</span>
                                </a>
                                {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                            {/*begin:Menu item*/}
                            <div className="menu-item">
                                {/*begin:Menu link*/}
                                <a className="menu-link" href="https://preview.keenthemes.com/html/saul-html-pro/docs/getting-started/changelog" target="_blank">
                                    <span className="menu-bullet">
                                        <span className="bullet bullet-dot"></span>
                                    </span>
                                    <span className="menu-title">Changelog v1.0.0</span>
                                </a>
                                {/*end:Menu link*/}
                            </div>
                            {/*end:Menu item*/}
                        </div>
                        {/*end:Menu sub*/}
                    </div>
                    {/*end:Menu item*/}
                </div>
                {/*end::Sidebar menu*/}
                {/*begin::Footer*/}
                <div className="app-sidebar-project-default app-sidebar-project-minimize text-center min-h-lg-400px flex-column-auto d-flex flex-column justify-content-end" id="kt_app_sidebar_footer">
                    {/*begin::Title*/}
                    <h2 className="fw-bold text-gray-800">Welcome to Saul</h2>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="fw-semibold text-gray-700 fs-7 lh-2 px-7 mb-1">Join the movement make a difference.</div>
                    {/*end::Description*/}
                    {/*begin::Illustration*/}
                    <img className="mx-auto h-150px h-lg-175px mb-4" src="assets/media/misc/saul-welcome.png" alt="" />
                    {/*end::Illustration*/}
                    <div className="text-center mb-lg-5 pb-lg-3">
                        <a href="#" className="btn btn-sm btn-dark" data-bs-toggle="modal" data-bs-target="#kt_modal_create_account">Get Started</a>
                    </div>
                </div>
                {/*end::Footer*/}
            </div>
        </div>
    )
}
export default SideMenuDrawer;