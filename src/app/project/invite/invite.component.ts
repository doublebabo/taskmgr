import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items = [{
    id: 1,
    name: 'Jack',
  }, {
    id: 2,
    name: 'Mike',
  }, {
    id: 3,
    name: 'Tom',
  }];
  constructor() { }

  ngOnInit() {
    console.log(this.items);
  }

  displayUser(user: { id: string, name: string }) {
    console.log(user);
    return user ? user.name : '';
  }

}
