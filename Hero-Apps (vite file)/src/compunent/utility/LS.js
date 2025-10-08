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
    alert("data asay bay");
  } else {
    data.push(id);
    const newData = JSON.stringify(data);
    localStorage.setItem("InstallList", newData);
  }
};

export { addData, gatAllData };
