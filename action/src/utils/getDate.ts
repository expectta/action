import moment from "moment";

const getTime = () => {
  return moment().format("HH:mm");
};

export default getTime;
