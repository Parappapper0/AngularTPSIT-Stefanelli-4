import { Component, OnInit } from '@angular/core';
import { DatabaseInteractionService } from '../services/database-interaction.service';
import { Employee } from '../employee/employee.module';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabella',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.css'
})
export class TabellaComponent implements OnInit {
  
  constructor(private database_service : DatabaseInteractionService) {}
  ngOnInit(): void {
    
    this.getRequest();
  }

  size : number = 20;
  page : number = 1;
  totpages : number = 0;
  employees : Employee[] = [];
  
  changePage(n : number) {

    this.page = n;
    this.getRequest();
  }

  getRequest() {

    if (this.size < 1) this.size = 1;
    else if (this.size > 1000) this.size = 1000;


    this.database_service.getEmployee(this.page - 1, this.size).subscribe(value => {
      this.employees = value._embedded.employees;
      this.totpages = value.page.totalPages;

      if(this.page >= this.totpages) {
        this.page = this.totpages
        this.getRequest();
      }
    });
  }

}
