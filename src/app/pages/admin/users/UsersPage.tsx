/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { RootState } from "../../../../setup";
import { useSelector } from "react-redux";
import { UserModel } from "../../../modules/auth/models/UserModel";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";
import { getUsers } from "../../../modules/users/core/requests";

export const UsersPage: React.FC = () => {
  //get user UUID
  const uuid = useSelector<RootState>(
    (state) => state.auth?.uuid,
  );

  const [users, setUsers] = useState<UserModel[]>([]);
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await  getUsers().then((response)=>{
          setUsers(response.data);
          console.log(response.status);
        })
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = users.filter((row) =>
    Object.keys(filters).every((field) =>
      String(row[field as keyof UserModel]).toLowerCase().includes(String(filters[field]).toLowerCase())
    )
  );

  const searchedData = filteredData.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );


  return (
    <>
       {/* begin::Row */}
       <div className="g-0 g-xl-4 g-xxl-6 justify-content-start gap-15">
       <i className="fa fa-search fs-1x mb-5 border border-info rounded p-4" aria-hidden="true">
              <input
                  type="text"
                  className="border-0 ms-5 p-3"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearch}
                  style={{
                    border: 0,
                    outline: 'none',
                  }}
                />
            </i>
        <div className="card card-custom shadow col-12 justify-content-start p-5">
              <div className="row g-6 g-xl-9">
              {loading ? 
              <div className="d-flex justify-content-center align-items-center mt-10">
              <div className="spinner-border p-5 text-info" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>            
            :
            <>
              {searchedData.map((user)=>(
                user.role !== "admin" &&
                <div className="col-md-6 col-xl-6">
                  <a href={`/admin/users/${user.uuid}`}className="card border border-hover-info text-dark" style={{textDecoration:'none'}}>
                    <div className="card p-9" key={user.id}>
                      <div className="d-flex">
                        <div className="d-flex">
                          <i className="fa fa-user fs-3x me-2" aria-hidden="true"></i>
                          <div className="d-flex row">                      
                          <div><span>{user.firstName}</span><span>{user.lastName}</span> </div>
                          <br/>
                          <div>{user.email}</div>
                          <br/>
                          <div>{user.address}</div>
                          </div>
                        </div>
                        </div>
                  </div>
                  </a>
                  </div>
              ))}
            </> 
            } 
          </div>
        </div>   
      <div>
   
        </div>
      </div>
      {/* end::Row */}   
      
    </>
  );
};

function setSearchTerm(value: string) {
  throw new Error("Function not implemented.");
}

