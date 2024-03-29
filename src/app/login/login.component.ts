import { Component} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private dialogRef: MatDialog){}

  onNoClick(): void {
    this.dialogRef.closeAll();
  }

}
