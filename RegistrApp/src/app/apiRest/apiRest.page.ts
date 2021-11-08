import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {RestService} from '../servicios/rest.service';

@Component({
    selector: 'app-apiRest',
    templateUrl: 'apiRest.page.html',
    styleUrls: ['apiRest.page.scss']
})
export class ApiRestPage implements OnInit {
    
    public datosObservable: Observable<any>;

    constructor(private restService: RestService) {
        this.datosObservable = this.restService.get_Datos();
    }

    ngOnInit() {

    }
}
