package com.example.todoList.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * ToDoListコントローラー
 * 
 */
@RequestMapping("/")
@Controller
public class TodoListController {
	
	/**
	 * (S01)初期画面遷移
	 * 
	 * @return
	 * 		TodoList.html
	 */
	@RequestMapping("")
	public String index() {
		return "TodoList"; 
	}
}
