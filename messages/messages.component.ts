import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';
import { Hero } from '../hero';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Input() heroDeleted: Hero;

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
