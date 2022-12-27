import React from "react";

const DropdownComponent = ({ infoBoton, handleOnClick }) => {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => {
          handleOnClick();
        }}
      >
        {infoBoton}
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="http://localhost:3000/Registro">
            Registro
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownComponent;
