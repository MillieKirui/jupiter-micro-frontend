import React, { useState } from 'react';

const UpdatePassword: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessages({});
  };

  return (
    <form id="kt_signin_change_password" className="form" method="post" onSubmit={handleSubmit}>
      <div className="row mb-1">
        <div className="col-lg-4">
          <div className="fv-row mb-0">
            <label htmlFor="update_password_current_password" className="form-label fs-6 fw-bold mb-3">Current Password</label>
            <input
              type="password"
              className="form-control form-control-lg form-control-solid"
              name="current_password"
              id="update_password_current_password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            {errorMessages.current_password && <div className="mt-2 text-danger">{errorMessages.current_password}</div>}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="fv-row mb-0">
            <label htmlFor="update_password_new_password" className="form-label fs-6 fw-bold mb-3">New Password</label>
            <input
              type="password"
              className="form-control form-control-lg form-control-solid"
              name="password"
              id="update_password_new_password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {errorMessages.password && <div className="mt-2 text-danger">{errorMessages.password}</div>}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="fv-row mb-0">
            <label htmlFor="update_password_password_confirmation" className="form-label fs-6 fw-bold mb-3">Confirm New Password</label>
            <input
              type="password"
              className="form-control form-control-lg form-control-solid"
              name="password_confirmation"
              id="update_password_password_confirmation"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errorMessages.password_confirmation && <div className="mt-2 text-danger">{errorMessages.password_confirmation}</div>}
          </div>
        </div>
      </div>
      <div className="form-text mb-5">Password must be at least 8 characters and contain symbols</div>
      <div className="d-flex">
        <button id="kt_password_submit" type="submit" className="btn btn-info me-2 px-6">Update Password</button>
        <button id="kt_password_cancel" type="button" className="btn btn-color-gray-400 btn-active-light-info px-6">Cancel</button>
      </div>
    </form>
  );
}

export default UpdatePassword;