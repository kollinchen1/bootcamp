package com.weekone.calone;

public class CalTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Calculator cal = new Calculator();
		cal.performOperation(10.5);
		cal.performOperation("+");
		cal.performOperation(5.2);
		cal.performOperation("*");
		cal.performOperation(10);
		cal.performOperation("/");
		cal.performOperation(5.2);
		cal.performOperation("+");
		cal.performOperation(10);
		cal.performOperation("/");
		cal.performOperation(2);
		cal.performOperation("+");
		cal.performOperation(10);
		cal.performOperation("=");
		
		System.out.println(cal.getResults());
	}

}
