package com.weekone.phone;

public class IPhone extends Phone implements Ringable {
    public IPhone(String versionNumber, int batteryPercentage, String carrier, String ringTone) {
        super(versionNumber, batteryPercentage, carrier, ringTone);
    }
    @Override
    public String ring() {
    	return getClass().getSimpleName()+" "+this.getVersionNumber()+" says "+this.getRingtone();
        // your code here
    }
    @Override
    public String unlock() {
    	return "Unlocking via facial recognition";
        // your code here
    }
    @Override
    public void displayInfo() {
    	System.out.println(getClass().getSimpleName()+" "+this.getVersionNumber()+" from "+this.getCarrier());
        // your code here            
    }
}


