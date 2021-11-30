import{browser,element,by} from 'protractor';

describe('mi primer test', ()=>{
  //configuramos nuestro bloque
  beforeEach(()=>{
  browser.get("/");
  });
  //creación de prueba 1
  it("El page 1 se muestra por defecto", ()=>{
  expect(element(by.css(".titulo ion-label")).getText()).toContain("Opciones de Menú");
      });
  }); //fin de prueba 1

