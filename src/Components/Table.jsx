export const Table = ({ userList }) => {
  const tableStyle = {
    border:1,
  }
  return (
    <div className="table" >
      <h2> Table </h2>

      <table cellPadding={13} border={1} >
        <tr>
          <td> Name </td>
          <td> Age </td>
          <td> Address </td>
          <td> Department </td>
          <td> Married </td>
          <td> Salary </td>
          <td> Profile Photo </td>
        </tr>
        {userList.map((itm) => (
          <tr>
            <td> {itm.name} </td>
            <td> {itm.age} </td>
            <td> {itm.addr} </td>
            <td> {itm.department} </td>
            <td> {itm.isMarried?"Yes":"No"} </td>
            <td> {itm.salary} </td>
            <td> Profile </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
