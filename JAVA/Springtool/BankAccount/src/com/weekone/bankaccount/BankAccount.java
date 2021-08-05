package com.weekone.bankaccount;
import java.util.Random;
public class BankAccount {
	private double checkingBalance;
	private double savingBalance;
	private static int numOfAccs = 0;
	private static double totalMoney = 0;
	private String accountNum;
	public BankAccount() {
		accountNum = this.generateAccNum();
		checkingBalance = 0;
		savingBalance = 0;
		numOfAccs++;
	}
	
	private String generateAccNum() {
		Random rand = new Random();
		int i = 0;
		String acc = "";
		while(i<10) {
			acc+=rand.nextInt(10)+"";
			i++;
		}
		return acc;
	}
	public String getAccNum() {
		return accountNum;
		
	}
	public double getChecking() {
		return checkingBalance;
		
	}
	public double getSaving() {
		return savingBalance;
	}
	public void deposit(double amount, String type) {
		if(type.equalsIgnoreCase("saving")) {
			savingBalance += amount;
			totalMoney += amount;
		}
		else if(type.equalsIgnoreCase("checking")){
			checkingBalance += amount;
			totalMoney += amount;
		}
		else {
			System.out.println("Please double check account entered");
		}
	}
	public void withdraw(double amount, String type) {
		if(type.equalsIgnoreCase("saving")) {
			if(savingBalance - amount >=0) {
				savingBalance -= amount;
				totalMoney -= amount;
			}
			else {
				System.out.println("insufficient funds in your savings account");
			}
		}
		else if(type.equalsIgnoreCase("checking")){
			if(savingBalance - amount >=0) {
				checkingBalance -= amount;
				totalMoney -= amount;
			}
			else {
				System.out.println("insufficient funds in your checkings account");
			}
			
		}
		else {
			System.out.println("Please double check account entered");
		}
	}
	public static double sum() {
		return totalMoney;
	}
}
