import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TodoModel } from "../models/todo.model";

@Component({
  selector: "app-todo-list-item",
  templateUrl: "./todo-list-item.component.html",
  styleUrls: ["./todo-list-item.component.css"]
})
export class TodoListItemComponent {
  @Input() todo: TodoModel;
  @Output() onItemClick = new EventEmitter<string>();
  @Output() onImportantClick = new EventEmitter<string>();
  @Output() onDeleteClick = new EventEmitter<string>();

  handleItemClick() {
    this.onItemClick.emit(this.todo.id);
  }

  handleImportantClick() {
    this.onImportantClick.emit(this.todo.id);
  }

  handleDeleteClick() {
    this.onDeleteClick.emit(this.todo.id);
  }
}
