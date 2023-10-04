import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  List = {
    "page": 1, "per_page": 6, "total": 12, "total_pages": 2,

    "data": [{ "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://reqres.in/img/faces/1-image.jpg", "type":"Odd" },
      { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://reqres.in/img/faces/2-image.jpg", "type": "Even" },
      { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://reqres.in/img/faces/3-image.jpg", "type": "Odd" },
      { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://reqres.in/img/faces/4-image.jpg", "type": "Even" },
      { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://reqres.in/img/faces/5-image.jpg", "type": "Odd" },
      { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://reqres.in/img/faces/6-image.jpg", "type": "Even" },
      { "id": 7, "email": "Marco.polo@reqres.in", "first_name": "Marco", "last_name": "Polo", "avatar": "https://reqres.in/img/faces/7-image.jpg", "type": "Odd" }
    ],

    "support": { "url": "https://reqres.in/#support-heading", "text": "To keep ReqRes free, contributions towards server costs are appreciated!" }
  }


  get startIndex(): number {
    return (this.List.page - 1) * this.List.per_page;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.List.per_page - 1, this.List.total - 1);
  }

  get displayedUsers(): any[] {
    return this.List.data.slice(this.startIndex, this.endIndex + 1);
  }

  // Function to change the current page
  changePage(page: number) {
    this.List.page = page;
  }

  getPages(): number[] {
    const pageCount = Math.ceil(this.List.total / this.List.per_page);
    return Array(pageCount).fill(0).map((_, index) => index + 1);
  }
  getTotalUsers() {
    return this.List.data.length;
  }

  getEvenId() {
    return this.List.data.filter(data => Math.floor(data.id/2) === data.id/2).length;
  }
  getOddId() {
    return this.List.data.filter(data => Math.floor(data.id / 2) !== data.id/2).length;
  }

  listCountRadioButton: string = 'All';

  onFilterRadioButtonChanged(data: string) {
    this.listCountRadioButton = data;
    console.log(this.listCountRadioButton);
  }
}
