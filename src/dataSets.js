import { USERS } from "./store/models";
import { CREATE_PROCESS } from "./store/processType";

export const dataSets = {
  modelData: {
    [USERS]: [
      {
        id: 1,
        email: "onurbpm@outlook.com",
        password: "onur1234",
      },
      {
        id: 2,
        email: "aleynagnr@outlook.com",
        password: "aleyna1234",
      },
      {
        id: 3,
        email: "sevgul@outlook.com",
        password: "sevgul1234",
      },
      {
        id: 4,
        email: "metin@outlook.com",
        password: "metin1234",
      },
      {
        id: 5,
        email: "faruk@outlook.com",
        password: "faruk1234",
      },
      { id: 6, email: "erdener@gmail.com", password: "erdener123" },
    ],
  },
  stateData: {
    processType: CREATE_PROCESS,
    selectedUser: {
      id: 7,
      email: "",
      password: "",
    },
  },
};
