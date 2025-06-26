import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Users } from "../service/students";
const StudentModal = ({ toggle, modal, update, students, setStudents }) => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    address: "",
    jshshr: "",
    email: "",
  });

  useEffect(()=>{
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(update)
    setForm((form) => ({ ...form, [name]: value }));
  };

  const updateStudent = async () => {
    for (const item of students) {
      if (item.id === update.id) {
        const res = await Users.updateUser(update.id, form);
        if(res.status === 200){
            const response = await Users.getAll();
            setStudents(response)
        }
      }
    }
    toggle()
  };

  const cancelModal = () => toggle();

  return (
    <div className="container">
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Student</ModalHeader>
        <ModalBody>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="first_name"
                onChange={handleChange}
                defaultValue={update?.first_name}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="last_name"
                onChange={handleChange}
                defaultValue={update?.last_name}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="email..."
                name="email"
                onChange={handleChange}
                defaultValue={update?.email}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Dob ... "
                name="dob"
                onChange={handleChange}
                defaultValue={update?.dob}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="address"
                name="address"
                onChange={handleChange}
                defaultValue={update?.address}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="jshshr..."
                name="jshshr"
                onChange={handleChange}
                defaultValue={update?.jshshr}
              />
            </div>
          </form>
        </ModalBody>

        <ModalFooter>
          <Button
            color="secondary"
            className="btn btn-danger"
            onClick={cancelModal}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            className="btn btn-success"
            onClick={updateStudent}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default StudentModal;
