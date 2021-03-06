package com.weekone.calone;

public class Calculator {
	
	protected double operandOne;
	protected double operandTwo;
	protected String operation;
	protected double results;
	protected double addSubResults = 0;
	private boolean oneCheck = false;
	private boolean twoCheck = false;
	private boolean	operationCheck = false;
	public Calculator() {
		
	}
	public void performOperation(double operation) {
		if(oneCheck == false) {
			this.operandOne = operation;
			oneCheck = true;
		}
		else if(twoCheck == false) {
			this.operandTwo = operation;
			twoCheck = true;
		}
		if(oneCheck && twoCheck&&operationCheck) {
//			System.out.println(operandOne);
//			System.out.println(operandTwo);
			switch(this.operation) {
			case "/":
				results = operandOne / operandTwo;
				operandOne = results;
				twoCheck = false;
				operationCheck = false;
				System.out.println(results);
				break;
			case "*":
				results = operandOne * operandTwo;
				operandOne = results;
				System.out.println(results);
				twoCheck = false;
				operationCheck = false;
				break;
			case "%":
				//System.out.println(results);
				results = operandOne % operandTwo;
				operandOne = results;
				twoCheck = false;
				operationCheck = false;
				break;
			}
		}
		
	}
	public void performOperation(String operation) {
		if(operation.equals("+")||operation.equals("-")) {
			switch(operation) {
			case "+": 
				addSubResults += operandOne;
				oneCheck = false;
				break;
			case "-":
				addSubResults -= operandOne;
				oneCheck = false;
				break;
			}
		}
		else if(operation.equals("/")||
				operation.equals("*")||
				operation.equals("%")) {
			this.operation = operation;
			operationCheck = true;
		}	
		else if(operation.equals("=")) {
			results+=addSubResults;
		}
	
		
	}
//	
	public double getResults() {
		return results;
	}
}
