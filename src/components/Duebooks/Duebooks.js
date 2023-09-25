import React from "react";

function Duebooks() {
  return (
    <div className="container">
      <div class="PageHeading">MAYBANK LIBRARY</div>
      <div class="SubHeading">DUE BOOKS</div>
      <table style={{marginRight:"10px"}}class="center">
        <tr>
            <th>Name</th>
            <th>ID Number</th>
            <th>Due Date</th>
        </tr>
        <tr>
            <td>Megna</td>
            <td>7334</td>
            <td>1 Jan 2023</td>
        </tr>
        <tr>
            <td>Kingsley</td>
            <td>7333</td>
            <td>4 feb 2023</td>
        </tr>
        <tr>
            <td>Sourav</td>
            <td>7332</td>
            <td>1 mar 2024</td>
        </tr>
    </table>
    </div>
  );
}

export default Duebooks;
