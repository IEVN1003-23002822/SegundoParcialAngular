import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.html',
  styleUrl: './zodiaco.css',
  imports: [FormsModule]
})
export class ZodiacoComponent {
  nombre: string = '';
  aPaterno: string = '';
  aMaterno: string = '';
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = '';

  nombreCompleto: string = '';
  edad: number = 0;
  meses: number = 0;
  dias: number = 0;
  signo: string = '';
  imagenSigno: string = '';
  mostrarResultado: boolean = false;

  imprimir() {
    this.unirNombres();
    this.calcularEdad();
    this.calcularSigno();
    this.mostrarResultado = true;
  }

  unirNombres() {
    this.nombreCompleto = this.nombre + ' ' + this.aPaterno + ' ' + this.aMaterno;
  }

  calcularEdad() {
    if (this.anio > 0 && this.mes > 0 && this.dia > 0) {
      let anioActual = 2026;
      let mesActual = 10;
      let diaActual = 3;

      this.edad = anioActual - this.anio;
      this.meses = mesActual - this.mes;
      this.dias = diaActual - this.dia;

      if (this.dias < 0) {
        this.meses--;
        this.dias += 30;
      }

      if (this.meses < 0) {
        this.edad--;
        this.meses += 12;
      }
    } else {
      this.edad = 0;
      this.meses = 0;
      this.dias = 0;
    }
  }

  calcularSigno() {
    if (!this.anio) {
      this.signo = '';
      this.imagenSigno = '';
      return;
    }

    let residuo = this.anio % 12;

    switch (residuo) {
      case 0:
        this.signo = 'Mono';
        this.imagenSigno = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.9yw3ucRjcO6yS6vdXXdrfwHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=b75ba4060bcad8ac4bca2b94c04cca5f1d5ee6c1368f27b0ebf09dcad770c290&ipo=images';
        break;
      case 1:
        this.signo = 'Gallo';
        this.imagenSigno = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.Bcsl4B0uKkMZgUVOiL41gwHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=c2e2e8968d6914d53e2ac309d8d97bcfb5304804131deff3143ebdd813b7b95f&ipo=images';
        break;
      case 2:
        this.signo = 'Perro';
        this.imagenSigno = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP._IjKaHvZU6QdsVMuFgSPgwHaFk%3Fr%3D0%26pid%3DApi&f=1&ipt=54c9ff2de781c7acd480ede5803a5768efd1a1417786fb4efcae9386187b669a&ipo=images';
        break;
      case 3:
        this.signo = 'Cerdo';
        this.imagenSigno = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.6I5L__TwYsA0Z1-k0dIP3AHaFj%3Fr%3D0%26pid%3DApi&f=1&ipt=3b967261d40778b0d395f922eac02f513f25c352f43bc962003c3761077a63ae&ipo=images';
        break;
      case 4:
        this.signo = 'Rata';
        this.imagenSigno = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%2Fid%2FOIP.1vPGbOKmxP8hVlXNNnkfAwHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=5fba02b42d8508a9fa220ecf4323b96d42abfa66da96e1371cd372c22c75947d&ipo=images';
        break;
      case 5:
        this.signo = 'Buey';
        this.imagenSigno = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.4yCh1NPLgWdGiuDko1GQBgHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=44be3ffa88c6aeb788e2db5d6c37c3370899729c7fcf6dfff33573058f7beb38&ipo=images';
        break;
      case 6:
        this.signo = 'Tigre';
        this.imagenSigno = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.H_6hNQxrNuE2XQxqSbpmKgHaFj%3Fr%3D0%26pid%3DApi&f=1&ipt=1f90c3c468833e0eaeb730bbdde09d940519a944af70d0995f8f4d70261bdbc4&ipo=images';
        break;
      case 7:
        this.signo = 'Conejo';
        this.imagenSigno = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.c1EQshwngk7JPRmpdQQhKwHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=466537f8a50882107eb4add3b2d3467e7b96678b5fcd836bac71d5fba2d21552&ipo=images';
        break;
      case 8:
        this.signo = 'Dragón';
        this.imagenSigno = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.hSy68-fCIqzs8Dv07ME5_QHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=6a1926a259249bc61db3dbc064e56837880710ceccdb58b048803f4ed73a1eae&ipo=images';
        break;
      case 9:
        this.signo = 'Serpiente';
        this.imagenSigno = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.yg-9aYH9Hd6umCYe_o0yQAHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=342524362c6aa08da50d3adedb1cb71721f221a003e1ddba160ce62d95ce89f7&ipo=images';
        break;
      case 10:
        this.signo = 'Caballo';
        this.imagenSigno = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.Ku7yzH3dPCUEc26-foyOqQHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=5039b18da00dd783910c8cd43db0deb5500bb56edc6c742a598cde6e05316640&ipo=images';
        break;
      case 11:
        this.signo = 'Cabra';
        this.imagenSigno = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.bvyyxIc7qodiX69ANWt9WgHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=982d41a8d34dad01eb1a60c06948394beb525b58efdcdd2031be30ac3d7fa22d&ipo=images';
        break;
    }
  }
}