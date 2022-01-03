import React from "react";

import "./PaperScreen.css";

import Paper from "./Paper";

function PaperScreen() {
  const dummydata = [
    {
      id: 0,
      title:
        "One Size Does Not Fit All: A Grounded Theory and Online Survey Study of Developer Preferences for Security Warning Types",
      authors: ["Danilova", "Naiakshina", "Smith"],
      year: 2020,
      method: "mixed",
      questions:
        "Where, when and how to present security warnings to developers?",
      participants: [
        { id: 0, amount: 14, type: "professional software developers" },
        { id: 1, amount: 12, type: "students" },
      ],
      studies: [{ id: 0 }, { id: 1 }],
      dataCollectionMethods: [
        "semi-structured interviews",
        "focus group",
        "online survey",
      ],
    },
    {
      id: 1,
      title:
        "Lessons Learned from Using an Online Platform to Conduct Large-Scale, Online Controlled Security Experiments with Software Developers",
      authors: [
        "Stransky",
        "Acar",
        "Nguyen",
        "Wermke",
        "Kim",
        "Redmiles",
        "Backes",
        "Garfinkel",
        "Mazurek",
        "Fahl",
      ],
      year: 2017,
      method: "Qualitative",
      questions:
        "In order to allow for distributed recruitment of IT professionals for security user studies, the researchers designed Developer Observatory, a browser-based virtual laboratory platform that enables controlled programming experiments while retaining most of the observational power of lab studies. In this paper, the researchers share their experiences using this platform.",

      participants: [
        { id: 0, amount: 305, type: "professional software developers" },
        { id: 1, amount: 102, type: "students" },
      ],
      studies: [{ id: 0 }],
      dataCollectionMethods: ["controlled experiments", "questionnaire"],
    },
  ];

  return (
    <div className="PaperScreen">
      <h1 className="PaperScreen-title">Paper List</h1>
      <Paper paperdata={dummydata[0]} />
      <Paper paperdata={dummydata[1]} />
    </div>
  );
}

export default PaperScreen;
