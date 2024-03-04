import { atom } from "recoil";
 
const countState = atom({
  key: "counter",
  default: 0,
});
 
export default countState;