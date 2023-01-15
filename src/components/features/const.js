import Communication from "./Communication";
import HrTools from "./HrTools";
import Online from "./Online";
import Productivity from "./Productivity";
import Task from "./Task";
import TimeTracking from "./TimeTracking";
import time from "./images/time.svg";
import productivity from "./images/productivity.svg";
import task from "./images/task.svg";
import communication from "./images/communication.svg";
import hr from "./images/hr.svg";
import online from "./images/online.svg";

export const menu = [
  { id: 0, name: "Time Tracking with Screenshots", icon: time, component: <TimeTracking /> },
  { id: 1, name: "Productivity Monitoring", icon: productivity, component: <Productivity /> },
  { id: 2, name: "Task Management", icon: task, component: <Task /> },
  { id: 3, name: "Communication Channels", icon: communication, component: <Communication /> },
  { id: 4, name: "HR Tools", icon: hr, component: <HrTools /> },
  { id: 5, name: "Online Reports", icon: online, component: <Online /> },
];

export const timeList = [
  {id:0, text: "4 Screenshot Modes"},
  {id:1, text: "Idle Time Tracking"},
  {id:2, text: "Synchronized Tracking"},
  {id:3, text: "Billable Hours"},
]
