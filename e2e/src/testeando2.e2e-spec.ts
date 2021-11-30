import{browser,element,by} from 'protractor';

describe('segundo test', ()=>{
  beforeEach(()=>{
  browser.get("/");
  });
  //creación de prueba 2
  it("El page 1 se muestra por defecto", ()=>{
  expect(element(by.id(".titulo ion-label")).getText()).toContain("Opciones de Menú");
      });
  }); //fin de prueba 2

