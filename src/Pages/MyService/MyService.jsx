import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ServiceTable from "./ServiceTable";
import toast from "react-hot-toast";

const MyService = () => {
  const { user } = useContext(AuthContext);

  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/car_doctor?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const deleteConfirm = confirm("You Sure Want To Delete ?");

    if (deleteConfirm) {
      fetch(`http://localhost:4000/car_doctor/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Successfully Deleted");
            const reaming = service.filter((srv) => srv._id !== id);
            setService(reaming);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:4000/car_doctor/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update message
          const reaming = service.filter((srv) => srv._id !== id);
          const update = service.find((upd) => upd._id === id);
          update.status = "confirm";
          const newService = [update, ...reaming];
          setService(newService);
        }
      });
  };

  return (
    <div>
      <h1>MyService{service.length}</h1>
      <div className="my-12">
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {service.map((srCard) => (
                <ServiceTable
                  key={srCard._id}
                  srCard={srCard}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyService;
