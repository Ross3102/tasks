import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import CenteredLoader from "../../../components/CenteredLoader";
import type { Category } from "../../../types/Category";
import type { Task } from "../../../types/Task";
import Tasks from "./components/Tasks";

export default function TaskList() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [upcoming, setUpcoming] = useState<Task[] | null>(null);

  useEffect(() => {
    api
      .get("/categories")
      .then((resp) => setCategories(resp.data))
      .catch((err) => navigate("/error"));
    api
      .get("/tasks/upcoming")
      .then((resp) => setUpcoming(resp.data))
      .catch((err) => navigate("/error"));
  }, [navigate]);

  if (!categories || !upcoming) {
    return <CenteredLoader />;
  }

  return (
    <>
      <Tabs defaultActiveKey="categorized" id="task-list-tabs">
        <Tab eventKey="categorized" title="Categorized">
          <Accordion alwaysOpen>
            {categories.map((category, catIdx) => (
              <Accordion.Item eventKey={"" + catIdx}>
                <Accordion.Header>{category.title}</Accordion.Header>
                <Accordion.Body>
                  <Tasks tasks={category.tasks} />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Tab>
        <Tab eventKey="upcoming" title="Upcoming">
          <Tasks tasks={upcoming} />
        </Tab>
      </Tabs>
    </>
  );
}
