import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppUrl } from '../app.URL';
import { Observable } from 'rxjs';
import { FormularioDTO } from 'src/modelos/formulario.dto';

@Injectable({
    providedIn: 'root'
})
export class FormularioService {

    constructor(private http: HttpClient) { }

    findAll(): Observable<FormularioDTO[]> {
        return this.http.get<FormularioDTO[]>(AppUrl.baseServidor + "/formularios");
    }

    salvarFormulario(formulario: FormularioDTO) {
        return this.http.post(AppUrl.baseFormulario, formulario);
    }

}