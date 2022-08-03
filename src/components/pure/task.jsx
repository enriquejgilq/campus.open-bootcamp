import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
  return (
    <div>
      <h2> Nombre: {task.name}</h2>
      <h3> Descripcion : {task.desciption}</h3>
      <h4> Nivel de la tarea: {task.level}</h4>
      <h5> La tarea esta : {task.completed ? "COMPLETA" : "PENDIENTE"} </h5>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
