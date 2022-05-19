import "./styles/main.scss";
import './index.html';
//This is an example of how to load an external JS module inside this one, please remove the following 2 lines
import { getCurrentDate } from './exampleModule';
console.log(getCurrentDate());