let currentId = 3;

let teachers = {
  1: {
    id: 1,
    name: "Lesandro Ponciano",
    disciplines: "Interação Humano Computador",
    description: "Ótimo professor e orientador!",
    university: "PUC Minas",
    birthday: "22/01/1985"
  },
  2: {
    id: 2,
    name: "Maria Augusta",
    disciplines: "Interação Humano Computador",
    description: "Ótimo professor e orientador!",
    university: "PUC Minas",
    birthday: "22/01/1985"
  },
  3: {
    id: 3,
    name: "Marcelo Werneck",
    disciplines: "Interação Humano Computador",
    description: "Ótimo professor e orientador!",
    university: "PUC Minas",
    birthday: "22/01/1985"
  }
};

exports.getTeachers = function() {
  allTeachers = Object.values(teachers).map(teacher => {
    return {
      id: teacher.id,
      name: teacher.name
    };
  });

  return allTeachers;
};

exports.getTeacher = function(id) {
  return teachers[id];
};

exports.createTeacher = function(teacher) {
  console.log(teacher);
  teachers[++currentId] = { id: currentId, ...teacher };
};

exports.deleteTeacher = function(id) {
  tmp = teachers[id];
  delete teachers[id];
  return tmp;
};
