package com.example.todoList.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * inputコントローラー
 *
 */
@RequestMapping("input")
@Controller
public class InputController {
	/**
	 * (S02)新規登録画面遷移
	 *
	 * @return
	 * 		input.html
	 */
	@RequestMapping("/index")
	public String index() {
		return "input";
	}
}
