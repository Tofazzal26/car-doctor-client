const ServiceTable = ({ srCard, handleDelete, handleUpdate }) => {
  const { customerName, email, date, price, service, img, _id, status } =
    srCard || {};

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask h-[100px] rounded-md">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">
              <h2 className="font-semibold text-xl">{customerName}</h2>
            </div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        <p className="font-semibold text-lg">{price}</p>
      </td>
      <td>
        <p className="font-semibold text-lg">{date}</p>
      </td>
      <th>
        {status === "confirm" ? (
          <button className="px-4 py-2 text-white rounded-lg bg-green-500">
            Pending
          </button>
        ) : (
          <button
            onClick={() => handleUpdate(_id)}
            className="px-4 py-2 text-white rounded-lg bg-[#ff3811]"
          >
            Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default ServiceTable;
