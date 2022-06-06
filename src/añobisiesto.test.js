import añobi from "./añobisiesto";

describe("Saber si un año es bisiesto", () => {
  it("deberia devolver true para el año 4", () => {
    const  año= new añobi();
    expect( año.bisiesto(4)).toEqual(true);
  });
})