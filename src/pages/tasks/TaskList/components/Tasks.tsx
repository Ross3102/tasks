import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Check from 'react-bootstrap/FormCheck'
import type { Task } from "../../../../types/Task";

type Props = {
  tasks: Task[]
};

export default function Tasks({ tasks }: Props) {
  return (
    <ListGroup>
      {tasks.map((task, taskIdx) => (
        <ListGroup.Item>
          <Check label={task.title}/>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
