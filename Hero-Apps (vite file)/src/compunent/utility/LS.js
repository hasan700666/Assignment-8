const gatAllData = () => {
  const AllData = localStorage.getItem("InstallList");

  if (AllData) {
    const AllDataToPars = JSON.parse(AllData);
    return AllDataToPars;
  } else {
    return [];
  }
};

const addData = (id) => {
  const data = gatAllData();

  if (data.includes(id)) {
    //alert("data asay bay");
    return false;
  } else {
    data.push(id);
    const newData = JSON.stringify(data);
    localStorage.setItem("InstallList", newData);
    return true;
  }
};

const removeItem = (id) => {
  const AllData = localStorage.getItem("InstallList");

  const partsAllData = JSON.parse(AllData);

  const intoNumber = partsAllData.map((data) => parseInt(data));

  const filterDATA = intoNumber.filter((data) => data != id);

  const toStringify = JSON.stringify(filterDATA);

  localStorage.setItem("InstallList", toStringify);
};

export { addData, gatAllData, removeItem };
