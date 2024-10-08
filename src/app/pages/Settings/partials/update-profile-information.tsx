import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../setup';
import { updateProfileDetails } from '../../../modules/auth/core/requests';

type Props = {
    user_firstName?: string;
    user_lastName?:string;
    user_email?: string;
  };

const UpdateProfileInfo: React.FC<Props> = ({user_firstName,user_lastName,user_email}) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const uuid = useSelector<RootState>(
    ({ auth }) => auth.uuid
  );

  useEffect(()=>{
    if(user_firstName && user_lastName && user_email){
      setFirstName(user_firstName);
      setLastName(user_lastName);
      setEmail(user_email);
    }
  },[user_firstName,user_lastName,user_email])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateProfileDetails(uuid,firstName,lastName,email).then((response)=>{
      console.log(firstName);
      
      console.log(response);
    })   
    setStatusMessage('Saved.'); 
  };

  return (
    <>
      <form id="kt_account_profile_details_form" className="form" method="post" onSubmit={handleSubmit}>
        <div className="card-body border-top p-9">
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label required fw-semibold fs-6">First Name</label>
            <div className="col-lg-8 fv-row">
              <input
                type="text"
                name="name"
                className="form-control form-control-lg form-control-solid"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label required fw-semibold fs-6">Last Name</label>
            <div className="col-lg-8 fv-row">
              <input
                type="text"
                name="name"
                className="form-control form-control-lg form-control-solid"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-6">
            <label className="col-lg-4 col-form-label required fw-semibold fs-6">Email</label>
            <div className="col-lg-8 fv-row">
              <input
                type="text"
                name="email"
                className="form-control form-control-lg form-control-solid"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {false && (
                <div>
                  <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                    Your email address is unverified.
                    <button form="send-verification" className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                      Click here to re-send the verification email.
                    </button>
                  </p>
                  {statusMessage === 'verification-link-sent' && (
                    <p className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                      A new verification link has been sent to your email address.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="card-footer d-flex justify-content-end py-6 px-9">
          <button type="reset" className="btn btn-light btn-active-light-info me-2">Discard</button>
          <button type="submit" className="btn btn-info" id="kt_account_profile_details_submit">Save</button>
          {statusMessage === 'Saved.' && (
            <p className="text-sm text-info dark:text-info">{statusMessage}</p>
          )}
        </div>
      </form>
    </>
  );
};

export default UpdateProfileInfo;