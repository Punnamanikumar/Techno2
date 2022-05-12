import React, { createContext, useState } from "react";

//! This Component Contatins Student Data

export const StudentContext = createContext();

export const StudentProvider = (props) => {
  const [users, setUsers] = useState([
    {
      name: "ManiKumar",
      email: "manikumar@gmail.com",
      password: "mani123",
      birthdate: "08 - 21 - 1999",
      grade: "A",
      mentor: "Pooja",
      stid: "ST001",
      id: "1",
    },
    {
      name: "RaviTeja",
      email: "raviteja@gmail.com",
      password: "raviteja123",
      birthdate: "8 - 20 - 1980",
      grade: "A",
      mentor: "Pooja",
      stid: "ST002",
      id: "2",
    },
    {
      name: "Vamshi",
      email: "vamshiKalyan@gmail.com",
      password: "vamshi123",
      birthdate: "9 - 21 - 1990",
      grade: "A",
      mentor: "Lavanya",
      stid: "ST003",
      id: "3",
    },
    {
      name: "Pavan",
      email: "pavan@gmail.com",
      password: "pavan123",
      birthdate: "7 - 03 - 1990",
      grade: "A",
      mentor: "Lavanya",
      stid: "ST004",
      id: "4",
    },
    {
      name: "Mala",
      email: "mala@gmail.com",
      password: "mla123",
      birthdate: "9 - 05 - 1990",
      grade: "B",
      mentor: "Pooja",
      stid: "ST005",
      id: "5",
    },
  ]);

  return (
    <StudentContext.Provider value={[users, setUsers]}>
      {props.children}
    </StudentContext.Provider>
  );
};
