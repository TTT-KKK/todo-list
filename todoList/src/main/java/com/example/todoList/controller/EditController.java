package com.example.todoList.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * editコントローラー
 *
 */
@RequestMapping("/edit")
@Controller
public class EditController {

	/**
	 * (S03)タスク編集画面遷移
	 *
	 * @return
	 * 		edit.html
	 */
	@RequestMapping("")
	public String index() {
		return "edit";
	}
}
